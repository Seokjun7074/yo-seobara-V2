import * as React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {Form, FormBox, FormButton} from './style';

import { useDispatch, useSelector } from "react-redux";
import {__createComment} from "../../../redux/async/asyncComment";

const DetailForm = (id) => {

  const idNum= id.id;  
 


  const dispatch = useDispatch();

  const commentStatus = useSelector((state) => state.comment); // 작성상태


    const [value, setValue] = useState(); 
    const handleSubmit = (e)=> {
  
      e.preventDefault();
      
    }
const inp = (e) => {
 
  setValue(e.target.value)

  
}

const onButtonClick= async()=>{
const comment = {
  idNum:idNum,
  data:value 
}
  if(value === ""){
    alert("내용을 입력헤주세요");
    return;
  }else{
  dispatch(__createComment(comment));
  }

  setValue('')
  alert('댓글작성완료');
  window.location.reload();
}


  return (
    
    
     <FormBox onChange={handleSubmit}>
   
      <Form>

        <TextField
        sx={{m:1 ,width:'auto',height:'auto',display:'flex'}}
        InputProps={{ style: { fontSize: 20 ,maxHeight:63}}}
        InputLabelProps={{ style: { fontSize: 20 } }}
        id="outlined-multiline-static"
        label="댓글남기기"
        multiline
        rows={2}
        value={value}
        onChange={inp}
      />
      </Form>
      <FormButton>
      <Button sx={{m:1, width:'auto',height:'auto',display:'flex',
    
         
    }} variant="contained" endIcon={<SendIcon />}
        onClick={ onButtonClick}
        >
      
      </Button>

      </FormButton>
     
     </FormBox>
    
  );
};

export default DetailForm;


