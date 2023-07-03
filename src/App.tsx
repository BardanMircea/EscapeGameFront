import "./App.css";
import Header from "./layouts/HeaderEtFooter/Header";
import ConnexionView from "./layouts/ConnexionPage/ConnexionPageView";
import Footer from "./layouts/HeaderEtFooter/Footer";
import InscriptionPageController from "./layouts/InscriptionPage/InscriptionPageController";
import HomePageController from "./layouts/HomePage/HomePageController";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<HomePageController />} />
        <Route path="/login" element={<ConnexionView />} />
        <Route path="/signup" element={<InscriptionPageController />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
