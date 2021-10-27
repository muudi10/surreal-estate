import axios from 'axios';
const urlEndPoint = process.env.REACT_APP_APIENDPOINT
const getData = async(setProperties) => {
    const properies = await axios.get(urlEndPoint)
     const data = await properies.data

setProperties('hellow')

}

export default getData