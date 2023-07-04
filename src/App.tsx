import "./App.css";
import Header from "./layouts/HeaderEtFooter/Header";
import ConnexionController from "./layouts/ConnexionPage/ConnexionPageController";
import Footer from "./layouts/HeaderEtFooter/Footer";
import InscriptionPageController from "./layouts/InscriptionPage/InscriptionPageController";
import HomePageController from "./layouts/HomePage/HomePageController";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SalleDetailsPageController from "./layouts/SalleDetailsPage/SalleDetailsPageController";

function App() {

  return (
    <>
      <Header/>
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" element={<HomePageController />} />
            <Route path="/login" element={<ConnexionView />} />
            <Route path="/signup" element={<InscriptionPageController />} />
            <Route path="/details/:salle_id" element={<SalleDetailsPageController />} />
          </Routes> 
        </Router>
      </div>
      <Footer/>
    </>
  );
}
export default App;