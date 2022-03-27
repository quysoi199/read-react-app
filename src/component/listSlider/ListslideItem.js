import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState, useRef } from "react";
import { Slide } from "react-slideshow-image";
import Item from "./item/Item";
import "./listSlide.scss";

const ListslideItem = () => {
  const style = {
    textAlign: "center",
    background: "teal",
    padding: "200px 0",
    fontSize: "30px",
  };
  const slideRef = useRef();
  const properties = {
    arrows: false,
    duration: 3000,
    slidesToShow: 5,
    slidesToScroll: 5,
    canSwipe: false,
    autoplay: false,
    indicators: false,
  };
  const back = () => {
    slideRef.current.goBack();
  };

  const next = () => {
    slideRef.current.goNext();
  };

  return (
    <div
      style={{
        padding: "30px",
        weight: "600",
        color: "#1cc749",
        fontSize: "28px",
      }}
    >
      Đề xuất hot
      <div
        style={{
          position: "relative",
        }}
      >
        <Slide ref={slideRef} {...properties}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Slide>
        <div styles={{}} type="button" onClick={back}>
          <LeftOutlined
            style={{
              color: "white",
              position: "absolute",
              top: "40%",
              left: "-33px",
              fontSize: "40px",
            }}
          />
        </div>
        <div styles={{}} type="button" onClick={next}>
          <RightOutlined
            style={{
              color: "white",
              position: "absolute",
              top: "40%",
              fontSize: "40px",
              right: "-33px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ListslideItem;
