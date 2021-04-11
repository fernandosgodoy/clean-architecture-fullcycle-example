import EnterParkingLot from "../src/core/userCase/EnterParkingLot";

test('Should enter parking lot', function() {
    const enterParkingLot = new EnterParkingLot();
    const parkingLot = enterParkingLot.execute();
    expect(parkingLot.code).toBe("shopping");
});