import React from "react";
import "./ItemPractive.scss";
import picItemPractice from "../../../img/pic.jpg";
import { PlayCircleOutlined } from "@ant-design/icons";

function ItemPractice() {
  return (
    <div className="itemListPractice">
      <div className="itemWrapPractice">
        <img src={picItemPractice} alt="" />
        <div className="iconPlay">
          <PlayCircleOutlined />
        </div>
      </div>
      <div className="tagMoviePractice">One Piece Tập 1</div>
    </div>
  );
}

export default ItemPractice;
