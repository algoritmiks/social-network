import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from "redux";
import { withRouter } from 'react-router-dom';

import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import Navbar from './components/navbar/Navbar';
import DialogsContainer from './components/dialogs/DialogsContainer';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import Login from './components/login/Login';
import { getAuthData } from './redux/authReducer';



class App extends React.Component {
  componentDidMount() {
    this.props.getAuthData();
  };

  render() {
    return (
      <div className="mainWindow">
        <HeaderContainer />
        <Navbar />
        <div className="mainWindow__content">
          <Route path='/profile/:userID?'
            render={() => <ProfileContainer />}
          />
          <Route exact path='/dialogs'
            render={() => <DialogsContainer />}
          />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />

          <Route path='/users'
            render={() => <UsersContainer />}
          />

          <Route path='/login'
            render={() => <Login />}
          />
        </div>
      </div>
    );
  }
}

export default compose(
  withRouter,
  connect( null, {getAuthData} ))(App)