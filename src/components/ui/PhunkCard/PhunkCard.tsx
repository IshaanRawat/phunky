import React, { useEffect } from "react";

interface PhunkCardProps {
  tokenId: string;
  image?: string;
}

const PhunkCard: React.FC<PhunkCardProps> = ({ tokenId, image }) => {
  useEffect(() => {
    (async () => {
      console.log(tokenId);
    })();
  }, [tokenId]);

  return (
    <div className="flex flex-col items-start p-2">
      <img src={image} className="w-48 h-48 bg-gray-700" alt="" />
      <span className="font-semibold">Phunk #{tokenId}</span>
    </div>
  );
};

export default PhunkCard;
