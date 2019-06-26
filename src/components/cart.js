import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
  componentDidMount() {
    this.props.myStore.subscribe(() => this.forceUpdate());
  }

  render () {
    const count = this.props.myStore.getState();
    return (
      <div id="cart">
        {count} Items - Component Cart
      </div>
    );
  }
}
Cart.propTypes = {
  myStore: PropTypes.object,
};
export default Cart;