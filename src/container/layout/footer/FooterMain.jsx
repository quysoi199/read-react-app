import React from "react";
import FooterPage from "../../../component/footer/footerPage";
import { Layout } from "antd";

const { Footer } = Layout;

function FooterMain() {
  return (
    <Footer style={{ backgroundColor: "#111111" }}>
      <FooterPage />
    </Footer>
  );
}

export default FooterMain;
