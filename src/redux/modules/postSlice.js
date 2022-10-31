import { createSlice, current } from "@reduxjs/toolkit";
import {
  __createPost,
  __editPost,
  __getPost,
  __likePost,
  __likeDelete,
  __getPostLocation,
  __deletePost,
  __getUserPost,
} from "../async/asyncPost";

const initialState = {
  update: true, // 무한스크롤 통신 억제기
  page: 0, // 무한스크롤 페이지
  data: [], // 전체데이터
  location: [], // 지도페이지용 데이터
  userPageData: {
    data: [],
    totalElements: 0,
    nickname: "",
    page: 0,
    lastPage: false,
    update: true,
  },
  loading: false, //로딩 상태 관리
  count: 0,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    incrementPage(state) {
      state.page++;
    },
    incrementUserPage(state) {
      state.userPageData.page++;
    },
    updateFalse(state) {
      state.update = false;
    },
    updateUserPageFalse(state) {
      state.userPageData.update = false;
    },
    updateTrue(state) {
      state.update = true;
    },
    updateUserPageTrue(state) {
      state.userPageData.update = true;
    },
    initCreatePost(state) {
      state.createPost = false;
    },
    myHeartFalse(state, action) {
      state.data = state.data.map((item) =>
        item.postId === action.payload
          ? { ...item, myHeart: false, heart: item.heart - 1 }
          : item
      );
      state.location = state.location.map((item) =>
        item.postId === action.payload
          ? { ...item, myHeart: false, heart: item.heart - 1 }
          : item
      );
    },
    myHeartTrue(state, action) {
      state.data = state.data.map((item) =>
        item.postId === action.payload
          ? { ...item, myHeart: true, heart: item.heart + 1 }
          : item
      );
      state.location = state.location.map((item) =>
        item.postId === action.payload
          ? { ...item, myHeart: true, heart: item.heart + 1 }
          : item
      );
    },
  },
  extraReducers: (builder) => {
    // 게시물 작성
    builder.addCase(__createPost.pending, (state, payload) => {
      state.loading = true;
    });
    builder.addCase(__createPost.fulfilled, (state, actions) => {
      state.loading = false;
      state.data.unshift(actions.payload.data);
      alert("작성완료");
    });
    builder.addCase(__createPost.rejected, (state, actions) => {
      state.loading = false;
      alert("작성실패");
    });
    // 게시물 수정
    builder.addCase(__editPost.pending, (state, payload) => {
      state.loading = true;
    });
    builder.addCase(__editPost.fulfilled, (state, actions) => {
      state.loading = false;
      state.data = state.data.map((e) =>
        e.postId === actions.payload.postId ? { ...e, ...actions.payload } : e
      );
      alert("수정완료");
    });
    builder.addCase(__editPost.rejected, (state, actions) => {
      state.loading = false;
      alert("수정실패");
    });
    // 게시물 삭제
    builder.addCase(__deletePost.fulfilled, (state, actions) => {
      const postId = actions.payload.split("번")[0];
      state.data = state.data.filter(
        (e) => parseInt(e.postId) !== parseInt(postId)
      );
      state.location = state.location.filter(
        (e) => parseInt(e.postId) !== parseInt(postId)
      );
    });

    // 게시물 좋아요
    builder.addCase(__likePost.fulfilled, (state, actions) => {
      state.data = state.data.map((item) =>
        item.postId === actions.payload
          ? { ...item, myHeart: true, heart: item.heart + 1 }
          : item
      );
      state.location = state.location.map((item) =>
        item.postId === actions.payload
          ? { ...item, myHeart: true, heart: item.heart + 1 }
          : item
      );
      // alert("좋아요완료");
    });
    builder.addCase(__likePost.rejected, (state, actions) => {
      alert("좋아요실패");
    });

    // 게시물 좋아요취소
    builder.addCase(__likeDelete.fulfilled, (state, actions) => {
      state.data = state.data.map((item) =>
        item.postId === actions.payload
          ? { ...item, myHeart: false, heart: item.heart - 1 }
          : item
      );
      state.location = state.location.map((item) =>
        item.postId === actions.payload
          ? { ...item, myHeart: false, heart: item.heart - 1 }
          : item
      );
      // alert("좋아요취소완료");
    });
    builder.addCase(__likeDelete.rejected, (state, actions) => {
      alert("좋아요취소실패");
    });

    // 전체 게시물 조회
    builder.addCase(__getPost.fulfilled, (state, actions) => {
      const payloadContent = actions.payload.content;
      state.data = [...state.data, ...payloadContent];
      state.update = false;
    });
    builder.addCase(__getPost.rejected, (state, actions) => {
      alert("게시물 불러오기 실패 새로고침 해보세요.");
    });

    // 좌표기준 게시물 조회
    builder.addCase(__getPostLocation.fulfilled, (state, actions) => {
      state.location = actions.payload;
      // console.log(state);
    });
    builder.addCase(__getPostLocation.rejected, (state, actions) => {
      alert("게시물 불러오기 실패 새로고침 해보세요.");
    });

    // 유저페이지 게시물 조회
    builder.addCase(__getUserPost.fulfilled, (state, actions) => {
      const payloadContent = actions.payload.content;
      state.userPageData.lastPage = actions.payload.last;
      state.userPageData.nickname = payloadContent[0].nickname;
      state.userPageData.totalElements = actions.payload.totalElements;
      state.userPageData.data = [...state.userPageData.data, ...payloadContent];
      state.update = false;
    });
    builder.addCase(__getUserPost.rejected, (state, actions) => {
      alert("게시물 불러오기 실패 새로고침 해보세요.");
    });
  },
});

export const {
  incrementPage,
  incrementUserPage,
  updateTrue,
  updateUserPageTrue,
  updateFalse,
  initCreatePost,
  myHeartTrue,
  myHeartFalse,
} = postSlice.actions;
export default postSlice.reducer;
