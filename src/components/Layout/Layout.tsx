import React, { FC } from "react";

interface ILayout {
  children?: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="Layout">
      <div className="Layout-Container">{children}</div>
    </div>
  );
};

export default Layout;
