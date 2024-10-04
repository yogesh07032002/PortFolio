// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
   <>
    <hr />
   <footer name='Footer' className='py-12 bg-slate-400' >
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
        <div className=' flex flex-col items-center justify-center'>
            <div className='flex space-x-4'>
            <FaLinkedin size={35}/>
            <FaSquareWhatsapp size={35}/>
            <FaSquareInstagram size={35}/>
            <FaFacebookSquare size={35}/>
           

            </div> <hr />
            <div className=' border-gray-700 pt-4 mt-4 flex flex-col items-center'>
            
                <p >
                <hr />
                    &copy; 
                    2024 LiftLogic Softwares Pvt. Ltd. All rights reserved
                 
                    </p>
                <p>Yogesh Ingole</p>
            </div>
        </div>

    </div>
   </footer>
   </>
  )
}

export default Footer
