import React from 'react';
import { Link } from 'react-router-dom';
import "./Allfood.css";

const AllFoodD = ({item}) => {
    const{idMeal,strArea,strInstructions,strMealThumb}=item
    return (
        <div className='line'>
            <img width={400} src={strMealThumb} alt="" srcset="" />
            <p>Here is Id: {idMeal}</p>
            <p>Area Of Food :"{strArea}</p>
            <p>Cooking Details:{strInstructions}</p>
            <Link to={`/Unique/${idMeal}`}>Unique Details</Link>
            
            
        </div>
    );
};

export default AllFoodD;