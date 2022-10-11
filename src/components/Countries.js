import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const Countries = () => {
  const [data, setData] = useState([])
  const [rangeValue, setRangeValue] = useState('250')
  const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  const [selected, setSelected] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setData(res.data))
  }, [])
  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((continent) => (
          <li>
            <input
              type="radio"
              name="continent"
              id={continent}
              checked={continent === selected}
              onChange={(e) => setSelected(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selected && (
        <button onClick={() => setSelected('')}>Annuler la recherche</button>
      )}

      <ul>
        {data
          .filter((country) => country.continents[0].includes(selected))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  )
}

export default Countries
