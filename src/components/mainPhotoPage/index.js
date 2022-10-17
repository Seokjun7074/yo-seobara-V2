//css 부분 (외부)
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ImageListItem from "@mui/material/ImageListItem";
import Masonry from "react-masonry-css";

//css 부분 (내부)
import { ImageWrapper, Box, CheckBar } from "./style";
import "./style.css";

//다른페이지
import Modal from "../global/modal/index";
import Detail from "../../pages/detail";
import { incrementPage, updateTrue } from "../../redux/modules/postSlice";
import { __getPost } from "../../redux/async/asyncPost";
import { __getComment } from "../../redux/async/asyncComment";
import ModalCopy from "../global/modal copy";

//
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector, useDispatch } from "react-redux";
const MainPhotoCard = () => {
  const dispatch = useDispatch();

  const datas = useSelector((state) => state.post.data);
  const page = useSelector((state) => state.post.page);
  const update = useSelector((state) => state.post.update);

  const [ref, inView] = useInView({
    // threshold: 1, // ref부분이 다 보여야 작동
    // triggerOnce: true, // 한번만 작동하는거 뺄지말지 고민중
  });

  // `page` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    if (update) {
      dispatch(__getPost(page));
    }
  }, [page]);

  // 사용자가 마지막 요소를 보고 있으면
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
    data: {},
  });

  return (
    <>
      <Masonry
        breakpointCols={Columns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {datas.map((item, idx) => (
          <div key={item.postId}>
            <Box>
              <ImageListItem key={item.img}>
                <div
                  onClick={async () => {
                    setModlaToggle((prev) => {
                      return { ...prev, open: true, loading: true };
                    });
                    dispatch(__getComment({ postId: item.postId }));
                    //기존데이터에 댓글추가
                    setModlaToggle((prev) => {
                      return { ...prev, data: { ...item }, loading: false };
                    });
                  }}
                >
                  <ImageWrapper
                    key={item.postId}
                    src={item.thumbnailUrl}
                    alt=""
                  />
                </div>

                <ImageListItemBar
                  sx={{
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{
                        color: "rgba(255, 255, 255, 0.54)",
                      }}
                      aria-label={`info about ${item.title}`}
                    ></IconButton>
                  }
                />
              </ImageListItem>
            </Box>
          </div>
        ))}
      </Masonry>
      {datas.length === 0 ? null : <CheckBar ref={ref}></CheckBar>}

      {modalToggel.open && (
        <ModalCopy modalToggel={modalToggel} setModlaToggle={setModlaToggle}>
          <Detail item={modalToggel.data} />
        </ModalCopy>
      )}
    </>
  );
};

export default MainPhotoCard;
