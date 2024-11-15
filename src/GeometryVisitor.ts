import Point from "./Point";
import LineString from "./LineString";

export default interface GeometryVisitor {
    visitPoint(point :Point);
    visitLineString(linestring : LineString);
}