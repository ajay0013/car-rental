import React, { useEffect, useState } from "react";
import "./Vehicles.css";

import VehicleList from "../../Components/VehicleList/VehicleList";


// fetchCars().then(data => {
//     Vehicles(data);
//     createCarCards(data);
// });





export default function Vehicles(carData) {

    const[carLoading, setCarLoading] = useState(false);
    const[carError, setCarError] = useState();
    const[allCars, setAllCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {

            const headers = {
                'X-RapidAPI-Key': 'd484e7dbdfmsh4f4d37d25f8b4d4p18c009jsnd8a4083ee2e3',
                'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
            }

            setCarLoading(true);

            try{
                const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers });
                const cars = await response.json();
                setAllCars(cars);
            } catch (error) {
                setCarError(error);
            } finally{
                setCarLoading(false);
            }
        };
        
        fetchCars();
    }, []);

    createCarCards(allCars);

    if(carLoading){
        return <div>Loading...</div>
    }
    
    if(carError){
        return <div>Error -&gt;{' '}{carError}. Please reeload.</div>
    }

    return(

        <div className="carsShow">

            <div className="carsContent">
                {allCars.map(createCarCards)}
            </div>
        </div>
    )
}



function createCarCards(data) {
    return (
      <VehicleList

      />
    );
  }












