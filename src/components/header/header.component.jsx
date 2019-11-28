import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/filebase.utils';
import './header.styles.scss';
import {Health as Logo} from '../../assets/logo';
import LogIn from '../../assets/account';
import SignOut from '../../assets/signout';
import Contact from '../../assets/contact';
import Browse from '../../assets/browse';



const Header = ({currentUser}) => (
    <div className='header'>
        <Link className = 'logo-container' to= '/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                <Browse />
            </Link>
            <Link className='option' to='/shop'>
                <Contact />
            </Link>
                
            {
                currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>    
                  <SignOut className ='signout' />
                </div>
                ) : (
                <Link className='option' to='/signin'>
                    <LogIn className='login' /> 
                </Link>
                ) 
            }
        </div>
    </div>
)

export default Header;