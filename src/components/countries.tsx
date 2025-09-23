import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Country {
  name: string;
  alpha2Code: string;
}

const CountrySelect: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  // Fetch countries from REST Countries API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countryList = response.data.map((country:any) => ({
          name: country.name.common,
          alpha2Code: country.cca2,
        }));
        setCountries(countryList);
      } catch (error) {
        console.error('Erro ao carregar os países', error);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="country-select">
      <label htmlFor="country">Selecione o seu país</label>
      <select
        id="country"
        value={selectedCountry}
        onChange={handleChange}
      >
        <option value="">Selecione um país</option>
        {countries.map((country) => (
          <option key={country.alpha2Code} value={country.alpha2Code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelect;
