import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import {
    StyledCartContainer,
    DecrementButton,
    IncrementButton,
    ItemQuantity,
    ItemTitle,
    RemoveButton
  } from "./ShoppingCart.style"

const ShoppingCart = () => {
    const {cart, updateQuantity, removeFromCart} = useContext(CartContext)
return(
    <div>
    <h2>Shopping Cart</h2>
    {cart.length === 0 && <p>No items in cart</p>}
    {cart.map((item)=>{
        <StyledCartContainer key={item.id}>
    <ItemTitle>{item.title}</ItemTitle> 
    <ItemQuantity>Quantity:{item.quantity}</ItemQuantity>
    <IncrementButton onClick={() =>updateQuantity(item.id,item.quantity +1 )}>+</IncrementButton>
    <DecrementButton onClick={() =>updateQuantity(item.id, item.quantity -1 )}>-</DecrementButton>
    <RemoveButton onClick={() => removeFromCart(item.id)}>Delete</RemoveButton>

    </StyledCartContainer>
    })}
    </div>
)
}

export default ShoppingCart;