import React from 'react'
import "./Pagination.css"


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
                    <li><button onClick={handlePrevious}>Previous</button></li>
                ) : null
            }

            {
                next ? (
                    <li><button onClick={HandleNext}>Next</button></li>
                ) : null
            }                      
        </ul>
    </div>
  )
};

export default Pagination;