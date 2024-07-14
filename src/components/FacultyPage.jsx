import React from "react";
import Slider from "react-slick";
import profile from "../assets/Profile.jpg";
import profile2 from "../assets/Profile2.jpg";
import profile3 from "../assets/Profile3.jpg";
import profile4 from "../assets/Profile4.jpg";
import profile5 from "../assets/Profile5.jpg";
import profile6 from "../assets/Profile6.jpg";
import profile7 from "../assets/Profile7.jpg";

const facultyList = [
  {
    id: 1,
    profile: profile,
    name: "Mathew Wade",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum deserunt autem consequatur iusto adipisci molestiae obcaecati id dolores, aliquam provident.",
    delay: 100,
  },
  {
    id: 2,
    profile: profile2,
    name: "Joseph Adam",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum deserunt autem consequatur iusto adipisci molestiae obcaecati id dolores, aliquam provident.",
    delay: 200,
  },
  {
    id: 3,
    profile: profile3,
    name: "Angela Wright",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum deserunt autem consequatur iusto adipisci molestiae obcaecati id dolores, aliquam provident.",
    delay: 300,
  },
  {
    id: 4,
    profile: profile4,
    name: "Mark Chris",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum deserunt autem consequatur iusto adipisci molestiae obcaecati id dolores, aliquam provident.",
    delay: 400,
  },
  {
    id: 5,
    profile: profile5,
    name: "Henry Kale",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum deserunt autem consequatur iusto adipisci molestiae obcaecati id dolores, aliquam provident.",
    delay: 500,
  },
  {
    id: 6,
    profile: profile6,
    name: "Ankita Sharma",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum deserunt autem consequatur iusto adipisci molestiae obcaecati id dolores, aliquam provident.",
    delay: 600,
  },
  {
    id: 7,
    profile: profile7,
    name: "Edward Markram",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum deserunt autem consequatur iusto adipisci molestiae obcaecati id dolores, aliquam provident.",
    delay: 700,
  },
];
const FacultyPage = () => {
  var settings = {
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
        {
            breakpoint: 10000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 0,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
  };

  return (
    <div className="container mb-10">
      <div data-aos="fade-right">
        <div className="container mt-4">
          <h1 className="text-primary text-4xl font-bold">Meet Our Faculty</h1>
          <p className="text-gray-500 max-w-[250px]">
            Talented and experienced educators from across the globe
          </p>
        </div>
      </div>
      
      <div className="container overflow-hidden">
        <Slider {...settings}>
          {facultyList.map((data) => (
            <div className="my-4 mx-2" data-aos="fade-up" data-aos-delay={data.delay}>
              <div className="bg-orange-200/40 w-[250px] rounded-md shadow-custom-dark">
                <div className="flex">
                  <div className="mx-3 my-5">
                    <img
                      src={data.profile}
                      alt=""
                      className="w-[75px] h-[75px] rounded-full"
                    />
                  </div>
                  <div className="mr-3 ml-2 my-5 -translate-x-3">
                    <h1 className="text-2xl w-[100px] text-right font-bold">
                      {data.name}
                    </h1>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <p className="w-[220px] px-1 py-2 mb-2 font-serif">
                    "{data.description}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FacultyPage;
