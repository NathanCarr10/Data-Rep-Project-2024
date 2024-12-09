import React, {useState} from "react";

function SearchBar(){
    const [query, setQuery] = useState("");
    //query stores value of search input
    //setQuery is the function to update the value of query

    const handleSearch = () => {
        //handleSearch is used when the user clicks "Search button or presses Enter"
        if (query.trim()) {
            //querty.trim checks if query is empty
            window.open(`https://www.google.com/search?q=${query}`, "blank");
            //opens a new tab with google search of query
        }
    };

    const handleKeyDown = (e) => {
        //this function uses handleSearch if Enter is pressed
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div style= {{display: "flex", gap: "0.5rem"}}>
            <input
            type = "text"
            placeholder="Search on Google.."
            value={query}
            onChange={(e) => setQuery(e.target.value)} //Updates query when user types in input field
            onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Search</button> {/* Button to handle Search function */}
        </div>
    );
}

export default SearchBar;