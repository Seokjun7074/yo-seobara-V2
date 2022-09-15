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
      const data = await apis.getPost(payload);
      const content = data.data.data.content;
      return thunkAPI.fulfillWithValue(content);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getPostLocation = createAsyncThunk(
  "post/getPostLocation",
  async (payload, thunkAPI) => {
    try {
      console.log("payload", payload);
      const data = await apis.getPostLocation(payload);
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
