import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchProduct from "../../containers/fetchProduct";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchProduct);
  const product = results.data;

  const [countProduct, setCountProduct] = useState(0);
  const [variantShadeProduct, setVariantShadeProduct] = useState(0);
  const [variantSizeProduct, setVariantSizeProduct] = useState(0);
  const [priceProduct, setPriceProduct] = useState(0);

  const handleAddClick = (e) => {
    setCountProduct(countProduct + 1);
  };
  const handleMinClick = (e) => {
    setCountProduct(countProduct - 1);
  };

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="px-20 my-12 text-md">
        <div className="flex">
          <div>
            <img src="/public/images/product.png" alt="product" />
          </div>

          <div className="font-urbanist">
            <div>
              <p className="font-bold" style={{ letterSpacing: "0.15em" }}>
                {product.brandId}
              </p>
              <p className="text-xl text-dk-grey tracking-wider my-2">
                {product.name}
              </p>
              <p
                className="bg-lg-pink px-6 py-1 rounded-xl text-xs font-bold inline my-12"
                style={{ letterSpacing: "0.2em" }}
              >
                BUNDLE
              </p>
              <p className="text-dk-pink text-2xl font-lato pb-2 mt-4">
                <del className="text-grey text-sm">{product.price}</del>{" "}
                <span className="font-md">Rp 106.350</span>
              </p>
              <p className="text-dk-pink">-25%</p>
            </div>

            <div className="flex items-center">
              <p className="text-xs text-grey">QUANTITY</p>
              <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 h-10 w-32">
                <button
                  class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-0"
                  onClick={handleMinClick}
                >
                  <span class="m-auto text-2xl font-thin">−</span>
                </button>
                <input
                  type="number"
                  class="outline-0 focus:outline-0 text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-0"
                  defaultValue={countProduct}
                ></input>
                <button
                  class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                  onClick={handleAddClick}
                >
                  <span class="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
