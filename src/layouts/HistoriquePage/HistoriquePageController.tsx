import React from "react";

const HistoriqueView = () => {
  ////////Rechercher l'id de l'utilisateur dans le localStorage/////////////////
  //   const dataLS = localStorage.getItem("nom_de_la_clé");

  let reservationIds: string[] = [];

  fetch("http://localhost:3000/reservations")
    .then((response) => response.json())

    .then((dataReserv) => {
      console.log("LES RESERVATIONS SONT", dataReserv);
      for (const element of dataReserv) {
        if (element.utilisateurId == "649ae774519f697934d8a0a0") {
          reservationIds.push(element._id);
        }
      }
      console.log("RESERVATION IDS", reservationIds);
      return Promise.all(
        reservationIds.map((id) =>
          fetch(`http://localhost:3000/participants/${id}`)
        )
      );
    })
    .then((responseArr) =>
      Promise.all(responseArr.map((response) => response.json()))
    )
    .then((dataArr) => {
      console.log("LES PARTICIPANTS DE LA RESERVATION SONT", dataArr);
      // Manipulez les données récupérées ici
    })
    .catch((error) => {
      // Gérez les erreurs de requête ici
      console.error(error);
    });
  ////fin copie

  return (
    <>
      <p>rêver</p>
    </>
  );
};

export default HistoriqueView;

//modification du CSS
//modification de Vieuw, vérifier avant de pusher
