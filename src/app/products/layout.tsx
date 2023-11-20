import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-20">
      <div>Sidebar ...</div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
