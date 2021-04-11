import EnterParkingLot from "../src/core/userCase/EnterParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";

test('Should enter parking lot', async function() {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    await enterParkingLot.execute("shopping", "MMM-0001", new Date("2021-04-11T11:05"));
    // expect(parkingLot.code).toBe("shopping");
});