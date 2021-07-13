import React, { useState } from "react"
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary () {
    let [keyword, setKeyword] = useState ("");
    let [results, setResults] = useState (null);
    let [photos, setPhotos] = useState (null);
    
    function handleResponse(response) {
    //  console.log(response.data[0]);  
     setResults(response.data[0])
    }
    function handlePexelsResponse(response){
        setPhotos(response.data.photos)

    }
    function search (event) { 
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
        
        let pexelsApiKey="563492ad6f91700001000001e31d0aedddf247d8a96aa09d1def8427";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
        axios.get(pexelsApiUrl,{ headers: {"Authorization" : `Bearer 
        ${pexelsApiKey}`},}).then(handlePexelsResponse);
    }


    function handleKeywordChange (event)
    {
        setKeyword (event.target.value);
    }
    return (
        <div className="Dictionary">
            <section className="Title"> 
             <strong> Dictionary APP 📔 </strong>
             </section>
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
           
            <Results results={results} />
            <Photos photos={photos} />
        </div>
    )
}