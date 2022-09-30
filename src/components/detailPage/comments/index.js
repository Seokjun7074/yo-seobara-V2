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
import { CommentBox,UserBox, Time, Comment,Text } from './style';
import { getCookie } from '../../../shared/Cookie';

import CreatedAt from "../../global/createdAt";



//라이브러리
import moment from 'moment';
import Moment from 'react-moment';
import 'moment/locale/ko';      //한국말 번역

import {useSelector,useDispatch} from 'react-redux';
import {loadList} from '../../../redux/modules/commentSlice';

 const CommentList =()=> {
  
 
const comments = useSelector((state) => state.comment.commentList);
 





  return (

    <List style={{height: 300,  
    width:'100%'
    }}>

        {comments && comments.length === 0 ? (
     <CommentBox >
     <UserBox>
       닉네임
       
       </UserBox>          
     <Comment>
       댓글이 없어요
       </Comment>
     <Time>
    시간
       </Time>
     </CommentBox>
        ):(<>
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
        </>
        )}


             
  </List>
      
                          
                    

  );
}


export default CommentList;



