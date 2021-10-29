import React, { useState } from 'react'
import CountryList from './CountryList'

const Autocomplete = props => {
    const [searchText, setSearchText] = useState('')

    const filteredData = props.name.filter(country => country.name.toLowerCase().includes(searchText.toLowerCase()))

    const handleInputChange = e => {
        setSearchText(e.target.value)
    }

    return (
        <div className="autocomplete">
            <input onChange={handleInputChange} type="text" placeholder="Enter search " />
            <CountryList name={filteredData} />
        </div>
    )
}

export default Autocomplete