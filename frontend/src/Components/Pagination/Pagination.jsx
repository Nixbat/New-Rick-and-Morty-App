import React from 'react'
import "./Pagination.css"
import arrow_next from "../../assets/next.png";
import arrow_previous from "../../assets/previous.png";



const Pagination = ({ prev, next, onPrevious, onNext }) => {

    const handlePrevious = () => {
        onPrevious();
    }

    const HandleNext = () => {
        onNext();
    }


  return (
    <div className='contain-pages'>
        <ul>
            {
                prev ? (
                    <li className='previous-btn'><button onClick={handlePrevious}><img src={arrow_previous} alt="Arrow" />Previous</button></li>
                ) : null
            }

            {
                next ? (
                    <li className='next-btn'><button onClick={HandleNext}>Next <img src={arrow_next} alt="Arrow"/></button></li>
                ) : null
            }                      
        </ul>
    </div>
  )
};

export default Pagination;