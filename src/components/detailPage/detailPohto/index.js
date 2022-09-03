import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import {Img,Text,Text2, Text3} from "./style"
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

// import {useParams} from 'react-router-dom'

const DetailPohto = () => {

// const{id} = useParams();
// console.log(id)



      return (
        <Paper
          sx={{
            p: 2,
            maxWidth: '100%',
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
        <Grid container spacing={2}>

            <Grid item>
              <ButtonBase sx={{ width: '100%', height: '300px' }}>
                <Img alt="complex" src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <Text>노들역 벤치</Text>
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                  <Text2>산책코스로 아주 좋아요</Text2>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  <Text3>내용</Text3>
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
                <Typography variant="subtitle1" component="div">
                <DeleteSharpIcon sx={{ fontSize: 40 }}
                 onClick={()=>{
                  alert('삭제입니다')
                 }}
                />
                <p>삭제</p>
                </Typography>
              </Grid>
          
            </Grid>
           
          </Grid>
              
          
        </Paper>
      );

    
}

export default DetailPohto;




