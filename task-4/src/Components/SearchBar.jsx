import { useState } from "react";

const SearchBar = ({search, setSearch, maxLength, setMaxLength, toggle, setToggle}) => {


    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const maxLengthHandler = (e) => {
        setMaxLength(e.target.value);
    }

    const sortButtonHandler = () => {
            if (toggle == "DESC") {
              setToggle("ASC")
            } else {
              setToggle("DESC")
            }
            console.log(toggle)
    }

    return <>
        <label htmlFor="search">Search</label>
        <input type="text" name="search" onChange={searchHandler} value={search} />
        <label htmlFor="max-length">Max Length</label>
        <input type="number" name="max-length" onChange={maxLengthHandler} value={maxLength} />
        <button onClick={sortButtonHandler}>{toggle =='ASC' ? <>ASC</> : <>DESC</>}</button>
    </>
}

export default SearchBar;