import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import React from 'react'

function Footer() {
  return (
   <>
    <hr />
   <footer name='Footer' className='py-5 bg-black text-white' >
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
        <div className=' flex flex-col items-center justify-center'>
            {/* <div className='flex space-x-4'>
            <FaLinkedin size={35}/>
            <FaSquareWhatsapp size={35}/>
            <FaSquareInstagram size={35}/>
            <FaFacebookSquare size={35}/>
           

            </div> <hr /> */}
            <div className=' border-gray-700 pt-0 mt-0 flex flex-col items-center'>
            
                <p >
               
                    &copy; 
                    2024 ArrayLogic Softwares Pvt. Ltd. All rights reserved
                 
                    </p>
               
            </div>
        </div>

    </div>
   </footer>
   </>
  )
}

export default Footer
