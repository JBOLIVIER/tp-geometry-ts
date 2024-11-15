import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
describe("test LineString", () => {
    
    it("test default constructor", () => {
        const p = new LineString();
        expect(p.getNumPoints()).to.equal(0);
        expect(Number.isNaN(p.getPointN(5)));
        expect(Number.isNaN(p.getPointN(0)));
        expect(p.isEmpty()).to.equal(true);
        p.translate(1,1)
        expect(Number.isNaN(p.getPointN(5)));
        expect(Number.isNaN(p.getPointN(0)));
        expect(p.getType()).to.equal('LineString')
        expect(p.getNumPoints()).to.equal(0);
    });

   
    it("test constructor with coordinates", () => { 
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab = new LineString([a,b]);
    
        expect(ab.getPointN(0)).to.equal(a);
        expect(ab.getPointN(1)).to.equal(b);
        expect(ab.getNumPoints()).to.equal(2);
    });

    it("test emptiness", () => {
        const p = new LineString();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab  = new LineString([a,b]);
    
        expect(ab.isEmpty()).to.equal(false);
        expect(p.isEmpty()).to.equal(true);
    });

    it("test translate", () => {
        const p = new LineString();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab  = new LineString([a,b]);
    
        a.translate(1,1);
        b.translate(1,1);
        ab.translate(1,1);
        expect(ab.getPointN(0)).to.equal(a);
        
    });

    it("test clone", () => {
        const p = new LineString();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab  = new LineString([a,b]);
    
        let c = ab.clone();
        expect(ab.clone()).to.deep.equal(ab);
        ab.translate(1,1);
        expect(ab.clone()).to.not.equal(ab);

        let clonevide = p.clone();
        expect(p.clone()).to.deep.equal(clonevide);
        p.translate(1,1);
        expect(p.clone()).to.not.equal(clonevide);
    });
    

    it("test get envelope", () => {
        const p = new LineString();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab = new LineString([a,b]);
    
        expect(p.getEnvelope().isEmpty())
        expect(!ab.getEnvelope().isEmpty())
    });
   

});