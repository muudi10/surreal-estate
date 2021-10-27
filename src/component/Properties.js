import React from "react";
import "../styles/Properties.css";
import PropertyCard from "./ProperyCard";
import { DataContext } from "../context/DataContext";
import { useContext, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import getData from "../API/getData";

function Properties() {
  const {properties,getData} =useContext(DataContext)
   console.log(properties);


   useEffect(()=>{
getData()
   },[])
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
