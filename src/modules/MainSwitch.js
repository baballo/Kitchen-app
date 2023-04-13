export default class MainSwitch {
    constructor() {
      this.isSwitchOn = true;
    }
  
    turnMainSwitchOn() {
      this.isSwitchOn = true;
      console.log('Switch is on');
    }
  
    turninSwitchOff() {
      this.isSwitchOn = false;
      console.log('Switch is off');
    }
}
  