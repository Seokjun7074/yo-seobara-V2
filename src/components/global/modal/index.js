import React, { useState } from "react";
import { ModalWrapper, ModalContainer, ModalButton } from "./style";
import axios from "axios";


function Modal({ btn_title, id, children }) {
  const [modalToggel, setModlaToggle] = useState(false);
  

  const closeModal = () => {
    setModlaToggle(false);
  };
  const openModal = () => {

    setModlaToggle(true);
  
  };
  return (
    <div className="Modal">
      <ModalButton onClick={openModal}>{btn_title}</ModalButton>
      <ModalContainer visible={modalToggel}>{children}</ModalContainer>
      <ModalWrapper visible={modalToggel} onClick={closeModal}></ModalWrapper>
    </div>
  );
}

export default Modal;

// [사용방법]

// <div>
//   <Modal btn_title="모달버튼이름">
//     여기에 원하는 컴포넌트 넣어서 사용
//   </Modal>
// </div>;
