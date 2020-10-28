///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                          NOTES

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                        IMPORTS
// 1. React & packages
// 2. Styles

import React from "react";

import "../assets/style/layout.sass"

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                                          SETUP

type LayoutProps = {
  children: React.ReactNode[] | React.ReactNode;
};


///////////////////////////////////////////////////////////////////////////////////////////////
////////////////                                                             COMPONENTS & LOGIC

const Header: React.FC = () => (
  <div>
    I'm header
  </div>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="layoutRoot">
      <Header />

      {children}
    </div>
  );
};

export default Layout;