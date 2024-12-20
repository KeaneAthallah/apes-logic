import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="text-3xl">Dashboard Navbar</div>
      {children}
    </div>
  );
};

export default Layout;
