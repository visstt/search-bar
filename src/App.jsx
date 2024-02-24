import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { SearchResultesList } from './components/SearchResultesList'

function App() {
  const [results, setResults] = useState([])

  return (
    <div className="App">
      <div className='search-bar-container'>
        <SearchBar setResults={setResults}/>
        <SearchResultesList results={results} />
      </div>
    </div>

  )
}

export default App
