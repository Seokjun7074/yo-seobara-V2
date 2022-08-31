import ToggleMenu from "../toggleMenu";
import { HeaderMenu, HeaderTitle, HeaderWrapper } from "./style";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>요 서바라</HeaderTitle>
      {/* <HeaderMenu>=</HeaderMenu> */}
      <ToggleMenu></ToggleMenu>
    </HeaderWrapper>
  );
};

export default Header;
