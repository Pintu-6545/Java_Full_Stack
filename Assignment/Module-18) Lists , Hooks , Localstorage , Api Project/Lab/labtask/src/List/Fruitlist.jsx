/*
Task 1: 
o Create a React component that renders a list of items (e.g., a list of fruit names). Use 
the map() function to render each item in the list. 
*/
import React from 'react';

function Fruitlist() {
            const fruits = ["Banana", "Apple", "Orange", "Mango", "Grapce", "Chikku"]

  return (
    <div>
                    <h2>Fruit List</h2>
                    <ul>
                        {
                            fruits.map((value,index) => (
                         
                             <li key={index}>{value}</li>
                            ))
                        }
                    </ul>
                
    </div>
  )
}

export default Fruitlist

 