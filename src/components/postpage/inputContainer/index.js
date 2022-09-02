import {
  ImageInputButton,
  InputBox,
  InputContainerWrapper,
  InputText,
  InputTextArea,
  Label,
  LabelBox,
  PhotoBox,
  SubmitButton,
} from "./style";
import useInput from "../../../hooks/useInput";
import { useEffect, useRef, useState } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";
import Slider from "../../global/slider";
const InputContainer = () => {
  const [title, titleHandler] = useInput();
  const [content, contentHandler] = useInput();
  const [imageInput, setImageInput] = useState([]);
  const imageRef = useRef();

  const submitData = {
    title: title,
    content: content,
    images: [],
    location: {
      lat: 37.5614231,
      lng: 127.1911081,
    },
  };
  //   console.log(submitData);

  const addImage = (e) => {
    if (imageInput.length >= 3) {
      alert("사진은 최대 3장까지만 업로드 가능합니다");
      return;
    }
    const selectedImageList = e.target.files;
    const imageURLList = [...imageInput];
    for (let i = 0; i < selectedImageList.length; i++) {
      const imageURL = URL.createObjectURL(selectedImageList[i]);
      imageURLList.push(imageURL);
    }
    setImageInput(imageURLList);
  };

  const imageUpload = () => {
    // 버튼클릭시 input태그에 클릭이벤트를 걸어준다.
    imageRef.current.click();
  };
  //   console.log(imageInput);

  return (
    <>
      <InputContainerWrapper>
        <PhotoBox>
          <Slider imageList={imageInput} />
          <ImageInputButton onClick={imageUpload}>
            <MdAddPhotoAlternate size={"50%"}></MdAddPhotoAlternate>
            <span>사진추가</span>
          </ImageInputButton>
          <input
            type="file"
            multiple="multiple"
            accept="image"
            style={{ display: "none" }}
            ref={imageRef}
            onChange={addImage}
          />
        </PhotoBox>
        <InputBox>
          <LabelBox>
            <Label>제목</Label>
            <InputText
              type="text"
              name="title"
              placeholder="장소를 입력해주세요"
              onChange={titleHandler}
              value={title}
            />
          </LabelBox>
          <LabelBox>
            <Label>내용</Label>
            <InputTextArea
              type="content"
              name="content"
              placeholder="장소에 대한 설명을 입력해주세요."
              onChange={contentHandler}
              value={content}
            />
          </LabelBox>
        </InputBox>
      </InputContainerWrapper>
      <SubmitButton>제출</SubmitButton>
    </>
  );
};

export default InputContainer;
