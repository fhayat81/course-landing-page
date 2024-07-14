import React from "react";
import Img1 from "../assets/HeroImg1.jpg";
import Img2 from "../assets/HeroImg2.jpg";
import Img3 from "../assets/HeroImg3.jpg";

import Slider from "react-slick";
const heroImages = [
  {
    id: 1,
    img: Img1,
    title: "WEB DEVELOPMENT",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, praesentium.",
  },
  {
    id: 2,
    img: Img2,
    title: "APP DEVELOPMENT",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, praesentium.",
  },
  {
    id: 3,
    img: Img3,
    title: "MACHINE LEARNING",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, praesentium.",
  },
];

const Hero = ({setPopUp}) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidestoShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <div data-aos="fade-down" data-aos-delay="500">
      <Slider {...settings}>
        {heroImages.map((data) => (
          <div>
            <div className="container py-4 my-3 flex flex-col justify-center items-center">
              <div
                className="w-[350px] h-[250px] sm:w-[500px] sm:h-[400px] md:w-[800px] md:h-[500px] lg:w-[850px] lg:h-[500px] overflow-hidden rounded-md shadow-custom-dark"
                style={{
                  backgroundImage: `url(${data.img})`,
                  backgroundSize: "cover",
                }}
              >
                <div>
                  <h1 className="text-white font-bold px-4 pt-2 text-xl w-[200px] sm:text-3xl md:text-4xl lg:text-5xl">
                    {data.title}
                  </h1>
                  <p className="text-xs sm:text-sm md:text-xl px-4 w-[300px] md:w-[450px] text-white font-semibold">
                    {data.description}
                  </p>
                </div>
              </div>
              <div className="relative bottom-14 flex justify-center items-center">
                  <button
                    onClick={() => setPopUp(true)}
                    className="sm:text-xl sm:w-[200px] bg-secondary py-2 px-4 rounded-full text-white hover:scale-110 duration-200"
                  >
                    Enroll Now!
                  </button>
                </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
