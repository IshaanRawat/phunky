import React, { useEffect, useRef, useState } from "react";
import { PhunkyContext } from ".";
import useMetaMask from "../../hooks/useMetaMask";
import usePhunksV2Contract from "../../hooks/usePhunksV2Contract";
import usePhunkyContract from "../../hooks/usePhunkyContract";
import { formatToDecimals } from "../../utils";
import { address } from "./../../data/contracts/phunky-main.json";

interface PhunkyProviderProps {}

const PhunkyProvider: React.FC<PhunkyProviderProps> = ({ children }) => {
  const wallet = useMetaMask();
  const phunkyContract = usePhunkyContract();
  const phunksV2Contract = usePhunksV2Contract();

  const claimSectionRef = useRef<HTMLElement>(null);
  const [claimablePhunkies, setClaimablePhunkies] = useState<ClaimablePhunky[]>(
    []
  );
  const [totalPhunky, setTotalPhunky] = useState<number>(0);
  const [totalAddressPhunks, setTotalAddressPhunks] = useState<number>(0);
  const [totalAddressPhunky, setTotalAddressPhunky] = useState<number>(0);
  const [loadingEstimate, setLoadingEstimate] = useState<boolean>(true);
  const [loadingClaim, setLoadingClaim] = useState<boolean>(false);
  const [loadingAdd, setLoadingAdd] = useState<boolean>(false);
  const [assetAdded, setAssetAdded] = useState<boolean>(false);
  const [claimTransationHash, setClaimTransactionHash] = useState<string>("");

  useEffect(() => {
    if (wallet.isConnected && phunksV2Contract && phunkyContract) {
      (async () => {
        setLoadingEstimate(true);
        const phunksBalance = await phunksV2Contract.methods
          .balanceOf(wallet.address)
          .call();
        setTotalAddressPhunks(phunksBalance);
        const phunkyBalance = await phunkyContract.methods
          .balanceOf(wallet.address)
          .call();
        const balanceArray: any[] = Array.from({ length: phunksBalance });
        const phunkTokens = await Promise.all(
          balanceArray.map((b: number, i: number) =>
            phunksV2Contract.methods
              .tokenOfOwnerByIndex(wallet.address, i)
              .call()
          )
        );
        const decimals = await phunkyContract.methods.decimals().call();
        setTotalAddressPhunky(+formatToDecimals(phunkyBalance, decimals));
        const claimableTokens: string[] = await Promise.all(
          phunkTokens.map((token) =>
            phunkyContract.methods.claimable(token).call()
          )
        );
        const _claimablePhunkies: number[] = claimableTokens.map(
          (tokens) => +formatToDecimals(tokens, decimals)
        );
        setTotalPhunky(
          _claimablePhunkies.length > 0
            ? _claimablePhunkies.reduce((a, b) => a + b)
            : 0
        );
        setClaimablePhunkies(
          phunkTokens.map((token, index) => {
            return {
              phunkId: token,
              claimablePhunkies: _claimablePhunkies[index],
            };
          })
        );
        setLoadingEstimate(false);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet.isConnected]);

  const claimPhunkies = async () => {
    if (phunkyContract) {
      try {
        setClaimTransactionHash("");
        setLoadingClaim(true);
        const claimablePhunks = claimablePhunkies
          .filter((c) => c.claimablePhunkies > 0)
          .map((c) => +c.phunkId);
        const approxGas = await phunkyContract.methods
          .claimBatch(claimablePhunks)
          .estimateGas({ from: wallet.address });

        const txn = await phunkyContract.methods
          .claimBatch(claimablePhunks)
          .send({
            from: wallet.address,
            gasLimit: +Math.round(approxGas * 1.2).toFixed(0),
          });
        setClaimTransactionHash(txn.transactionHash);
        setLoadingClaim(false);
      } catch (error) {
        setClaimTransactionHash("");
        setLoadingClaim(false);
      }
    }
  };

  const addPhunkytoWallet = async () => {
    if (phunkyContract) {
      setLoadingAdd(true);
      const decimals = await phunkyContract.methods.decimals().call();
      const symbol = await phunkyContract.methods.symbol().call();
      const assetOptions = {
        address,
        decimals: +decimals,
        symbol,
        image: "https://house.cdn.zo.xyz/brand/phunk.jpg",
      };
      const wasAdded = await wallet.watchERC20Asset(assetOptions);
      if (wasAdded) {
        setLoadingAdd(false);
        setAssetAdded(true);
      }
    }
  };

  return (
    <PhunkyContext.Provider
      value={{
        claimSectionRef,
        totalAddressPhunky,
        totalPhunky,
        totalAddressPhunks,
        loadingEstimate,
        loadingClaim,
        loadingAdd,
        assetAdded,
        claimablePhunkies,
        claimTransationHash,
        claimPhunkies,
        addPhunkytoWallet,
      }}
    >
      {children}
    </PhunkyContext.Provider>
  );
};

export default PhunkyProvider;
