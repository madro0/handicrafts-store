import React from 'react'
import { productsData } from './productsData';
export const Featured = () => {
    return (
        <div>
            <section className="featured section" id= "featured">
                <h2 className="section-title">FEACTURED PRODUCTS</h2>
                <a href="#home" className="section-all">View All</a>
                <div className="featured__container bd-grid">
                {
                productsData.map((data, index)=>{
                    return (
                            <div key={index} className="featured__product">
                                <div className="featured__box">
                                    <div className="featured__new">NEW</div>
                                    <img src={data.imgPath} alt={data.description} className="featured__img"></img>
                                </div>

                                <div className="featured__data">
                                    <h3 className="featured__name">{data.name}</h3>
                                    <span className="featured__preci">${data.price}</span>
                                </div>
                            </div>
                    )
                })
                }
            </div>
            </section>
        </div>
    )
}
