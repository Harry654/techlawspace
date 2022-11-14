import React, { useEffect } from 'react';
import './About.css';
import law1 from "../../images/law1.jpg";
import law2 from "../../images/law2.jpg";
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import { Zoom, Slide } from 'react-awesome-reveal';

function About() {
	useEffect(() => {
		
		// var main = document.querySelector("#main");
		var mission = document.querySelector("#mission");
		var vision = document.querySelector("#vision");
		const HALF_PAGE = window.innerHeight/2;
		var container = document.querySelector(".about-container");

		// mission.style.borderColor = 'rgba(0, 0, 60, .95)';
		// mission.style.boxShadow = 'rgba(0, 0, 0, 0.65) 0px 5px 50px';
		// mission.style.background = '';
		// vision.style.background = 'rgba(80, 80, 250, 0.8)';

		window.addEventListener('scroll', function(){
			// alert(mission)
			var mission_top_val = mission.getBoundingClientRect().top;
			var vision_top_val = vision.getBoundingClientRect().top;
			if (mission_top_val < 200) {
				container.style.background = "rgba(255, 255, 255, 0.99)";
				// focus on mission
				// mission.style.borderColor = 'rgba(80, 80, 250, 0.8)';
				mission.style.boxShadow = 'rgba(0, 0, 0, 0.65) 0px 5px 50px';
				// mission.style.background = 'rgba(80, 80, 250, 0.8)';
				
				// vision.style.background = '';
				// vision.style.borderColor = 'transparent';
				vision.style.boxShadow = '0px 0px 0px black';
			}
			else{
				container.style.background = "rgba(255, 255, 255, 0.671)";
				// drop focus
				// mission.style.background = '';
				// mission.style.borderColor = 'transparent';
				mission.style.boxShadow = '0px 0px 0px black';
				
				// vision.style.background = '';
				// vision.style.borderColor = 'transparent';
				vision.style.boxShadow = '0px 0px 0px black';
				
			}
			
			if (vision_top_val < (HALF_PAGE)) {
				// focus on vision
				// vision.style.borderColor = 'rgba(80, 80, 250, 0.8)';
				vision.style.boxShadow = 'rgba(0, 0, 0, 0.65) 0px 5px 50px';
				// vision.style.background = 'rgba(80, 80, 250, 0.8)';
				
				// mission.style.background = '';
				// mission.style.borderColor = 'transparent';
				mission.style.boxShadow = '0px 0px 0px black';
			}
		});
	});
	return (
		<div className='background'>
		<NavBar currentPage="about" />
		<div id="site-content">
			
			{/* <div style="width: 100%; position: fixed; z-index: 10;">
			</div> */}

			<main id="main" className="main-content transition">
				
				<div className="fullwidth-block content">
					<div className="about-container transition" style={{ marginTop: "360px", backgroundColor: "rgba(255, 255, 255, 0.671)" }}>
					{/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />  */}
					<Slide direction='right'>
						<div id="mission" className="transition" style={{padding: "50px"}}>
							<div style={{ display: "flex", justifyContent: "space-between" }}>
								<img src={law1} style={{ width: "30%", borderRadius: "10px" }} alt="mission" />
								<div style={{ width: "60%", display: "flex", flexDirection: "column", alignItems: "center" }}>
								<Zoom>
									<h2 className="entry-title" style={{ color: "black" }}>Who we are</h2>
								</Zoom>
									<p style={{ textAlign: "justify" }}>Iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus. Iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.</p>
							</div>
							</div>

						</div>
					</Slide>
					<br /><br />
					<Slide>
						<div id="vision" className="transition" style={{ padding: "50px" }}>
							<div style={{ display: "flex", flexDirection: "row-reverse", justifyContent: "space-between" }}>
								<img src={law2} style={{ width: "30%", borderRadius: "10px" }}alt="vision" />
								<div style={{ width: "60%", display: "flex", flexDirection: "column", alignItems: "center" }}>
									<Zoom>
										<h2 className="entry-title" style={{ color: "black" }}>What we do</h2>
									</Zoom>
									<p style={{ textAlign: "justify" }}>Iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus. Iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.</p>
							</div>
							</div>

						</div>
						</Slide>

						
					</div>
				</div>

			</main> 
		</div>
		<Footer />
	</div>  
  )
}

export default About;