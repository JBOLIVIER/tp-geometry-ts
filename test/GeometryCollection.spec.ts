import "mocha";
import { expect } from "chai";
import GeometryCollection from "../src/GeometryCollection";
import Point from "../src/Point";
import LineString from "../src/LineString";

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
        let GEOMarray = [a,b,ab];
        let aTranslate = a.clone();
        aTranslate.translate(1,1);
        let bTranslate = b.clone();
        bTranslate.translate(1,1);
        let abTranslate = ab.clone();
        ab.translate(1,1);
        let GEOMarrayTranslate = [aTranslate,bTranslate,abTranslate];
        const GeomCollect = new GeometryCollection(GEOMarray);
        const GeomCollectTranslate = new GeometryCollection(GEOMarrayTranslate);
        GeomCollect.translate(1,1);
        expect(GeomCollect).to.deep.equal(GeomCollectTranslate);
    });

    // TODO : test clone accept getter
    // + tester les visit des différents visitor

});