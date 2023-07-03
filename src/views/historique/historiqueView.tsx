import React from "react";

const HistoriqueView = () => {
  //Rechercher l'id de l'utilisateur dans le localStorage
  const dataLS = localStorage.getItem("nom_de_la_clé");
  // let reservationIds: string[] = [];

  // // faire un appel à la table Réservation, retrouver l'id de la réservation par rapport à l'id utilisateur
  // fetch("http://localhost:3000/reservations") // Remplacez l'URL par l'adresse de votre serveur Back-end
  //   .then((response) => response.json())
  //   .then((dataReserv) => {
  //     console.log(dataReserv);
  //     for (const element of dataReserv) {
  //       if (element.utilisateurId == "649ae774519f697934d8a0a0") {
  //         // remplacer par l'id du local storage
  //         reservationIds.push(element._id);
  //       }
  //     }
  //     // Manipulez les données récupérées ici
  //   })
  //   .catch((error) => {
  //     // Gérez les erreurs de requête ici
  //     console.error(error);
  //   });

  // console.log("ICI ID RESERVATION", reservationIds);

  // //convertit le tableau dans une chaîne de caractères séparé par une virgule
  // //const reservationIdsString = reservationIds.join(",");

  // //faire un appel à la table participants avec l'id de réservation

  // console.log("JE SUIS DU TYPE DE ", typeof reservationIds);

  // for (const element of reservationIds) {
  //   console.log(element);
  // }

  ///ici copie
  let reservationIds: string[] = [];

  fetch("http://localhost:3000/reservations")
    .then((response) => response.json())
    .then((dataReserv) => {
      console.log(dataReserv);
      for (const element of dataReserv) {
        if (element.utilisateurId == "649ae774519f697934d8a0a0") {
          reservationIds.push(element._id);
        }
      }
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

  // let url = "http://localhost:3000/participants/" + element;
  // console.log(url);
  // fetch(url) // Remplacez l'URL par l'adresse de votre serveur Back-end
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("ICI SONT LES REPONSES ATTENDUES", data);
  //     // Manipulez les données récupérées ici
  //   })
  //   .catch((error) => {
  //     // Gérez les erreurs de requête ici
  //     console.error(error);
  //   });

  return (
    <>
      <p>rêver</p>
    </>
  );
};

export default HistoriqueView;

//modification du CSS
//modification de Vieuw, vérifier avant de pusher
