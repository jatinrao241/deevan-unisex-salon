import React, { useEffect, useState } from 'react';
import "./InstallAppButtonStyle.css";


const InstallAppButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleBeforeInstallPrompt = (event) => {
    event.preventDefault();
    setDeferredPrompt(event);
    setIsInstallable(true);
  };

  const handleInstallApp = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          alert('App Installed Successfully');
        } else {
          alert('App not installed in device');
        }
        setDeferredPrompt(null);
        setIsInstallable(false);
      });
    }
  };

  return (
    <div>
      {/* Your app content goes here */}
      {isInstallable && (
        <button onClick={handleInstallApp} className="btn button-color"><span><i className="fa-solid fa-download"></i> Install App</span></button>
      )}
    </div>
  );
};

export default InstallAppButton;