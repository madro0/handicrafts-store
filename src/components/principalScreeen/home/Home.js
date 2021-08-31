import React from 'react'

export const Home = () => {
    return (
        <div>
            <section className="home" id="home">
                <div className="home__container bd-grid">
                    <div className="home__data">
                        <h1 className="home__title">NEW <br></br> <span>ARRIVALS</span></h1>
                        <a href="/featured" className="button" >GO SHOPPING</a>
                    </div>

                    <img src={'./assets/img/home.png'} alt="" className="home__img"></img>
                </div> 
            </section>
        </div>
    )
}
