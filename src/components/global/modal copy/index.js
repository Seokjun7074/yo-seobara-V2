import { useEffect } from "react";
import { ModalWrapper, ModalContainer } from "./style";

function ModalCopy({ modalToggel, setModlaToggle, children }) {
  const closeModal = () => {
    setModlaToggle({ ...modalToggel, open: false });
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  });
  return (
    <div className="ModalCopy">
      <ModalContainer>{children}</ModalContainer>
      <ModalWrapper onClick={closeModal}></ModalWrapper>
    </div>
  );
}

export default ModalCopy;

// 사용법
// const [modalToggel, setModlaToggle] = useState({
//   open: false,
//   loading: false,
//   data: {},
// });

// {
//   modalToggel.open && (
//     <ModalCopy modalToggel={modalToggel} setModlaToggle={setModlaToggle}>
//       <Detail item={modalToggel.data} />
//     </ModalCopy>
//   );
// }
