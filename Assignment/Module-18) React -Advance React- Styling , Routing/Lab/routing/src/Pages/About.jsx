import React, { useEffect, useState } from 'react';
import Header from '../Reuse/Header';
import Footer from '../Reuse/Footer';
import axios from 'axios';

function About() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        getRecipedata();
    }, []); 

    const getRecipedata = async () => {
       
            const res = await axios.get("https://dummyjson.com/recipes");
            console.log(res.data);
            setdata(res.data.recipes);
        
    };

    return (
        <div>

            <Header />
            <div className='container my-5'>
                <div className='row g-4'>
                    {
                        data && data.map((value, index) => {
                            const { image, id, name, instructions, caloriesPerServing, cuisine, rating } = value;
                            return (
                                <div className='col-md-3' key={id}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={image} className="card-img-top" alt={name} />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ fontSize: "25px", fontWeight: "600" }}>{id}</h5>
                                            <h5 className="card-title" style={{ fontWeight: "600" }}>{name}</h5>
                                            <p className='card-text' style={{ fontWeight: "500" }}>{instructions.slice(1,3)}...</p>
                                            <h5 className="card-text" style={{ fontWeight: "600" }}><i className="fa-solid fa-indian-rupee-sign"></i> {caloriesPerServing}</h5>
                                            <h5 className='card-text' style={{ fontWeight: "600" }}><i className="fa-solid fa-globe"></i> {cuisine}</h5>
                                            <h5 className="card-text" style={{ fontWeight: "600" }}>
                                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star-half-stroke"></i> {rating}
                                            </h5>
                                            <button className='btn btn-primary mt-2 ms-5' style={{ fontSize: "15px", fontWeight: "600" }}>ORDER NOW</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
