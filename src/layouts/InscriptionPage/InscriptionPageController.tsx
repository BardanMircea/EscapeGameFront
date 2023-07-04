import { useState } from "react";
import UtilisateurRequestModel from "../../models/UtilisateurRequestModel";
import { InscriptionPageView } from "./InscriptionPageView";

const InscriptionPageController = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [naissance, setNaissance] = useState("");
  const [mdp, setMdp] = useState("");
  const [confirmationMdp, setConfirmationMdp] = useState("");
  const [mdpMatch, setMdpMatch] = useState(true);
  const [missingRequiredFields, setMissingRequiredFields] = useState(false);
  const [userAlreadyExists, setUserAlreadyExists] = useState(false);
  const [isAddsuccessful, setIsAddsuccessful] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // reinitialise the state for our different error messages
    setIsAddsuccessful(false);
    setUserAlreadyExists(false);
    setMissingRequiredFields(false);
    setMdpMatch(true);

    // check if no fields are empty and if the provided passwords match
    if (!nom || !prenom || !email || !naissance || !mdp || !confirmationMdp) {
      setMissingRequiredFields(true);
      return;
    }
    if (mdp != confirmationMdp) {
      setMdpMatch(false);
      return;
    }

    // build the User request model (which will be sent to the backend inside the request body)
    const utilisateur: UtilisateurRequestModel = new UtilisateurRequestModel(
      nom,
      prenom,
      email,
      mdp,
      naissance
    );

    // set the url and the options needed to do the request
    const url = `http://localhost:3000/utilisateurs`;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(utilisateur),
    };

    // send the request to our backend api and store the received response in a variable
    const response = await fetch(url, requestOptions);

    // check if the backend sent a 409 (email is already in use)
    if (response.status === 409) {
      setUserAlreadyExists(true);
      return;
    } else if (!response.ok) {
      // else, if the received status is not the 200(ok) status, throw a generic error
      throw new Error("something went wrong");
    }

    // else, if everything went well (status received is 200/ok), empty the input fields and display a Success message
    setNom("");
    setPrenom("");
    setNaissance("");
    setEmail("");
    setMdp("");
    setConfirmationMdp("");
    setIsAddsuccessful(true);
  };

  return (
    <InscriptionPageView
      nom={nom}
      setNom={setNom}
      prenom={prenom}
      setPrenom={setPrenom}
      email={email}
      setEmail={setEmail}
      naissance={naissance}
      setNaissance={setNaissance}
      mdp={mdp}
      setMdp={setMdp}
      confirmationMdp={confirmationMdp}
      setConfirmationMdp={setConfirmationMdp}
      isAddSuccessful={isAddsuccessful}
      handleSubmit={handleSubmit}
      mdpMatch={mdpMatch}
      missingRequiredFields={missingRequiredFields}
      userAlreadyExists={userAlreadyExists}
    />
  );
};

export default InscriptionPageController;
