import React, { useState } from "react";
import Modal from "react-modal";
import "./TeamMember.css";

const TeamMember = ({ name, position, image, bio }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <div className="team-member" onClick={() => setModalIsOpen(true)}>
        <img src={image} alt={name} />
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
          <button onClick={() => setModalIsOpen(false)}>Close</button>
          <h2>{name}</h2>
          <img src={image} alt={name} />
          <p>{bio}</p>
        </div>
      </Modal>
    </div>
  );
};

export default TeamMember;
