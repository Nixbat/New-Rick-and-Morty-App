import React from 'react'
import "./Cards.css"
import Card from '../Card/Card'

const Cards = ({ characters, onClose }) => {
  return (
    <div className='cards-container'>
      {
        characters.map((character, index) => {
          return (
            <div key={index}>
              <Card
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                onClose={() => onClose(character.id)}              
              />
            </div>
          )
        })
      }        
    </div>
  )
};

export default Cards;