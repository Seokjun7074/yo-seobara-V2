import MobilePage from "./pages/mobilePage";
import Router from "./router/Router";
import { Desktop, Mobile } from "./style/responsive";

function App() {
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
