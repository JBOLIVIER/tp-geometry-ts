import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder {
    interX = [];
    interY = [];
    insert( coordinate : Coordinate) :void {
        this.interX.push(coordinate[0])
        this.interY.push(coordinate[1])
    }
    build() : Envelope {
        return new Envelope([Math.min(...this.interX),Math.min(...this.interY)],[Math.max(...this.interX),Math.max(...this.interY)])
    }
}