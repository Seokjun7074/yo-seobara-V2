import { ModalWrapper, ModalContainer } from "./style";

function ModalCopy({ modalToggel, setModlaToggle, children }) {
  const closeModal = () => {
    setModlaToggle({ ...modalToggel, open: false });
  };
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
