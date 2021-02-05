import React, { Component } from 'react';

export default class CatComponent extends Component {
  render() {
    return (
      <div className="bar" id="cat">
        <img src="./public/cat.gif" />
      </div>
    );
  }
}
