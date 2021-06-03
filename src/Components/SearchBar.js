import React from 'react';

function SearchBar(props) {
    return (
        <>
            <input type="text" className="searchBox" placeholder="Search user" onChange={(e) => props.searchUser(e.target.value)}/>
        </>
    )
}

export default SearchBar;