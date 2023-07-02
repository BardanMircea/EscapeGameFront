import "./App.css";
import Header from "./layouts/HeaderEtFooter/Header";
import ConnexionView from "./layouts/ConnexionPage/ConnexionPageView";
import Footer from "./layouts/HeaderEtFooter/Footer";
import InscriptionPageController from "./layouts/InscriptionPage/InscriptionPageController";

function App() {
  return (
    <>

      <Header />
      {/* <ConnexionView /> */}
      <InscriptionPageController/>
      <Footer />
    </>
  );
}

export default App;
