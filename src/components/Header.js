import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const barIcon = <FontAwesomeIcon icon={faBars} />


 const Header = ()=>{
    const navigation = ['home', 'contact', 'gallery'];
    const [toggleMenu, change] = useState(null)
    return(
        <header style= {{
            zIndex: '100',
            backgroundColor: 'white',
        }}>
            <nav>
                <div className = 'logo' style = {{
                    fontWeight: "800"
                }}>
                    Radiance
                </div>
                <div className = {`sub ${toggleMenu}`}>
                    <div className = 'cancel' onClick= {()=>{
                        change('slide-out')
                    }}>
                        +
                    </div>
                    
                    {navigation.map((link, key)=>(
                        <div key={key}>
                            <Link  to={
                                link === 'home' ? '/' : link
                            } onClick = {()=>{
                                change('slide-out')
                            }}>
                                {link}
                            </Link>
                        </div>
                    ))}
                    <div>
                        <Link to='#about' onClick={() => {
                            change('slide-out')
                        }}>
                            About
                        </Link>
                    </div>
                </div>
                <div className = 'bars' style= {{
                    cursor: 'pointer',
                    fontSize: '25px'
                }} onClick= {()=>{
                    if(toggleMenu === null){
                        change('slide-in');
                    }else if(toggleMenu === 'slide-in'){
                        change('slide-out');
                    }else{
                        change('slide-in')
                    }
                }}>
                    {barIcon}
                </div>
            </nav>
        </header>
    )
}
export default Header;