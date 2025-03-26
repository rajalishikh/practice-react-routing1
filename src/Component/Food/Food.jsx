import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Food = () => {
    const food=useLoaderData();
    console.log(food.categories)
    
    return (
        <div>
            <h2>Food option :{food.categories.length}</h2>
            
            
        </div>
    );
};

export default Food;