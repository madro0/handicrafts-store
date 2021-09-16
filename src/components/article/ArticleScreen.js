import React from 'react'

export const ArticleScreen = () => {
    return (
        <div className="article">
            <div className="article__container">
                <div className="article__box">
                    <img src="assets/img/new3.png" className="article__img"></img>
                </div>
                <div className="article__data">
                    <div className="article__description">
                        <p>Gafas de color negro</p>
                        <h1>$10.000</h1>
                        <div>
                            talla
                        </div>
                    </div>

                    <div className="article__button">
                        <button className="button__ligth article__button__add ">Add to car</button>
                        <button className="button article__button__pay">Buy fast</button>
                    </div>

                    
                </div>


            </div>            
        </div>
    )
}
