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
        if (_points) {
            const ListPoint =[];
            for (let i =0; i<_points.length; i++){
                ListPoint.push(_points[i].clone())
            }
            this.points = ListPoint;
        }
        else {
            this.points = [];
        }
    }

    accept(visitor: GeometryVisitor): void {
        visitor.visitLineString(this);
    }  

    clone(): Geometry {
        let c_points = [];
        this.points.forEach(element => {
            c_points.push(element.clone());
        });
        let copy = new LineString(c_points);
        return copy;
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