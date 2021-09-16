import React, { useState } from 'react'
import axios from 'axios'
import Results from './Results/Results'
import './Search.css'


const Search = () => {
  const [address, setAddress] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [error, setError] = useState('')

  const searchHouses = async () => {
    !address ? setError('Please enter a valid address and try again.') : setError('')
    if (searchResults) setSearchResults([])

    try {
      const results = await axios.get(`http://localhost:3000/api/${address}`, 
        { headers: { 'Content-Type': 'application/json' } 
      })
      !results.data.length 
      ? setError('No results found. Please try a different address.') 
      : setSearchResults(results.data)
      
    } catch (err) {
      console.error(err)
    }
  }

  const handleKeyPress = (e) => (e.which === 13) ? searchHouses() : null

  const parseSearchResults = () => {
    console.log('parseSearchResults', searchResults)
    return searchResults.map(home => <Results key={home.mls} {...home} />)
  }

  return (
    <> 
      <div className="search-container">
        <h4 className="search-title">Address:</h4>
        <input 
          className="search-bar" 
          placeholder="e.g. 'downey st' or '574 Natoma St'" 
          role="searchBar"
          onKeyPress={(e) => handleKeyPress(e)} 
          onChange={(e) => setAddress(e.target.value)} />
        <button 
          className="search-button" 
          type="submit"
          name="search"
          onClick={searchHouses}
        >Search</button>
      </div>
      {searchResults.length > 0
      ? parseSearchResults()
      : <div className="error">{error}</div>}
    </>
  )
}

export default Search
