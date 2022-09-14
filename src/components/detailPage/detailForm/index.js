import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useRef, useEffect } from "react";
import { Block } from "@mui/icons-material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {Form, FormBox, FormButton} from './style';




const DetailForm = () => {
  const [com, setCom] = useState(false);



    const [value, setValue] = useState(''); //Initial value should be empty
    const handleSubmit = (e)=> {
  
      e.preventDefault();
      e.target.reset();
    }
const inp = (e) => {
  console.log(e.target.value)
  setValue(e.target.value)
}



  const textRef = useRef();



// console.log(value)
const onButtonClick=()=>{
  console.log(value)
  setValue('')
}
// console.log(value)

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
        // inputRef={textRef}
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


