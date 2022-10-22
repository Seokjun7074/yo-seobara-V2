import React from "react";
import moment from "moment";
import Moment from "react-moment";
import "moment/locale/ko"; //한국말 번역

const CreatedAt = (time) => {
  const nowTime = moment().format(`${time.time}`), // 서버로부터 받은 작성,또는수정시간
    startTime = new Date(nowTime);
  return (
    <span style={{ color: "gray", fontWeight: "600", padding: "10px " }}>
      <Moment fromNow>{startTime}</Moment>
    </span>
  );
};
export default CreatedAt;

//쓰는 방법
//시간만 넘겨주고 임포트하기 예 2022-10-03
