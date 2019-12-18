import React, { Component } from "react";

import Button from "../Button/Button";

import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <div className="buttons">
        <h2 className="buttons__title">Color and States:</h2>
        <div className="buttons__row">
          <Button color="primary">
            <span>Primary</span>
          </Button>
          <Button color="secondary">
            <span>Secondary</span>
          </Button>
          <Button color="danger">
            <span>Danger</span>
          </Button>
        </div>

        <div className="buttons__row">
          <Button color="primary" loading={true}>
            <span>Primary</span>
          </Button>
          <Button color="secondary" loading={true}>
            <span>Secondary</span>
          </Button>
          <Button color="danger" loading={true}>
            <span>Danger</span>
          </Button>
        </div>
        <div className="buttons__row">
          <Button color="disabled" loading={true}>
            <span>Primary</span>
          </Button>
          <Button color="disabled" loading={true}>
            <span>Secondary</span>
          </Button>
          <Button color="disabled" loading={true}>
            <span>Danger</span>
          </Button>
        </div>
        <div className="buttons__row">
          <Button color="disabled">
            <span>Primary</span>
          </Button>
          <Button color="disabled">
            <span>Secondary</span>
          </Button>
          <Button color="disabled">
            <span>Danger</span>
          </Button>
        </div>
        <h2 className="buttons__title">Sizes</h2>
        <div className="buttons__row">
          <Button color="primary" size="large">
            <span>Primary</span>
          </Button>
          <Button color="secondary" size="medium">
            <span>Secondary</span>
          </Button>
          <Button color="danger" size="small">
            <span>Danger</span>
          </Button>
        </div>
        <h2 className="buttons__title">Icons</h2>
        <div className="buttons__row">
          <Button color="primary" size="large">
            <span>Primary</span>
          </Button>
          <Button color="secondary" size="medium">
            <span>Secondary</span>
          </Button>
          <Button color="danger" size="small">
            <span>Danger</span>
          </Button>
        </div>
      </div>
    );
  }
}
