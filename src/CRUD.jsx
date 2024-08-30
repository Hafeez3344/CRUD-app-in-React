
import React, { useState } from 'react'

export default function CRUD() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [address, setAddress] = useState("");
      let[city,setCity] = useState("");
     
    

    function handleNameChange(e){
        setName(e.target.value)
    }

    function handleEmailChange(e){
      setEmail(e.target.value)
    }

    function handleAddressChange(e){
      setAddress(e.target.value)
    }
    function handleCityChange(e){
      setCity(e.target.value)
    }
        function handleSubmit(e){
            e.preventDefault();
            let data = {
                name: name,
                email: email,
                address: address,
                city: city,
              }
              console.log(data);
            
          }
    
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      name='name' 
      placeholder='Enter your name here!' 
      value={name} 
      onChange={(e) => {handleNameChange(e)}} 
      />
      
      <input 
      type = 'text' 
      name='email' 
      placeholder='Enter your email here!' 
      value={email} 
      onChange={handleEmailChange}
      />

      <input 
      type = 'text' 
      name= 'address' 
      placeholder='Enter your address here!' 
      value={address} 
      onChange={handleAddressChange}
      />

      <input 
      type='text' 
      name= 'city' 
      placeholder='Enter your city name here!' 
      value={city} 
      onChange={handleCityChange}
      />
      
      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}
