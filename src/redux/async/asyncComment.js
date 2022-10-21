import { CompressOutlined } from "@mui/icons-material";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../api/commentsAPI";

export const __getComment = createAsyncThunk(
  "comment/getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.getComment(payload.postId);
      const res = data.data.data;
      return thunkAPI.fulfillWithValue(res);
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __createComment = createAsyncThunk(
  "comment/createComment",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.createComment(payload.idNum, payload.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      const error_code = error.response.data.errorCode.code;
      if (error_code === "LOGIN_REQUIRED") {
        return thunkAPI.rejectWithValue(error_code);
      } else {
        console.log(payload);
        return thunkAPI.rejectWithValue(error);
      }
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "comment/deleteComment",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.deleteComment(payload.postId, payload.commentId);
      console.log(data);
    } catch (error) {
      const error_code = error.response.data.errorCode.code;
      console.log(error_code);
      if (error_code === "LOGIN_REQUIRED") {
        return thunkAPI.rejectWithValue(error_code);
      } else {
        console.log(payload);
        return thunkAPI.rejectWithValue(error);
      }
    }
  }
);
