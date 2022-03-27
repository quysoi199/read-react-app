import React from "react";
import SessonBanner from "../../../img/poster3.jpg";
import { PlayCircleOutlined } from "@ant-design/icons";

import "./SesonDetail.scss";
function SessonDetail() {
  return (
    <div className="SessonPractice">
      <div className="itemSessonPractice">
        <img src={SessonBanner} alt="" />
        <div className="iconSesonPlay">
          <PlayCircleOutlined />
        </div>
      </div>
      <div className="tagMovieSesson">One Piece</div>
    </div>
  );
}

export default SessonDetail;
