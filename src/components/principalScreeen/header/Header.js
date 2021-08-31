import React, { useState } from 'react'
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
    

    return ( 
        <div>
            <header className="l-header">
                <nav className="nav bd-grid">
                    <div>
                        <a href="/" className="nav__logo">SARA</a>
                    </div>

                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            {/* <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
                            <li className="nav__item"><a href="#feature" className="nav__link" onClick={linkAction}>Featured</a></li>
                            <li className="nav__item"><a href="#new" className="nav__link">New</a></li>
                            <li className="nav__item"><a href="#suscribed" className="nav__link">Suscribed</a></li> */
                            
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
                        <i className='bx bx-cart nav__cart' ></i>
                        <i className='bx bx-menu nav__toggle' id="nav-toggle" onClick={showMenu} ></i>
                    </div>
                </nav>
            </header>
        </div>
    )
}
