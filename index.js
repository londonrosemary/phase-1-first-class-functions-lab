// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers = () => drivers.slice(0,2);

const returnLastTwoDrivers = () => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
    return function(value) {
        return multiplier * value;
    }
}

const fareDoubler = (rate) => rate *2;

const fareTripler = (rate) => rate *3;

function selectDifferentDrivers(drivers, driverFunct) {
    if (driverFunct === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers();
    }
    else if (driverFunct === returnLastTwoDrivers) {
        return returnLastTwoDrivers();
    }
}