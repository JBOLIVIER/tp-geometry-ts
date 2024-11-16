import Point from "./Point";
import LineString from "./LineString";
import GeometryCollection from "./GeometryCollection";

export default interface GeometryVisitor {
    visitPoint(point :Point);
    visitLineString(linestring : LineString);
    visitGeometryCollection(geometries : GeometryCollection)
}