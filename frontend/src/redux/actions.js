



// import axios from 'axios';

// export const ADD_FAVORITE = 'ADD_FAVORITE';
// export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
// export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL';
// export const CLEAN_DETAIL = 'CLEAN_DETAIL';
// export const GET_FAVORITES = 'GET_FAVORITES';

// const URL_BASE = 'https://rickandmortyapi.com/api/character';

// // Acción para eliminar un favorito
// export const removeFavorite = (id) => {
//   return { type: REMOVE_FAVORITE, payload: id };
// };

// // Acción para obtener los detalles de un personaje
// export const getCharacterDetail = (id) => {
//   return async function (dispatch) {
//     try {
//       const response = await axios.get(`${URL_BASE}/${id}`);
//       if (response.status === 200) {
//         dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
//       } else {
//         console.error('Error fetching character detail', response);
//       }
//     } catch (error) {
//       console.error('Error fetching character detail:', error);
//     }
//   };
// };

// // Acción para obtener los favoritos (de localStorage)
// export const getFavorites = () => {
//     return (dispatch) => {
//       const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//       // Aquí simplemente se obtiene y envía a Redux todos los favoritos, sin filtrarlos
//       dispatch({ type: GET_FAVORITES, payload: favorites });
//     };
//   };

// // Acción para limpiar los detalles de un personaje
// export const cleanDetail = () => {
//   return { type: CLEAN_DETAIL };
// };



import axios from "axios"
export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"
export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL"
export const CLEAN_DETAIL = "CLEAN_DETAIL"
export const GET_FAVORITES = "GET_FAVORITES"

const URL_BASE = "https://rickandmortyapi.com/api/character";

export const removeFavorite = (id) => {
    return { type: REMOVE_FAVORITE, payload: id }; 
};

export const getCharacterDetail = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`${URL_BASE}/${id}`);
            if (response.status === 200) {
                dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
            } else {
                console.error("Error fetching character detail", response);
            }
        } catch (error) {
            console.error("Error fetching character detail:", error);
        }
    };
};

export const getFavorites = () => {
    return (dispatch) => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        dispatch({ type: GET_FAVORITES, payload: favorites });
    };
};

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
};

