import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
    const { id } = useParams(); // Gets the id of the URL
    const [character, setCharacter] = useState({});

    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert('There are no characters with that ID');
                }
            })
            .catch((err) => {
                window.alert('There are no characters with that ID');
            });
        return () => setCharacter({}); 
    }, [id]); 

    return (
        <main>
          <div className="detail-container">
            <div className="card-container">
              {character.name ? (
                <>
                  <div className='content-image'>
                    <img src={character.image} alt={character.name} className="detail-img" />
                  </div>                    
                    <div className="detail-info">
                        <h1>{character.name}</h1>                        
                        <div className="detail-text">
                            <p><strong>Species:</strong> {character.species}</p>
                            <p><strong>Gender:</strong> {character.gender}</p>
                            <p><strong>Status:</strong> {character.status}</p>
                            <p><strong>Origin:</strong> {character.origin?.name}</p>
                            <p><strong>Location:</strong> {character.location?.name}</p>
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading character data...</p>
            )}
            </div>
        </div>
        </main>
    );
};

export default Detail;
