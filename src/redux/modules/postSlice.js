import { createSlice } from "@reduxjs/toolkit";
import { __createPost, __getPost } from "../async/asyncPost";

const initialState = { data: [] };

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__createPost.fulfilled, (state, actions) => {
      console.log("actions", actions);
    });
    builder.addCase(__createPost.rejected, (state, actions) => {
      alert("게시글 작성 실패!! 다시 시도해주세요.");
    });

    builder.addCase(__getPost.fulfilled, (state, actions) => {
      // console.log("actions", actions.payload);
      state.data = actions.payload;
      // console.log(state);
    });
    builder.addCase(__getPost.rejected, (state, actions) => {
      // console.log("actions", actions);
      alert("게시물 불러오기 실패 새로고침 해보슈");
    });
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
