import React from 'react';
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import {Container, Row, Col} from "reactstrap";

function App() {
    let titleProductList = "Product List";
    let titleCategoryList = "Category List";
    return (
        <div>
           <Container>
               <Row>
                   <Navi/>
               </Row>
               <Row>
                   <Col xs = "3">
                       <ProductList title={titleProductList}/>
                   </Col>
                   <Col xs = "9">
                       <CategoryList title={titleCategoryList}/>
                   </Col>
               </Row>
           </Container>
        </div>
    );
}

export default App;
