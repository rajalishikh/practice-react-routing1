import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OneAllFood = () => {
    const data =useLoaderData()
    console.log("Data BYe Id",data.meals)
    return (
        <div>
            <h2>Here is food Details Bye Id</h2>
            {
                data.meals.map(item=>{

                    return(
                        <div>
                            <p>{item.strArea}</p>
                            <img width={200} src={item.strMealThumb} alt="" srcset="" />
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default OneAllFood;