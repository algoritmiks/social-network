import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';


function App(props) {
  return (
    <div className="mainWindow">
      <BrowserRouter>
      <Header />
      <Navbar />
      <div className="mainWindow__content">
          <Route path='/profile' render={ () => <Profile addPost={props.addPost} 
            updateNewPostText={props.updateNewPostText}
            profileComponent = {props.state.profileComponent} /> } />
          <Route exact path='/dialogs' render={ () => <Dialogs state = {props.state.dialogsComponent} /> } />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
