import "mocha";
import { expect } from "chai";
import EnvelopeBuilder from "../src/EnvelopeBuilder";
import Envelope from "../src/Envelope";

describe("test EnvelopeBuilder", () => {
    
    it("test default constructor", () => {
        const envB = new EnvelopeBuilder();
        expect(envB.interX).to.deep.equal([]);
        expect(envB.interX).to.deep.equal([]);
    });

    it("test insertertion", () => {
        const envB = new EnvelopeBuilder();
        envB.insert([0.0,1.0])
        expect(envB.interX[0]).to.equal(0.0);
        expect(envB.interY[0]).to.equal(1.0);
    });
    
    it("test build", () => {
        const envB = new EnvelopeBuilder();
        envB.insert([0.0,1.0])
        let env =  envB.build()
        expect(env.getXmax()).to.equal(1.0);
        expect(env.getYmax()).to.equal(1.0);
        expect(env.getXmin()).to.equal(0.0);
        expect(env.getYmin()).to.equal(0.0);
    });
    

});