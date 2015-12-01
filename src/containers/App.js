import React, {Component} from 'react';
import SearchPanel from '../components/SearchPanel/SearchPanel';
import SearchDeck from '../components/SearchDeck/SearchDeck';

var itemsData = [
  {author: 'Stoyan Stefanov', title: 'React: Up & Running', downloadLink: '', size: '2mb', type: 'PDF'},
  {author: 'Stoyan Stefanov', title: 'Patterns', downloadLink: '', size: '3mb', type: 'EPUB'}
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsData
    }
  }
  render() {
    return (
      <div className="app">
        <SearchPanel/>
        <SearchDeck data={this.state.itemsData} />
      </div>
    )
  }
}
