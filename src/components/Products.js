import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts_API = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts_API();
  }, []);

  return (
    <>
      <div className="flex flex-col text-center w-full mt-20">
        <h1 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 capitalize">
          Products
        </h1>
        <p className="sm:text-3xl text-2xl font-medium title-font text-gray-900 capitalize">
          most popular products
        </p>
      </div>
      <div>
        <section id="products" className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto ">
            <div className="flex flex-wrap -m-4 ">
              {products.map((product) => {
                return (
                  <Link
                    to={`/products/${product.id}`}
                    className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-sm"
                  >
                    <a className="block relative h-48 rounded overflow-hidden cursor-pointer">
                      <img
                        alt={product.title}
                        className=" object-contain object-center w-full h-full block"
                        src={product.image}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                        {product.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {product.title}
                      </h2>
                      <p className="mt-1">${product.price}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
