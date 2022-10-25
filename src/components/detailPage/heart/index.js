import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { HeartCount, HeartWrapper } from "./style";

const Heart = ({ likePost, nowData }) => {
  return (
    <HeartWrapper
      onClick={() => {
        likePost(nowData.myHeart);
      }}
    >
      {nowData.myHeart ? (
        <AiFillHeart size={"25px"} color={"tomato"} />
      ) : (
        <AiOutlineHeart size={"25px"} color={"tomato"} />
      )}
      <HeartCount>+{nowData.heart}</HeartCount>
    </HeartWrapper>
  );
};

Heart.defaultProps = {
  nowData: { myHeart: false, heart: 0 },
};

export default Heart;
