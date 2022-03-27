import { Dropdown, Input, Row, Col, Button } from "antd";
import "./navigation.scss";
import {
  DingtalkOutlined,
  GitlabOutlined,
  DropboxOutlined,
} from "@ant-design/icons";
import logo from "../../img/logo2.png";
import icon from "../../img/icon.png";
import { Link, useParams } from "react-router-dom";

const { Search } = Input;
const onSearch = (value) => console.log(value);
function Navigation() {
  const { type } = useParams();
  const navhistory = (
    <div
      style={{
        display: "flex",
        width: "15vw",
        flexDirection: "column",
        border: "0px solid #ccc",
        borderRadius: "5px",
        alignItems: "center",
        textAlign: "center",
        textDecoration: "none",
        background: "rgb(13, 0, 51, 30%)",
      }}
    >
      <img
        style={{
          display: "flex",
          height: "78px",
          width: "78px",
        }}
        src={icon}
        alt=""
      />

      <p
        style={{
          padding: "10px",
          color: "#fff",
        }}
      >
        Đăng nhập để có thể đồng bộ lịch sử xem và mục yêu thích
      </p>
      <Button
        style={{
          color: "#ccc",
          borderRadius: "5px",
          border: "0 solid #ccc",
          background: "#8c66ff",
          margin: "10px",
          alignContent: "center",
        }}
        type=""
      >
        Đăng nhập
      </Button>
    </div>
  );

  const navlanguage = (
    <div
      style={{
        display: "flex",
        width: "10vw",
        flexDirection: "column",
        border: "0 solid #d9ccff",
        borderRadius: "5px",
        textDecoration: "none",
      }}
    >
      <div className="btnNav" type="">
        Tiếng việt
      </div>
      <div className="btnNav" type="">
        English
      </div>
    </div>
  );

  const types = [
    { slug: "hanh-dong", name: "Hành động" },
    { slug: "vien-tuong", name: "Viễn tưởng" },
    { slug: "hai-huoc", name: "Hài hước" },
    { slug: "khoa-hoc", name: "Khoa học" },
    { slug: "co-trang", name: "Cổ trang" },
    { slug: "hoat-hinh", name: "Hoạt hình" },
    { slug: "phieu-luu", name: "Phiêu lưu" },
    { slug: "the-thao", name: "Thể thao" },
  ];
  const menu = (
    <div className="dropdownType">
      {types.map((genre, index) => (
        <div
          className="hoverType"
          style={{
            minWidth: "120px",
            fontSize: "15px",
            textAlign: "center",
          }}
          key={index}
        >
          <Link
            className="hoverType"
            to={`/` + type + `/` + genre.slug}
            style={{
              textDecoration: "none",
            }}
          >
            {genre.name}
          </Link>
        </div>
      ))}
    </div>
  );
  return (
    <Row>
      <Col span={10}>
        <div className="navFirst">
          <img className="imgLogo" src={logo} />
          <Link to="/">
            <div className="navInfo">Đề xuất</div>
          </Link>
          <Link to="/phimbo">
            <div className="navInfo">Phim bộ</div>
          </Link>
          <Link to="/phimle">
            <div className="navInfo">Phim lẻ</div>
          </Link>
          <Link to="/chieurap">
            <div className="navInfo">Chiếu rạp</div>
          </Link>
          <Dropdown
            overlay={menu}
            placement="bottomLeft"
            arrow={{ pointAtCenter: true }}
          >
            <div className="navInfo">Thể loại</div>
          </Dropdown>
          <div className="navInfo">Top phim</div>
        </div>
      </Col>
      <Col span={4}></Col>
      <Col span={10}>
        <div className="navEnd">
          <Search
            className="navInput"
            placeholder="Tìm kiếm ^=.=^"
            allowClear
            onSearch={onSearch}
          />

          <div className="navFinal">
            <div className="navIcon">
              <DingtalkOutlined />
            </div>
            <Dropdown
              overlay={navhistory}
              placement="bottom"
              arrow={{ pointAtCenter: true }}
            >
              <div className="navInfo">Lịch sử xem</div>
            </Dropdown>
          </div>

          <div className="navFinal">
            <div className="navIcon">
              <GitlabOutlined />
            </div>
            <Dropdown
              overlay={navlanguage}
              placement="bottom"
              arrow={{ pointAtCenter: true }}
            >
              <div className="navInfo">Ngôn ngữ</div>
            </Dropdown>
          </div>

          <div className="navInfo">Đăng nhập</div>
          <div className="navInfo">Đăng ký</div>
        </div>
      </Col>
    </Row>
  );
}

export default Navigation;
