import React, { Component } from "react";

import Button from "../Button/Button";

import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Button>
          <span>primary</span>
        </Button>
      </div>
    );
  }
}
