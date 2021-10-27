/* eslint-disable react/prop-types */
import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
export const DataContext = createContext();
const urlEndPoint = process.env.REACT_APP_APIENDPOINT;
import hanldeAddProperty from "../API/API";
export const DataContextProvider = (props) => {
  const [message, setMessage] = useState(false);
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

  let data;

  const [properties, setProperties] = useState();
  const getData = async () => {
    const property = await axios.get(urlEndPoint);
    const data = await property.data;
    console.log(data);
    setProperties(data);
  };

  useEffect(() => {});

 

  const value = {
    fields,
    setFields,
    message,
    setMessage,
    handleFieldChange,
    properties,
    getData
  };

  return (
    // eslint-disable-next-line react/prop-types
    <DataContext.Provider initialState={initialState.fields} value={value}>
      {props.children}{" "}
    </DataContext.Provider>
  );
};
