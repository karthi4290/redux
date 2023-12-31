import { addToCart, clearCart } from "./utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();

    const handleAddCart = () => {
        dispatch(addToCart('pizza'))
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }


    return (
        <>
            <h1>{cartItems.length}</h1>
            <button onClick={handleAddCart} >Add</button>
            <button onClick={handleClearCart}>Clear</button>
        </>

    )
}

export default Cart;