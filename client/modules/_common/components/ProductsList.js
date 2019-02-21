import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductListItem from './ProductListItem';

class ProductList extends Component {
    render() {
        return (
            <div className="bg-gray-100 shadow-inset-1">
                <div className="container-fluid w-75 mx-auto pull-up-50 bg-white rounded position-relative shadow-1">
                    <div className="row">
                        <div className="col p-3">
                            <h2>Our Products</h2>
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.props.products.map(product => <ProductListItem {...product} key={product.id} />)
                        }
                    </div>
                </div>
            </div >
        );
    }
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired
}

export default ProductList;