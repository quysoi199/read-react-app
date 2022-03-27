import Item from "../listSlider/item/Item";
import { Row, Col } from "antd";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";

function SeriesMovie() {
  const { type, genre } = useParams();
  return (
    <div
      style={{
        padding: "30px",
        weight: "600",
        color: "#1cc749",
        fontSize: "28px",
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <div>
          {type} {genre}
        </div>
        <Row>
          <Col span={6}>
            <Item />
          </Col>
          <Col span={6}>
            <Item />
          </Col>
          <Col span={6}>
            <Item />
          </Col>
          <Col span={6}>
            <Item />
          </Col>
          <Col span={6}>
            <Item />
          </Col>
          <Col span={6}>
            <Item />
          </Col>
          <Col span={6}>
            <Item />
          </Col>
          <Col span={6}>
            <Item />
          </Col>
          <Col span={6}>
            <Item />
          </Col>
          <Col span={6}>
            <Item />
          </Col>
          <Col span={6}>
            <Item />
          </Col>
          <Col span={6}>
            <Item />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SeriesMovie;
