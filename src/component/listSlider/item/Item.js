import poster from "../../../img/poster3.jpg";
import DetailItem from "../../detaiItem/DetailItem";
import "./item.scss";

function Item() {
  return (
    <div className="wrapItem">
      <img src={poster} alt="" />
      <div className="tagName">One piece </div>
      <DetailItem />
    </div>
  );
}

export default Item;
