import React, { useState } from 'react'
import './css/App.css'
import CountryList from './components/CountryList'

function App() {
  const listCountries = [
    {id: 0, name: "Ukraine"},
    {id: 1, name: "France"},
    {id: 2, name: "Germany"},
    {id: 3, name: "USA"}
  ]

  const [searchRequest, setSearchRequest] = useState('')

  const filteredCountries = listCountries.filter(country => country.name.toLowerCase().includes(searchRequest.toLowerCase()))

  const inputOnChangeHandler = e => {
    setSearchRequest(e.target.value)
  }

  return (
    <div className="App">

      <h1>Countries</h1>
      <input onChange={inputOnChangeHandler} type="text" placeholder="Enter Country" />

      <CountryList abc={filteredCountries} />

    </div>
  )
}

export default App;
