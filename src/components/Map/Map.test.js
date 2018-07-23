import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ComposedComponent as Map } from "./Map";

configure({ adapter: new Adapter() });

const mockProps = {
  friends: [
    {
      avatar: "https://placekitten.com/g/25/26",
      name: "Jim",
      lat: 32.796421,
      lng: -79.9312164
    }
  ],
  toggleDetails: jest.fn()
};

it("Renders as expected", () => {
  const wrapper = shallow(<Map {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});
