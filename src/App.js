import React from 'react';
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
function App() {
    return (
        <div>
            <Navi></Navi>
            <ProductList></ProductList>
            <CategoryList></CategoryList>

        </div>
    );
}

export default App;
