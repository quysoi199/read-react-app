import { Layout } from "antd";
import HeaderMain from "./header/HeaderMain";
import FooterMain from "./footer/FooterMain";
const { Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <HeaderMain />
      <Content style={{ backgroundColor: "#101114" }}>{children}</Content>
      <FooterMain />
    </Layout>
  );
};

export default MainLayout;
