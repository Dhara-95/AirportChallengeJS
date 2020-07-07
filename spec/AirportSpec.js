describe('Airport', function() {
  
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('Airport can accept a plane', function() {
    it('Will dock a plane', function() {
      airport.dock(plane);
      expect(airport.hangar).toContain(plane);
    });
  });

  describe('Airport can tell a plane to takeoff', function () {
    it('Will get a plane to leave the hangar array', function () {
      airport.dock(plane);
      airport.takeOff(plane);
      expect(airport.takeOff(plane)).toEqual("Plane has taken off succesfully");
    });
  });

  describe('checking for full capacity', function() {
    it('will not dock if capacity is full', function() {
      airport.dock(plane);
      expect(airport.dock(plane)).toThrow(new Error("Hangar is full"));
    });
  });
});