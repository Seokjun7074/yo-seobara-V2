import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({
    // query: "(min-width: 1024px) and (max-width: 2560px)",
    query: "(min-width: 768px) and (max-width: 2560px)",
  });
  return <>{isDesktop && children}</>;
};
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  return <>{isTablet && children}</>;
};
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return <>{isMobile && children}</>;
};
