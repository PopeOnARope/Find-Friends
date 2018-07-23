import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { AddFriendForm } from "./AddFriendForm";

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

it("Renders as expected", () => {
  const wrapper = shallow(<AddFriendForm {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});

it("adds a new friend when the add friend button is clicked a second time", () => {
  const addFriend = jest.fn();
  const toggleAddFriendForm = jest.fn();
  const wrapper = shallow(
    <AddFriendForm
      {...mockProps}
      showAddFriendForm={true}
      toggleAddFriendForm={toggleAddFriendForm}
      addFriend={addFriend}
    />
  );
  wrapper.find(".button").simulate("click");
  expect(addFriend).toHaveBeenCalled();
});
