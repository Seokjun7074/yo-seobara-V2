import { useEffect } from "react";
import { ModalWrapper, ModalContainer } from "./style";

function ModalC({ modalToggel, setModlaToggle, children }) {
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
    <div className="ModalC">
      <ModalContainer>{children}</ModalContainer>
      <ModalWrapper onClick={closeModal}></ModalWrapper>
    </div>
  );
}

export default ModalC;

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
