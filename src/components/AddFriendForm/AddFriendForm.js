import React, { Component } from "react";
import { connect } from "react-redux";
import { AddFriendButton } from "../../App.js";
import { addFriend } from "../../redux/reducers";

import { Collapse } from "react-collapse";

import glamorous, { ThemeProvider } from "glamorous";

const Label = glamorous.form({
  padding: "0.5rem",
  width: "100%",
  display: "flex"
});

export class AddFriendForm extends React.Component {
  constructor() {
    super();
    this.state = { name: "", avatar: "" };
  }

  updateFormValues(target) {
    this.setState({ [target.name]: target.value });
  }
  render() {
    const { showAddFriendForm, addFriend } = this.props;
    return (
      <Collapse isOpened={showAddFriendForm}>
        <form name="Add a Friend" style={{ padding: "0.5rem" }}>
          <legend>Fill in the information below</legend>
          <Label>
            Name:
            <input
              name="name"
              onChange={e => this.updateFormValues(e.target)}
              type="text"
            />
          </Label>
          <Label>
            Avatar:
            <input
              name="avatar"
              onChange={e => this.updateFormValues(e.target)}
              type="text"
            />
          </Label>
          <AddFriendButton
            className="button"
            onClick={e => {
              e && e.preventDefault();
              addFriend(this.state);
            }}
          >
            Add Friend
          </AddFriendButton>
        </form>
      </Collapse>
    );
  }
}

const ConnectedComponent = connect(state => state, { addFriend })(
  AddFriendForm
);
export default ConnectedComponent;
