import React, { useEffect, useState } from 'react';
import "./Home.css";
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';


const Home = () => {

    const [defaultCharacters, setDefaultCharacters] = useState([]);  // All default characters
    const [searchedCharacters, setSearchedCharacters] = useState([]); // Characters searched in search or randomly
    const [info, setInfo] = useState({}); // Pagination
    const baseUrl = "https://rickandmortyapi.com/api/character";  // All characters

    // Function to get characters from a specific URL
    const fetchCharacters = async (url) => {
        await fetch(url)
           .then((response) => response.json())
           .then((data) => {
              setDefaultCharacters(data.results);
              setInfo(data.info);
           })
           .catch((error) => console.error("Error fetching characters:", error));
    };

    // Initial character load
    useEffect(() => {
        fetchCharacters(baseUrl);
    }, []);

    // Function to handle searching for characters by id
    const onSearch = async (id) => {
        const numericId = parseInt(id, 10);

        if (isNaN(numericId)) {
            return alert("Please enter a valid ID (only numbers)");
        }

        if (searchedCharacters.some((char) => char.id === numericId)) {
            return alert("Repeated character");
        }

        const response = await fetch(`${baseUrl}/${numericId}`);
        const data = await response.json();

        if (data.name) {
            setSearchedCharacters((oldChars) => [...oldChars, data]);
        } else {
            alert("There are no characters with that ID (range 1 to 826)");
        }
    };

    // Function to get random characters
    const getRandomCharacter = async () => {
        const randomId = Math.floor(Math.random() * 826) +1;

        const response = await fetch(`${baseUrl}/${randomId}`);
        const data = await response.json();

        if (data.name) {
            setSearchedCharacters((oldChars) => [...oldChars, data]);
        } else {
            alert("Failed to obtain a random character");
        }
    };

    // Functions to manage pagination
    const onPrevious = () => {
        if (info.prev) {
            fetchCharacters(info.prev);
        }
    };

    const onNext = () => {
        if (info.next) {
            fetchCharacters(info.next);
        }
    };

    // Functions to close the cards
    const onCloseDefault = (id) => {
        setDefaultCharacters(defaultCharacters.filter((character) => character.id !== id));
    };

    const onCloseSearched = (id) => {
        setSearchedCharacters(searchedCharacters.filter((character) => character.id !== id));
    };

     
    return (
        <div>           
            <SearchBar onSearch={onSearch} getRandomCharacter={getRandomCharacter} />

            {
                searchedCharacters.length > 0 && (
                    <div>
                        <h2>Searched Characters</h2>
                        <Cards characters={searchedCharacters} onClose={onCloseSearched} />
                    </div>
                )}

                <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
                <Cards characters={defaultCharacters} onClose={onCloseDefault} />
                <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        </div>
    )   
};

export default Home;













