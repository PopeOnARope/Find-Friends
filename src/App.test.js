import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { App } from "./App";

configure({ adapter: new Adapter() });

const mockProps = {
  user: {
    name: "John Pope",
    friends: [
      {
        avatar: "https://placekitten.com/g/25/26",
        name: "Jim",
        lat: 32.796421,
        lng: -79.9312164
      }
    ]
  },
  showAddFriendForm: false
};

it("renders without crashing", () => {
  const wrapper = shallow(<App {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});

it("shows the add friend form", () => {
  const wrapper = shallow(<App {...mockProps} showAddFriendForm={true} />);
  expect(wrapper).toMatchSnapshot();
});

it("toggles the new friend form when the add friend button is clicked", () => {
  const toggleAddFriendForm = jest.fn();
  const wrapper = shallow(
    <App {...mockProps} toggleAddFriendForm={toggleAddFriendForm} />
  );
  wrapper.find(".button").simulate("click");
  expect(toggleAddFriendForm).toHaveBeenCalled();
  expect(wrapper).toMatchSnapshot();
});
