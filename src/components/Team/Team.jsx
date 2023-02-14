import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TeamMember from "../TeamMember/TeamMember";

const Team = ({ members }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <div className="team">
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
