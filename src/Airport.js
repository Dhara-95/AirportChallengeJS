class Airport {
  constructor() {
    this.hangar = []
  }

  dock(plane) {
    this.hangar.push(plane);
  }
}