import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from "redux";
import { withRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/reduxStore';

import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import UsersContainer from './components/users/UsersContainer';
import Login from './components/login/Login';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));



class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    };

    render() {
        if (!this.props.appInit) {
            return <Preloader />
        }

        return (
            <div className="mainWindow">
                <HeaderContainer />
                <Navbar />
                <div className="mainWindow__content">
                    <Route path='/profile/:userID?'
                        render={withSuspense(ProfileContainer)}
                    />
                    <Route exact path='/dialogs'
                        render={withSuspense(DialogsContainer)}
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

const mapStateToProps = (state) => ({
    appInit: state.app.appInit
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const SocialNetwork = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SocialNetwork