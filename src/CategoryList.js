import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class CategoryList extends Component {
    state = {
        categories: [
            {categoryId: 1, categoryName: "OZAN"},
            {categoryId: 2, categoryName: "HALİS"},
        ],
        currentCategory: ""
    }
    changeCategory=(category)=>{
        this.setState({currentCategory: category.categoryName})
    }
    render() {
        return (
            <div>
                <b3>{this.props.info.title}</b3>
                <ListGroup>
                    {this.state.categories.map(category =>
                        <ListGroupItem onClick={()=> this.changeCategory(category) } key={category.categoryId}>{category.categoryName}</ListGroupItem>
                    )}

                </ListGroup>
                <h4>{this.state.currentCategory}</h4>
            </div>
        );
    }
}

export default CategoryList;