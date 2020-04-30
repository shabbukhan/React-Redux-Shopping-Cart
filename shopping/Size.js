import React, { Component } from "react";
import {connect} from 'react-redux';
import {filterBySize} from '../actions/postsAction'

class Size extends Component {
  render() {
    return (
      <fieldset className="sizes">
        <legend>Filter by Size</legend>
        <label htmlFor="small">Small</label>
        <input
          id="small"
          type="checkbox"
          name="size"
          value="Small"
          onChange={(e) => {
            this.props.filterBySize(this.props.preState, this.props.filterbysize);
          }}
        />
        <br />
        <br />

        <label htmlFor="medium">Medium</label>
        <input
          id="medium"
          type="checkbox"
          name="size"
          value="Medium"
          onChange={(e) => {
            this.props.filterBySize(this.props.preState, this.props.filterbysize);
          }}
        />
        <br />
        <br />

        <label htmlFor="large">Large</label>
        <input
          id="large"
          type="checkbox"
          name="size"
          value="Large"
          onChange={(e) => {
            this.props.filterBySize(this.props.preState, this.props.filterbysize);
          }}
        />
      </fieldset>
    );
  }
}

const mapStateToProps = state =>{
  //console.log('sorting', state.list.items)
  return {
    filterbysize: state.list.items,
    preState: state.list.cloneItems
  }
}

export default connect(mapStateToProps, { filterBySize })(Size);
//export default Size;
