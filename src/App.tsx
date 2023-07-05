//import "./App.css";
import ConnexionController from "./layouts/ConnexionPage/ConnexionPageController";
import InscriptionPageController from "./layouts/InscriptionPage/InscriptionPageController";
import HomePageController from "./layouts/HomePage/HomePageController";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SalleDetailsPageController from "./layouts/SalleDetailsPage/SalleDetailsPageController";
import AuthProvider from "./components/AuthContext";
import Layout from "./components/mainLayout";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <HomePageController />
                </Layout>
              }
            />
            <Route
              path="/login"
              element={
                <Layout>
                  <ConnexionController />
                </Layout>
              }
            />
            <Route
              path="/signup"
              element={
                <Layout>
                  <InscriptionPageController />
                </Layout>
              }
            />
            <Route
              path="/details/:salle_id"
              element={
                <Layout>
                  <SalleDetailsPageController />
                </Layout>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}
export default App;
