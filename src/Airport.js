class Airport {
  constructor() {
    this.hangar = []
  }

  dock(plane) {
    this.hangar.push(plane);
  }

  takeOff(plane) {
    this.hangar.pop();
    if (!this.hangar.includes(plane)) {
      return "Plane has taken off succesfully";
    }
    else if (this.hangar.includes(plane)) {
      return "Take-off unsuccesful";
    }
  }
}