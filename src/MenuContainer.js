import React, { Component } from "react";
import MenuButton from './MenuButton.js';
import Menu from './Menu.js';

class MenuContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    console.log("clicked");
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
        visible: !this.state.visible
    });
  }

  render() {
    return (
      <>
      <MenuButton handleMouseDown={this.handleMouseDown}/>
      <Menu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>

      <div>
        <div>
          <p>Can you spot the item that does not belong?</p>
          <ul>
            <li>Ironman</li>
            <li>Spiderman</li>
            <li>Superman</li>
            <li>Thor</li>
            <li>Captain America</li>
            <li>Hulk</li>
            <li>Black Widow</li>
            <li>Scarlett Witch</li>
          </ul>
        </div>
      </div>
      </>
    );
  }
}

export default MenuContainer;