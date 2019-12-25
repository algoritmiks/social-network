import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import DialogsContainer from './components/dialogs/DialogsContainer';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';


function App() {
  return (
    <div className="mainWindow">
      <Header />
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
          render={ () => <UsersContainer /> } 
        />
      </div>
    </div>
  );
}

export default App;
