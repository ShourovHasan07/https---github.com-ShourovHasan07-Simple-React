import { useEffect, useState } from "react";
import Countrie from "./Countrie";
import "./shourov.css";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries,setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCountries(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);


 const handelVisitedCountries = country =>{
  console.log ("add to visited country ");
 const newVisitedCountries = [...visitedCountries,country];
 setVisitedCountries (newVisitedCountries);
 }
  return (
    <div className="cntry-container">
      <h3> Total Countries: {countries.length}</h3>

      <div>
        <h5>Visited Country:{visitedCountries.length} </h5>
              <ul>
               { visitedCountries.map(country => <li key={country.cca3}>
                    {country.name.common}
                </li>)}
              </ul>
      </div>


      <br />


      {countries.map(country => (
        <Countrie 
          key={country.cca3}
          handelVisitedCountries ={handelVisitedCountries}
          country={country}
        />
      ))}
    </div>
  );
}
// live link : wakeful-top.surge.sh
export default Countries;
