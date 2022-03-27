import React from "react";
import { Tabs } from "antd";
import "./DetailMovie.scss";
import DetailPracPage from "../listPracticeMovie/detailPracPage/DetaiPracPage";
import PartSessonDetail from "./sessonDetail/partSessonDetail/PartSessonDetail";

function ListPracticeMovie() {
  const { TabPane } = Tabs;
  return (
    <div className="wrapListPractice">
      <div className="warpSelection">
        <Tabs style={{ color: "#fff" }} defaultActiveKey="1">
          <TabPane tab="Practice" key="1">
            <div>
              <DetailPracPage />
            </div>
          </TabPane>
          <TabPane tab="Sesson" key="2">
            <div>
              {" "}
              <PartSessonDetail />
            </div>
          </TabPane>
          <TabPane tab="Performer" key="3">
            <div></div>
          </TabPane>
          <TabPane tab="Similar" key="4">
            <div>
              <PartSessonDetail />
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default ListPracticeMovie;
