import React, { Component } from 'react';

import TreeView from '../components/TreeView/TreeView';

class Tree extends Component {
  state = {}

  _generateData() {
    return Array.apply(null, Array(5)).map((item, index) => {
      return {
        id: String(new Date().getTime() + Math.random()),
        name: `Node ${index}`,
        icon: 'account_circle',
        actions: [
          // {callback: this.onDelete, icon: 'delete'},
          // {callback: this.onCopy, icon: 'content_copy'}
        ],
        children: Array.apply(null, Array(5)).map((child, i) => {
          return {
            id: String(new Date().getTime() + Math.random()),
            name: `Node ${i}`,
            icon: 'dns',
            actions: [
              // {callback: this.onDelete, icon: 'delete'},
              // {callback: this.onCopy, icon: 'content_copy'}
            ],
            children: Array.apply(null, Array(5)).map((c, ind) => {
              return ({
                name: `Child ${ind}`, icon: 'play_circle_outline',
                id: ind === 0 && i === 2 && index === 3 ? this.selectedId : String(new Date().getTime() + Math.random())
              });
            })
          };
        })
      };
    });
  }

  render() {
    return ( <TreeView data={this._generateData()}></TreeView> );
  }
}
 
export default Tree;