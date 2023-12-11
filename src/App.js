import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import User from './components/users/User';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/githubState';
import AlertState from './context/alert/AlertState';

const App = () => {

    return (
      <GithubState>
        <AlertState>
          <Router>
            <div className="App">
              <Navbar title="Github-Finder" />
              <div className='container'>
                <Alert />
                <Routes>
                  <Route path='/' Component={Home} />
                  <Route exact path='/about' Component={About} />
                  <Route path='/user/:login' Component={User}/>
                  <Route Component={NotFound} />
                </Routes>
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    )
  };

export default App;