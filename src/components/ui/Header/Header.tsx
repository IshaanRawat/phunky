import React from "react";
import ConnectButton from "../ConnectButton";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-4 right-4 flex">
      <ConnectButton hideConnected />
    </header>
  );
};

export default Header;
