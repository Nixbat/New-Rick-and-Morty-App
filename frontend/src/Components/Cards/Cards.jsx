import React, { useEffect } from 'react'
import "./Cards.css"
import Card from '../Card/Card'
import { useDispatch } from 'react-redux';
import { getFavorites } from '../../redux/actions';


const Cards = ({ characters, onClose }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);


  return (
    <div className='cards-container'>
      {
        characters.map((character, index) => {
          return (
            <div key={index}>
              <Card
                id={character.id}
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



