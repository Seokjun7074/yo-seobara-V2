import { createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../api/postAPI";

export const __createPost = createAsyncThunk(
  "post/createPost",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.createPost(payload);
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getPost = createAsyncThunk(
  "post/getPost",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getPost();
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
