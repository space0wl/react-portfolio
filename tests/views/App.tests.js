import React from "react"; // eslint-disable-line no-unused-vars
import Chai, { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import chaiEnzyme from "chai-enzyme";
import {describe, it} from "mocha";

Enzyme.configure({ adapter: new Adapter() });
Chai.use(chaiEnzyme());

import App from "../../src/js/views/App";

describe("<App />", () => {
    it("Renders single h1", () => {
        //Arrange
        const wrapper = shallow(<App />);

        //Act
        const children = wrapper.children();

        //Assert
        expect(children).to.have.length(3);
    });
});