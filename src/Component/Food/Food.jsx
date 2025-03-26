import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodDetails from '../FooDetails/FoodDetails';
import '../FooDetails/FoodDetails.css';

const Food = () => {
    const food=useLoaderData();
    console.log(food.categories)
    
    return (
        <div>
            <h2>Food option :{food.categories.length}</h2>
           <div className='foodD'>
           {
                food.categories.map(item=><FoodDetails item={item}></FoodDetails>)
            }
           </div>
            
            
        </div>
    );
};

export default Food;