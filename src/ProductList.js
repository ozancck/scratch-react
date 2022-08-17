import React, {Component} from 'react';

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <b3>{this.props.info.title}-{this.props.currentCategory}</b3>
            </div>
        );
    }
}
