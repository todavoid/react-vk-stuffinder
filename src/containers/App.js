import React, {Component} from 'react';
import SearchPanel from '../components/SearchPanel/SearchPanel';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <SearchPanel/>
      </div>
    )
  }
}
