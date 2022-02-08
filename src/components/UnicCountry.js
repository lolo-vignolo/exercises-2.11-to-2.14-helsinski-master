import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Weather from './Weather';
const REACT_APP = process.env.REACT_APP_API_KEY

const UnicCountry = ({selectedCountry, languages}) => {

    const [weather , setWeather] = useState([]);
    const {capital} = selectedCountry;

    useEffect(()=>{
        const weatherUrl =`http://api.weatherstack.com/current?access_key=${REACT_APP}&query=${capital}`
        axios.get(weatherUrl)
        .then((response)=>setWeather(response))
        .catch((err)=>console.log(err))
      },[])

      
      if(weather.length===0){
          return null
      }else{

        const {data} = weather
        const {current} = data

          return (
              <>
              <h2>{selectedCountry.name}</h2>
              <br />
              <p>{selectedCountry.capital}</p>
              <p>{`Population ${selectedCountry.population}`}</p>
              <br />
              <h3>Languages</h3>
                  {languages.map((lang)=>{
                      return(
                          <ul key ={lang.name}>
                              <li>{lang.name}</li>
                          </ul>
      
                      )
                      
                  })}
              <img 
              src={selectedCountry.flag}
              alt="Flag country"
              style={{width:"200px", height:"auto"}}
               />
      
                <Weather  current= {current} capital ={capital} />
      
          </>
          );
      }
    
};

export default UnicCountry;