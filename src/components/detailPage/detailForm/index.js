//내부 css
import { Form, FormBox, FormButton } from "./style";
import { useDispatch, useSelector } from "react-redux";

//컴포넌트
import { __createComment } from "../../../redux/async/asyncComment";
import useInput from "../../../hooks/useInput";
import isLogin from "../../../shared/isLogin";
import { useEffect } from "react";
import { useState } from "react";

const DetailForm = (id) => {
  const idNum = id.id;
  const dispatch = useDispatch();
  const [value, handler, setValue] = useInput();
  const [checkLogin, setCheckLogin] = useState(false);

  useEffect(() => {
    setCheckLogin(isLogin());
  }, []);

  const onButtonClick = async () => {
    // console.log(value);
    const comment = {
      idNum: idNum,
      data: value,
    };
    if (value === "" || value == undefined) {
      alert("내용을 입력헤주세요");
      // return;
    } else if (value.length > 40) {
      alert("40글자까지만 적어주세요");
    } else {
      dispatch(__createComment(comment));
    }
    setValue("");
  };

  return (
    <FormBox>
      {checkLogin ? (
        <Form
          onChange={handler}
          value={value}
          type="text"
          placeholder={"댓글을 작성해주세요."}
        />
      ) : (
        <Form
          onChange={handler}
          value={value}
          type="text"
          placeholder={"로그인 후 댓글을 남겨주세요"}
          disabled
        />
      )}
      {checkLogin ? (
        <FormButton onClick={onButtonClick}>작성</FormButton>
      ) : null}
    </FormBox>
  );
};

export default DetailForm;
