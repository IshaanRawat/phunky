import React from "react";
import Button from "../Button";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-4 right-4 flex">
      <Button>Connect Wallet</Button>
    </header>
  );
};

export default Header;
