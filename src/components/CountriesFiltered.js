import React, { useState } from 'react';
import UnicCountry from './UnicCountry';

const CountriesFiltered = ({countriesSearched }) => {

    const [show, setShow] = useState(false)
    const [ selectElement , setSelectElement] = useState("")
    
    const handleChange = (numericCode) => {
     
        setShow(!show)
        setSelectElement(numericCode)
       
    }

    if (countriesSearched.length > 10){
        return(
            <h3>Too many matches, specify another filter</h3>
        )

    }else if(countriesSearched.length > 1 && countriesSearched.length < 10) {
        
        return (
            <>
          { countriesSearched.map((c , i)=>{

                return(
                    <>
                    <ul key={i}>
                        <li>{ c.name} </li>
                    </ul>
                    
                    <button
                        onClick={()=>handleChange(c.numericCode)}
                        > see more ...
                    </button>
                    {selectElement === c.numericCode?
                     <UnicCountry selectedCountry = {c} languages = {c.languages} />
                     : ""  }
                   </>
                )
                 })
            }
            </>
        )
        
    }else if(countriesSearched.length === 1 ){
            const selectedCountry = countriesSearched[0]
            const {languages} = selectedCountry

            return(
               <UnicCountry selectedCountry={selectedCountry} languages={languages} />
            )

    }else{
        return null
    }


};

export default CountriesFiltered;