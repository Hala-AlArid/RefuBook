import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import logo from "../../images/Small.png";

function Footer() {
  return ( 
    // <div className="FooterDiv p-6 flex items-center justify-around flex-wrap w-[100%]">

    //   <div className="Footer_Headings flex flex-row justify-center gap-2">

    //   <div className='w-[25%]'><img src={logo} alt="logo" /></div>

    //   <div className='flex items-center justify-around gap-2'>
    //   <NavLink to="/" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>Home</NavLink>
    //       <NavLink to="/about" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>About</NavLink>
    //       <NavLink to="/blog" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>Blog</NavLink>
    //       <NavLink to="/contact" className={(navData) => navData.isActive? "text-sky-600 font-semibold" : "text-slate-400 hover:text-sky-600 font-semibold"}>Contact</NavLink>
    //   </div>
    //   </div>

    //   <div className="Footer_Buttons">
    //   <NavLink to="/signup"><button type="submit" className="Footer_Buttons sm:w-28 md:w-32 text-center text-white p-1 rounded-full bg-sky-600 hover:text-sky-600 hover:bg-white hover:border-sky-600 border">Sign Up</button></NavLink>
    //     <div className="LanguagesList">
    //       <select className="LanguagesSelector">
    //         <option>English</option>
    //         <option>Arabic</option>
    //       </select>
    //     </div>
    //   </div>

    // </div>
    <div className='flex md:flex-row gap-2 md:justify-between md:pr-64 md:pl-64 md:mb-4 justify-center items-center p-2 flex-col'>

      <div className='flex flex-row justify-center items-center gap-2'>

      <div className='w-[25%] flex justify-center'><img src={logo} alt="logo" /></div>

      <div className='flex justify-between'>
        <NavLink to="/" className={(navData) => navData.isActive? "text-sky-600 font-semibold m-2" : "text-slate-400 hover:text-sky-600 font-semibold m-2"}>Home</NavLink>
        <NavLink to="/about" className={(navData) => navData.isActive? "text-sky-600 font-semibold m-2" : "text-slate-400 hover:text-sky-600 font-semibold m-2"}>About</NavLink>
        <NavLink to="/blog" className={(navData) => navData.isActive? "text-sky-600 font-semibold m-2" : "text-slate-400 hover:text-sky-600 font-semibold m-2"}>Blog</NavLink>
        <NavLink to="/contact" className={(navData) => navData.isActive? "text-sky-600 font-semibold m-2" : "text-slate-400 hover:text-sky-600 font-semibold m-2"}>Contact</NavLink>
      </div>
      </div>

      <div className='flex flex-row gap-2 justify-center items-center'>
      <NavLink to="/signup"><button type="submit" className="Footer_Buttons sm:w-28 md:w-32 w-[100%] text-center text-white pl-4 pr-4 pt-2 pb-2 rounded-full bg-sky-600 hover:text-sky-600 hover:bg-white hover:border-sky-600 border">Sign Up</button></NavLink>
       <div className="LanguagesList">
         <select className="LanguagesSelector">
          <option>English</option>
          <option>Arabic</option>
         </select>
       </div>
      </div>
    </div>
  ); 
}
export default Footer;