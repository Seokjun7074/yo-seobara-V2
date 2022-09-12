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
import Slider from '../../global/slider';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Block } from '@mui/icons-material';

const DetailPohto = (id) => {


const [detail,setDetail] = useState(
{
  id:'',
  title:'',
  url:[
    'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  ]
}

);
  const idNum = id.id
// console.log(typeof(idNum),idNum)



//아이디에 맞는 정보를 서버에 요청
// useEffect(() => {

  
//     axios.get(`https://jsonplaceholder.typicode.com/photos/${idNum}`)
//       .then((res) => {
//         // console.log(res.data.url)
//         setDetail(res.data);
        
         
//       })
//    .catch(err=> 
//     console.log(err))

//   }, []);




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
              <ButtonBase sx={{ 
                width: '100%', height: '300px',backgroundColor:'red',
                // float: left,
                // ml:-9
                // float: left
                }}>
             <Slider imageList={detail.url}/>
              </ButtonBase>
            </Grid>
            <Grid item xs={16} sm container>
              <Grid item xs container direction="column" spacing={0}>
                {/* <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <Text>서울시 동작구 만양로 상도건영아파트</Text>
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  <Text2>{detail.title}우리집sdsdsdssdsdssss</Text2>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  <Text3>{detail.title}내용or후기bvbvbbsxsxsxssxsxs</Text3>
                  </Typography>
                </Grid> */}
               
                {/* <Grid item>
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
                    Remove
                  </Typography>
                </Grid> */}






                  <Like>
                        <p>좋아요</p>
                        <p>생성시간</p>
                  </Like>
              </Grid>

              {/* <Grid container sx={{ color: 'text.primary' }}>
                <Grid>
                  <DeleteSharpIcon />
                </Grid>
              </Grid> */}
              
            
              {/* <Grid item>
                <Typography variant="subtitle1" component="button" sx={{m:1, height:10}}>
                <Button variant="outlined" startIcon={<DeleteIcon />}  onClick={()=>{
                  alert('삭제입니다')
                  deletePost();
                  
                 }}>
                 삭제하기
                </Button>
                </Typography>
              </Grid> */}
          
            </Grid>
           
          </Grid>
          <DetailForm/>
          
        </Paper>
      );

    
}

export default DetailPohto;




