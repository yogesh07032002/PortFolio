import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import React from "react";
import { ReactTyped } from "react-typed";
import pic from "../../public/Boss02.jpg";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mb-10  mt-10"
      >
        <div className="flex flex-col md:flex-row">
          <div className=" md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 ">
            <span className="text-xl font-bold">Welcome To My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl ">
              <h1>Hello I am </h1>
              {/* <span className="text-red-700 font-bold">Founder</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Founder", "CEO"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="   text-justify">
              I am Founder & CEO of ArrayLogic Softwares Pvt. Ltd., SwiftNLift Tech falls
              under cutting-edge technologies. SwiftNLift Tech focuses on
              utilizing innovative digital solutions that can help a business
              support its performance across industries.<br></br><br/> The company ensures to
              keep abreast of technological trends while working to deliver
              tailored solutions for the changing needs of businesses in this
              modern digital world. 
            </p>

            <br></br>
            {/*Social Media */}
            <div className="space-y-2 justify-between md:space-y-0">
  <h1 className="font-bold md:mb-3 text-xl  text-center md:text-left md:text-2xl mb-6 text-orange-500">Available On</h1> {/* Added margin below */}
  <ul className= "flex space-x-5 justify-center md:justify-start ">
    <li >
      <a href=" https://www.linkedin.com/in/nilesh-sabe" target="_blank">
        <FaLinkedin className="text-3xl md:text-4xl cursor-pointer bg-cyan-400" /> {/* Increased icon size */}
      </a>
    </li>
    <li>
      <a target="_blank" href="https://api.whatsapp.com/send?phone=8600019091">
        <FaSquareWhatsapp className="text-3xl md:text-4xl cursor-pointer bg-cyan-400" /> {/* Increased icon size */}
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/entrepreneur_nilesh_sabe?igsh=MWhwZmNkbHBla3Q1" target="_blank">
        <FaSquareInstagram className="text-3xl md:text-4xl cursor-pointer bg-cyan-400" /> {/* Increased icon size */}
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/nil.sabe.1/about" target="_blank">
        <FaFacebookSquare className="text-3xl md:text-4xl bg-cyan-400 cursor-pointer" /> {/* Increased icon size */}
      </a>
    </li>
  </ul>
</div>

            <div></div>
          </div>
          <div className=" mt-10 md:w-1/2  md:ml-60 md:mt-20 order-1  p-5 ">
            <img
              src={pic}
              className=" rounded-3x md:rounded-full md: w-[450px] md: h-[450px]"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <hr/>
    </>
  );
}


export default Home;
