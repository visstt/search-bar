import React from 'react'
import './SearchResultesList.css'
import { SearchResult } from './SearchResult'
export const SearchResultesList = ({results}) => {
  return (
    <div className='results-list'>
      {results.map((result, id) =>{
          return <SearchResult key={id} result={result}/>
        })
      }
    </div>
  )
}
