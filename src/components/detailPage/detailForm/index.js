import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useRef, useEffect } from "react";
import { Block } from "@mui/icons-material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
const DetailForm = () => {
  const [com, setCom] = useState(false);



    const [value, setValue] = useState(''); //Initial value should be empty
    const handleSubmit = (e)=> {
      // alert('The value: ' + value);
      // console.log(e.target.value)
      // setValue(null);                        //To reset the textfield value
      e.preventDefault();
      e.target.reset();
    }
const inp = (e) => {
  console.log(e.target.value)
  setValue(e.target.value)
}


  // const handleChange = (event) => {
  //   setValue(event.target.value);
   
  // };

  const textRef = useRef();



// console.log(value)
const onButtonClick=()=>{
  console.log(value)
  setValue('')
}
// console.log(value)

  return (
    
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "80%",maxHeight:17 }, 
          // float: 'left',width: '80%'
          textAlign: 'left',
         

        }}
       
        noValidate
        autoComplete="off"
      >
        <form  onChange={handleSubmit}>
          <TextField
          InputProps={{ style: { fontSize: 20 ,maxHeight:63} }}
          InputLabelProps={{ style: { fontSize: 20 } }}
          id="outlined-multiline-static"
          label="댓글남기기"
          multiline
          rows={2}
          value={value}
          // inputRef={textRef}
          onChange={inp}
        />
           <Button sx={{m:1,textAlign: 'right' }} variant="contained" endIcon={<SendIcon />}
          // onClick={ onButtonClick}
          >
        댓글남기기
      </Button>
        </form>
       
      </Box>
     
    
  );
};

export default DetailForm;
