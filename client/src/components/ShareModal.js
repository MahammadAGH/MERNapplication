import React from "react";
import {
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const ShareModal = ({ url, theme }) => {
  return (
    <div
      className="d-flex justify-content-between px-4 py-2"
      style={{ filter: theme ? "invert(1)" : "invert(0)" }}
    >
      <WhatsappShareButton url={url}>
        <WhatsappIcon round={true} size={32} />
      </WhatsappShareButton>
    </div>
  );
};

export default ShareModal;
