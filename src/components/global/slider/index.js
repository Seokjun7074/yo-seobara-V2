import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  ButtonContainer,
  ImagePreview,
  ImagePreviewWrapper,
  PreviewContainer,
  SliderWrapper,
} from "./style";

const Slider = ({ imageList }) => {
  const TOTAL_SLIDES = imageList.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    slideRef.current.style.transition = "all 0.3s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES - 1) {
      // setCurrentSlide(0);
      return;
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      // setCurrentSlide(TOTAL_SLIDES - 1);
      return;
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <SliderWrapper>
      <ButtonContainer count={TOTAL_SLIDES} onClick={prevSlide}>
        <FiChevronLeft size="50px" color="gray" />
      </ButtonContainer>
      <ImagePreviewWrapper>
        <PreviewContainer ref={slideRef}>
          {imageList.map((img, idx) => (
            <ImagePreview key={idx}>
              <img
                src={img}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              ></img>
            </ImagePreview>
          ))}
        </PreviewContainer>
      </ImagePreviewWrapper>
      <ButtonContainer count={TOTAL_SLIDES} onClick={nextSlide}>
        <FiChevronRight size="50px" color="gray" />
      </ButtonContainer>
    </SliderWrapper>
  );
};

export default Slider;
