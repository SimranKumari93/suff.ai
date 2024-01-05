// WhatsAppQRCode.js

import React from 'react';
import '../styles/WhatsAppQRCode.css';

const WhatsAppQRCode = () => {
  return (
    <div className="whatsapp-qrcode-container">
      <img
        src="https://example.com/whatsapp-qrcode.png" // Replace with the actual URL of your QR code image
        alt="Scan to order"
        className="whatsapp-qrcode-image"
      />
    </div>
  );
}

export default WhatsAppQRCode;
