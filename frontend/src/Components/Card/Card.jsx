import React, { useEffect, useState } from 'react'
import "./Card.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getFavorites } from "../../redux/actions"
import heart_white from "../../assets/fav-white.png"
import heart_red from "../../assets/fav-red.png"



const Card = ({ id, name, image, species, gender, onClose }) => {

  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  // Function to add the character to favorites (localStorage)
  const addFavorite = (character) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(character);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    
    alert("Added to favorites");   
  };

  // Function to remove the character from favorites (localStorage)
  const removeFavoriteHandler = (id) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter((fav) => fav.id !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    dispatch(getFavorites());
    alert("Removed from favorites");
  };

  // Function to toggle favorites
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavoriteHandler(id);
    } else {
      setIsFav(true);
      addFavorite({ id, name, species, gender, image });
    }
  };

  // Effect to check if the character is in favorites when loading
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);



  return (
    <div className='card-contain'>

      <div className="fav-close">
        {isFav ? (
          <button className='red-heart' onClick={handleFavorite}><img src={heart_red} alt="" /></button>
        ) : (
          <button className='white-heart' onClick={handleFavorite}><img src={heart_white} alt="" /></button>        
        )}

        <button className='card-close' onClick={onClose}>X</button>
      </div>

      <Link to={`/detail/${id}`}>
        <div className="detail">
          <img className='card-img' src={image} alt="Image" />
        </div>
      </Link>

      <h2 className='card-name'>{name}</h2>      

      <div className="specie-gender">
        <p>{species}</p>
        <p>{gender}</p>
      </div>    
    </div>
  );
};

export default Card;






















