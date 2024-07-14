import React from "react";
import Img1 from "../assets/courseImg2.jpg";
import Img2 from "../assets/courseImg3.jpg";
import Img3 from "../assets/courseImg4.jpg";
import Img4 from "../assets/courseImg5.jpg";
import Img5 from "../assets/courseImg6.jpg";
import Img6 from "../assets/courseImg7.jpg";

const ItemsList = [
  {
    id: 1,
    img: Img1,
    title: "Web Development",
    delay: 100,
  },
  {
    id: 2,
    img: Img2,
    title: "App Development",
    delay: 200,
  },
  {
    id: 3,
    img: Img3,
    title: "Machine Learning",
    delay: 300,
  },
  {
    id: 4,
    img: Img4,
    title: "Python For Data Science",
    delay: 400,
  },
  {
    id: 5,
    img: Img5,
    title: "Cloud Computing",
    delay: 500,
  },
  {
    id: 6,
    img: Img6,
    title: "Cyber Security",
    delay: 600,
  },
];

const CourseExplore = ({setPopUp}) => {
  return (
    <div data-aos="fade-right" className="container mb-10">
      <div className="container">
        <h1 className="text-primary text-4xl font-bold">Explore</h1>
        <p className="text-gray-500">Learn the way you never before</p>
      </div>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        {ItemsList.map((data) => (
          <div data-aos="fade-up" data-aos-delay={data.delay}>
            <div
              className="flex hover:cursor-pointer items-end justify-end w-[300px] h-[130px] md:w-[350px] md:h-[150px] rounded-md shadow-custom-dark lg:w-[325px] lg:h-[140px] hover:scale-105 transition-all duration-200"
              onClick={() => setPopUp(true)}
              style={{
                backgroundImage: `url(${data.img})`,
                backgroundSize: "cover",
              }}
            >
              <h1 className="mx-3 my-2 text-right text-white text-2xl font-bold w-[150px]">
                {data.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseExplore;
