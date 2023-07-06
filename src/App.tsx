//import "./App.css";
import ConnexionController from "./layouts/ConnexionPage/ConnexionPageController";
import InscriptionPageController from "./layouts/InscriptionPage/InscriptionPageController";
import HomePageController from "./layouts/HomePage/HomePageController";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SalleDetailsPageController from "./layouts/SalleDetailsPage/SalleDetailsPageController";
import AuthProvider from "./components/AuthContext";
import Layout from "./components/mainLayout";

import ReservationPageController from "./layouts/ReservationPage/ReservationPageController";
import HistoriquePageController from "./layouts/HistoriquePage/HistoriquePageController";
import AdminPageController from "./layouts/AdminPage/AdminPageController";

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
            <Route

              path="/reservation/:salle_id/:salle_nom/:salle_capacite/:salle_img/:jour/:creneau"
              element={
                <Layout>
                  <ReservationPageController />
                </Layout>
              }
              />
              <Route
              path="/history"
              element={
                <Layout>
                  <HistoriquePageController />

                </Layout>
              }
            />
            <Route
              path="/admin"
              element={
                <Layout>
                  <AdminPageController />
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
