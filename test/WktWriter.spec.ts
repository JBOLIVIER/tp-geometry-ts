import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktWriter from "../src/WktWriter";

describe("test WktWriter", () => {
    it("test write", () => {
        const pvide =  new Point()
        const p = new LineString();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab  = new LineString([a,b]);
        const wktw = new WktWriter()

        expect(wktw.write(pvide)).to.equal("EMPTY")
        expect(wktw.write(p)).to.equal("EMPTY")
        expect(wktw.write(a)).to.equal("POINT(3 4)")
        expect(wktw.write(ab)).to.equal("LINESTRING(3 4, 5 6)")
        
    });

})
