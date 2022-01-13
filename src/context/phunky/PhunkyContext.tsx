import { createContext } from "react";

interface PhunkyContextInterface {
  claimSectionRef: any;
  totalPhunky: number;
  totalAddressPhunks: number;
  totalAddressPhunky: number;
  loadingEstimate: boolean;
  loadingClaim: boolean;
  loadingAdd: boolean;
  assetAdded: boolean;
  claimTransationHash: string;
  claimablePhunkies: ClaimablePhunky[];
  claimPhunkies: () => void;
  addPhunkytoWallet: () => void;
}

const PhunkyContext = createContext<PhunkyContextInterface>({
  claimSectionRef: null,
  totalPhunky: 0,
  totalAddressPhunks: 0,
  totalAddressPhunky: 0,
  loadingEstimate: false,
  loadingClaim: false,
  loadingAdd: false,
  assetAdded: false,
  claimTransationHash: "",
  claimablePhunkies: [],
  claimPhunkies: () => {},
  addPhunkytoWallet: () => {},
});

export default PhunkyContext;
