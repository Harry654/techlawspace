import React, { useState } from 'react';
import Modal from 'react-modal';

const TeamMember = ({ name, position, image, bio }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={openModal}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>{bio}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
};

export default TeamMember;
