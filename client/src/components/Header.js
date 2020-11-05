import React, { useState } from 'react';
import blog from '../public/Blog-2.jpg';
import './Header.css';
const Header = () => {
     return (<div > <img src={blog} alt="Logo" className='Image' style={{ height:"0.3%" }} /> </div>);
}
 
export default Header;