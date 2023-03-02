import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { ServerContext } from "../../context/ServerContext";
import "./TeamMember.css";

const TeamMember = ({ index, margin, name, position, thumbnail, bio }) => {
  const { IMAGE_SERVER_URL } = useContext(ServerContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    const mode = !modalIsOpen ? "open" : "closed";
    setModalIsOpen(!modalIsOpen);
    if (mode === "open") {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };
  //  className={`${margin && 'margin'}`}
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginLeft: margin && window.innerWidth <= 768 ? -50 * index : 0,
      }}
    >
      <div className="team-member" onClick={toggleModal}>
        <img src={`${IMAGE_SERVER_URL}/v1/images/${thumbnail}`} alt={name} />
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        contentLabel="Team Member Details"
        overlayClassName="modal-overlay"
        className="modal"
      >
        <div className="modal-content">
          <img src={`${IMAGE_SERVER_URL}/v1/images/${thumbnail}`} alt={name} />
          <h2>{name}</h2>
          <p style={{ textAlign: "justify" }}>{bio}</p>
          <p>Member since 2020</p>
        </div>
      </Modal>
    </div>
  );
};

export default TeamMember;
