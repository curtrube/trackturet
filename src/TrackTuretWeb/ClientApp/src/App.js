import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Issue } from './components/Issue';
import { Create } from './components/Create';
import { Detail } from './components/Detail';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/issues' component={Issue} />
        <Route path='/create' component={Create} />
        <Route path='/details' component={Detail} />
      </Layout>
    );
  }
}
