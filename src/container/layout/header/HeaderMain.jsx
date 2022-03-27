import React from "react";
import Navigation from "../../../component/navigation/Navigation";
import { Layout } from "antd";
const { Header } = Layout;
function HeaderMain() {
  const [scroll, setScroll] = React.useState(0);
  window.onscroll = () => setScroll(window.scrollY);
  return (
    <Header
      style={{
        width: "100%",
        position: "fixed",
        top: "0",
        zIndex: "999",
        background: `${
          scroll <= 200
            ? " linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.6) 96%)"
            : "#111319"
        }`,
      }}
    >
      <Navigation />
    </Header>
  );
}

export default HeaderMain;
