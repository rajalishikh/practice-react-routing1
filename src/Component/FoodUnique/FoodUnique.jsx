import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodUnique = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <div>
            <h2>Here is our food Unique Details</h2>
            
        </div>
    );
};

export default FoodUnique;