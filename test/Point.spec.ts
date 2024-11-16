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
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);   
    });
    it("test emptiness", () => {
        const p = new Point([3.0,4.0]);
        expect(p.isEmpty()).to.equal(false);
    });
    
    it("test translate", () => {
        const p = new Point([3.0,4.0]);
        p.translate(1,1);
        expect(p.x()).to.equal(4.0);
        expect(p.y()).to.equal(5.0);
    });

    it("test clone", () => {
        const p = new Point([3.0,4.0]);
        let copy = p.clone();
        expect(p.clone()).to.deep.equal(copy);
        p.translate(1,1);
        expect(p.clone()).to.not.deep.equal(copy);
        const pvide = new Point();
        let othercopy = pvide.clone();
        expect(othercopy).to.deep.equal(new Point())
    });

    it("test get envelope", () => {
        const p = new Point();
        const a = new Point([3.0,4.0]);
      
    
        expect(p.getEnvelope().isEmpty())
        expect(!a.getEnvelope().isEmpty())
    });
    
});

