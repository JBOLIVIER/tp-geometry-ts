import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";
import WktVisitor from "./WktVisitor";

export default abstract class AbstractGeometry implements Geometry {
    abstract getType(): string ;
    abstract isEmpty(): boolean;
    abstract translate(dx: number, dy: number): void;
    abstract clone(): Geometry;
    getEnvelope(): Envelope {
        let visitor = new EnvelopeBuilder()
        this.accept(visitor);
        return visitor.build()
    }
    abstract accept(visitor: GeometryVisitor): void;
    asText() : String{
        let wktv = new WktVisitor();
        this.accept(wktv);
        return wktv.getResult()
    }
}

