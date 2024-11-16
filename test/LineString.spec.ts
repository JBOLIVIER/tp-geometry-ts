import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
describe("test LineString", () => {
    
    it("test default constructor", () => {
        const Line= new LineString();
        expect(Line.getNumPoints()).to.equal(0);
        expect(Number.isNaN(Line.getPointN(5)));
        expect(Number.isNaN(Line.getPointN(0)));
        expect(Line.isEmpty()).to.equal(true);
        Line.translate(1,1)
        expect(Number.isNaN(Line.getPointN(5)));
        expect(Number.isNaN(Line.getPointN(0)));
        expect(Line.getType()).to.equal('LineString')
        expect(Line.getNumPoints()).to.equal(0);
    });

   
    it("test constructor with coordinates", () => { 
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab = new LineString([a,b]);
        const LineVide =  new LineString();
        expect(ab.getPointN(0)).to.deep.equal(a);
        expect(ab.getPointN(1)).to.deep.equal(b);
        expect(ab.getNumPoints()).to.deep.equal(2);
        expect(LineVide.getNumPoints()).to.deep.equal(0);
    });

    it("test emptiness", () => {
        const Line= new LineString();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab  = new LineString([a,b]);
    
        expect(ab.isEmpty()).to.equal(false);
        expect(Line.isEmpty()).to.equal(true);
    });

    it("test translate", () => {
        const Line= new LineString();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab  = new LineString([a,b]);
    
        a.translate(1,1);
        b.translate(1,1);
        ab.translate(1,1);
        expect(ab.getPointN(0)).to.deep.equal(a);
        
    });

    it("test clone", () => {
        const Line= new LineString();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab  = new LineString([a,b]);
    
        let c = ab.clone();
        expect(ab.clone()).to.deep.equal(ab);
        ab.translate(1,1);
        expect(ab.clone()).to.not.equal(ab);

        let clonevide = Line.clone();
        expect(Line.clone()).to.deep.equal(clonevide);
        Line.translate(1,1);
        expect(Line.clone()).to.not.equal(clonevide);
    });
    

    it("test get envelope", () => {
        const Line= new LineString();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab = new LineString([a,b]);
    
        expect(Line.getEnvelope().isEmpty())
        expect(!ab.getEnvelope().isEmpty())
    });
   

});