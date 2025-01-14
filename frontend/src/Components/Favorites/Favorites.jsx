import React, { useEffect, useState } from 'react'
import "./Favorites.css"
import { useDispatch, useSelector } from 'react-redux'
import { getFavorites } from '../../redux/actions';
import Card from '../Card/Card';

export const Favorites = () => {

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);
  const [filteredFavorites, setFilteredFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.length === 0 && storedFavorites.length > 0) {
      dispatch(getFavorites());
    } else {
      setFilteredFavorites(favorites);
      setLoading(false);
    }
  }, [dispatch, favorites]);

  const handleFilter = (event) => {
    const filterGender = event.target.value;
    if (filterGender === 'All') {
      setFilteredFavorites(favorites);
    } else {
      const filtered = favorites.filter((fav) => fav.gender === filterGender);
      setFilteredFavorites(filtered);
    }
  };

  if (loading) {
    return <p>Loading favorites...</p>;
  }


  return (
    <div className='fav-container'>
      <div className="background-fav"></div>
      <div className='filter'>
        <h3 className='filter-by'>Filter by:</h3>
        <select onChange={handleFilter} className='select-opt'>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>

      <div className='favorites-list'>
        {filteredFavorites.length > 0 ? (
          filteredFavorites.map(({ id, name, species, gender, image }) => (
            <Card key={id} id={id} name={name} species={species} gender={gender} image={image} />
          ))
        ) : (
          <h2 className='no-fav'>No favorites yet!</h2>
        )}
      </div>
    </div>
  );
};

export default Favorites;