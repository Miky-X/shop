import Button from "../button/button_component";

import "./cartDropdown_component.scss";

const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" />
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;