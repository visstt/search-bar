import React from 'react'
import './SearchResult.css'

export const SearchResult = ({result}) => {
  return (
    <div className='search-result' onClick={(e)=> alert(`you clicked on ${result.name}, \n email: ${result.email}`)}>{result.name}</div>
  )
}
