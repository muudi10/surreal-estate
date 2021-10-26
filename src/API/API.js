import axios from 'axios';
const urlEndPoint = process.env.REACT_APP_APIENDPOINT
console.log(urlEndPoint)
const hanldeAddProperty = async(fields,setMessage ) => {
 

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
    await setMessage(`Form has been submited sucessfully`)
} catch (error) {

  setMessage(`Failed to submit form`)
} 
    console.log(`function trigered`, fields)
    

  };

  export default hanldeAddProperty