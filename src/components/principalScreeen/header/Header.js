import React, { useState } from 'react'
import { ShoppingCart } from '../../shoppingScreen/ShoppingCart';
import { DataMenu } from './DataMenu';



export const Header = () => {
    
    
    
    const showMenu = () =>{    
        const toggle = document.getElementById('nav-toggle'),
              nav    = document.getElementById('nav-menu');

        if(toggle && nav){
            nav.classList.toggle('show');
        }
    }
    const hideMenu = () =>{
        const nav = document.getElementById('nav-menu');
        nav.classList.remove('show');
    }

   
    // ======REMOVE MENU MOBILE======
    const [activatedState, setActivatedState] = useState(DataMenu);
    const activatedInputChange = (title)=>{
          
        setActivatedState( DataMenu.map((data)=>{
           const regex = 'active'
            if(data.className.includes("active")){
                data.className = data.className.replace(regex,'');
            }

            if(data.title===title){  
                data.className += ' active';
            }
        }));

        hideMenu();
        
    }
    
    // ======SHOW CARSHOP======
    const showShop=()=>{
        const shop = document.getElementById('shop');
        shop.classList.toggle('show__shop');
    }

    return ( 
        <div>
            <header className="l-header">
                <nav className="nav bd-grid">
                    <div className="nav__menu__icon">
                        <i className='bx bx-menu nav__toggle' id="nav-toggle" onClick={showMenu} ></i>                       
                        <a href="/" className="nav__logo">SARA</a>
                    </div>

                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            {
                                DataMenu.map((item, index)=>{
                                    return (
                                        <li key={index} className="nav__item" onClick={()=>activatedInputChange(item.title)}> 
                                            <a href={item.path} className={item.className}> {item.title}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div>
                        <i className='bx bx-cart nav__cart' onClick={showShop}></i>
                    </div>
                    <ShoppingCart/>
                </nav>
            </header>
        </div>
    )
}
