import axios from "axios";
import Masonry from "react-masonry-css";
import "./style.css";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getCookie } from "../../shared/Cookie.js";
import { CheckBar, ImageWrapper } from "./style.js";

const InfiniteScroll = () => {
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({
    // threshold: 1, // ref부분이 다 보여야 작동
    // triggerOnce: true, // 한번만 작동하는거 뺄지말지 고민중
  });

  // 서버에서 아이템을 가지고 오는 함수
  const getItems = async () => {
    // console.log("서버통신 시작");
    setLoading(true);
    await axios
      .get(`${process.env.REACT_APP_API_URL}/api/posts?page=${page}&size=6`, {
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      })
      .then((res) => {
        // console.log("불러온 데이터", res.data.data.last);
        const dataList = res.data.data.content;
        setDatas((prev) => [...prev, ...dataList]);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  useEffect(() => {
    getItems();
  }, [page]);

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
    }
  }, [inView]);

  const Columns = {
    default: 4,
    1200: 3,
    1000: 2,
    700: 1,
  };
  console.log(datas);
  return (
    <>
      <Masonry
        breakpointCols={Columns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {datas.map((data) => (
          <ImageWrapper key={data.postId} src={data.thumbnailUrl} alt="" />
        ))}
      </Masonry>
      {datas.length === 0 ? null : <CheckBar ref={ref}></CheckBar>}
    </>
  );
};

export default InfiniteScroll;
