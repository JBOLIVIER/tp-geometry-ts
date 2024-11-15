import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class LogGeometryVisitor implements GeometryVisitor{
    visitPoint(point: Point) {
        console.log( point.isEmpty() ? "Je suis une point vide" : "je suis un point avec x=" + point.x() +" et y=" + point.y() +".");                     
    }
    visitLineString(linestring: LineString) {
        console.log(linestring.isEmpty ? "Je suis une polyligne vide" : "je suis polyligne définie par "+linestring.getNumPoints+" point(s)");
    }

}