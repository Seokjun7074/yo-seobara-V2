import { createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { apis } from "../../api/postAPI";

export const __createPost = createAsyncThunk(
  "post/createPost",
  async (payload, thunkAPI) => {
    try {
      const data = await apis.createPost(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      // LOGIN_REQUIRED
      const error_code = error.response.data.errorCode.code;
      if (error_code === "LOGIN_REQUIRED") {
        alert("로그인 해주세요");
        console.log("X");
        // useNavigate("login");
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
      const data = await apis.getPost(payload);
      // console.log("res", data.data.data.number);
      const content = {
        content: data.data.data.content,
        page: data.data.data.number,
      };
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
      const data = await apis.getPostLocation(payload);
      const res = data.data.data;
      return thunkAPI.fulfillWithValue(res);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
