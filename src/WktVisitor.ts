import GeometryCollection from "./GeometryCollection";
import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";
import WktWriter from "./WktWriter";

class WktVisitor implements GeometryVisitor {
    buffer : String;

    visitPoint(point: Point) {
        
        if (point.isEmpty()) {
            this.buffer = "POINT EMPTY";
        }
        else {
            this.buffer = "POINT(" + point.getCoordinate()[0] +" "+ point.getCoordinate()[1] +")";
        }
    }
    visitLineString(linestring: LineString) {
        
        if (linestring.isEmpty()) {
            this.buffer = "LINESTRING EMPTY";
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
    visitGeometryCollection(geometrycollection : GeometryCollection) {
        if (geometrycollection.isEmpty()) {
            this.buffer = "EMPTY GEOMETRY COLLECTION";
        }
        else {
            let wkttxt = "GEOMETRY COLLECTION("
            
            for (let i = 0; i < geometrycollection.getNumGeometries(); i++) {
                let visitor = new WktVisitor()
                geometrycollection.getGeometryN(i).accept(visitor);
                wkttxt += visitor.getResult();

                if (i != geometrycollection.getNumGeometries()-1) {
                    wkttxt += ",";
                }
            }
            this.buffer = wkttxt +=")";
        }
    }
    getResult() : String {
        return this.buffer
    }
}

export default WktVisitor;
