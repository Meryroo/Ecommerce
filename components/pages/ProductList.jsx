import Product from "./Product";

const ProductList = ({ products }) => {
  return products.map((product) => {
    return (
      <div className="outlet" key={product}>
        <Product product={product} />
      </div>
    );
  });
};

export default ProductList;
