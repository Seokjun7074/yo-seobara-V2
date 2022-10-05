//mui css
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

//내부 css
import {Form, FormBox, FormButton} from './style';

import * as React from "react";
import { useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

//컴포넌트
import {__createComment} from "../../../redux/async/asyncComment";

const DetailForm = (id) => {

  const idNum= id.id;  
  const textRef = useRef();


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
  // console.log(value);
const comment = {
  idNum:idNum,
  data:value 
}
  if(value === "" || value == undefined){
    alert("내용을 입력헤주세요");
    // return;
  }else if(value.length > 40){
    alert("40글자까지만 적어주세요");
  }else{
    
  dispatch(__createComment(comment));
  alert("댓글작성완료!!");
  window.location.reload();
  }
  setValue('')
  
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
        ref={textRef}
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


