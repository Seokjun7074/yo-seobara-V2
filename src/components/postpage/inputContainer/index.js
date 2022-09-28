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
  TextArea,
} from "./style";
import useInput from "../../../hooks/useInput";
import { useEffect, useRef, useState } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";
import Slider from "../../global/slider";
import { useDispatch, useSelector } from "react-redux";
import { __createPost, __editPost } from "../../../redux/async/asyncPost";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InputContainer = ({ pick, pickedAddress, editData, postId }) => {
  const [title, titleHandler, setTitle] = useInput();
  const [content, contentHandler, setContent] = useInput();
  const [imageInput, setImageInput] = useState([]); // 미리보기용 이미지 리스트
  const [imageFile, setImageFile] = useState([]); // 서버 전송용 이미지 데이터
  const imageRef = useRef();
  const formData = new FormData();
  const IMAGE_LIMIT = 3;

  const postStatus = useSelector((state) => state.post); // 작성상태
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitData = {
    title: title,
    content: content,
    // images: [],
    location: {
      lat: pick.lat,
      lng: pick.lng,
    },
    address: pickedAddress,
  };
  console.log("imageFile:", imageFile);
  // console.log("imageInput:", imageInput);
  console.log(editData.imageUrls);
  // 수정페이지 모드
  useEffect(() => {
    if (editData.isEditting) {
      setTitle(editData.title);
      setContent(editData.content);
      setImageInput(editData.imageUrls); // 미리보기용 데이터
      editData.imageUrls.forEach((e) => {
        urlToObject(e);
      });
    }
  }, [editData.isEditting]);

  // URL to File 전환 함수
  const urlToObject = async (image) => {
    const response = await fetch(image);
    const blob = await response.blob();
    const fileName = image.split("-").pop();
    const type = fileName.split(".").pop();
    const file = new File([blob], fileName, { type: `image/${type}` });
    setImageFile((prev) => [...prev, file]);
  };

  const addImage = (e) => {
    const selectedImageList = e.target.files; // 선택한 이미지들
    if (selectedImageList.length + imageInput.length > IMAGE_LIMIT) {
      alert("사진은 최대 3장까지만 업로드 가능합니다");
      return;
    }
    const imageURLList = [...imageInput]; // 미리보기용 사진
    const imageFileList = [...imageFile]; // 서버로 보낼 사진
    for (let i = 0; i < selectedImageList.length; i++) {
      const imageURL = URL.createObjectURL(selectedImageList[i]);
      imageURLList.push(imageURL);
      imageFileList.push(selectedImageList[i]);
    }
    setImageInput(imageURLList);
    setImageFile(imageFileList);
  };

  const onSubmit = () => {
    if (title === "" || content === "") {
      alert("내용을 입력해주세요.");
      return;
    } else if (imageFile.length === 0) {
      alert("사진을 추가해주세요.");
      return;
    } else if (
      submitData.location.lat === undefined ||
      submitData.location.lng === undefined
    ) {
      alert("지도에 위치를 표시해주세요.");
    } else {
      formData.append(
        "postRequestDto",
        new Blob([JSON.stringify(submitData)], { type: "application/json" })
      );
      imageFile.forEach((e, idx) => {
        formData.append(`images`, e);
      });
      dispatch(__createPost(formData));
    }
  };

  const editSubmit = async () => {
    formData.append(
      "postRequestDto",
      new Blob([JSON.stringify(submitData)], { type: "application/json" })
    );
    imageFile.forEach((e, idx) => {
      formData.append(`images`, e);
    });
    // console.log(formData);
    for (let key of formData.keys()) {
      console.log(key);
    }
    for (let value of formData.values()) {
      console.log(value);
    }

    dispatch(__editPost({ formData: formData, postId: postId }));
    // const res = await apis.editPost(formData, postId);
    // console.log(res);
  };

  useEffect(() => {
    // 게시물 작성 성공했을 때만 페이지 이동
    if (postStatus.createPost) {
      navigate("/map");
    }
  }, [postStatus.createPost]);

  const imageUpload = () => {
    if (imageInput.length >= IMAGE_LIMIT) {
      alert("사진은 최대 3장까지만 업로드 가능합니다");
      return;
    }
    // 버튼클릭시 input태그에 클릭이벤트를 걸어준다.
    imageRef.current.click();
  };

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
            <Label>주소</Label>
            <TextArea>
              <span>{pickedAddress}</span>
            </TextArea>
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
      <SubmitButton onClick={editData.isEditting ? editSubmit : onSubmit}>
        {editData.isEditting ? "수정하기" : "제출하기"}
      </SubmitButton>
    </>
  );
};

export default InputContainer;
