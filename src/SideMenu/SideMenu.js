import React, { Component } from 'react';

import './SideMenu.css';

import { UISref, UISrefActive } from '@uirouter/react';

class SideMenu extends Component {
  state = {}
  render() {
    return (
      <div className="SideMenu">
        <ul className="nav flex-column">
          <UISrefActive class="active">
            <li className="nav-item">
              <UISref to="tree">
                <a className="nav-link">Tree View</a>
              </UISref>
            </li>
          </UISrefActive>
        </ul>
      </div>
    );
  }
}
 
export default SideMenu;