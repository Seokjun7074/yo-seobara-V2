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

 const CommentList =(id)=> {
  const idNum = id.id

  const [comments,setComments] = useState([
    {
      postId:'1',
      id:'1',
      body:'멋져요',
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



  return (

    
      <List style={{maxHeight: 300, overflow: 'auto', display:'block'}}>
       {comments.map((comment,idx)=>(
        <>
 <ListItem alignItems="flex-start">
 <ListItemAvatar>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
 </ListItemAvatar>
<ListItemText
sx={{ fontSize: 15 }}
primary={comment.name}
secondary={
 <React.Fragment>
   <Typography
     sx={{ display: 'inline',fontSize: 20 }}
     component="span"
     variant="body2"
     color="text.primary"
   >
    {comment.body}
   </Typography>
 </React.Fragment>
}
/>
</ListItem>
<Divider variant="inset" component="li" />

</>))}

         {/* <ListItem alignItems="flex-start">
            <ListItemAvatar>
               <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
        <ListItemText
          primary={Comment.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               {Comment.body}
              </Typography>
              {Comment.body}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" /> */}
         
      </List>
            
       

  );
}

export default CommentList;








