import React from "react";
import { formatTokenId } from "../../../utils";

interface PhunkCardProps {
  tokenId: string;
  image?: string;
}

const PhunkCard: React.FC<PhunkCardProps> = ({ tokenId }) => {
  return (
    <div className="flex items-center p-2">
      <img
        src={`https://nll-v2-1-39luy.ondigitalocean.app/static/phunk${formatTokenId(
          tokenId
        )}.png`}
        className="w-12 h-12 bg-gray-700 mr-4"
        alt=""
      />
      <span className="font-semibold">Phunk #{tokenId}</span>
    </div>
  );
};

export default PhunkCard;
