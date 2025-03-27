import React from 'react';

const AllFoodD = ({item}) => {
    const{idMeal,strArea,strInstructions,strMealThumb}=item
    return (
        <div>
            <img src={strMealThumb} alt="" srcset="" />
            <p>Here is Id: {idMeal}</p>
            <p>Area Of Food :"{strArea}</p>
            <p>Cooking Details:{strInstructions}</p>
            
            
        </div>
    );
};

export default AllFoodD;