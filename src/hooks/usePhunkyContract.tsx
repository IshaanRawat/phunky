import { useEffect, useRef } from "react";
import { Contract } from "web3-eth-contract";
import { abi, address } from "../data/contracts/phunky.json";
import useWeb3 from "./useWeb3";

const usePhunkyContract = () => {
  const web3 = useWeb3();
  const contractRef = useRef<Contract>();

  useEffect(() => {
    if (!contractRef.current && web3) {
      contractRef.current = new web3.eth.Contract(abi as any, address);
    }
  }, [web3]);

  return contractRef.current;
};

export default usePhunkyContract;
