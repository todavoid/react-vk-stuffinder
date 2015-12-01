import React, {PropTypes, Component} from 'react';
import SearchDeckItem from '../SearchDeckItem/SearchDeckItem';
import CSSModules from 'react-css-modules';
import styles from './search-deck.css';

class SearchDeck extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="main" className="container-fluid">
        <div className="row">
          {this.props.data.map((item, i) => {
            return <SearchDeckItem data={item} key={i}/>
          })}
        </div>
      </div>
    );
  }
}

export default CSSModules(SearchDeck, styles);
