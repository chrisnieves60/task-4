import React from 'react';
import { useState, useEffect } from 'react'
import Movies from './Components/Movies';
import SearchBar from './Components/SearchBar';
import {movieData} from './utils/movies';


function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [maxLength, setMaxLength] = useState('');
  const [toggle, setToggle] = useState('DESC'); 
  
  useEffect(() => {
    setMovies(movieData.filter(movie => {
      return (movie.title.toUpperCase().includes(search.toUpperCase())) &&
         ([NaN,0].includes(parseInt(maxLength,10)) || parseInt(maxLength,10) >= movie.length)
     }).sort(({length: a}, {length: b}) => {
     if(toggle=='ASC'){
      return a-b
     }
     if(toggle=='DESC'){
      return b-a
     }
    }))

  }, [search, maxLength, toggle]);


  return (
    <>
    
      {/* Header Bar for Searching */}
      <SearchBar
        search={search} 
        setSearch={setSearch} 
        maxLength={maxLength} 
        setMaxLength={setMaxLength}
        toggle={toggle} 
        setToggle={setToggle}
      />
      {/* Output the Movies */}
      <Movies movies={movies} />
    </>
  )
}

export default App