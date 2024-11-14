import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
describe("test Point", () => {
   
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
        expect(p.isEmpty()).to.equal(true);
        p.translate(1,1)
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
        expect(p.getType()).to.equal('Point')
    });
    
    it("test constructor with coordinates", () => {
        const e = new Point([3.0,4.0]);
        expect(e.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(e.x()).to.equal(3.0);
        expect(e.y()).to.equal(4.0);   
    });
    it("test emptiness", () => {
        const e = new Point([3.0,4.0]);
        expect(e.isEmpty()).to.equal(false);
    });
    
    it("test translate", () => {
        const e = new Point([3.0,4.0]);
        e.translate(1,1);
        expect(e.x()).to.equal(4.0);
        expect(e.y()).to.equal(5.0);
    });

    it("test clone", () => {
        const e = new Point([3.0,4.0]);
        let a = e.clone();
        expect(e.clone()).to.deep.equal(a);
        e.translate(1,1);
        expect(e.clone()).to.not.deep.equal(a);
        const p = new Point();
        let b = p.clone();
        expect(b).to.deep.equal(new Point())
    });

    it("test get envelope", () => {
        const p = new Point();
        const e = new Point([3.0,4.0]);
    
        expect(p.getEnvelope().isEmpty())
        expect(!e.getEnvelope().isEmpty())
    });
    
});

