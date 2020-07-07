class Airport {
  constructor() {
    this.hangar = []
  }

  dock(plane) {
    this.hangar.push(plane);
  }

  takeOff(plane) {
    var hangarLength = hangar.length();
    this.hangar.pop();
    if (this.hangar.length() < hangarLength) {
      return "Plane has taken off succesfully";
    }
    else {
      return "Take-off unsuccesful";
    }
  }
}