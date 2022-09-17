import Masonry from "react-masonry-css";
import "./style.css";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CheckBar, ImageWrapper } from "./style.js";
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../../redux/async/asyncPost";
import { incrementPage, updateTrue } from "../../redux/modules/postSlice";
import Modal from "../global/modal";
import axios from "axios";
import Spinner from "../global/spinner";

const InfiniteScroll = () => {
  const [ref, inView] = useInView({
    // threshold: 1, // ref부분이 다 보여야 작동
    // triggerOnce: true, // 한번만 작동하는거 뺄지말지 고민중
  });
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.post.data);
  const page = useSelector((state) => state.post.page);
  const update = useSelector((state) => state.post.update);

  useEffect(() => {
    if (update) {
      dispatch(__getPost(page));
    }
  }, [page]);

  useEffect(() => {
    if (inView) {
      dispatch(incrementPage());
      dispatch(updateTrue());
    }
  }, [inView]);

  const Columns = {
    default: 4,
    1200: 3,
    1000: 2,
    700: 1,
  };
  const [modalToggel, setModlaToggle] = useState({
    open: false,
    loading: false,
    data: {
      title: "제목",
      body: "댓글",
    },
  });
  return (
    <>
      <Masonry
        breakpointCols={Columns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {datas.map((data) => (
          <div
            key={data.postId}
            onClick={async () => {
              setModlaToggle((prev) => {
                return { ...prev, open: true, loading: true };
              });
              // api통신
              const res = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${data.postId}`
              );
              setModlaToggle((prev) => {
                return { ...prev, data: { ...res.data }, loading: false };
              });
            }}
          >
            <ImageWrapper src={data.thumbnailUrl} alt="" />
          </div>
        ))}
      </Masonry>
      <Modal modalToggel={modalToggel} setModlaToggle={setModlaToggle}>
        <TestComponent modalToggel={modalToggel} />
      </Modal>
      {datas.length === 0 ? null : <CheckBar ref={ref}></CheckBar>}
    </>
  );
};

export default InfiniteScroll;

const TestComponent = ({ modalToggel }) => {
  return (
    <>
      {modalToggel.loading ? (
        <div>loding..</div>
      ) : (
        <div>{modalToggel.data.body}</div>
      )}
    </>
  );
};
