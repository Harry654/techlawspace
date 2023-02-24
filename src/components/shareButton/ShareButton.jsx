import React from 'react';

const ShareButton = () => {
  const handleShareButtonClick = () => {
    const url = encodeURIComponent(window.location.href);
    const whatsappUrl = `https://wa.me/?text=${url}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button onClick={handleShareButtonClick}>Share on WhatsApp</button>
  );
};

export default ShareButton;
