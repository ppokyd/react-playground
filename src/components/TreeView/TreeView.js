import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TreeView.css';

class TreeNode extends Component {
  
  state = {closed: true}

  onNodeClick(event, item) {
    this.setState({closed: !this.state.closed});
  }

  onNodeSelect(e, item) {
    const selected = this.props.selected;

    if (selected && selected.id === item.id) {
      this.props.onSelect(null);
    } else {
      this.props.onSelect(item);
    }
  }

  getChildrenNodes(item) {
    return (this.state.closed === false && item.children ? <TreeView data={item.children}></TreeView> : '' );
  }

  getNodeCollapseIcon() {
    return (
      <i className="item-icon material-icons" onClick={this.onNodeClick.bind(this)}>
      { this.state.closed ? 'add' : 'remove' }
      </i>
    );
  }

  getNodeIcon(item) {
    return (
      <i className="item-icon material-icons">{ item.icon }</i>
    );
  }

  getSelectedClassName(item) {
    const selected = this.props.selected;
    return selected && selected.id === item.id ? 'selected-item' : '';
  }

  render() {
    const { item } = this.props;

    return (
      <li>
        { item.children ? this.getNodeCollapseIcon() : '' }
        { this.getNodeIcon(item) }
        <div className={"item-name " + this.getSelectedClassName(item) }
             onClick={(e) => this.onNodeSelect(e, item)}>{ item.name }</div>
        { this.getChildrenNodes(item) }
      </li>
    )
  }
}

class TreeView extends Component {
  state = {selected: null};

  onSelect(item) {
    this.setState({selected: item});
    console.log(this.state);
  }

  getNodes(data) {
    return data.map((item, i) => (
      <TreeNode selected={this.state.selected} item={item} key={i} onSelect={this.onSelect.bind(this)}></TreeNode>
    ));
  }

  render() {
    const { data } = this.props;
    return (<ul className="TreeView">{this.getNodes(data)}</ul>);
  }
}

TreeView.propTypes = {
  data: PropTypes.array
};

export default TreeView;