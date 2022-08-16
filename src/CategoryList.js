import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class CategoryList extends Component {
    state = {
        categories: [
            {categoryId: 1, categoryName: "OZAN"},
            {categoryId: 2, categoryName: "HALİS"},
        ]
    }

    render() {
        return (
            <div>
                <b3>{this.props.info.title}</b3>
                <ListGroup>
                    {this.state.categories.map(category =>
                        <ListGroupItem key={category.categoryId}>{category.categoryName}</ListGroupItem>
                    )}

                </ListGroup>
            </div>
        );
    }
}

export default CategoryList;