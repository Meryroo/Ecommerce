const Product = (product) => {
  return (
    <figure>
      <img src={product.image} alt="imagen"></img>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <button>Añadir al carrito</button>
    </figure>
  );
};

export default Product;
