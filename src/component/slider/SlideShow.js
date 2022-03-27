import pic from "../../img/pic.jpg";
import pic1 from "../../img/pic1.jpg";
import pic2 from "../../img/pic2.jpg";
import pic3 from "../../img/pic3.jpg";
import pic4 from "../../img/pic4.jpg";
import pic5 from "../../img/pic5.jpg";
import pic6 from "../../img/pic6.jpg";
import "react-slideshow-image/dist/styles.css";
import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";
import "./contens.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function SlideShow() {
  const slideImages = [pic, pic1, pic2, pic3, pic4, pic5, pic6];

  const slideRef = useRef();
  const properties = {
    arrows: false,
  };
  const back = () => {
    slideRef.current.goBack();
  };

  const next = () => {
    slideRef.current.goNext();
  };

  return (
    <>
      <Slide ref={slideRef} {...properties} easing="ease">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[5]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[6]})` }}></div>
        </div>
      </Slide>
      <div styles={{}} type="button" onClick={back}>
        <LeftOutlined
          style={{
            color: "white",
            position: "absolute",
            top: "40%",
            left: "0",
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
            right: "0",
          }}
        />
      </div>
    </>
  );
}

export default SlideShow;
