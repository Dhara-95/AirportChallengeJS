class Airport {

  constructor() {
    this.hangar = []
    this.FULLCAPACITY = 1
  }

  dock(plane) {
    if (this.isFull()) throw Error("Hangar is full");
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

  isFull() {
    return (this.hangar.length >= this.FULLCAPACITY);
  }
}