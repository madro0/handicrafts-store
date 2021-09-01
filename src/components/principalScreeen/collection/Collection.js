import React from 'react'
import {collectionData} from './collectionData';

export const Collection = () => {
    return (
        <div>
            <section className="collection section">
                <div className="collection__container bd-grid">
                    {/* <div className="collection__box">
                        <img src={'./assets/img/backpackMan.png'} alt="" className="collection__img"></img>

                        <div className="collection__data">
                            <h2 className=" collection__title"><span className="collection__subtitle">Men</span><br></br>Backpack</h2>
                            <a href={'#'} className="collection__view">View collection</a>
                        </div>
                    </div>

                    <div className="collection__box">
                        <div className="collection__data">
                            <h2 className=" collection__title"><span className="collection__subtitle">Women</span><br></br>Backpack</h2>
                            <a href={'#'} className="collection__view">View collection</a>
                        </div>
                        <img src={'./assets/img/backpackWoman.png'} alt="" className="collection__img"></img>
                    </div> */}
                    {collectionData.map((data, i)=>{
                        return(
                            <div className="collection__box" key={i}>
                                <img src={data.imgSrc} alt={data.descripction} className="collection__img"></img>

                                <div className="collection__data">
                                    <h2 className="collection__title"><span className="collection__subtitle">{data.gender}</span><br></br>{data.articule}</h2>
                                    <a href={data.href} className="collection__view">View Collection</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
