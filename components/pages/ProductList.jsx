
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import Product from "./Product";


const ProductList = () => {
  const {products} = useContext(CartContext) ;
  /* const { products} = useContext(CartContext)
  console.log(products) */

  return (<div >ProductList
{products.map((product) =>{
  return (
   <Product key={product.id} product={product}/>
  )
})}
  </div>);
};



export default ProductList;
