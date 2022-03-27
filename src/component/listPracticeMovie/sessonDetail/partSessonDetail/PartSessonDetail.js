import React from "react";
import SessonDetail from "../SessonDetail";
import { Row, Col } from "antd";

function PartSessonDetail() {
  return (
    <>
      <Row>
        <Col span={4}>{<SessonDetail />}</Col>
        <Col span={4}>{<SessonDetail />}</Col>
        <Col span={4}>{<SessonDetail />}</Col>
        <Col span={4}>{<SessonDetail />}</Col>
        <Col span={4}>{<SessonDetail />}</Col>
      </Row>
    </>
  );
}

export default PartSessonDetail;
