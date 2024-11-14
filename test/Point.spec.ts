import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.equal(undefined);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
});

describe("test LineString", () => {
    it("test default constructor", () => {
        const p = new LineString();
        expect(Number.isNaN(p.getNumPoints()));
        expect(Number.isNaN(p.getPointN(5)));
        expect(Number.isNaN(p.getPointN(0)));
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        const d = new Point([5.0,6.0]);
        const l = new LineString([p,d])
        expect(l.getPointN(0)).to.equal(p);
        expect(l.getPointN(1)).to.equal(d);
        expect(l.getNumPoints()).to.equal(2);
    });
});