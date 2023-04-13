import  MainSwitch  from "./MainSwitch";


class Stove extends MainSwitch {
  constructor() {
    super();
    this.temparature = 0;
    this.countdownTimer = null;
    this.onOperatingTemperature = false;
  }

  turnOn(callback) {
    return new Promise((resolve) => {
      this.countdownTimer = setInterval(() => {
        this.temparature += 10;
        if(this.temparature > 200 && !this.onOperatingTemperature){
          clearInterval(this.countdownTimer);
          resolve();
          this.onOperatingTemperature = true;
        }else if(this.temparature > 220 && this.onOperatingTemperature){
          clearInterval(this.countdownTimer);
          this.regulate((temparature, interval)=>{
            callback(temparature,interval);
          })
        }
        else{
          console.log(this.isSwitchOn);
          callback(this.temparature,this.countdownTimer);
        }
      }, 1000);
    });
  }
  turnOff(callback) {

    return new Promise((resolve) => {
      this.countdownTimer = setInterval(() => {
        this.temparature -= 3;
        if(this.temparature < 0 && !this.onOperatingTemperature){
          clearInterval(this.countdownTimer);
          resolve();
        }else if(this.temparature < 180 && this.onOperatingTemperature){
          clearInterval(this.countdownTimer);
          this.regulate((temparature, interval)=>{
            callback(temparature,interval);
          })
        }else{
          callback(this.temparature,this.countdownTimer);
        }
        
      }, 1000);
    });
  }
  regulate(callback){

    if(this.temparature < 180){
      this.turnOn((temparature, interval) => {
        callback(temparature,interval);
      }) 
    }else if(this.temparature >  220 || this.temparature == 210){
      this.turnOff((temparature, interval) => {
        callback(temparature,interval);
      }) 
    }
  }
}

export default Stove;
