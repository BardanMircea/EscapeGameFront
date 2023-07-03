import "./App.css";
import Header from "./layouts/HeaderEtFooter/Header";
import ConnexionView from "./layouts/ConnexionPage/ConnexionPageView";
import Footer from "./layouts/HeaderEtFooter/Footer";
import InscriptionPageController from "./layouts/InscriptionPage/InscriptionPageController";
import HomePageController from "./layouts/HomePage/HomePageController";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        </Routes> 
      </Router>
         </div>
      <Footer/>
    </>
  );
}
export default App;
