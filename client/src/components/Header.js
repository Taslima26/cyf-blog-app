import React, { useState } from 'react';
import blog from '../public/Blog-2.jpg';
import cyf_logo from '../public/cyf_brand.png';
import './Header.css';
const Header = () => {
     return (<div className="image-container" >
          <img src={blog} alt="Logo" className='Image-1' style={{ height: "0.3%"  ,width:"100%"}} />
          {/* <img src={cyf_logo} alt ='cyf-logo' className='Image-2' style={{width:"40%"}} /> */}
     </div>);
}
 
export default Header;