import Envelope from "./Envelope";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default class GeometryWithCachedEnvelope implements Geometry {
    private cache : Envelope;
    private geometry : Geometry;

    constructor(original : Geometry) {
        this.cache = null;
        this.geometry = original;
    }
    getType(): string {
        return this.geometry.getType();
    }
    isEmpty(): boolean {
        return this.geometry.isEmpty();
    }
    translate(dx: number, dy: number): void {
        this.geometry.translate(dx,dy);
        this.cache = null;
    }
    clone(): Geometry {
        return this.geometry.clone();
    }
    getEnvelope(): Envelope {
        if (!this.isEmpty()){
            if (this.cache == null){
                this.cache = this.geometry.getEnvelope(); 
            }
            return this.cache;
        }
        return new Envelope();
    }
    accept(visitor: GeometryVisitor): void {
        this.geometry.accept(visitor);
    }
    asText(): String {
        return this.geometry.asText();
    }

}