import "mocha";
import { expect } from "chai";

import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test Wktvisitor", () => {
    it("test getResult", () => {
        const pvide =  new Point()
        const p = new LineString();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab  = new LineString([a,b]);
        
        expect(pvide.asText()).to.equal("EMPTY");
        
        expect(p.asText()).to.equal("EMPTY");
      
        expect(a.asText()).to.equal("POINT(3 4)");
      
        expect(ab.asText()).to.equal("LINESTRING(3 4, 5 6)");
        
    });

    it("test get Envelope ", () => {
        const pvide =  new Point()
        const p = new LineString();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab  = new LineString([a,b]);
        
        expect(pvide.getEnvelope().isEmpty())
        expect(!a.getEnvelope().isEmpty())
        expect(p.getEnvelope().isEmpty())
        expect(!ab.getEnvelope().isEmpty())
        
    });

})