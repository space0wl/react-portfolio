import React from "react";
import Chai, { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import chaiEnzyme from "chai-enzyme"

Enzyme.configure({ adapter: new Adapter() });
Chai.use(chaiEnzyme());

import Particle from "../../../src/js/components/Vortex/Particle";

describe("<Vortex /> Particle", () => {
    it("Degrees to radians function to return 0.7853981633974483 for 45 degrees input", () => {
        //Arrange
        let particle = new Particle(1,1,1,'blue', {canvas:{width: 100, height: 100}});
        // Act
        let result = particle.startingRadianFromDegrees(45);
        //Assert
        expect(result).to.equal(0.7853981633974483);
    });
});