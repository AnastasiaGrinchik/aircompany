const Plane = require('./Plane');

class MilitaryPlane extends Plane {
    constructor(
        model,
        maxSpeed,
        maxFlightDistance,
        maxLoadCapacity,
        MilitaryType
    ) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.MilitaryType = MilitaryType;
    }

    getMilitaryType() {
        return this.MilitaryType;
    }
}

module.exports = MilitaryPlane;
