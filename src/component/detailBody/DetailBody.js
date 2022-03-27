import React from "react";
import pic from "../../img/pic.jpg";
import ListPracticeMovie from "../listPracticeMovie/DetailMovie";
import { Button } from "antd";
import "./detaibody.scss";
import {
  PlayCircleOutlined,
  SaveOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

function DetailBody() {
  const detailImages = [pic];
  return (
    <>
      <div style={{ position: "relative" }}>
        <div className="watch-banner">
          <div style={{ backgroundImage: `url(${detailImages[0]})` }}></div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "40vw",
            height: "50vh",
            position: "absolute",
            top: "50%",
            left: "80px",
          }}
        >
          <div
            className="wrapWatchdetail"
            style={{
              color: "white",
            }}
          >
            <div className="watchName">One Piece (Đảo Hải Tặc)</div>
            <div className="watchInfo">
              <div className="watchInfoSta">9.4</div>
              <div className="watchInfoDetail">1999</div>
              <div className="watchInfoDetail">Cập nhật tới tập 1013</div>
            </div>
            <div className="watchDetail">
              <div className="watchInfoDetail">Viễn Tưởng</div>
              <div className="watchInfoDetail">Nhiệt Huyết</div>
              <div className="watchInfoDetail">Thiếu niên</div>
              <div className="watchInfoDetail">Phiêu Lưu</div>
            </div>
            <div className="watchDetailsecond">
              <div className="watchInfoDetail">
                Đạo diễn: Goro Taniguchi, Konosuke Uda, Munehisa Sakai, Hiroaki
                Miyamoto
              </div>
              <div className="watchInfoDetail">
                Diễn viên lồng tiếng: KINRYUU ARIMOTO
              </div>
            </div>
            <div className="btnWatch">
              <div className="btnWatchMS">
                <PlayCircleOutlined className="iconWatch" />
                Play
              </div>
              <div className="btnWatchM">
                <SaveOutlined className="iconWatch" />
                Save
              </div>
              <div className="btnWatchM">
                <ShareAltOutlined className="iconWatch" />
                Share
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListPracticeMovie />
    </>
  );
}

export default DetailBody;
