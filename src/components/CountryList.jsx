import React from 'react'
import CountryItem from './CountryItem'

const CountryList = props => {
    return (
        <ul>
            {
                props.name.map(country => {
                    return (
                        <CountryItem country={country.name} key={country.id} />
                    )
                })
            }
        </ul>
    )
}

export default CountryList