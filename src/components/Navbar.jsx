import React, { useState } from "react";

import { IoClose } from "react-icons/io5";
import {Link} from 'react-scroll';
import { MdOutlineMenu } from "react-icons/md";
import pic from "../../public/Boss02.jpg";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems=[
    {
        id:1,
        text:"Home"
    },
    {
        id:2,
        text:"About"
    },

    {
        id:3,
        text:"Education"
    },
    {
        id:4,
        text:"Services"
    },
    {
        id:5,
        text:"Contact"
    },
  ]

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white hover:bg-slate-300">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="profile" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Nilesh Sabe
              <p className="text-sm text-rose-500">Founder And CEO</p>
            </h1>
          </div>
          {/* Desktop Nav */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {
                navItems.map(({id,text})=>(
                            <li className="hover:scale-105 duration-200 cursor-pointer font-semibold text-black " key={id}>
                              <Link to={text}
                              smooth={true}
                              duration={500}
                              offset={-70}
                              activeClass="active"
                              >{text}</Link>
                              </li>
                ))
              }
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <div onClick={() => setMenu(!menu)} className="md:hidden text-2xl cursor-pointer">
            {menu ? <IoClose size={24} /> : <MdOutlineMenu size={24} />}
          </div>
        </div>

        {/* Mobile Nav */}
        {menu && (
          <div className="bg-white">
          <div className="md:hidden flex flex-col h-screen items-center justify-center text-xl space y-4">
            <ul className="space-y-4">
            {
                navItems.map(({id,text})=>(
                            <li className="hover:scale-105 duration-200  font-semibold cursor-pointer" key={id}>
                               <Link
                               onClick={() => setMenu(!menu)}
                                to={text}
                              smooth={true}
                              duration={500}
                              offset={-70}
                              activeClass="active"
                              >{text}</Link>
                            </li>
                ))
              }
            </ul>
          </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
