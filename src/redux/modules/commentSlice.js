import { createSlice } from "@reduxjs/toolkit";
import {
  __getComment,
  __createComment,
  __deleteComment,
} from "../async/asyncComment";

const initialState = {
  commentList: [], //댓글데이터
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    deleteComment(state, action) {
      console.log(action.payload);
      state.commentList = state.commentList.filter(
        (list) => list.commentId != action.payload
      );
    },
  },
  extraReducers: (builder) => {
    // 댓글불러오기
    builder.addCase(__getComment.fulfilled, (state, actions) => {
      state.commentList = actions.payload;
    });
    builder.addCase(__getComment.rejected, (state, actions) => {
      alert("댓글불러오기실패");
    });
    //댓글작성
    builder.addCase(__createComment.fulfilled, (state, actions) => {
      state.commentList.unshift(actions.payload);
      alert("댓글작성완료");
    });
    builder.addCase(__createComment.rejected, (state, actions) => {
      if (actions.payload === "LOGIN_REQUIRED") {
        alert("로그인한 유저가아닙니다");
      } else {
        alert("댓글작성실패");
      }
    });
    builder.addCase(__deleteComment.fulfilled, (state, actions) => {
      alert("댓글삭제완료");
    });
    builder.addCase(__deleteComment.rejected, (state, actions) => {
      alert("댓글삭제실패");
    });
  },
});

export const { deleteComment } = commentSlice.actions;
export default commentSlice.reducer;
