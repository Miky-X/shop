import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../button/button_component";
import CartItem from "../cart_item/cartItem_component";
import { selectCartItems } from "../../store/cart/cartSelector";

import {  CartDropdownContainer, EmptyMessage, CartItems } from "./cartDropdown_styles";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
