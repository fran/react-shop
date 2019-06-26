import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
  handleAddToCart = () => {
    this.props.myStore.dispatch({
        type: 'INCREMENT',
      });
  }
  componentDidMount() {
    this.props.myStore.subscribe(() => this.forceUpdate());
  }

  render() {

    return (
        <div>
          <div className='ui unstackable items'>
            Component Product List
          </div>
          <button onClick={this.handleAddToCart}>Add to Cart!</button>
        </div>
    );
  }
}

ProductList.propTypes = {
  myStore: PropTypes.object,
};
export default ProductList;