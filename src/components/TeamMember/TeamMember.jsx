import React, { useState } from "react";
import Modal from "react-modal";
import "./TeamMember.css";

const TeamMember = ({ name, position, image, bio }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <div className="team-member" onClick={() => setModalIsOpen(true)}>
        <img src={require('../../images/bg.jpg')} alt={name} />
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Team Member Details"
        overlayClassName="modal-overlay"
        className="modal"
      >
        <div className="modal-content">
          {/* <button style={{ marginLeft: 'auto' }} onClick={() => setModalIsOpen(false)}>Close</button> */}
          <img src={require('../../images/bg.jpg')} alt={name} />
          <h2>{name}</h2>
          <p style={{ textAlign: 'justify' }}>{bio}</p>
          <p>Member since 2020</p>
        </div>
      </Modal>
    </div>
  );
};

export default TeamMember;
