import AbstractGeometry from "./AbstractGeometry";
import Envelope from "./Envelope";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default class GeometryCollection extends AbstractGeometry{
    private geometries : Array<Geometry>;
    constructor(geometries? : Array<Geometry>){
        super();
        this.geometries = geometries? geometries : [];
    }
    getType(): string {
        return "GeometryCollection";
    }
    isEmpty(): boolean {
        return this.geometries.length === 0;
    }
    translate(dx: number, dy: number): void {
        this.geometries.forEach( element =>{
            element.translate(dx,dy);
        });
    }
    clone(): Geometry {
        let geometries = [];
        this.geometries.forEach( element =>{
            geometries.push(element.clone());
        });
        return new GeometryCollection(geometries);
    }
   
    accept(visitor: GeometryVisitor): void {
        visitor.visitGeometryCollection(this);
    }
    getNumGeometries() : number {
        return this.geometries.length
    }
    getGeometryN(n :number ) : Geometry {
        return this.geometries[n];
    }

} 