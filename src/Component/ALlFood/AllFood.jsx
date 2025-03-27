import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllFoodD from '../AllFoodDetails/AllFoodD';

const AllFood = () => {
    const loader=useLoaderData()
    console.log(loader)
    
    return (
        <div>
            <h2>Here is All Food</h2>
            {
                loader.meals.map(item=><AllFoodD item={item}></AllFoodD>)
            }
            
        </div>
    );
};

export default AllFood;