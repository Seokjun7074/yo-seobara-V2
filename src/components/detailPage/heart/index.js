import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { HeartCount, HeartWrapper } from "./style";

const Heart = ({ myHeart, likePost, heartCount }) => {
  return (
    <HeartWrapper
      onClick={() => {
        likePost(myHeart);
      }}
    >
      {myHeart ? (
        <AiFillHeart size={"25px"} color={"tomato"} />
      ) : (
        <AiOutlineHeart size={"25px"} color={"tomato"} />
      )}
      <HeartCount>+{heartCount}</HeartCount>
    </HeartWrapper>
  );
};

export default Heart;
