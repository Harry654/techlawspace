import members from '../../utils/members.json';
import Team from '../Team/Team';

const TeamList = ({ teams }) => {
  
    return (
        teams.map((teamName, index) => (
            <div key={index} style={{ width: '100%' }}>
            <h2 style={{ marginLeft: 30 }}>{teamName} Law</h2>
            <Team members={members} />
            </div>
          ))
    );
  };

export default TeamList;
