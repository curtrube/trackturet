import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-3">TrackTuret</h1>
              <p className="lead">The Number #1 Issue Tracker</p>
            </div>
          </div>
      </div>
    );
  }
}
