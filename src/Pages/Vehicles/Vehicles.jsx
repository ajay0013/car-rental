import React, { useEffect, useState } from "react";
import { TextField, Autocomplete } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Vehicles.css";

import VehicleList from "../../Components/VehicleList/VehicleList";

import end from "../../Assets/the-end.png";

export default function Vehicles(carData) {
    const [carLoading, setCarLoading] = useState(false);
    const [carError, setCarError] = useState();
    const [allCars, setAllCars] = useState([]);
    const [age, setAge] = React.useState("");
    const [price, setPrice] = React.useState("");
    
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const handleChange1 = (event) => {
        setPrice(event.target.value);
    };


  useEffect(() => {
    const fetchCars = async () => {
      const headers = {
        "X-RapidAPI-Key": "d484e7dbdfmsh4f4d37d25f8b4d4p18c009jsnd8a4083ee2e3",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
      };

      setCarLoading(true);

      try {
        const response = await fetch(
          "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?min_comb_mpg=1&limit=26",
          { headers: headers }
        );
        const cars = await response.json();
        setAllCars(cars);
        console.log(cars);
      } catch (error) {
        setCarError(error);
      } finally {
        setCarLoading(false);
      }
    };

    fetchCars();
  }, []);

  createCarCards(allCars);

  if (carLoading) {
    return <div>Loading...</div>;
  }

  if (carError) {
    return <div>Error -&gt; {carError}. Please reeload.</div>;
  }

  return (
    <div className="allvehicles">
      <div className="avcontent">
        <div className="headings">
          <p1>Car Catalogue</p1>
          <p2>Explore cars you might like</p2>
        </div>

        <div className="search-filters">
          <div className="search">
            <div className="company">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={manufacturers}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="Company" />
                )}
              />
            </div>
            <div className="model">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={manufacturers}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField {...params} label="Model" />
                )}
              />
            </div>
          </div>

          <div className="filters">
            <div className="fyear">
              <Box sx={{ width: 100 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Year</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    {aggge.map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div className="fprice">
            <Box sx={{ width: 100 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Price</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    label="Price per day"
                    onChange={handleChange1}
                  >
                    {priceee.map((priceee) => (
                      <MenuItem key={priceee} value={priceee}>
                        {priceee}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        </div>
        <div className="carsShow">
          <div className="carsContent">{allCars.map(createCarCards)}</div>
        </div>

        <div className="the-end">
            <img src={end} alt="end of vehicle list"/>
            <p1>No more cars available</p1>
            <p2>Try changing your filters, adjusting your dates, or exploring other options</p2>
        </div>
      </div>
    </div>
  );
}

function createCarCards(data) {
  return (
    <VehicleList
      city_mpg={data.city_mpg}
      class={data.class}
      combination_mpg={data.combination_mpg}
      cylinders={data.cylinders}
      displacement={data.displacement}
      drive={data.drive}
      fuel_type={data.fuel_type}
      highway_mpg={data.highway_mpg}
      make={data.make}
      model={data.model}
      transmission={data.transmission}
      year={data.year}
    />
  );
}

const manufacturers = [
  "Acura",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Porsche",
  "Ram",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

const aggge = [
  "1993",
  "1994",
  "1995",
  "1996",
  "1997",
  "1998",
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
];

const priceee = [
    "$40-60",
    "$60-80",
    "$80-100",
    "$100-150",
    "$150+",
];
