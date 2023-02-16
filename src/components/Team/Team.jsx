import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamMember from "../TeamMember/TeamMember";
import { IoPlayForwardCircleSharp, IoPlayBackCircleSharp } from "react-icons/io5";
import "./Team.css";

const Team = ({ members }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: members.length >= 5 ? 5 : members.length,
    slidesToScroll: 4,
    centerMode: true,
    centerPadding: "50px",
    prevArrow: <IoPlayBackCircleSharp color="#ffffff"/>,
    nextArrow: <IoPlayForwardCircleSharp color="#ffffff"/>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: members.length >= 4 ? 4 : members.length,
          slidesToScroll: 3,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: members.length >= 3 ? 3 : members.length,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      // show 2 slides
      {
        breakpoint: 580,
        settings: {
          slidesToShow: members.length >= 2 ? 2 : members.length,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: members.length >= 2 ? 2 : members.length,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: members.length >= 2 ? 2 : members.length,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: members.length >= 2 ? 2 : members.length,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: members.length >= 2 ? 2 : members.length,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      // show 1 slide
      {
        breakpoint: 300,
        settings: {
          slidesToShow: members.length >= 1 ? 1 : members.length,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "70px",
        },
      },
      {
        breakpoint: 250,
        settings: {
          slidesToShow: members.length >= 1 ? 1 : members.length,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: members.length >= 1 ? 1 : members.length,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "35px",
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {members.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </Slider>
  );
};

export default Team;
