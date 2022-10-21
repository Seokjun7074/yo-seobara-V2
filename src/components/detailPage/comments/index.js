//내부css
import {
  CommentBox,
  UserBox,
  Time,
  Comment,
  NoCommentBox,
  Side,
  DeleteBox,
  CommentListWrapper,
} from "./style";

import DeleteIcon from "@mui/icons-material/Delete";
import { getCookie } from "../../../shared/Cookie";
import CreatedAt from "../../global/createdAt";
import { useSelector, useDispatch } from "react-redux";
import { __deleteComment } from "../../../redux/async/asyncComment";
import { deleteComment } from "../../../redux/modules/commentSlice";

const CommentList = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.commentList);

  const memberId = getCookie("memberId"); //로그인한 유저닉네임

  const deleteButton = (commentId) => {
    const data = {
      postId: comments[0]["postId"],
      commentId: commentId,
    };
    dispatch(__deleteComment(data));
  };

  return (
    <>
      {comments && comments.length === 0 ? (
        <NoCommentBox>
          <span>당첨! 첫번째 댓글의 주인공이 되어보세요!</span>
        </NoCommentBox>
      ) : (
        <CommentListWrapper>
          {comments &&
            comments.map((comment) => (
              <CommentBox key={comment.commentId}>
                <UserBox>
                  {comment.nickname}
                  <Time>
                    <CreatedAt time={comment.createdAt} />
                  </Time>
                </UserBox>
                <Comment>{comment.content}</Comment>
                <Side>
                  {comment.memberId == memberId ? (
                    <DeleteBox
                      onClick={() => {
                        deleteButton(comment.commentId);
                        dispatch(deleteComment(comment.commentId));
                      }}
                    >
                      <DeleteIcon
                        fontSize="large"
                        Width="100%"
                        height="50%"
                        display="flex"
                      />
                    </DeleteBox>
                  ) : null}
                </Side>
              </CommentBox>
            ))}
        </CommentListWrapper>
      )}
    </>
  );
};

export default CommentList;
