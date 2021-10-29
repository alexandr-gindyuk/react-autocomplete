import React from 'react'
import './css/App.css'
import Autocomplete from './components/Autocomplete'

function App() {
  const countries = [
    {id: 0, name: "Ukraine"},
    {id: 1, name: "France"},
    {id: 2, name: "Germany"},
    {id: 3, name: "USA"}
  ]

  const cars = [
    {id: 0, name: "Tesla"},
    {id: 1, name: "BMW"},
    {id: 2, name: "Audi"},
    {id: 3, name: "Volkswagen"}
  ]

  return (
    <div className="App">

      <Autocomplete name={countries} />
      <Autocomplete name={cars} />

    </div>
  )
}

export default App;
