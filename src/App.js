
import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input';
import axios from 'axios';
import Filter from './components/Filter';

// http://api.weatherstack.com/current
//     ? access_key = YOUR_ACCESS_KEY
//     & query = New York



function App() {

  const [country , setCountry ] = useState ("")

  const [listCountries , setListcountries] = useState ([])

  
  
  
  
 

  useEffect(()=>{
    const url = "https://restcountries.com/v2/all"
    axios.get(url)
    .then((response)=>{
      setListcountries(response.data);
     
    })
    .catch((err)=> {console.log(err)})
  }, []);




  const handleInput = (e) =>{
    setCountry(e.target.value)
   
  } 

 if (listCountries.length === 0){
   return null} else{
    return (
      <>
        <header>
          <h1>Countries sercher!</h1>
        </header>
        <section>
          <label><strong>find a country: </strong></label>
              <Input
                onChange = {handleInput}
                value = {country}
                placeholder= "Write here"
              />
           <div style={{marginLeft:"30px"}}>
              <Filter listCountries = {listCountries} country = {country} />  
           </div>
        </section>
      </>
  );

   } 


}

export default App;
