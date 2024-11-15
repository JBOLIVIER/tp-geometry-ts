import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class EnvelopeBuilder implements GeometryVisitor{
    visitPoint(point: Point) : void {
        if (!point.isEmpty()){
            this.insert(point.getCoordinate());
        }     
    }
    visitLineString(linestring: LineString) : void {
        if (!linestring.isEmpty()){
            for (let i = 0; i<linestring.getNumPoints(); i++ )
                this.insert(linestring.getPointN(i).getCoordinate());
        }
    }

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

