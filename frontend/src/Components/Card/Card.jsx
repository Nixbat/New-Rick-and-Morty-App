import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom';

const Card = ({ id, name, image, species, gender, onClose }) => {
  return (
    <div className='card-contain'>
        <button className='card-close' onClick={onClose}>X</button>      

        <Link to={`/detail/${id}`}>
          <div className="detail">
            <img className='card-img' src={image} alt="image" />
          </div>
        </Link>
        
          <h2 className='card-name'>{name}</h2>              

        <div className="specie-gender">
          <p>{species}</p>
          <p>{gender}</p>
        </div>             
    </div>
  )
};

export default Card;