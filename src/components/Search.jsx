import React from "react";

function Search (props) {
    return (
        <div className="col-sm-4">
        <input 
        className="form-control"
        type="text" 
        value={props.searchinput}
        onChange={(event) => props.setSearchInput(event.target.value)}
        placeholder="Search Movie"
        />
        </div>
    )
};

export default Search;