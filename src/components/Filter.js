import React from 'react';
import CountriesFiltered from './CountriesFiltered';

const Filter = ({listCountries, country}) => {
  
    let countriesSearched = []
    if(country.length > 0){
        countriesSearched = listCountries.filter((c)=>
            c.name.toString().toLowerCase().includes(country.toLowerCase()))      
    }else{ countriesSearched = listCountries}


    return(
        <CountriesFiltered 
            countriesSearched = {countriesSearched}
           
        /> 
    )
    
}


export default Filter;

    
 