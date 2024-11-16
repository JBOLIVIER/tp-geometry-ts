import "mocha";
import { expect } from "chai"
import GeometryWithcachedEnvelope from "../src/GeometryWithCachedEnvelope"
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryWithCachedEnvelope from "../src/GeometryWithCachedEnvelope";
import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test GEometryWithCachedEnvelope", () => {

    it("getter ", () => {
        const pvide = new Point();
        const p = new LineString();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab  = new LineString([a,b]);
        const GEOMemptyPoint = new GeometryWithCachedEnvelope(pvide);
        const GEOMPoint = new GeometryWithCachedEnvelope(a);
        const GEOMemptyLine = new GeometryWithCachedEnvelope(p);
        const GEOMLine = new GeometryWithCachedEnvelope(ab);
        expect(GEOMLine.getType()).to.equal('LineString');
        expect(GEOMemptyPoint.getType()).to.equal('Point');
        expect(GEOMemptyLine.getEnvelope()).to.deep.equal(new Envelope());
        expect(GEOMLine.getEnvelope()).to.deep.equal(new Envelope([3.0,4.0],[5.0,6.0]));
    });

    it("emptyness ", () => {
        const pvide = new Point();
        const p = new LineString();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab  = new LineString([a,b]);
        const GEOMemptyPoint = new GeometryWithCachedEnvelope(pvide);
        const GEOMPoint = new GeometryWithCachedEnvelope(a);
        const GEOMemptyLine = new GeometryWithCachedEnvelope(p);
        const GEOMLine = new GeometryWithCachedEnvelope(ab);
        expect(GEOMemptyLine.isEmpty());
        expect(GEOMemptyPoint.isEmpty());
        expect(!GEOMLine.isEmpty());
        expect(!GEOMPoint.isEmpty());
    });

    it("translate ", () => {
        const a = new Point([3.0,4.0]);
        const GEOMPoint = new GeometryWithCachedEnvelope(a);
        const EnvB = new EnvelopeBuilder()
        GEOMPoint.accept(EnvB);
        expect(GEOMPoint.getEnvelope()).to.deep.equal(EnvB.build());
        GEOMPoint.translate(1,1);
        expect(GEOMPoint.getEnvelope()).to.not.equal(EnvB.build());
    });  

    it("as text ", () => {
        const a = new Point([3.0,4.0]);
        const GEOMPoint = new GeometryWithCachedEnvelope(a);
        expect(GEOMPoint.asText()).to.equal("POINT(3 4)");
    }); 

    it("clone ", () => {
        const a = new Point([3.0,4.0]);
        const GEOMPoint = new GeometryWithCachedEnvelope(a);
        let b = GEOMPoint.clone();
        expect(b).to.deep.equal(a);
        GEOMPoint.translate(1,1);
    }); 


    it("clone ", () => {
        const g = new GeometryWithCachedEnvelope(new Point([3.0,4.0]));
        const copy = g.clone();
        copy.translate(1,1);
        expect(g.asText()).to.equal("POINT(3 4)"); // Pas bougé
        expect(copy.asText()).to.equal("POINT(4 5)");
    }); 

});