import EnterParkingLot from "../src/core/userCase/EnterParkingLot";
import GetParkingLot from "../src/core/userCase/GetParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";

test('Should enter parking lot', async function() {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
    await enterParkingLot.execute("shopping", "MMM-0001", new Date("2021-04-11T11:05"));
    const parkingLoAfterEnter = await getParkingLot.execute("shopping");
    expect(parkingLoAfterEnter.occupiedSpaces).toBe(1);
    // expect(parkingLot.code).toBe("shopping");
});