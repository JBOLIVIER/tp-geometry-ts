import "mocha";
import { expect } from "chai";
import Envelope from "../src/Envelope";


describe("test Envelope", () => {
    
    it("test default constructor", () => {
        const env = new Envelope();
        expect(isNaN(env.getXmax()));
        expect(isNaN(env.getYmax()));
        expect(isNaN(env.getXmin()));
        expect(isNaN(env.getYmin()));
    });

    it("test constructor with coordinate", () => {
        const env = new Envelope([0.0,0.0],[1.0,1.0]);
        expect(env.getXmax()).to.equal(1.0);
        expect(env.getYmax()).to.equal(1.0);
        expect(env.getXmin()).to.equal(0.0);
        expect(env.getYmin()).to.equal(0.0);
    });
    it("test ToString", () => {
        const env = new Envelope([0.0,0.0],[1.0,1.0]);
        expect(env.toString())
    });
    it("test Emptiness", () => {
        const envv = new Envelope();
        const env = new Envelope([0.0,0.0],[1.0,1.0]);
        expect(envv.isEmpty())
        expect(!env.isEmpty())

    });
});