import "mocha";
import { expect } from "chai";
import WktVisitor from "../src/WktVisitor"
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktWriter from "../src/WktWriter";

describe("test Wktvisitor", () => {
    it("test getResult", () => {
        const pvide =  new Point()
        const EmptyLine= new LineString();
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const ab  = new LineString([a,b]);
        const visitor = new WktVisitor();
        pvide.accept(visitor);
        //run coverage bug ici, il considére que l'argument de equal est "EMPTY"
        expect(visitor.getResult()).to.equal("POINT EMPTY");
        EmptyLine.accept(visitor);
        expect(visitor.getResult()).to.equal("LINESTRING EMPTY");
        a.accept(visitor);
        expect(visitor.getResult()).to.equal("POINT(3 4)");
        ab.accept(visitor);
        expect(visitor.getResult()).to.equal("LINESTRING(3 4, 5 6)");
        
    });

})