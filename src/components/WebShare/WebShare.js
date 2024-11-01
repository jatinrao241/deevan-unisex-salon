import React from 'react';
import { dataSetForBasicData } from '../../ImportFiles';

const { navigator } = window;

const WebShare = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url:(`https://${dataSetForBasicData.MainHositingName}/${dataSetForBasicData.FolderName}`),
      })
        .then(() => alert('Data was shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing Failed.');
    }
  };

  return (
      <>
        <div onClick={handleShare}><i className="fa-solid fa-share-nodes pr-1"></i> Share</div>
      </>
  );
};

export default WebShare;
