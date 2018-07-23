import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleAddFriendForm } from "./redux/reducers";
import Map from "./components/Map/Map";
import AddFriendForm from "./components/AddFriendForm/AddFriendForm";
import "./App.css";

import glamorous, { ThemeProvider } from "glamorous";

const theme = {
  primaryLight: "#D8D8F6",
  primaryDark: "#B18FCF"
};

const Header = glamorous.div(({ theme }) => ({
  displayName: "Header",
  width: "100%",
  padding: "0.5rem 1rem",
  background: `${theme.primaryLight}`,
  " h1": {
    fontFamily: "bebas",
    color: `${theme.primaryDark}`
  },
  " h2": {
    fontWeight: "normal"
  }
}));

export const AddFriendButton = glamorous.button(({ theme }) => ({
  displayName: "AddFriendButton",
  width: "100%",
  background: `${theme.primaryDark}`,
  padding: "0.5rem",
  color: "#eee"
}));

export class App extends React.Component {
  render() {
    const {
      user: { name, friends },
      toggleAddFriendForm,
      showAddFriendForm
    } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Header>
            <h1> Welcome {name && name}!</h1>
            <h2>Lets find your friends!</h2>
          </Header>
          <Map friends={friends} />
          {!showAddFriendForm && (
            <AddFriendButton className="button" onClick={toggleAddFriendForm}>
              Add a Friend
            </AddFriendButton>
          )}
          <AddFriendForm isOpened={this.state && showAddFriendForm} />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default connect(
  state => {
    console.log(state);
    return state;
  },
  { toggleAddFriendForm }
)(App);
