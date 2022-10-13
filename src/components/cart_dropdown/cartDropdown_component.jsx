import { useContext } from "react";

import { CartContext } from "../../contexts/cart_context";

import Button from "../button/button_component";
import CartItem from "../cart_item/cartItem_component";

import "./cartDropdown_component.scss";

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;