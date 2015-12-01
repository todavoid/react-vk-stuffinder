import React, {PropTypes, Component} from 'react';
import BaseComponent from '../BaseComponent';
import SearchDeckItem from '../SearchDeckItem/SearchDeckItem';
import CSSModules from 'react-css-modules';
import styles from './search-deck.css';

class SearchDeck extends BaseComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      data: this.props.data
    });
  }

  render() {
    return (
      <div styleName="main" className="container-fluid">
        <div className="row">
          {this.state.data.map((item, i) => {
            return <SearchDeckItem data={item} key={i}/>
          })}
        </div>
      </div>
    );
  }
}

export default CSSModules(SearchDeck, styles);
