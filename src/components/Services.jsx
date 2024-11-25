import App from "../../public/App.jpg";
import CRM from "../../public/CRM.jpg";
import Cloud from "../../public/Cloud.jpg";
import Digital from "../../public/Digital.jpg";
import React from "react";
import Software from "../../public/Software.jpg";
import Web from "../../public/Web.jpg";

function Services() {
  const cardItem = [
    {
      id: 1,
      logo: Software,
      name: "Software Development",
    },
    {
      id: 2,
      logo: CRM,
      name: "CRM Management",
    },
    {
      id: 3,
      logo: App,
      name: "Application Development",
    },
    {
      id: 4,
      logo: Digital,
      name: "Digital Marketing",
    },
    {
      id: 5,
      logo: Cloud,
      name: "Cloud Services",
    },

    {
      id: 7,
      logo: Web,
      name: "Web Development",
    },
  ];

  return (
    <>
      <div
        name="Services"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 mt-5"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5 text-blue-700 text-center md:text-start">
            Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            {/* Added grid layout for better alignment */}
            {cardItem.map(({ id, logo, name }) => (
              <div
                key={id}
                className="border p-4 rounded-md cursor-pointer hover:scale-110 duration-300 shadow-md text-center md:text-start "
              >
                <img
                  src={logo}
                  alt={name}
                  className="h-40 w-full object-cover mb-4"
                />{" "}
                {/* Ensure image is styled */}
                <div className="text-xl font-semibold">{name}</div>
                <p className="mt-2 text-gray-800">
                  At Swiftnlift IT TECH, we offer comprehensive solutions
                  including software development, web and application
                  development, CRM systems, cloud services, and digital
                  marketing to drive your business growth and digital
                  transformation seamlessly.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Services;
