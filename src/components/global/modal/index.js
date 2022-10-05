import React, { useState } from "react";
import { ModalWrapper, ModalContainer, ModalButton } from "./style";

function Modal({ btn_title, modalToggel, setModlaToggle, children }) {
  if (modalToggel.open) {
    document.body.style.overflow = "hidden";
  }
  const closeModal = () => {
    setModlaToggle({ ...modalToggel, open: false });
    document.body.style.overflow = "unset";
  };
  // const openModal = () => {
  //   setModlaToggle(true);
  // };
  return (
    <div className="Modal">
      {/* <ModalButton onClick={openModal}>{btn_title}</ModalButton> */}
      <ModalContainer visible={modalToggel.open}>{children}</ModalContainer>
      <ModalWrapper
        visible={modalToggel.open}
        onClick={closeModal}
      ></ModalWrapper>
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
