import "../App.css";
import { ReactNode } from "react";
import Header from "../layouts/HeaderEtFooter/Header";
import Footer from "../layouts/HeaderEtFooter/Footer";

interface LayoutProps {
  children: ReactNode;
}
const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
