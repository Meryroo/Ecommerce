import { CartProvider } from "../context/CartContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./main";
function App() {
    return(
        <>
     <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
   
        </>
    )
}

export default App;
