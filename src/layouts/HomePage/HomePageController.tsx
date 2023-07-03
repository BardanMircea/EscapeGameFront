import { useEffect, useState } from "react";
import SalleModel from "../../models/SalleModel";
import HomePageView from "./HomePageView";

const HomePageController = () => {

    const [salles, setSalles] = useState<SalleModel[]>([])

    // async method to call our backend API (the salle_controller's get method) 
    const getSalles = async () => {
        const url = `http://localhost:3000/salles`;
        const sallesArrayResponse = await fetch(url)

        if(!sallesArrayResponse.ok){
            throw new Error("Something went wrong")
        }

        // if the response's status is 200, transform it into json format and set the state of our salles to it's value 
        const sallesJson = await sallesArrayResponse.json()
        setSalles(sallesJson)
    }

    // useEffect to call the getSalles method at every rerender
    useEffect(() => {
        getSalles()
    }, [])

    return(
        <HomePageView salles={salles}/>
    )
}

export default HomePageController;