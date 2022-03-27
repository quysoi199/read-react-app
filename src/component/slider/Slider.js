import "react-slideshow-image/dist/styles.css";
import React from "react";
import { Button } from "antd";
import { PlayCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import "./contens.scss";
import SlideShow from "./SlideShow";
function Slider() {
  return (
    <div styles={{ position: "relative" }}>
      <SlideShow />
      <div
        className="wrapSubBanner"
        style={{
          position: "absolute",
          zIndex: "99",
          bottom: "117px",
          left: "80px",
          color: "white",
          width: "40%",
        }}
      >
        <div className="bannerName">One Piece (Đảo Hải Tặc)</div>
        <div className="wrapTitleConten">
          <div className="titleContentStart">9.4</div>
          <div className="titleContent">1999</div>
          <div className="titleContent">Cập nhật tới tập 1013</div>
        </div>
        <div className="wrapTypeBanner">
          <div className="titleContent">Viễn Tưởng</div>
          <div className="titleContent">Nhiệt Huyết</div>
          <div className="titleContent">Thiếu niên</div>
          <div className="titleContent">Phiêu Lưu</div>
        </div>
        <div className="titleContentSim">
          One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần.
          Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết
          lộ rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào
          đó dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để
          giành được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc
          và đã tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời
          đã thỏa thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng
          chí hướng trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào
          "Con đường Vĩ đại". Liệu mục tiêu của họ có thành công và trở thành
          Vua Hải Tặc hay không? Mời các bạn cùng đón xem nhé!
        </div>
        <div className="btnWrap">
          <div className="btnWrapPlayBanner">
            <Button
              className="btnPlayBanner"
              type=""
              shape="circle"
              icon={<PlayCircleOutlined className="iconPlay" />}
            />
          </div>
          <div className="btnWrapSaveBanner">
            <Button
              className="btnSaveBanner"
              type=""
              shape="circle"
              icon={<InfoCircleOutlined className="iconPlay" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
