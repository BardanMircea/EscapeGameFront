import ConnexionPageView from "./ConnexionPageView";
import LoginModel from "../../models/LoginModel";
import { useState } from "react";
import { useAuth } from "../../components/AuthContext";
import { useNavigate } from "react-router-dom";

const ConnexionController = () => {
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");
  const [userExists, setUserExists] = useState(false);
  const [missingRequiredFields, setMissingRequiredFields] = useState(false);
  const { user, login: loginConnexion, logout } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // check if no fields are empty and if the provided passwords match
    if (!email || !mdp) {
      setMissingRequiredFields(true);
      return;
    }

    // build the Login request model
    const login: LoginModel = new LoginModel(email, mdp);

    // set the url and the options needed to do the request
    const url = `http://localhost:3000/login`;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    };

    // send the request to our backend api and store the received response in a variable
    const response = await fetch(url, requestOptions);

    // Check status of responses
    if (response.status === 404) {
      setUserExists(true);
      return;
    } else if (!response.ok) {
      throw new Error("something went wrong");
    }

    // Recuperer le user en format JSON
    const userLogin = await response.json();

    // sauvegarder dans le localStorage
    loginConnexion(userLogin);
    // Rediriger vers la home
    navigate("/");
  };

  return (
    <ConnexionPageView
      handleSubmit={handleSubmit}
      setEmail={setEmail}
      setMdp={setMdp}
      userExists={userExists}
      missingRequiredFields={missingRequiredFields}
    />
  );
};

export default ConnexionController;
