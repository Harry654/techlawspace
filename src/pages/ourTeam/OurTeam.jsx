import React, { useContext, useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import TeamList from "../../components/TeamList/TeamList";
import axios from "axios";
import { ServerContext } from "../../context/ServerContext";

function OurTeam() {
  const [teams, setTeams] = useState([]);
  const [members, setMembers] = useState([]);
  const { API_SERVER_URL } = useContext(ServerContext);

  async function handleGetMembers() {
    try {
    const res = await axios.get(`${API_SERVER_URL}/v1/members`);

      let { members, success } = res.data;
      
      if (success) {
        let categories = members.map((member) => member.category);
        let newCategories = [];
        categories.map((category) => {
          if(!newCategories.includes(category)) return newCategories.push(category);
          return null;
        });

        setMembers(members);
        setTeams(newCategories);
        // return console.log(newCategories);
      }
    } catch (error) {
      console.log(`${error.message}`);
    }

  }
  useEffect(() => {
    window.scrollTo(0, 0);
    handleGetMembers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!(teams.length > 0 && members.length > 0)) return <h2>Loading...</h2>;
  return (
    <>
      <div className="background">
        <NavBar currentPage="our-team" />
        <div id="site-content">
          <main id="main" className="main-content transition">
            <TeamList teams={teams} members={members} />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OurTeam;
