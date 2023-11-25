const Products = ({ handbags }) => (
  <div className="products">
    {(handbags || []).map((item, i) => (
      <div className="product" key={i}>
        <div className="product__brand">{item.brand}</div>
        <div className="product__price">{item.price}</div>
      </div>
    ))}
  </div>
);
export default Products;
