import React, { useState } from "react";
import Stove from "../modules/Stove";


const StoveComponent = () => {
  const [isTurnedOn, setIsTurnedOn] = useState(false);
  const [temparatureReading, setTemparatureReading] = useState(0);
  const [timer, setTimer] = useState(0);

  const stove = new Stove();
  const handleTurnOnClick = () => {
    setIsTurnedOn(true);
    stove.turnOn((temparature, interval) => {
      setTemparatureReading(temparature);
      setTimer(interval);
 
     
    }).then(() => {
      stove.regulate((temparature, interval) => {
        setTemparatureReading(temparature);
        setTimer(interval);
      })
    });
  };

  const handleTurnOffClick = () => {
    setIsTurnedOn(false)
    clearInterval(timer);
    stove.temparature = temparatureReading;
    stove.turnOff((temparature, interval) => {
      setTemparatureReading(temparature);
      setTimer(interval);
    })
  };

  return (
    <div>
      <h1>Stove</h1>
      <h3>Temparature: {temparatureReading}</h3>
      {!isTurnedOn ?( 
      <button className="OnButton" onClick={handleTurnOnClick} disabled={isTurnedOn}>
          Turn On
      </button>)
      :
      (
        <button className="OffButton" onClick={handleTurnOffClick}>turn Off</button>
      )}
    </div>
  );
};

export default StoveComponent;
