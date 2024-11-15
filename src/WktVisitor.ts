import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";
import WktWriter from "./WktWriter";

class WktVisitor implements GeometryVisitor {
    buffer : String;

    visitPoint(point: Point) {
        // let wkttxt = new WktWriter();
        // this.buffer = wkttxt.write(point);
        if (point.isEmpty()) {
            this.buffer = "EMPTY"
        }
        else {
            this.buffer = "POINT(" + point.getCoordinate()[0] +" "+ point.getCoordinate()[1] +")";
        }
    }
    visitLineString(linestring: LineString) {
        // let wkttxt = new WktWriter();
        // this.buffer = wkttxt.write(linestring);
        if (linestring.isEmpty()) {
            this.buffer = "EMPTY"
        }
        else {
            let wkttxt = "LINESTRING("
            for (let i =0; i<linestring.getNumPoints(); i++) {
                wkttxt += linestring.getPointN(i).x() + " " + linestring.getPointN(i).y();
                if (i != linestring.getNumPoints()-1) {
                    wkttxt += ", ";
                }
            }
            wkttxt += ")"
            this.buffer = wkttxt;
        }
    }
    getResult() : String {
        return this.buffer
    }
}

export default WktVisitor;
