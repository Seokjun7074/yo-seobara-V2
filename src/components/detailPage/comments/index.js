import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import {useEffect, useState}from 'react';
import { CommentBox, Time } from './style';
import moment from 'moment';
import Moment from 'react-moment';
import 'moment/locale/ko';      //한국말 번역

 const CommentList =(id)=> {
  const idNum = id.id

  const [comments,setComments] = useState([
    {
      postId:'1',
      id:'1',
      body:'멋져요김이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이',
      name:'이예찬'
    },
    {
      postId:'1',
      id:'2',
      body:'어딘가요?',
      name:'구구까까'
    },
    {
      postId:'1',
      id:'1',
      body:'멋져요',
      name:'이예찬'
    },{
      postId:'1',
      id:'1',
      body:'멋져요',
      name:'이예찬'
    },{
      postId:'1',
      id:'1',
      body:'멋져요',
      name:'이예찬'
    },{
      postId:'1',
      id:'1',
      body:'멋져요',
      name:'이예찬'
    },
  ])


  useEffect(() => {

    

  
  //   axios.get(`https://jsonplaceholder.typicode.com/comments/${idNum}`)
  //     .then((res) => {
  //       console.log(res.data)
  //       setComments(res.data)
        
        
         
  //     })
  //  .catch(err=> console.log(err))

  


  }, []);
  const nowTime = moment().format('2022-09-12 15:20:03'),  // 서버로부터 받은 작성,또는수정시간
        startTime = new Date(nowTime);

//2022-09-12 15:20:03 형식
// const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
// console.log(nowTime);


//숫자형식
// const nowTime2 = Date.now();
// console.log(nowTime2);



  return (

    
      <List style={{height: 300,  display:'block',
      width:'100%'
      }}>


      
{comments.map((comment,idx)=>(
  <>
<ListItem alignItems="flex-start">
{/* <ListItemAvatar>
<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
</ListItemAvatar> */}
<ListItemText
sx={{ fontSize: 15 }}
primary={comment.name}
secondary={
<React.Fragment>
<Typography
sx={{ display: 'flex',fontSize: 20 }}
component="span"
variant="body2"
color="text.primary"
>
{comment.body}
</Typography>
</React.Fragment>
}
/>
{/* <Time>메인시간{new Date().toLocaleString()}</Time> */}
<Time><Moment fromNow>{startTime}</Moment></Time>
</ListItem>
<Divider variant="inset" component="li" />

</>))}



     
         
       </List>
            
       

  );
}

export default CommentList;








