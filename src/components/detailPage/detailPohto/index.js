import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import {Img,Text,Text2, Text3,Like} from "./style"
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import {useEffect, useState, useCallback} from 'react';
import axios from 'axios';
import Modal from '../../global/modal';
import DetailForm from '../detailForm';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Block } from '@mui/icons-material';

const DetailPohto = (id) => {


const [detail,setDetail] = useState(
{
  id:'',
  title:'',
  url:''
}

);
  const idNum = id.id
// console.log(typeof(idNum),idNum)




useEffect(() => {

  
    axios.get(`https://jsonplaceholder.typicode.com/photos/${idNum}`)
      .then((res) => {
        // console.log(res.data.url)
        setDetail(res.data);
        
         
      })
   .catch(err=> console.log(err))

  


  }, []);
  // console.log(detail.url)


//   useEffect(()=>{
// console.log(detail.url)
// // console.log(typeof(detail))


//   },[detail])

// console.log(url)

const deletePost= ()=>{


  console.log('삭제')
//   axios.get(`https://jsonplaceholder.typicode.com/photos/${idNum}`)
//   .then((res) => {
//     console.log(res)
    
    
     
//   })
// .catch(err=> console.log(err))
}


      return (

        <Paper
          sx={{
            p: 2,
            maxWidth: '100%',
            height:300,
            maxHeight:400,
            minHeight:300,
            flexGrow: 1,
            // display: flex,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
        <Grid container spacing={2}>

            <Grid item>
              <ButtonBase sx={{ width: '100%', height: '300px' }}>
                <Img alt="complex" 
                src={detail.url}
                // src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62" 
                // src={`${detail.url}?w=161&fit=crop&auto=format`}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <Text>{detail.title}</Text>
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  <Text2>위치정보</Text2>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  <Text3>{detail.title}내용or후기</Text3>
                  </Typography>
                </Grid>
               
                {/* <Grid item>
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
                    Remove
                  </Typography>
                </Grid> */}
                  <div>
                        <p>좋아요</p>
                        <p>생성시간</p>
                  </div>
              </Grid>

              {/* <Grid container sx={{ color: 'text.primary' }}>
                <Grid>
                  <DeleteSharpIcon />
                </Grid>
              </Grid> */}
              
            
              <Grid item>
                <Typography variant="subtitle1" component="div" sx={{m:1}}>
                <Button variant="outlined" startIcon={<DeleteIcon />}  onClick={()=>{
                  alert('삭제입니다')
                  deletePost();
                  
                 }}>
                 삭제하기
                </Button>
        
                </Typography>
              </Grid>
          
            </Grid>
           
          </Grid>
          <DetailForm/>
          
        </Paper>
      );

    
}

export default DetailPohto;




