import React, { useEffect } from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import TeamList from "../../components/TeamList/TeamList";

function OurTeam() {
  const teams = ["Family", "Marriage", "Community"];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="background">
        <NavBar currentPage="our-team" />
        <div id="site-content">
          <main id="main" className="main-content transition">
            <TeamList teams={teams} />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OurTeam;
