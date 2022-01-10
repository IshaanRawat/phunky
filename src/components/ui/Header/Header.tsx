import React from "react";
import ConnectButton from "../ConnectButton";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed z-20 top-4 right-4 xl:top-8 xl:right-8 2xl:top-10 2xl:right-10 flex">
      <ConnectButton hideConnected />
    </header>
  );
};

export default Header;
