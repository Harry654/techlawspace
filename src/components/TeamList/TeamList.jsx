import members from "../../utils/members.json";
import Team from "../Team/Team";
import { Zoom } from "react-awesome-reveal";

const TeamList = ({ teams }) => {
  return teams.map((teamName, index) => (
    <div key={index} style={{ width: "100%" }}>
      <Zoom>
        <h2 style={{ marginLeft: 30 }}>{teamName} Law</h2>
      </Zoom>
      <Team members={members} />
    </div>
  ));
};

export default TeamList;
