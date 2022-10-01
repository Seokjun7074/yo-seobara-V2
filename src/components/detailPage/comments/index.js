import * as React from 'react';
import List from '@mui/material/List';
import {useEffect, useState}from 'react';
import { CommentBox,UserBox, Time, Comment,Text,NoCommentBox } from './style';


import CreatedAt from "../../global/createdAt";

import {useSelector,useDispatch} from 'react-redux';

 const CommentList =()=> {
  
 
const comments = useSelector((state) => state.comment.commentList);
 

// useEffect(()=>{
// render();
// },[comments])



  return (

    
    <>
    
        {comments && comments.length === 0 ? (
     <NoCommentBox >
      <Text>
        당첨! 첫번째 댓글의 주인공이 되어보세요!
      </Text>
   
     </NoCommentBox>

        ):(

          <List style={{height: 300,  
            width:'100%'
            }}>
           {comments && comments.map((comment)=>(


        <CommentBox key={comment.commentId}>
        <UserBox>
            닉네임:{comment.nickname}
          </UserBox>     

        <Comment>
          댓글내용:{comment.content}
          </Comment>

        <Time>
          <CreatedAt time={comment.createdAt} />
          </Time>

        </CommentBox>

        ))}
        </List>
        )}


             
  </>
      
                          
                    

  );
}


export default CommentList;



