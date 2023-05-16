import ProductCard from "./ProductCard";
import { Tab, initTE } from "tw-elements";
initTE({ Tab });

const Stepper = ({ newProducts, bestieDeals }) => {
  return (
    <div className="my-12 px-20">
      <div className="mb-5 border-b-4 border-lg-grey w-full">
        <ul
          className="flex justify-center list-none"
          role="tablist"
          data-te-nav-ref
        >
          <li role="presentation">
            <a
              href="#tabs-deals"
              className="block px-7 py-4 text-xs font-bold text-lg-grey focus:isolate data-[te-nav-active]:border-b-4 data-[te-nav-active]:border-pink data-[te-nav-active]:-mb-4 data-[te-nav-active]:text-black"
              style={{ letterSpacing: "0.2em" }}
              data-te-toggle="pill"
              data-te-target="#tabs-deals"
              data-te-nav-active
              role="tab"
              aria-controls="tabs-deals"
              aria-selected="true"
            >
              BESTIE DEALS FOR YOU
            </a>
          </li>
          <li role="presentation">
            <a
              href="#tabs-new"
              className="block px-7 py-4 text-xs font-bold text-grey focus:isolate data-[te-nav-active]:border-b-4 data-[te-nav-active]:border-pink data-[te-nav-active]:-mb-4 data-[te-nav-active]:text-black"
              style={{ letterSpacing: "0.2em" }}
              data-te-toggle="pill"
              data-te-target="#tabs-new"
              role="tab"
              aria-controls="tabs-new"
              aria-selected="false"
            >
              NEW BEAUTY BESTIE
            </a>
          </li>
          <li role="presentation">
            <a
              href="#tabs-must"
              className="block px-7 py-4 text-xs font-bold text-grey focus:isolate data-[te-nav-active]:border-b-4 data-[te-nav-active]:border-pink data-[te-nav-active]:-mb-4 data-[te-nav-active]:text-black"
              style={{ letterSpacing: "0.2em" }}
              data-te-toggle="pill"
              data-te-target="#tabs-must"
              role="tab"
              aria-controls="tabs-must"
              aria-selected="false"
            >
              MUST-HAVE BEAUTIES
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <div
          className="hidden data-[te-tab-active]:block"
          id="tabs-deals"
          role="tabpanel"
          aria-labelledby="tabs-deals-tab"
          data-te-tab-active
        >
          <div
            className="grid grid-cols-5 gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            {newProducts.map((product) => (
              <ProductCard
                id={product.id}
                brandId={product.brandId}
                categoryId={product.categoryId}
                name={product.name}
                stock={product.stock}
                price={product.price}
                key={product.id}
              />
            ))}
          </div>
        </div>
        <div
          className="hidden data-[te-tab-active]:block"
          id="tabs-new"
          role="tabpanel"
          aria-labelledby="tabs-new-tab"
        >
          <div
            className="grid grid-cols-5 gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            {bestieDeals.map((product) => (
              <ProductCard
                id={product.id}
                brandId={product.brandId}
                categoryId={product.categoryId}
                name={product.name}
                stock={product.stock}
                price={product.price}
                key={product.id}
              />
            ))}
          </div>
        </div>
        <div
          className="hidden data-[te-tab-active]:block"
          id="tabs-must"
          role="tabpanel"
          aria-labelledby="tabs-must-tab"
        >
          Belanja produk kecantikan pasti asli dari ratusan brand yang
          berserersertifikasi BPOM.
        </div>
      </div>
    </div>
  );
};

export default Stepper;
