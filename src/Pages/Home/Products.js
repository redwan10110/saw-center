import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ProductCard from "./ProductCard";

const Products = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("productsAvailable", () =>
    fetch(`https://saw-center.herokuapp.com/products`).then((res) => res.json())
  );
  if(isLoading){
      return <Loading></Loading>
  }
//   console.log(products);
  return (
    <div>
      <h1 className="text-center text-4xl text-secondary my-10 font-bold">Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5 lg:px-12 px-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
