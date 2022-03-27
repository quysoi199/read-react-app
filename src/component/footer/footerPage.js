import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";
import "./footer.scss";

function footerPage() {
  return (
    <div className="wrapFooter">
      <Row className="wrapInfo">
        <Col span={8}>
          <div className="infoFooter">Copyright: Trương Nguyễn Tiến Quân</div>
        </Col>
        <Col span={8}>
          <div className="infoFooter">Mail: truongtienquan309@gmail.com</div>
          <div className="infoFooter">Tel: 0961964575</div>
        </Col>

        <Col span={8}>
          <div className="iconFooter">
            <a href="https://www.facebook.com/quanhide309/">
              <FacebookOutlined
                className="iconFooterFB"
                style={{ fontSize: "40px", cursor: "pointer" }}
              />
            </a>
            <a href="https://github.com/quysoi199">
              <GithubOutlined
                className="iconFooterGit"
                style={{
                  fontSize: "40px",
                  padding: "0 20px 0 20px",
                  cursor: "pointer",
                }}
              />
            </a>
            <a href="https://www.instagram.com/tienquan309/">
              <InstagramOutlined
                className="iconFooterIns"
                style={{ fontSize: "40px", cursor: "pointer" }}
              />
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default footerPage;
