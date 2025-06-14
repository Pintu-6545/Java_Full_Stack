/* Task 2: 
o Use the useEffect() hook to fetch and display data from an API when the 
component mounts. */
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Recipesapidata() {
    const [data, setdata] = useState([])

    useEffect(() => {
        getRecipedata()
    })

    const getRecipedata = async () => {
        const res = await axios.get("https://dummyjson.com/recipes")
        // console.log(res.data)
        setdata(res.data.recipes)
    }

    return (
        <div className='container'>
            <div className='row g-4'>
                {
                    data && data.map((value, index) => {
                        //  console.log(value)
                        const {image,id,name,instructions,caloriesPerServing,cuisine,rating} = value
                        return (
                            <div className='col-md-3' key={index}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={image} className="card-img-top" alt="Fissure in Sandstone" />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontSize: "25px", fontWeight: "600" }}>{id}</h5>
                                        <h5 className="card-title"style={{fontWeight:"600"}}>{name}</h5>
                                        <p className='card-text' style={{ fontWeight: "500" }}>{instructions.slice(1, 3)}</p>
                                        <h5 className="card-text" style={{ fontWeight: "600" }}><i class="fa-solid fa-indian-rupee-sign"></i> {caloriesPerServing}</h5>
                                        <h5 className='card-text' style={{ fontWeight: "600" }}><i class="fa-solid fa-globe"></i> {cuisine}</h5>
                                        <h5 className="card-text" style={{ fontWeight: "600" }}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i> {rating}</h5>
                                        <button className='btn btn-primary mt-2 ms-5' style={{ fontSize: "15px",fontWeight:"600"}}>ORDER NOW</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Recipesapidata
