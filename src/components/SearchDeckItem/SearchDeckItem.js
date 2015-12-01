import React, {PropTypes, Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './search-deck-item.css';

class SearchDeckItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {author, title, downloadLink, type, size} = this.props.data;
    return (
      <div styleName="item" className="thumbnail">
        <img src="https://cdn2.iconfinder.com/data/icons/simple-files/326/PDF-2.png"/>
        <div className="caption">
          <h4>{title}</h4>
          <p>{author}</p>
          <a href="#" styleName="button" className="btn btn-primary">Download</a>
        </div>
      </div>
    );
  }
}

export default CSSModules(SearchDeckItem, styles);
