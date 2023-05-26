import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../Redux/productSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  console.log(cartProducts);
  const handleRemove = (id) => {
    dispatch(
      removeProduct({
        id: id,
      })
    );
  };

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    cartProducts.forEach((product) => {
      sum += parseInt(product.price);
    });
    setTotalPrice(sum);
  }, [removeProduct()]);
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">
                {cartProducts.length} Items
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                category
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                price
              </h3>
            </div>
            {cartProducts.map((product) => {
              return (
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img
                        className="h-24"
                        src={product.image}
                        alt={product.title}
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{product.title}</span>
                      <span className="text-red-500 text-xs capitalize">
                        {product.category}
                      </span>
                      <div
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                        onClick={() => handleRemove(product.id)}
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <span className="text-gray-600 font-semibold mx-2 text-xs">
                      {product.category}
                    </span>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    ${product.price}
                  </span>
                </div>
              );
            })}
            <div>
              <h3
                style={{
                  marginTop: "1%",
                  display: "inline-block",
                  marginRight: "1%",
                }}
              >
                Total Price :
              </h3>
              <span>${totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
