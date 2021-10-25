import React, { useState } from "react";
import "../styles/Addproperty.css";
import axios from "axios";
const urlEndPoint = process.env.REACT_APP_APIENDPOINT
import Alert from "./Alert"
function AddProperty() {
  const [message, SetMessage] = useState(false)
  const initialState = {
    fields: {
      title: "",
      type: "Flat",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "Manchester",
      email: "",
    
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const hanldeAddProperty = async(e) => {
    e.preventDefault();

try {
     const response = await axios.post(urlEndPoint,{
      title: fields.title,
      type: fields.type,
      bedrooms: fields.bedrooms,
      bathrooms: fields.bathrooms,
      price: fields.price,
      city: fields.city,
      email: fields.email,

    })
    const data = await response
    console.log(data.data)
    await SetMessage(`Form has been submited sucessfully`)
} catch (error) {

  SetMessage(`Failed to submit form`)
} 

  };
  return (
    <div className="Addproperty">
     {message && < Alert message ={message} /> }
      <form>
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
          <button className="button" onClick={hanldeAddProperty} type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default AddProperty;
