import "mocha";
import { expect } from "chai";
import WktVisitor from "../src/WktVisitor"
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktWriter from "../src/WktWriter";

describe("test Wktvisitor", () => {
    it("test getResult", () => {
        const pvide =  new Point()
        const p = new LineString();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab  = new LineString([a,b]);
        const wktw = new WktVisitor();
        pvide.accept(wktw);
        expect(wktw.getResult()).to.equal("EMPTY");
        p.accept(wktw);
        expect(wktw.getResult()).to.equal("EMPTY");
        a.accept(wktw);
        expect(wktw.getResult()).to.equal("POINT(3 4)");
        ab.accept(wktw);
        expect(wktw.getResult()).to.equal("LINESTRING(3 4, 5 6)");
        
    });

})