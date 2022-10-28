import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Masonry from "react-masonry-css";
import { useDispatch } from "react-redux";
import Detail from "../../../pages/detail";
import { __getComment } from "../../../redux/async/asyncComment";
import Modal from "../../global/modal";
import { CheckBar, ImageWrapper } from "./style";

const InfiniteScroll = ({ page, lastPage, setPage, dataList }) => {
  const [ref, inView] = useInView({
    // threshold: 1, // ref부분이 다 보여야 작동
    // triggerOnce: true, // 한번만 작동하는거 뺄지말지 고민중
  });
  const dispatch = useDispatch();

  const Columns = {
    default: 4,
    1200: 3,
    1000: 2,
    700: 1,
  };

  useEffect(() => {
    if (inView && !lastPage) {
      setPage(page + 1);
      //   dispatch(updateTrue());
    }
  }, [inView]);

  const [modalToggel, setModlaToggle] = useState({
    open: false,
    loading: false,
    data: {},
  });

  return (
    <>
      {modalToggel.open && (
        <Modal modalToggel={modalToggel} setModlaToggle={setModlaToggle}>
          <Detail item={modalToggel.data} />
        </Modal>
      )}
      <Masonry
        breakpointCols={Columns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {dataList.map((data) => {
          return (
            <div
              key={data.postId}
              onClick={() => {
                dispatch(__getComment({ postId: data.postId }));
                setModlaToggle((prev) => {
                  return { ...prev, open: true, data: { ...data } };
                });
              }}
            >
              <ImageWrapper src={data.thumbnailUrl} alt="" />
            </div>
          );
        })}
      </Masonry>
      {dataList.length === 0 ? null : <CheckBar ref={ref}></CheckBar>}
    </>
  );
};

export default InfiniteScroll;
