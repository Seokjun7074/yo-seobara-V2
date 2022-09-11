import { createSlice } from "@reduxjs/toolkit";
import { __createPost } from "../async/asyncPost";

const initialState = [];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__createPost.fulfilled, (state, actions) => {
      console.log(actions);
    });
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
