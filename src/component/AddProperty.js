import React, { useState, useEffect ,useContext } from "react";
import {DataContext} from "../context/DataContext"
import "../styles/Addproperty.css";
import axios from "axios";
const urlEndPoint = process.env.REACT_APP_APIENDPOINT
import Alert from "./Alert";
import hanldeAddProperty from "../API/API";
// eslint-disable-next-line react/prop-types
function AddProperty({fetpro}) {
   const {message,handleFieldChange, setMessage, properties, getData,fields} = useContext(DataContext)
    
   const handleSubmit =(e)=>{
     e.preventDefault()
     return hanldeAddProperty(fields, setMessage)
     console.log(`fields`);
   }

  return (

    <>
    <div className="mainclass flex"> 
    <div className="Addproperty">
     {message && < Alert message ={message} /> }
      <form className="form">
        <fieldset className="input-text-fields">
          <label htmlFor="title">
            Title:
            <input
              type="text"
              value={fields.title}
              className="input-title"
              name="title"
              id="title"
              onChange={handleFieldChange}
            />
          </label>
          <label htmlFor="type">
            Property Type
            <select
              name="type"
              id="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="flat">Flat</option>
              <option value="house">House</option>
              <option value="terrece">Terrece</option>
              <option value="detached">Detached </option>
              <option value="mansion">Mansion</option>
            </select>
          </label>
          <label htmlFor="bedrooms">
            Bedrooms
            <select
              name="bedrooms"
              id="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            >
              <option value="">Please choose number of rooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6+">6+</option>
            </select>
          </label>
          <label htmlFor="bedrooms">
            Bathrooms
            <select
              name="bathrooms"
              id="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            >
              <option value="">Please choose number of bathrooms</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6+">6+</option>
            </select>
          </label>
          <label htmlFor="price">
            Price:
            <input
              type="number"
              value={fields.price}
              id="price"
              name="price"
              className="input-price"
              onChange={handleFieldChange}
            />
          </label>
          <label htmlFor="city">
            City
            <select
              name="city"
              id="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>

          <label htmlFor="email">
            Email:
            <input
              type="email"
              htmlFor="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
          <button className="button" type="submit" onClick={fetpro} >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
    <div className="sidebar">
      somettect
    </div>
    </div>
     </>
  );
}

export default AddProperty;
