import React, { useState } from 'react';
import blog from '../public/Blog-2.jpg';
import './Header.css';
const Header = () => {
     return (<div > <img src={blog} alt="Logo" className='Image' style={{ width: "100%" ,height:"10%" }} /> </div>);
}
 
export default Header;