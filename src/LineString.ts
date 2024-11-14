import Point from "./Point";
import Geometry from "./Geometry";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";

export default class LineString implements Geometry{
    getType(): string {
        return ("LineString");
    }
    private points ? : Array<Point>; 
    
    constructor(_points?: Array<Point>) {
        this.points = _points ? _points : [];
    }
    
    getEnvelope(): Envelope {
        if (!this.isEmpty()){
            let envb = new EnvelopeBuilder()
            this.points.forEach(element => {
                envb.insert(element.getCoordinate());
            });
        
            return envb.build();
        }
        else { return new Envelope()}
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