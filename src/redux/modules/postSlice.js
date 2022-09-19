import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { __createPost, __getPost, __getPostLocation } from "../async/asyncPost";

const initialState = {
  update: true, // 무한스크롤 통신 억제기
  page: 0, // 무한스크롤 페이지
  data: [], // 전체데이터
  location: [], // 지도페이지용 데이터
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    incrementPage(state) {
      state.page++;
    },
    updateFalse(state) {
      state.update = false;
    },
    updateTrue(state) {
      state.update = true;
    },
  },
  extraReducers: (builder) => {
    // 게시물 작성
    builder.addCase(__createPost.fulfilled, (state, actions) => {
      alert("작성완료");
    });
    builder.addCase(__createPost.rejected, (state, actions) => {
      alert("게시글 작성 실패!! 다시 시도해주세요.");
    });
    // 전체 게시물 조회
    builder.addCase(__getPost.fulfilled, (state, actions) => {
      const payloadContent = actions.payload.content;
      state.data = [...state.data, ...payloadContent];
      state.update = false;
    });
    builder.addCase(__getPost.rejected, (state, actions) => {
      // console.log("actions", actions);
      alert("게시물 불러오기 실패 새로고침 해보슈");
    });
    // 좌표기준 게시물 조회
    builder.addCase(__getPostLocation.fulfilled, (state, actions) => {
      state.location = actions.payload;
      // console.log(state);
    });
    builder.addCase(__getPostLocation.rejected, (state, actions) => {
      // console.log("actions", actions);
      alert("게시물 불러오기 실패 새로고침 해보슈");
    });
  },
});

export const { incrementPage, updateTrue, updateFalse } = postSlice.actions;
export default postSlice.reducer;
