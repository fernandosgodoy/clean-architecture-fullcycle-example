import ParkingLot from "../entity/ParkingLot";

export default class EnterParkingLot {
    constructor() {

    }

    execute() {
        const parkingLot = new ParkingLot("shopping", 200, 10, 22);
        return parkingLot;
    }
}