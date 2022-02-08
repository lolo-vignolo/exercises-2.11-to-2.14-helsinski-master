import React from 'react';

const Weather = ({current, capital}) => {
    return (
        <>

                <h3> Weather in {capital}</h3>
              <p><strong>temperature:</strong>{current.temperature}</p>
              <img src={current.weather_icons} alt="weather icon" />
              <p><strong>wind:</strong>{current.wind_degree}</p>
      



            
        </>
    );
};

export default Weather;