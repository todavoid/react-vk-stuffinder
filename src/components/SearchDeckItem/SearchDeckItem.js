import React, {PropTypes, Component} from 'react';
import BaseComponent from '../BaseComponent';
import CSSModules from 'react-css-modules';
import styles from './search-deck-item.css';

class SearchDeckItem extends BaseComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      author: this.props.data.author,
      title: this.props.data.title,
      downloadLink: this.props.data.downloadLink,
      type: this.props.data.type,
      size: this.props.data.size
    });
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
