const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/MilitaryType');
const ExperimentalPlane = require('./Planes/ExperimentalPlane');

class Airport {
    getPassangerPlanes() {
        return this.planes.filter((plane) => {
            return plane instanceof PassengerPlane;
        });
    }

    getMilitaryPlanes() {
        return this.planes.filter((plane) => {
            this.plane instanceof MilitaryPlane;
        });
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getPassangerPlanes();
        let planeWithMaxCapacity = passengerPlanes[0];

        for (let i = 0; i < passengerPlanes.length; i++) {
            if (
                passengerPlanes[i].getPassengersCapacity() >
                planeWithMaxCapacity.getPassengersCapacity()
            ) {
                planeWithMaxCapacity = passengerPlanes[i];
            }
        }
        return planeWithMaxCapacity;
    }

    getTransportMilitaryPlanes() {
        let transportMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (
                militaryPlanes[i].getMilitaryType() ==
                MilitaryType.typeTransport
            ) {
                transportMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return transportMilitaryPlanes;
    }

    getBomberMilitaryPlanes() {
        let militaryPlanes = this.getMilitaryPlanes();
        return militaryPlanes.filter((bomber) => {
            return militaryPlanes[i].getMilitaryType() === MilitaryType.BOMBER;
        });
    }

    constructor(planes) {
        this.planes = planes;
    }

    getExperimentalPlanes() {
        return this.planes.filter((plane) => {
            return plane instanceof ExperimentalPlane;
        });
    }

    sortByMaxDistance() {
        this.planes.sort((a, b) =>
            a.getMaxFlightDistance() > b.getMaxFlightDistance() ? 1 : -1
        );
        return this;
    }

    sortByMaxSpeed() {
        this.planes.sort((a, b) =>
            a.getMaxSpeed() > b.getMaxSpeed() ? 1 : -1
        );
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) =>
            a.getMinLoadCapacity() > b.getMinLoadCapacity() ? 1 : -1
        );
        return this;
    }

    getPlanes() {
        return this.planes;
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
