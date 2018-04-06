import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import SideMenu from './SideMenu/SideMenu';

import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';
import APP_STATES from './app.states';
console.log(APP_STATES);

class App extends Component {
  render() {
    return (
      <div className="App">
        <UIRouter plugins={[pushStateLocationPlugin]} states={APP_STATES}>
          <div>
            <Header></Header>
            <div className="row">
              <div className="col-2">
                <SideMenu></SideMenu>
              </div>
              <div className="col-10 content">
                <UIView/>
              </div>
            </div>
          </div>
        </UIRouter>
      </div>
    );
  }
}

export default App;
