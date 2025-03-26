import React from 'react';
import "./FoodDetails.css";

const FoodDetails = ({item}) => {
    console.log(item)
    const{idCategory,strCategory,strCategoryDescription,strCategoryThumb}=item
    return (
        <div className='food2'>
           <img src={strCategoryThumb} alt="" srcset="" />
           <p>Food menu number:{idCategory}</p>
           <p>Dish Name:{strCategory}</p>
           <p>Dish Details:{strCategoryDescription}</p>
            
        </div>
    );
};

export default FoodDetails;