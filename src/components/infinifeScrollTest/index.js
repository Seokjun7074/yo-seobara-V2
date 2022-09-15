import Masonry from "react-masonry-css";
import "./style.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CheckBar, ImageWrapper } from "./style.js";
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../../redux/async/asyncPost";

const InfiniteScroll = () => {
  // const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(0);
  const [ref, inView] = useInView({
    // threshold: 1, // ref부분이 다 보여야 작동
    // triggerOnce: true, // 한번만 작동하는거 뺄지말지 고민중
  });
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.post.data);

  useEffect(() => {
    dispatch(__getPost(page));
  }, [page]);
  console.log(datas);
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

  return (
    <>
      <Masonry
        breakpointCols={Columns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {datas.map((data) => (
          <div key={data.postId}>
            <ImageWrapper src={data.thumbnailUrl} alt="" />
            <p>{data.postId}</p>
          </div>
        ))}
      </Masonry>
      {datas.length === 0 ? null : <CheckBar ref={ref}></CheckBar>}
    </>
  );
};

export default InfiniteScroll;
