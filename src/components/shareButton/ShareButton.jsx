import React from "react";
import { IoLogoWhatsapp, IoLogoTwitter } from "react-icons/io";

const ShareButton = ({ platform }) => {
  const handleShareToWhatsapp = () => {
    const url = encodeURIComponent(window.location.href);
    const whatsappUrl = `https://wa.me/?text=${url}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleShareToTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const tweetUrl = `https://twitter.com/intent/tweet?text=Check out this article!&url=${url}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <>
      {platform === "whatsapp" && (
        <IoLogoWhatsapp
          onClick={handleShareToWhatsapp}
          size={30}
          color="#25D366"
        />
      )}
      {platform === "twitter" && (
        <IoLogoTwitter
          onClick={handleShareToTwitter}
          size={30}
          color="#1DA1F2"
        />
      )}
    </>
  );
};

export default ShareButton;
