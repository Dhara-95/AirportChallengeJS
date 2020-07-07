describe('Airport', function() {

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
});