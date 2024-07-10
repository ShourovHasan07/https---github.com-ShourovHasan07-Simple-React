import { useState } from 'react';
import './countrie.css';

const Countrie = ({ country ,handelVisitedCountries}) => {
  const { name, flags, population, region, area } = country;
  
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  const passWithprams =() => handelVisitedCountries (country);
  
  return (
    <div className='countrie'>
      <h3>Name: {name?.common}</h3>
      <img src={flags?.png} alt={`Flag of ${name?.common}`} />
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Area: {area}</p>
      <button onClick={() => handelVisitedCountries (country)}>Mark Visited</button>
       <br /> 
       <br />
      <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
      {visited ? <p>You've visited this country!</p> : <p>  I want  to visit </p>}
    </div>
  );
};

export default Countrie;
