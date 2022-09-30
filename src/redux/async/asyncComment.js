import { createAsyncThunk } from "@reduxjs/toolkit";
import { apis } from "../../api/commentsAPI";

export const __getComment = createAsyncThunk(
"comment/getComment",
async (payload, thunkAPI) => {
    try{
        const data = await apis.getComment(payload.postId);
        const res =data.data.data;
        return thunkAPI.fulfillWithValue(res);
    }catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
}

);


export const __createComment = createAsyncThunk(
"comment/createComment",
async(payload, thunkAPI) => {
    try{
        const data = await apis.createComment(payload.idNum,payload.value);  
         console.log(data);
    }catch(error){
      const error_code = error.response.data.errorCode.code;
      if (error_code === "LOGIN_REQUIRED") {
        return thunkAPI.rejectWithValue(error_code);
      } else {console.log(payload); 
        return thunkAPI.rejectWithValue(error);
      }
    }
}
);