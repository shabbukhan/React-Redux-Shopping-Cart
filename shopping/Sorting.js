import React, { Component } from "react";
import {sortProducts} from '../actions/postsAction';
import {connect} from 'react-redux';

class Sorting extends Component {
  
  // componentDidMount(){
  // this.props.sortProducts(this.props.sorting);
  // }
  render() {
    return (
      <div className="sorting">
        <label> Order by </label>
        <select id='sort'
          className="form-control"
          value={this.props.sort}
          onChange={(e) => {
            this.props.sortProducts(this.props.sorting, e.target.value);
          }}
        >
          <option value="">Select</option>
          <option value="lowest">Lowest to Highest</option>
          <option value="highest">Highest to Lowest</option>
        </select>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   console.log(state.list.filteredItems);
//   sorting: state.list.filteredItems
// });

const mapStateToProps = state =>{
  //console.log('sorting', state.list.items)
  return {
    sorting: state.list.items
  }
}

export default connect(mapStateToProps, { sortProducts })(Sorting);

//export default connect(null, { sortProducts })(Sorting);
//export default Sorting;
