import { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [address, setAddress] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('')

  const searchHouses = async () => {
    !address ? setError('Please enter a valid address!') : setError('');
    console.log('address: ', address, error)

    const headers = {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8; application/json'
    }

    try {
      const results = await axios.get(`http://localhost:3000/api/${address}`, { headers: headers })
      console.log(results.data);
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div>
      <input placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
      <button type="submit" onClick={searchHouses}>Search</button>
      {searchResults ? searchResults : error}
    </div>
  )
};

export default Search;