import React, { useEffect, useState } from "react";
import useMetaMask from "../../../hooks/useMetaMask";
import usePhunksV2Contract from "../../../hooks/usePhunksV2Contract";
import usePhunkyContract from "../../../hooks/usePhunkyContract";
import { formatToDecimals } from "../../../utils";

interface EstimatedPhunksListProps {}

const EstimatedPhunksList: React.FC<EstimatedPhunksListProps> = () => {
  const wallet = useMetaMask();
  const phunkyContract = usePhunkyContract();
  const phunksV2Contract = usePhunksV2Contract();

  const [claimablePhunkies, setClaimablePhunkies] = useState<
    Array<{ phunkId: string; claimablePhunkies: number }>
  >([]);
  const [totalPhunky, setTotalPhunky] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (wallet.isConnected && phunksV2Contract && phunkyContract) {
      (async () => {
        setLoading(true);
        const balance = await phunksV2Contract.methods
          .balanceOf(wallet.address)
          .call();
        const balanceArray: any[] = Array.from({ length: balance });
        const phunkTokens = await Promise.all(
          balanceArray.map((b: number, i: number) =>
            phunksV2Contract.methods
              .tokenOfOwnerByIndex(wallet.address, i)
              .call()
          )
        );
        const decimals = await phunkyContract.methods.decimals().call();
        const claimableTokens: string[] = await Promise.all(
          phunkTokens.map((token) =>
            phunkyContract.methods.claimable(token).call()
          )
        );
        const _claimablePhunkies: number[] = claimableTokens.map(
          (tokens) => +formatToDecimals(tokens, decimals)
        );
        setTotalPhunky(_claimablePhunkies.reduce((a, b) => a + b));
        setClaimablePhunkies(
          phunkTokens.map((token, index) => {
            return {
              phunkId: token,
              claimablePhunkies: _claimablePhunkies[index],
            };
          })
        );
        setLoading(false);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet.isConnected]);

  return wallet.isConnected ? (
    loading ? (
      <p className="mt-8 max-w-xl text-center">Fetching your Phunks ...</p>
    ) : claimablePhunkies.length > 0 ? (
      <table className="min-w-full divide-y divide-gray-200 mt-8">
        <thead>
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Phunk
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Claimable $PHUNKY
            </th>
          </tr>
        </thead>
        <tbody>
          {claimablePhunkies.map((claimablePhunky) => (
            <tr key={claimablePhunky.phunkId}>
              <td className="px-6 py-3 text-center">
                {claimablePhunky.phunkId}
              </td>
              <td className="px-6 py-3 text-center">
                {claimablePhunky.claimablePhunkies}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="px-6 py-3 text-center font-semibold">Total</td>
            <td className="px-6 py-3 text-center font-semibold">
              {totalPhunky} $PHUNKY
            </td>
          </tr>
          <tr>
            <td className="px-6 py-3 text-center font-semibold">
              Total Claimable
            </td>
            <td className="px-6 py-3 text-center font-semibold">
              {(totalPhunky * 90) / 100} $PHUNKY
            </td>
          </tr>
        </tfoot>
      </table>
    ) : (
      <p className="mt-8 max-w-xl text-center">
        You need a Phunk. Buy from{" "}
        <a
          className="font-bold"
          href="https://www.Notlarvalabs.com"
          target="_blank"
          rel="noreferrer"
        >
          Notlarvalabs.com
        </a>{" "}
        or NFTX Vault for earning and redeeming earned{" "}
        <span className="text-shifter font-semibold">$PHUNKY</span>.
      </p>
    )
  ) : (
    <p className="mt-8 max-w-xl text-center">
      Connect your wallet and check for all the claimable Phunks.
    </p>
  );
};

export default EstimatedPhunksList;
