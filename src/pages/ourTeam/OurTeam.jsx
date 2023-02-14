import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import TeamList from "../../components/TeamList/TeamList";

function OurTeam() {
  const teams = ['Family', 'Marriage', 'Community'];
  return (
    <div>
      <NavBar currentPage="our-team" />
      <div className="background">
        <div id="site-content">
          <main className="main-content">
            <div className="hero" style={{ background: "rgba(0, 0, 0, .7)" }}>
              <div className="container">
                <div className="row">
                  <br />
                  <br />

                  <TeamList teams={teams} />


                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OurTeam;
