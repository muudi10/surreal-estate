/* eslint-disable react/prop-types */
import React,{useContext} from 'react'
import {DataContext} from "../context/DataContext"

export default function Alert() {
  const {message} = useContext(DataContext)
   
    return (
        <div>
          {message}  
        </div>
    )
}

