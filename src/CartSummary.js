import React, {Component} from 'react';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";

class CartSummary extends Component {
    render() {
        return (
            <div>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Your Cart - {this.props.cart.length}
                    </DropdownToggle>
                    <DropdownMenu right>
                        {
                            this.props.cart.map(cartItem => (
                                <DropdownItem key={cartItem.product.id}>
                                    {cartItem.product.productName}
                                    <Badge color="success">{cartItem.quantity}> </Badge>
                                </DropdownItem>
                            ))
                        }
                        <DropdownItem divider/>
                        <DropdownItem>
                            Reset
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        );
    }
}

export default CartSummary;