import React, {PropTypes, Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
  }

  _onSearchHandler() {
    var searchValue = this.searchInput.value;
    console.log(searchValue)
    if (!searchValue) {
      return;
    }
  }

  render() {
    var self = this;

    return (
      <div styleName="header" className="container-fluid">
        <h2 styleName="title">Stuffinder</h2>
        <div className="row">
          <div styleName="search-panel" className="input-group col-md-offset-4 col-md-4">
            <input type="text" ref={ (ref) => self.searchInput = ref } className="form-control" placeholder="Search..."/>
            <div className="input-group-btn">
              <button type="button" onClick={self._onSearchHandler.bind(this)} className="btn btn-default">Go!</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(SearchPanel, styles);
