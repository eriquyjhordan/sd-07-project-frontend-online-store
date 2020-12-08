import React from 'react';

import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { attribute } = this.props;
    return (
      <div>
        <div>
          {attribute.name}
        </div>
        <div>
          {attribute.value_name}
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  attribute: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value_name: PropTypes.any.isRequired,
  }).isRequired,
};

export default ProductDetails;
