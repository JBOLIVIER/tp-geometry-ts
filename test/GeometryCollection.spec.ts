import "mocha";
import { expect } from "chai";
import GeometryCollection from "../src/GeometryCollection";
import Point from "../src/Point";
import LineString from "../src/LineString";
import EnvelopeBuilder from "../src/EnvelopeBuilder";
import WktVisitor from "../src/WktVisitor";

describe("test Geometry Collection", () => {
    
    it("test default constructor", () => {
        const GeomCollect = new GeometryCollection();
        expect(GeomCollect.getNumGeometries()).to.deep.equal(0);
    });
    it("test emptyness", () => {
        const GeomCollectvide = new GeometryCollection();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab = new LineString([a,b]);
        let GEOMarray = [a,b,ab];
        const GeomCollect = new GeometryCollection();
        expect(GeomCollectvide.isEmpty());
        expect(!GeomCollect.isEmpty())
    });
    it("test translate", () => {
        const GeomCollectvide = new GeometryCollection();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab = new LineString([a,b]);
        const aTranslate = new Point([4.0,5.0]);
        const bTranslate = new Point([6.0,7.0]);
        const abTranslate = new LineString([aTranslate,bTranslate]);
        let GEOMarray = [a,b,ab];
        let GEOMarrayTranslate = [aTranslate,bTranslate,abTranslate];
        const GeomCollect = new GeometryCollection(GEOMarray);
        GeomCollect.translate(1,1);
        const GeomCollectTranslate = new GeometryCollection(GEOMarrayTranslate);
        for (let i = 0; i < GeomCollect.getNumGeometries(); i++) {
            expect(GeomCollect.getGeometryN(i)).to.deep.equal(GeomCollectTranslate.getGeometryN(i))
        }
    });

    it("test getter", () => {
        const GeomCollectvide = new GeometryCollection();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab = new LineString([a,b]);
        const envB = new EnvelopeBuilder()
        let GEOMarray = [a,b,ab];
        const GeomCollect = new GeometryCollection(GEOMarray);
        envB.visitGeometryCollection(GeomCollect);
        expect(GeomCollect.getEnvelope()).to.deep.equal(envB.build());
        expect(GeomCollect.getGeometryN(0)).to.equal(a);
        expect(GeomCollect.getNumGeometries()).to.equal(3);
        expect(GeomCollect.getType()).to.equal("GeometryCollection");
    });

    it("test Clone", () => {
        const GeomCollectvide = new GeometryCollection();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab = new LineString([a,b]);
        const envB = new EnvelopeBuilder()
        let GEOMarray = [a,b,ab];
        const GeomCollect = new GeometryCollection(GEOMarray);
        const copy = GeomCollect.clone();
        copy.translate(1,1);
        expect(copy).to.not.deep.equal(GeomCollect);
    });

    it("test Wkt", () => {
        const GeomCollectvide = new GeometryCollection();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab = new LineString([a,b]);
        const envB = new EnvelopeBuilder()
        let GEOMarray = [a,b,ab];
        const GeomCollect = new GeometryCollection(GEOMarray);
        const GeomCollectVide = new GeometryCollection();
        const visitor = new WktVisitor();
        GeomCollect.accept(visitor);
        expect(visitor.getResult()).to.deep.equal("GEOMETRY COLLECTION(POINT(3 4),POINT(5 6),LINESTRING(3 4, 5 6))")
        GeomCollectVide.accept(visitor);
        expect(visitor.getResult()).to.deep.equal("GEOMETRY COLLECTION EMPTY")
    });

});