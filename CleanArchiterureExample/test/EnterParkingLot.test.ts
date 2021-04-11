import EnterParkingLot from "../src/core/userCase/EnterParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";

test('Should enter parking lot', async function() {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const parkingLot = await enterParkingLot.execute("shopping");
    expect(parkingLot.code).toBe("shopping");
});