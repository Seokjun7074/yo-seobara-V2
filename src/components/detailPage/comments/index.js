import * as React from "react";
import List from "@mui/material/List";
import { useEffect, useState } from "react";
import {CommentBox, UserBox, Time, Comment,
        Text, NoCommentBox, Side,DeleteBox} from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import { getCookie } from "../../../shared/Cookie";
import CreatedAt from "../../global/createdAt";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import Button from "@mui/material/Button";
const CommentList = () => {
  const comments = useSelector((state) => state.comment.commentList);
  const user = getCookie("nickname"); //로그인한 유저닉네임

  const memberId = getCookie("memberId"); //로그인한 유저닉네임
//  console.log(typeof(memberId) );
//  console.log(typeof(comments[0].memberId));
  return (
    <>
      {comments && comments.length === 0 ? (
        <NoCommentBox>
          <Text>당첨! 첫번째 댓글의 주인공이 되어보세요!</Text>
        </NoCommentBox>
      ) : (
        <List style={{ height: 300, width: "100%" }}>
          {comments &&
            comments.map((comment) => (
              <CommentBox key={comment.commentId}>
                <UserBox>
                  {comment.nickname}
                </UserBox>

                <Comment>
                 {comment.content}
                </Comment>

                <Side>
                  <Time>
                    <CreatedAt time={comment.createdAt} />
                  </Time>
                  

                  {comment.memberId == memberId ? (
                    <DeleteBox
                    onClick={() => {
                      axios
                    .delete(`${process.env.REACT_APP_API_URL}/api/posts/${comment.postId}/comments/${comment.commentId}`,
                          {
                            headers: {
                              Authorization: `Bearer ${getCookie("accessToken")}`,
                            },
                          }
                        )
                        .then((res) => {
                          // console.log("성공");
                          alert('삭제되었습니다')
                          window.location.reload();
                        })
                        .catch((err) => console.log(err));
                    }}
                    
                    >
                    
                    <DeleteIcon fontSize="large" Width='100%' height= '50%' display='flex'
                    
                    />
                    </DeleteBox>
                  ) : null}
                </Side>
              </CommentBox>
            ))}
        </List>
      )}
    </>
  );
};

export default CommentList;

//  <Button variant="outlined" startIcon={

// <DeleteIcon fontSize="large" Width='100%' height= '50%' display='flex'
//              onClick={async()=>{
//             await axios
//             .delete(`${process.env.REACT_APP_API_URL}
//             /api/posts/${comment.postId}/comments/${comment.commentId}`,
//             {
//               headers: {
//                 Authorization: `Bearer ${getCookie('accessToken')}`,
//               },
//             },
//             )
//             .then((res) => {
//               console.log('성공');
//               alert('삭제하고있습니다')

//             })
//             .catch((err) => console.log(err));

//           }}/>
//         }>
//         삭제
//       </Button>


