import React from "react";
import "../styles/Properties.css";
import PropertyCard from "./ProperyCard";
import { DataContext } from "../context/DataContext";
import { useContext, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import connection from "../API/API";

function Properties() {
  const { properties, getData } = useContext(DataContext);
  useEffect( () => {
    getData()
 console.log(properties)
    })
  console.log(properties);
  
  return (
    <>
      {/* <div div className="container"> */}
        <div className="  d-flex flex-wrap" >
          {/* <div className=""> */}
            {properties &&
              properties.map((property) => (
                <PropertyCard
                  key={property._id}
                  email={property.email}
                  title={property.title}
                  price={property.price}
                  location={property.city}
                  bathrooms={property.bathrooms}
                  bedrooms={property.bedrooms}
                />
              ))}
          </div>
        {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default Properties;
