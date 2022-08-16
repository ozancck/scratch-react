import React, {Component} from 'react';

class ProductList extends Component {
    render() {
        return (
            <div>
                <b3>{this.props.info.title}</b3>
            </div>
        );
    }
}

export default ProductList;