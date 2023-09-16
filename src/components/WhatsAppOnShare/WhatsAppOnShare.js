import React, { useState } from 'react';
import { dataSetForBasicData } from '../../ImportFiles';

const WhatsAppOnShare = () => {
  const [number, setNumber] = useState('');

  const handleShare = () => {
    const encodedURL = encodeURIComponent(`https://${dataSetForBasicData.MainHositingName}/${dataSetForBasicData.FolderName}`);
    const whatsappURL = `https://wa.me/+91${number}?text=${encodedURL}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="input-group rounded">
      <input
        type="text"
        name="number"
        className="form-control"
        placeholder="+91 Phone Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div>
        <button onClick={handleShare} className="btn btn-success jQClassForWhatsAppOnShare">
          <i className="fab fa-whatsapp pr-1"></i> Share on Whatsapp
        </button>
      </div>
    </div>
  );
};

export default WhatsAppOnShare;
