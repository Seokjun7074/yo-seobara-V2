import { createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../api/postAPI";

export const __createPost = createAsyncThunk(
  "post/createPost",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.createPost(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      // LOGIN_REQUIRED
      const error_code = error.response.data.errorCode.code;
      if (error_code === "LOGIN_REQUIRED") {
        return thunkAPI.rejectWithValue(error_code);
      } else {
        return thunkAPI.rejectWithValue(error);
      }
    }
  }
);
export const __editPost = createAsyncThunk(
  "post/editPost",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.editPost(payload.formData, payload.postId);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      // LOGIN_REQUIRED
      const error_code = error.response.data.errorCode.code;
      if (error_code === "LOGIN_REQUIRED") {
        return thunkAPI.rejectWithValue(error_code);
      } else {
        return thunkAPI.rejectWithValue(error);
      }
    }
  }
);

export const __getPost = createAsyncThunk(
  "post/getPost",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getPostPic(payload);
      // console.log("res", data.data.data.number);

      const content = {
        content: data.data.data.content,
        page: data.data.data.number,
      };
      return thunkAPI.fulfillWithValue(content);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __likePost = createAsyncThunk(
  "post/likePost",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.likePost(payload);
      // console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data.postId);
    } catch (error) {
      // LOGIN_REQUIRED
      const error_code = error.response.data.errorCode.code;
      if (error_code === "LOGIN_REQUIRED") {
        return thunkAPI.rejectWithValue(error_code);
      } else {
        return thunkAPI.rejectWithValue(error);
      }
    }
  }
);

export const __likeDelete = createAsyncThunk(
  "post/likeDelete",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.likeDelete(payload.postId, payload.memberId);
      return thunkAPI.fulfillWithValue(data.data.postId);
    } catch (error) {
      // LOGIN_REQUIRED
      const error_code = error.response.data.errorCode.code;
      if (error_code === "LOGIN_REQUIRED") {
        return thunkAPI.rejectWithValue(error_code);
      } else {
        return thunkAPI.rejectWithValue(error);
      }
    }
  }
);

export const __deletePost = createAsyncThunk(
  "post/deletePost",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.deletePost(payload);
      const res = data.data.data;
      return thunkAPI.fulfillWithValue(res);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getPostLocation = createAsyncThunk(
  "post/getPostLocation",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getPostLocation(payload);
      const res = data.data.data;
      return thunkAPI.fulfillWithValue(res);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getUserPost = createAsyncThunk(
  "post/getUserPost",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getUserPost(payload.page, payload.memberId);
      const res = data.data.data;
      return thunkAPI.fulfillWithValue(res);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
