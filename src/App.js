import MobilePage from "./pages/mobilePage";
import Router from "./router/Router";
import { Desktop, Mobile } from "./style/responsive";

function App() {
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
    console.warn = function no_console() {};
  }
  return (
    <>
      <Mobile>
        <MobilePage />
      </Mobile>
      <Desktop>
        <Router />
      </Desktop>
    </>
  );
}

export default App;
