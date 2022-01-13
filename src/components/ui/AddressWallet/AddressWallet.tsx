import React from "react";
import usePhunky from "../../../context/phunky";
import useMetaMask from "../../../hooks/useMetaMask";

interface AddressWalletProps {}

const AddressWallet: React.FC<AddressWalletProps> = () => {
  const { isConnected } = useMetaMask();
  const { totalAddressPhunks, totalAddressPhunky } = usePhunky();
  return isConnected ? (
    <div className="flex items-stretch bg-gray-700 px-4 mb-2">
      <div className="flex items-center pr-4 border-r border-p-black">
        <img
          src="https://nll-v2-1-39luy.ondigitalocean.app/static/phunk0000.png"
          alt=""
          className="w-8 h-8 bg-gray-700 mr-2"
        />
        <span>{totalAddressPhunks}</span>
      </div>
      <div className="flex items-center pl-4">
        <img
          src="https://phunkdao.com/favicon.ico"
          alt=""
          className="w-8 h-8 bg-gray-700 mr-2"
        />
        <span>{totalAddressPhunky.toFixed(4)}</span>
      </div>
    </div>
  ) : null;
};

export default AddressWallet;
