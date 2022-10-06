import {
  ImageInputButton,
  InputBox,
  InputContainerWrapper,
  InputText,
  InputTextArea,
  Label,
  LabelBox,
  LoadingButton,
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
  const [changedImage, setChangedImage] = useState({
    copyData: [], //원본 데이터랑 비교할 복사본
    deleteImageOrders: ["ㄴ"], // 바뀐 부분의 인덱스
  }); // 수정할 이미지의
  const imageRef = useRef();
  const formData = new FormData();
  const IMAGE_LIMIT = 3;
  const IMAGE_SIZE_LIMIT = 10 * (1024 * 1024);
  const createPost = useSelector((state) => state.post.createPost); // 작성상태
  const loading = useSelector((state) => state.post.loading); // 전송상태
  console.log(loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitData = {
    title: title,
    content: content,
    location: {
      lat: pick.lat,
      lng: pick.lng,
    },
    address: pickedAddress,
    deleteImageOrders: changedImage.deleteImageOrders,
  };
  // 수정페이지 모드
  useEffect(() => {
    if (editData.isEditting) {
      setTitle(editData.title);
      setContent(editData.content);
      setImageInput(editData.imageUrls); // 미리보기용 데이터
      setChangedImage({
        ...changedImage,
        copyData: [...editData.imageUrls],
      });
    }
  }, [editData.isEditting]);

  const addImage = (e) => {
    const selectedImageList = e.target.files; // 선택한 이미지들
    if (selectedImageList.length + imageInput.length > IMAGE_LIMIT) {
      alert("사진은 최대 3장까지만 업로드 가능합니다");
      return;
    }
    const imageURLList = [...imageInput]; // 미리보기용 사진
    const imageFileList = [...imageFile]; // 서버로 보낼 사진
    for (let i = 0; i < selectedImageList.length; i++) {
      if (selectedImageList[i].size > IMAGE_SIZE_LIMIT) {
        alert("10MB 이상 이미지는 업로드가 불가능 합니다.");
      } else {
        const imageURL = URL.createObjectURL(selectedImageList[i]);
        imageURLList.push(imageURL);
        imageFileList.push(selectedImageList[i]);
      }
    }
    setImageInput(imageURLList);
    setImageFile(imageFileList);
  };

  const compareEditImage = () => {
    const restArr = changedImage.copyData.filter(
      (x) => !imageInput.includes(x)
    );
    const idx = [];
    restArr.forEach((e) => {
      idx.push(changedImage.copyData.indexOf(e));
    });
    submitData.deleteImageOrders = idx;
  };

  const onSubmit = () => {
    if (title === "" || content === "") {
      alert("내용을 입력해주세요.");
      return;
    } else if (imageInput.length === 0) {
      // 이미지 미리보기가 없는 경우
      alert("사진을 추가해주세요.");
      return;
    } else if (
      submitData.location.lat === undefined ||
      submitData.location.lng === undefined
    ) {
      alert("지도에 위치를 표시해주세요.");
    } else {
      compareEditImage();
      formData.append(
        "postRequestDto",
        new Blob([JSON.stringify(submitData)], { type: "application/json" })
      );
      if (editData.isEditting) {
        imageFile.forEach((e, idx) => {
          formData.append(`newImages`, e);
        });
      } else {
        imageFile.forEach((e, idx) => {
          formData.append(`images`, e);
        });
      }

      dispatch(
        editData.isEditting
          ? __editPost({ formData: formData, postId: postId })
          : __createPost(formData)
      )
        .unwrap()
        .then(() => {
          navigate("/");
        })
        .catch((e) => {
          alert("작성 실패");
        });
    }
  };

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
          <Slider
            imageList={imageInput}
            setImageInput={setImageInput}
            imageFile={imageFile}
            setImageFile={setImageFile}
            isEdit={true}
            changedImage={changedImage}
            setChangedImage={setChangedImage}
          />
          <ImageInputButton onClick={imageUpload}>
            <MdAddPhotoAlternate size={"50%"}></MdAddPhotoAlternate>
            <span>사진추가</span>
          </ImageInputButton>
          <input
            type="file"
            multiple="multiple"
            accept="image/gif, image/jpeg, image/png"
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
      {loading ? (
        <LoadingButton>게시물 등록중..</LoadingButton>
      ) : (
        <SubmitButton onClick={onSubmit}>
          {editData.isEditting ? "수정하기" : "제출하기"}
        </SubmitButton>
      )}
    </>
  );
};

export default InputContainer;
