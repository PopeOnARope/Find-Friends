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
        avatar: "https://placekitten.com/g/35/35",
        name: "Jim",
        info:
          "Lorem ipsum dolor sit amet, cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        lat: 32.796421,
        lng: -79.9312164
      },
      {
        avatar: "https://placekitten.com/g/35/36",
        name: "James",
        info:
          "Lorem ipsum dolor sit amet, cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        lat: 32.795421,
        lng: -79.9412164
      },
      {
        avatar: "https://placekitten.com/g/35/34",
        name: "Jenny",
        info:
          "Lorem ipsum dolor sit amet, cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        lat: 32.794421,
        lng: -79.9612164
      }
    ]
  },
  showAddFriendForm: false,
  themes: {
    blue: {
      primaryLight: "#d4d8d4",
      primaryDark: "#326ada",
      fontFamilyH1: "bebas"
    },
    CofC: {
      primaryDark: "#660000",
      primaryLight: "#eee",
      fontFamilyH1: "Lobster"
    },
    mcDonalds: {
      primaryDark: "#E84855",
      primaryLight: "#FFFD82",
      fontFamilyH1: "roboto"
    },
    green: {
      primaryDark: "#28965A",
      primaryLight: "#7CFEF0",
      fontFamilyH1: "Georgia"
    }
  },
  theme: "blue"
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
