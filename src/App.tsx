import "./App.css";
import Header from "./layouts/HeaderEtFooter/Header";
import ConnexionView from "./layouts/ConnexionPage/ConnexionPageView";
import Footer from "./layouts/HeaderEtFooter/Footer";
import InscriptionPageController from "./layouts/InscriptionPage/InscriptionPageController";
import HomePageController from "./layouts/HomePage/HomePageController";

function App() {
  return (
    <>
      <Header />
      <HomePageController />
      {/* <ConnexionView /> */}
      {/* <InscriptionPageController/> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
