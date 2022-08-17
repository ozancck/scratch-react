import React, {Component} from 'react';
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Container, Row, Col} from "reactstrap";

export default class App extends Component {

    state= {currentCategory: ""}

    changeCategory=category=>{
        this.setState({currentCategory: category.categoryName})
    }

    render() {
        let productInfo = {title: "Product List"}
        let categoryInfo = {title: "Category List"}
        return (
            <div>
                <Container>
                    <Row>
                        <Navi/>
                    </Row>
                    <Row>
                        <Col xs = "3">
                            <ProductList currentCategory={this.state.currentCategory} info={productInfo}/>
                        </Col>
                        <Col xs = "9">
                            <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}