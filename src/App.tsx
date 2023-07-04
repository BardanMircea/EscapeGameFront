import "./App.css";
import Header from "./layouts/HeaderEtFooter/Header";
import ConnexionController from "./layouts/ConnexionPage/ConnexionPageController";
import Footer from "./layouts/HeaderEtFooter/Footer";
import InscriptionPageController from "./layouts/InscriptionPage/InscriptionPageController";
import HomePageController from "./layouts/HomePage/HomePageController";

function App() {
  return (
    <>
      <Header />
      {/* <HomePageController /> */}
      <ConnexionController />
      {/* <InscriptionPageController /> */}
      <Footer />
    </>
  );
}

export default App;
