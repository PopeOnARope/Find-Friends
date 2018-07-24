import React from 'react';
import { connect } from 'react-redux';
import { toggleAddFriendForm, updateTheme } from './redux/reducers';
import Map from './components/Map/Map';
import AddFriendForm from './components/AddFriendForm/AddFriendForm';
import './App.css';

import glamorous, { ThemeProvider } from 'glamorous';

const Header = glamorous.div(({ theme }) => ({
	displayName: 'Header',
	padding: '0.5rem 1rem',
	background: `${theme.primaryDark}`,
	' h1': {
		fontFamily: `${theme.fontFamilyH1}`,
		color: `${theme.primaryLight}`
	},
	' h2, p': {
		fontWeight: 'normal',
		color: `${theme.primaryLight}`
	}
}));

export const AddFriendButton = glamorous.button(({ theme }) => ({
	displayName: 'AddFriendButton',
	width: '100%',
	background: `${theme.primaryDark}`,
	padding: '0.5rem',
	color: '#eee'
}));

const AppContainer = glamorous.div({
	background: '#222',
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	displayName: 'AppContainer'
});

const Screen = glamorous.div({
	maxWidth: '480px',
	background: '#eee',
	paddingBottom: '6rem'
});

const Label = glamorous.label({
	width: '100%',
	display: 'inline-block',
	padding: '0.5rem 0rem',
	textAlign: 'center'
});

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
		<AppContainer>
			<Screen>
				<Label>
					Select Branding Theme:
					<select onChange={e => updateTheme(e.target.value)}>
						<option value="blue">blue</option>
						<option value="CofC">CofC</option>
						<option value="green">green</option>
						<option value="mcDonalds">mcDonalds</option>
					</select>
				</Label>
				<Header>
					<h1> Welcome {name && name}!</h1>
					<p>
						Click on the markers below to view information about each friend, or
						add new friends below!
					</p>
				</Header>
				<Map friends={friends} toggleDetails={toggleDetails} />
				{!showAddFriendForm && (
					<AddFriendButton className="button" onClick={toggleAddFriendForm}>
						+ Add a Friend
					</AddFriendButton>
				)}
				<AddFriendForm isOpened={showAddFriendForm} />
			</Screen>
		</AppContainer>
	</ThemeProvider>
);

export default connect(state => state, { toggleAddFriendForm, updateTheme })(
	App
);
