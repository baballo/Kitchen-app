import  MainSwitch  from "./MainSwitch";


class Toaster extends MainSwitch {
  constructor(timer) {
    super();
    this.isToasterOn = false;
    this.timer = timer;
    this.cancelled = false;
    this.countdownTimer = null;
  }
  countDown(callback) {

    return new Promise((resolve) => {
      let timeLeft = 30;
      this.countdownTimer = setInterval(() => {
        if (!this.isSwitchOn) {
          clearInterval(this.countdownTimer);
          resolve({ isCancelled: false });
        } else if (timeLeft <= 0) {
          clearInterval(this.countdownTimer);
          resolve({ isCancelled: false });
        } else if (this.cancelled) {
          clearInterval(this.countdownTimer);
          resolve({ isCancelled: true });
        } else {
          timeLeft--;
          callback(timeLeft,this.countdownTimer);
        }
      }, 1000);
    });

    
  }

  turnToasterOff() {
    this.isToasterOn = false;
    console.log("Toaster turned off");
  }

  popToast() {
    console.log("Toast popped!");
  }

  cancelToasting() {
    console.log("Toasting cancelled.");
    this.cancelled = true;
    clearInterval(this.countdownTimer);
  }

//overwrite 
  turnMainSwitchOn(){
   console.log('main off');
  }
}

export default Toaster;
