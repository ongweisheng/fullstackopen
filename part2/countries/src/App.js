import { useState, useEffect } from 'react'
import axios from "axios"

const Countries = ({countries, searchFilter }) => {
  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchFilter.toLowerCase()))
  if (filteredCountries.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )
  } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    return (
      filteredCountries.map(country =>
      <div key={country.name}>
        {country.name.common}
      </div>)
    )
  } else if (filteredCountries.length === 1) {
    const country = filteredCountries[0]
    return (
      <>
        <h2>{country.name.common}</h2>
        <div>capital {country.capital}</div>
        <div>area {country.area}</div>
        {/* <ul> does not work
          {country.languages.map(language => 
          <li key={language.name}>{language.name}</li>)}
        </ul> */}
      </>
    )
  }
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState("")

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data)
      })
  })

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <div>
        find countries
        <input
          value={newFilter}
          onChange={handleFilterChange}
        />
      </div>
      <Countries countries={countries} searchFilter={newFilter} />
    </div>
  )
}

export default App