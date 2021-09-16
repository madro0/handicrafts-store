import React from 'react'

export const ShoppingCart = () => {

    const showShop =()=>{
        const shop = document.getElementById('shop');
        shop.classList.toggle('show__shop')
    }
    return (
        <div className="shop" id="shop">
            <div className="shop__header ">
                <h2 className="shop__title">Bag <span className="shop__counter">(2)</span></h2>
                <i className='bx bx-x shop__close' onClick={showShop}></i>
            </div>
            <div className="shop__list">
                <div className="shop__card">
                    <div className="shop__card__data">
                        <img src="assets/img/new3.png" className="shop__card__img"></img>
                        <div>
                            <a className="shop__card__data__title">New 2</a>
                            <h3>size: <span>S</span></h3>
                            <h3>Amou: <span>1</span></h3>
                        </div>
                    </div>
                    
                    <div className="shop__card__price">
                        <span>$100.000</span>
                        <i className='bx bx-trash'></i>
                    </div>
                </div>
            </div>

            <hr/>
            
            <div className="shop__price__total">
                <div className="shop__total">
                    <h3>Total:</h3>
                    <span>$ 100.000</span>
                </div>
                <div className="shop__shipping">
                    <h3>Shipping: </h3>
                    <span>$ 15.000</span>
                </div>
            </div>
            <div className="shop__button__container">
                <button className="button shop__button">FINISH BUYING</button>
                <button className="button__ligth shop__button">SEE SHOPING BAG</button>
            </div>
        </div>
    )
}
