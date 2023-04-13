import React, { useState } from "react";
import Toaster from "../modules/Toaster";


const ToasterComponent = () => {
  const [isToasting, setIsToasting] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [countdownInterval, setCountdownInterval] = useState(0);
  const toaster = new Toaster();
  const handleButtonClick = () => {
    setIsToasting(true);
    toaster.countDown((time, interval) => {
      setCountdown(time);
      setCountdownInterval(interval);
      console.log(interval);
     
    }).then(({ isCancelled }) => {
      setIsToasting(false);
      if (!isCancelled) {
        toaster.popToast();
        alert("Your toast is ready!");
      }
    });
  };

  const handleCancelClick = () => {
    toaster.cancelToasting();
    setIsToasting(false);
    clearInterval(countdownInterval);
    alert("Your toast is ready!");
  };



  return (
    <div>
      <h1>Toaster</h1>
      <h3>Time: {countdown}</h3>

      {!isToasting? (
      <button className="OnButton" onClick={handleButtonClick} disabled={isToasting}>
          toast
      </button>)
      :
    
      (
        <button className="OffButton" onClick={handleCancelClick}>Cancel</button>
      )}
    </div>
  );
};

export default ToasterComponent;
