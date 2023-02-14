import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TeamMember from "../TeamMember/TeamMember";

const Team = ({ members }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: members.length >= 5 ? 5 : members.length,
      slidesToScroll: 4,
      style: {
        rowGap: 50
      },
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: members.length >= 4 ? 4 : members.length,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: members.length >= 3 ? 3 : members.length,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: members.length >= 2 ? 2 : members.length,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: members.length >= 1 ? 1 : members.length,
            slidesToScroll: 1,
          }
        }
      ]
    };
  
    return (
      <div style={{ width: '100%' }}>
        <Slider {...settings}>
          {members.map((member, index) => (
            <div key={index}>
              <TeamMember {...member} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };

export default Team;