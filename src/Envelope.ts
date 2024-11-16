import Coordinate from "./Coordinate";

export default class Envelope {
    private bottomLeft : Coordinate;
    private topRight : Coordinate;


    constructor(bottomLeft? : Coordinate, topRight? : Coordinate) {
        this.bottomLeft = bottomLeft ? bottomLeft : [NaN,NaN];
        this.topRight = topRight ? topRight : [NaN,NaN];
    }
    isEmpty() : Boolean {
        return this.topRight.length === 0;    
    }

    getXmin() : number {
        return this.bottomLeft[0];
    }
    getXmax() : number {
        return this.topRight[0];
    }
    getYmin() : number {
        return this.bottomLeft[1];
    }
    getYmax() : number {
        return this.topRight[1];
    }

    toString() : String {
        return "envelope de coin inf gauche " + this.bottomLeft + " et de coin sup droit " + this.topRight
     }
}