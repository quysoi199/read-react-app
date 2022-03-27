import React from "react";
import "./itemDetail.scss";

function DetailItem() {
  return (
    <div className="wrapDetaiItem">
      <div className="DetailItemName">One Piece (Đảo Hải Tặc)</div>
      <div className="wrapDetail">
        <div className="wrapDetailInfo">9.4</div>
        <div className="wrapDetailInfo">1999</div>
        <div className="wrapDetailInfo">Cập nhật tới tập 1013</div>
      </div>
      <div className="wrapCategory">
        <div className="categoryMovie">Viễn Tưởng</div>
        <div className="categoryMovie">Nhiệt Huyết</div>
        <div className="categoryMovie">Thiếu niên</div>
        <div className="categoryMovie">Phiêu Lưu</div>
      </div>
      <div className="filmInfo">
        One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần.
        Gol D. Roger, vua hải tặc với khối tài sản khổng lồ đã bị xử tử, tiết lộ
        rằng tài sản cả cuộc đời của ông được cất giấu kỹ ở một vị trí nào đó
        dưới đáy đại dương. Sau này người ta đã gọi đó là Đại Kho Báu. Để giành
        được kho báu, mọi người đã đua nhau ra khơi để trở thành hải tặc và đã
        tạo ra một "Thời đại Hải tặc lớn". Vì muốn thực hiện những lời đã thỏa
        thuận với bạn bè, Monkey D. Luffy đã gặp gỡ nhiều đối tác cùng chí hướng
        trong cuộc hành trình đi tìm kho báu và cùng nhau bước vào "Con đường Vĩ
        đại". Liệu mục tiêu của họ có thành công và trở thành Vua Hải Tặc hay
        không? Mời các bạn cùng đón xem nhé!
      </div>
      <div className="btnDetailitem">Xem thêm</div>
    </div>
  );
}

export default DetailItem;
