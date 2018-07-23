import React from "react";
import { connect } from "react-redux";
import { toggleAddFriendForm, updateTheme } from "./redux/reducers";
import Map from "./components/Map/Map";
import AddFriendForm from "./components/AddFriendForm/AddFriendForm";
import "./App.css";

import glamorous, { ThemeProvider } from "glamorous";

const Header = glamorous.div(({ theme }) => ({
  displayName: "Header",
  width: "100%",
  padding: "0.5rem 1rem",
  background: `${theme.primaryDark}`,
  " h1": {
    fontFamily: `${theme.fontFamilyH1}`,
    color: `${theme.primaryLight}`
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

export const App = ({
  user: { name, friends },
  toggleAddFriendForm,
  showAddFriendForm,
  updateTheme,
  theme,
  themes,
  toggleDetails
}) => (
  <ThemeProvider theme={themes[theme]}>
    <React.Fragment>
      <Header>
        <h1> Welcome {name && name}!</h1>
        <h2>Let&apos;s find your friends!</h2>
      </Header>
      <Map friends={friends} toggleDetails={toggleDetails} />
      {!showAddFriendForm && (
        <AddFriendButton className="button" onClick={toggleAddFriendForm}>
          + Add a Friend
        </AddFriendButton>
      )}
      <AddFriendForm isOpened={showAddFriendForm} />
      <label>
        Select Branding Theme:
        <select onChange={e => updateTheme(e.target.value)}>
          <option value="blue">blue</option>
          <option value="CofC">CofC</option>
          <option value="green">green</option>
          <option value="mcDonalds">mcDonalds</option>
        </select>
      </label>
    </React.Fragment>
  </ThemeProvider>
);

export default connect(state => state, { toggleAddFriendForm, updateTheme })(
  App
);
