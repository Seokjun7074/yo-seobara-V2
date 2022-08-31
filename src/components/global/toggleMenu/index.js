import { useState } from "react";
import { ToggleMenuContainer, ToggleMenuWrapper } from "./style";

const ToggleMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(true);
  };
  const toggleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={toggleOpen}>토글버튼</button>
      <ToggleMenuWrapper
        onClick={toggleClose}
        isOpen={isOpen}
      ></ToggleMenuWrapper>
      <ToggleMenuContainer isOpen={isOpen}>
        {props.children}
      </ToggleMenuContainer>
    </>
  );
};
export default ToggleMenu;
