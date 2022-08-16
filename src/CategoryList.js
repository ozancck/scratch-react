import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class CategoryList extends Component {
    render() {
        return (
            <div>
                <b3>{this.props.info.title}</b3>
                <ListGroup>
                    <ListGroupItem>OZAN</ListGroupItem>
                    <ListGroupItem>HALİS</ListGroupItem>
                    <ListGroupItem>EVREN</ListGroupItem>
                    <ListGroupItem>PATATES</ListGroupItem>
                    <ListGroupItem>HAZAL İBO</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default CategoryList;