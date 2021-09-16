import React from 'react'

const imgFooter = [
    {
        src:'./assets/img/footerstore1.png',
        description:''
    },
    {
        src:'./assets/img/footerstore2.png',
        description:''
    }
]
const footerData=[
    {
        name: 'Home',
        path: '#home'
    },
    {
        name: 'Featured',
        path: '#featured'
    },
    {
        name: 'New',
        path: '#new'
    },
    {
        name: 'Suscribe',
        path: '#suscribe'
    }
]

export const Footer = () => {
    return (
        <div>
            <footer className="footer section">
                <div className="footer__container bd-grid">
                    <div className="footer__box">
                        <h3 className="footer__title">SARA</h3>
                        <p className="footer__deal">Products store</p>
                        {
                            imgFooter.map((data, index)=>{
                                return(
                                    <a key={index} href="#home"><img src={data.src} alt={data.description} className="footer__store"></img></a>
                                )
                            })
                        }
                    </div>

                    <div className="footer__box">
                        <h3 className="footer__title">EXPLORE</h3>
                        <ul>
                            {
                                footerData.map((data, index)=>{
                                    return(
                                        <li key={index}><a href={data.path} className="footer__link">{data.name}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="footer__box">
                        <h3 className="footer__title">OUR SERVICES</h3>
                        <ul>
                            <li><a href="#home" className="footer__link">Pricing</a></li>
                            <li><a href="#home" className="footer__link">Free Shipping</a></li>
                            <li><a href="#home" className="footer__link">Gift Cards</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer__box">
                        <h3 className="footer__title">FOLLOW</h3>
                        <a href="#home" className="footer__social"><i className='bx bxl-facebook-square' ></i></a>
                        <a href="#home" className="footer__social"><i className='bx bxl-instagram-alt' ></i></a>
                        <a href="#home" className="footer__social"><i className='bx bxl-twitter' ></i></a>
                    </div>

                    <p className="footer__copy">&#169; 2021 copyright all right reserved</p>
                </div>
            </footer>
        </div>
    )
}
