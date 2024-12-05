import React from "react";
import "./Header.css"; // We'll create this file for styling the header

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header-title">Dynamic Content Manager</h1>
    </header>
  );
};

export default Header;

export {};
