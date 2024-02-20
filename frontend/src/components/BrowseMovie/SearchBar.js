import React from "react";
import { useState } from "react";

function SearchBar({onSearch}) {

    return (
        <div class="input-group">
        <input
            type="search" 
            class="form-control rounded" 
            placeholder="Search" 
            aria-label="Search" 
            aria-describedby="search-addon" 
            onChange = {(e) => onSearch(e.target.value)}
        />
        <button
            type="button" 
            class="btn btn-outline-primary" 
            data-mdb-ripple-init>search
        </button>
        </div>
    );
}

export default SearchBar;