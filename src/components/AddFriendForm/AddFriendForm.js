import React from "react";
import { connect } from "react-redux";
import { AddFriendButton } from "../../App.js";
import { addFriend } from "../../redux/reducers";

import { Collapse } from "react-collapse";

import glamorous from "glamorous";

const Label = glamorous.form({
  padding: "0.5rem",
  width: "100%",
  display: "flex"
});

export class AddFriendForm extends React.Component {
  constructor() {
    super();
    this.state = { name: "", avatar: "", info: "" };
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
          {["name", "info", "avatar"].map(key => (
            <Label>
              {key}:
              <input
                name={key}
                onChange={e => this.updateFormValues(e.target)}
                type="text"
              />
            </Label>
          ))}
          <AddFriendButton
            className="button"
            onClick={e => {
              e && e.preventDefault();
              addFriend(this.state);
              this.setState({ name: "", avatar: "", info: "" });
            }}
          >
            + Add Friend
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
