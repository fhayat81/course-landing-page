import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-primary text-white shadow-above">
      <div data-aos="zoom-in" className="container pt-2 pb-6 grid grid-cols-2 md:grid-cols-4 place-items-center">
        <div className="flex flex-col my-2">
          <h1 className="font-bold text-xl">Important Links</h1>
          <ul className="flex flex-col mx-2">
            <a
              className="duration-200 hover:underline hover:scale-105 hover:translate-x-3"
              href=""
            >
              Courses
            </a>
            <a
              className="duration-200 hover:underline hover:scale-105 hover:translate-x-3"
              href=""
            >
              Faculty
            </a>
            <a
              className="duration-200 hover:underline hover:scale-105 hover:translate-x-3"
              href=""
            >
              Register
            </a>
            <a
              className="duration-200 hover:underline hover:scale-105 hover:translate-x-3"
              href=""
            >
              Join us
            </a>
          </ul>
        </div>
        <div className="flex flex-col my-2">
          <h1 className="font-bold text-xl">Important Links</h1>
          <ul className="flex flex-col mx-2">
            <a
              className="duration-200 hover:underline hover:scale-105 hover:translate-x-3"
              href=""
            >
              Courses
            </a>
            <a
              className="duration-200 hover:underline hover:scale-105 hover:translate-x-3"
              href=""
            >
              Faculty
            </a>
            <a
              className="duration-200 hover:underline hover:scale-105 hover:translate-x-3"
              href=""
            >
              Register
            </a>
            <a
              className="duration-200 hover:underline hover:scale-105 hover:translate-x-3"
              href=""
            >
              Join us
            </a>
          </ul>
        </div>
        <div className="flex flex-col my-2">
          <h1 className="font-bold text-xl">Visit Us</h1>
          <p className="w-[170px] mx-2">
            East Vihar, Gurugram, Noida City Centre, Uttar Pradesh-109927
          </p>
        </div>
        <div className="flex flex-col justify-center space-y-1">
          <h1 className="font-bold text-xl">Contact Us</h1>
          <p className="mx-2 flex items-center gap-2"><CiMail /> learninghub@mail.com</p>
          <p className="mx-2 flex items-center gap-2"><BsFillTelephoneFill /> +91 1234567890</p>
          <div className="flex gap-3 mx-2 my-1 hover:cursor-pointer">
            <FaInstagram className="text-3xl" />
            <FaFacebook className="text-3xl" />
            <FaLinkedin className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
