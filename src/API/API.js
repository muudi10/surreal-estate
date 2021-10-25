import axios from "axios"
require ('dotenv').config()
const API = process.env.APIENDPOINT
const connection = async()=> {
    const request =await axios.get(`${API}/propertylisting/count`)
    const response = await request.json()
    console.log(response)
}