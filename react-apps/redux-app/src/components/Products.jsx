import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../service/products.service";

function Products() {
  let dispatch = useDispatch();
  let { list } = useSelector((state) => state.myProducts);

  useEffect(() => {
    dispatch(getProducts(1));
  }, []);

  return (
    <div>
      Products
      <ul>
        {list.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Products;
