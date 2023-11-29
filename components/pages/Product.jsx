const Product = (product) => {
  return (
    <figure>
      <img src={product.image} alt="imagen"></img>
      <h2>{product.Title}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </figure>
  );
};

export default Product;
