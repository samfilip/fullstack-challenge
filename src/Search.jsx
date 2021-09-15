import { useState } from 'react'
import axios from 'axios'
import Results from './components/Results'
import './Search.css'

const Search = () => {
  const [address, setAddress] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [error, setError] = useState('')

  const searchHouses = async () => {
    !address ? setError('Please enter a valid address!') : setError('')
    if (searchResults) setSearchResults([])

    try {
      const results = await axios.get(`http://localhost:3000/api/${address}`, 
        { headers: { 'Content-Type': 'application/json' } 
      })
      setSearchResults(results.data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleKeyPress = (e) => (e.which === 13) ? searchHouses() : null

  return (
    <> 
      <div className="search-container">
        <input className="search-bar" placeholder="Enter Address" onKeyPress={(e) => handleKeyPress(e)} onChange={(e) => setAddress(e.target.value)} />
        <button className="search-button" type="submit" onClick={searchHouses}>Search</button>
      </div>
      {searchResults.length > 0 
      ? <Results {...searchResults[0]} /> 
      : error}
    </>
  )
}

export default Search
