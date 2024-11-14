import Point from "./Point";
import Geometry from "./Geometry";

export default class LineString implements Geometry{
    GetType(): string {
        return ("LineString");
    }
    private points ? : Array<Point>; 
    
    constructor(_points?: Array<Point>) {
        this.points = _points ;
    }
    getNumPoints() : number {
        return this.points ? this.points.length : Number.NaN;
    }
    getPointN(n:number) {
        return this.points ? this.points[n] : Number.NaN;
    }
}