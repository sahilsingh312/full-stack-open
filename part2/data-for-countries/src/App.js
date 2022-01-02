import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryInfo from "./components/CountryInfo";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleInputChange = (e) => {
    setCountry(e.target.value);

    const filteredCountries = countries.filter((countryName) => {
      return countryName.name.common
        .toLowerCase()
        .includes(country.toLowerCase());
    });

    setCountries(filteredCountries);
  };

  const showCountry = (countryName) => {
    setCountryInfo(countryName);
  };

  return (
    <div>
      <form>
        <div>
          find countries <input value={country} onChange={handleInputChange} />
        </div>
      </form>
      {countries.length < 11 ? (
        <div>
          {countries.map((country) => (
            <p key={country.ccN3}>
              {country.name.common}{" "}
              <button onClick={() => showCountry(country)}>show</button>
            </p>
          ))}
        </div>
      ) : (
        <p>Too many matches, specify another filter</p>
      )}
      {countries.length === 1 ? (
        <CountryInfo countryName={countries[0]} />
      ) : (
        <div></div>
      )}
      {(Object.keys(countryInfo).length === 0 &&
        countryInfo.constructor === Object) ||
      countries.length === 1 ? (
        <div></div>
      ) : (
        <CountryInfo countryName={countryInfo} />
      )}
    </div>
  );
}

export default App;
