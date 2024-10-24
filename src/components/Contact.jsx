import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/agdygrjb", userInfo);
      toast.success("Your Message Has Been Sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 "
    >
      <h1 className="text-3xl font-bold mb-4 text-blue-700 text-center md:text-start">
        Contact Me
      </h1>
      <span className="text-red-700 text-center md:text-start">
        Please Fill Out The Form To Contact Me
      </span>
      <div className="flex flex-col items-center justify-center mt-5 px-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          // action="https://getform.io/f/agdygrjb"
          // method="POST"
          className="bg-cyan-300 w-96 px-8 py-6 rounded-xl border-2 border-black "
        >
          <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              {...register("name", { required: true })}
              className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              name="name"
            ></input>
            {errors.name && <p> name is required.</p>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              {...register("email", { required: true })}
              className="shadow rounded-lg appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter Email"
              name="email"
            ></input>
            {errors.email && <p>Email is required.</p>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="shadow rounded-lg appearance-none border   py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="message"
              type="text"
              placeholder="Enter Your Message"
              name="message"
            ></textarea>
            {errors.message && <p>message is required.</p>}
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white border-2 border-black  rounded-xl items-center ml-9  px-24 py-1 hover:bg-orange-500 duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
