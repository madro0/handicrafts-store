import React from 'react'
import { newProductsData } from './newProductsData';

export const NewArrivals = () => {
    return (
        <div>
            <section className="new section" id="new">
                <h2 className="section-title">NEW ARRIVALS</h2>
                <a href="#home" className="section-all">View All</a>
                <div className="new__container bd-grid" >
                {
                    newProductsData.map((data, index)=>{
                        return(           
                            <div className="new__box" key={index}>
                                <img src={data.srcPath} alt="" className="new__img"></img>

                                <div className="new__link">
                                    <a href={data.path} className="button">VIEW PRODUCT</a>
                                </div>
                            </div>
                        );
                    }) 
                }
                </div>
            </section>
        </div>
    )
}
