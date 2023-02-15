import React, { useEffect } from 'react';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/footer/Footer';
import './Home.css';
import elonMusk from '../../images/elon-musk.jpg';
import mission from '../../images/icon-1.png';
import vision from '../../images/icon-3.png';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
function Home() {

    useEffect(() => {
        var welcome = document.querySelector("#welcome");
        var latestNews = document.querySelector("#latest-news");
        var latestHeaders = document.getElementsByClassName("latest-header");
        var quoteBlock = document.querySelector("#quote-block");
        const HALF_PAGE = window.innerHeight/2;
            window.addEventListener('scroll', function() {
                var welcome_top_val = welcome.getBoundingClientRect().top;
                var i;
                if (welcome_top_val < 200) {
                    welcome.style.background = 'rgb(80, 80, 250)';
                    latestNews.style.background = 'rgba(255, 255, 255, 0.95)';
                    for (i = 0; i < latestHeaders.length; i++) {
                        latestHeaders[i].style.color = 'rgba(0, 0, 60, .95)';
                    }

                    // latestNews.style.boxShadow = '5px 5px 5px black';
                    // welcome.style.transition = '.10s ease';
                }else{
                    welcome.style.background = 'rgba(0, 0, 0, 0.6)';
                    latestNews.style.background = 'rgb(80, 80, 250)';
                    for (i = 0; i < latestHeaders.length; i++) {
                        latestHeaders[i].style.color = 'white';
                    }

                    // latestNews.style.boxShadow = '';
                    // welcome.style.transition = '.10s ease';

                }


                var quoteBlock_top_val = quoteBlock.getBoundingClientRect().top;
                if (quoteBlock_top_val < (HALF_PAGE)) {
                    quoteBlock.style.boxShadow = 'rgba(0, 0, 0, 0.65) 0px 5px 50px';
                    quoteBlock.style.borderRadius = '15px';
                    // quoteBlock.style.transition = '.10s ease';
                }else{
                    quoteBlock.style.boxShadow = '';
                    quoteBlock.style.borderRadius = '';
                    // quoteBlock.style.transition = '.10s ease';

                }
                // alert(quoteBlock_top_val);
        });
    });

  return (
    <>
        <NavBar currentPage="home" />
        
        <div className="background">
		
		<div id="site-content">
			{/* <div style={{ width: "100%", position: "fixed", zIndex: 10 }}>
			
			</div> */}
			
			<main className="main-content">
				
				<div className="hero" style={{ background: "rgba(0, 0, 0, .7)" }}>
					<div className="container">
						<div className="row">
						<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

						</div>
					</div>
				</div>
				
				<div id="welcome" className="fullwidth-block welcome">
					<div className="container">
						<div className="centralize">
							<div className="col-md-8">
                                <Slide>
                                    <h2>Welcome to the space!</h2>
                                    <p className="welcome-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto labore alias nobis quam suscipit aut nostrum neque quibusdam eligendi explicabo, animi, eius beatae. Deleniti at, nam fuga accusamus non reprehenderit.  amet, consectetur adipisicing elit. Architecto labore alias nobis quam suscipit aut nostrum neque quibusdam eligendi explicabo, animi, eius beatae. Deleniti at, nam fuga accusamus non reprehenderit.</p>
                                </Slide>
							</div>
							<div className="col-md-4">
                                <Slide direction='right'>
                                    <div id="latest-news" className="latest-news transition" style={{ background: "rgb(80, 80, 250)", borderRadius: "15px" }}>
                                        <h3 id="latest-title" className="latest-header transition">Latest Articles and Announcements</h3>
                                        <ul>
                                            <li>
                                                <h3><a href="!#" className="latest-header transition" style={{ color: "white" }}>Enim ad minim veniam quis nostrud</a></h3>
                                                <small className="date">07/04/2014</small>
                                            </li>
                                            <li>
                                                <h3><a href="!#" className="latest-header transition" style={{ color: "white" }}>Duis aute irure dolor in reprehenderit</a></h3>
                                                <small className="date">07/04/2014</small>
                                            </li>
                                        </ul>
                                    </div>
                                </Slide> 
							</div>
						</div>
					</div> 
				</div>
				
				<div className="fullwidth-block" style={{ background: "rgba(255, 255, 255, 1)" }}>
					<div className="container">
						<div className="centralize feature-list-section">

							
							<div className="col-md-5">
								<div className="feature">
									<header>
										<img src={mission} className="feature-icon" alt="mission" />
										<div className="feature-title-copy">
											<h2 className="feature-title" style={{ color: "#111113" }}>Mission Statement</h2>
											<small className="feature-subtitle">Our Mission</small>
										</div>
									</header>
									<p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias doloremque, quis, eaque minus harum modi eius veritatis consequuntur expedita impedit ad, facilis. Asperiores assumenda aperiam atque, accusamus cupiditate vero sit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias doloremque, quis, eaque minus harum modi eius veritatis consequuntur expedita impedit ad, facilis. Asperiores assumenda aperiam atque, accusamus cupiditate vero sit!</p>
									<Link to="/about" className="more-link">Read More</Link>
								</div>
							</div>

							<div className="col-md-1"></div>

							<div className="col-md-5">
								<div className="feature">
									<header>
										<img src={vision} className="feature-icon" alt="vision" />
										<div className="feature-title-copy">
											<h2 className="feature-title" style={{ color: "#111113" }}>Vision Statement</h2>
											<small className="feature-subtitle">Our Vision</small>
										</div>
									</header>
									<p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias doloremque, quis, eaque minus harum modi eius veritatis consequuntur expedita impedit ad, facilis. Asperiores assumenda aperiam atque, accusamus cupiditate vero sit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias doloremque, quis, eaque minus harum modi eius veritatis consequuntur expedita impedit ad, facilis. Asperiores assumenda aperiam atque, accusamus cupiditate vero sit!</p>
									<Link to="/about" className="more-link">Read More</Link>
								</div>
							</div>
						</div>
					</div>
						
						<div id="quote-block" className="quote-section transition" style={{ background: "rgb(80, 80, 250)" }}>
                            <div className='person'>
                                <figure className="quote-avatar"><img src={elonMusk} className="avatar" alt="person" /></figure>
                                <blockquote>
                                    <p className="quote-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum reiciendis eveniet suscipit, totam doloribus iure quasi quos, quidem quam labore pariatur nesciunt rem unde odio a ex vel ullam, quis!</p>
                                    <footer>
                                        <cite style={{ border: "2px solid white", borderRadius: "20px", backgroundColor: "transparent", color: "white", padding: "5px", fontWeight: "bold" }}>Elona Musk</cite>
                                        <span style={{ color: "#111113" }}>(CEO, Lead Lawyer)</span>
                                    </footer>
                                </blockquote>
                            </div>
						</div>

				</div>

			</main> 

		</div> 
	</div>


        <Footer />
    </>
  )
}

export default Home;