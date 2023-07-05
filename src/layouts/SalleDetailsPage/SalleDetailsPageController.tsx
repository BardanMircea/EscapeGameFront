import {useParams} from "react-router-dom"
import SalleModel from "../../models/SalleModel"
import JourModel from "../../models/JourModel"
import { useEffect, useState } from "react"
import SalleDetailsPageView from "./SalleDetailsPageView"

export const SalleDetailsPageController = () => {
    // initialize a week variable of type JourModel[]
    const semaine = [new JourModel("Lundi"), new JourModel("Mardi"), new JourModel("Mercredi"), new JourModel("Jeudi"), new JourModel("Vendredi"), new JourModel("Samedi"), new JourModel("Dimanche")]

    // state for salle and horaire
    const [salle,  setSalle] = useState<SalleModel>()
    const [horaire, setHoraire] = useState(semaine)
    
    // get the salle_id passed as a parameter from the home page when clicking a salle button
    const {salle_id} = useParams()

    // function to call our back end for the given salle, using the salle_id
    const fetchSalle = async() => {
        const response = await fetch(`http://localhost:3000/salles/${salle_id}`)
        if(!response.ok) {
            throw new Error("Erreur imprevue survenue")
        }
        const responseJson = await response.json() 
        const salle = new SalleModel(responseJson._id, responseJson.nom, responseJson.description, responseJson.capacite, responseJson.img)
        setSalle(salle)
    }   

    // function to call our back end for all the reservations in which this room was booked
    const getSalleHoraire = async() => {
        const reservationsResponse= await fetch(`http://localhost:3000/reservations/salle/${salle_id}`)

        if(!reservationsResponse.ok) {
            throw new Error("Erreur imprevue survenue")
        }

        const reservations = await reservationsResponse.json()

        // for every day of the week, if the Salle is booked for that day, mark the morning or the afternoon as unavailable, accordingly
        semaine.forEach(jour => {
            reservations.forEach((reservation : any) => {
                if(jour.nom === reservation.jour){
                    if(reservation.creneau === "matin") jour.setDisponibleMatin(false)
                    else jour.setDisponibleAprem(false)
                } 
            })
        })

        // set our horaire to match the updated week schedule
        setHoraire(semaine)
    }

    // useEffect to update the Room and the room Schedule
    useEffect(() => {-
        fetchSalle()
        getSalleHoraire()
    }, [salle_id])

    return(
        <SalleDetailsPageView salle={salle} horaire={horaire}/>
    )
}
export default SalleDetailsPageController