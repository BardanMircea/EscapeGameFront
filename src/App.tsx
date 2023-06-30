
import "./App.css";
import Header from "../components/Header";
import ConnexionView from "./views/connexion/ConnexionView";

import React from "react";
import Footer from "../components/Footer";

function App() {
  return (
    <>

      <Header />
      <ConnexionView />

      {/* <Header /> */}
      <Footer />
    </>
  );
}

export default App;
