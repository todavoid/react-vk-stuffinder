import React, {PropTypes, Component} from 'react';
import BaseComponent from '../BaseComponent';
import CSSModules from 'react-css-modules';
import styles from './search-panel.css';

class SearchPanel extends BaseComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="main-container" className="container-fluid">
        <h2 styleName="title">Stuffinder</h2>
        <div className="row">
          <div styleName="input-group" className="input-group col-md-offset-4 col-md-4">
            <input type="text" className="form-control" placeholder="Search..."/>
            <div className="input-group-btn">
              <button type="button" className="btn btn-default">Go!</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(SearchPanel, styles);
