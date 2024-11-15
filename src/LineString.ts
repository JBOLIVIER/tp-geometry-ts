import Point from "./Point";
import Geometry from "./Geometry";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import GeometryVisitor from "./GeometryVisitor";
import AbstractGeometry from "./AbstractGeometry";

export default class LineString extends AbstractGeometry{
    getType(): string {
        return ("LineString");
    }
    private points ? : Array<Point>; 
    
    constructor(_points?: Array<Point>) {
        super();
        this.points = _points ? _points : [];
    }

    accept(visitor: GeometryVisitor): void {
        visitor.visitLineString(this);
    }
  
    
   

    clone(): Geometry {
        let c_points = [];
        this.points.forEach(element => {
            c_points.push(element.clone());
        });
        let b = new LineString(c_points);
        return b;
    }

    translate(dx: number, dy: number): void {
        this.points.forEach(element => {
            element.translate(dx,dy)
        });
    }
  
    isEmpty(): boolean {
        return this.points.length === 0;
    }
    getNumPoints() : number {
        return this.points ? this.points.length : 0;
    }
    getPointN(n:number): Point {
        return this.points[n];
    }
    
}