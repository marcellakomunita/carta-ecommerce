import HeaderDropdown from "./HeaderDropdown";

const Header = () => {
  return (
    <header className="text-sm w-full px-20 py-2.5 border border-lg-grey fixed bg-white z-30">
      <div className="header-top flex items-center justify-between mb-5">
        <h1 className="text-2xl font-playfair tracking-wider mr-8">
          socio<i>ll</i>a
        </h1>
        <div className="search-bar w-full">
          <form action="/" method="get">
            <div className="relative">
              <input
                className="border border-lg-grey px-2 py-2.5 text-md w-full font-urbanist"
                type="text"
                name="search"
                id="search"
                placeholder="SEARCH FOR PRODUCTS"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button type="submit" className="p-1">
                  <svg
                    fill="none"
                    stroke="#484848"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
            </div>
          </form>
        </div>
        <nav className="ml-5 w-full font-urbanist text-xs">
          <ul className="flex list-none" style={{ justifyContent: "end" }}>
            <li>
              <a href="/">LOGIN WITH SO.CO</a>
            </li>
            <li className="ml-3.5">
              <a href="/" className="flex items-center inset-y-0 ">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="#484848"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mr-2 ml-7"
                >
                  <path d="M18.037,18.517L16.787,4.646c-0.034-0.38-0.355-0.672-0.735-0.672h-2.1c-0.258-1.968-1.93-3.499-3.967-3.499c-2.039,0-3.71,1.531-3.967,3.499H3.921c-0.381,0-0.7,0.291-0.735,0.672L1.915,18.72c-0.02,0.206,0.049,0.411,0.19,0.564c0.138,0.152,0.338,0.241,0.545,0.241h14.67c0.012-0.002,0.02-0.002,0.03,0c0.408,0,0.738-0.331,0.738-0.738C18.088,18.692,18.07,18.601,18.037,18.517z M9.985,1.951c1.225,0,2.25,0.87,2.49,2.023h-4.98C7.735,2.821,8.76,1.951,9.985,1.951zM3.457,18.049l1.139-12.6h10.782l1.135,12.6H3.457z"></path>
                </svg>
                <p>MY BAG (0)</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-bottom flex items-center justify-between">
        <nav className="flex-1">
          <div className="flex flex-row list-none w-full flex justify-between font-semibold">
            <div className="hover:text-pink group inline-block">
              <button className="outline-none focus:outline-none ">
                <span className="pr-1 font-semibold flex-1">Categories</span>
              </button>
              <HeaderDropdown />
            </div>
            <div className="hover:text-pink">
              <a href="/">Brands</a>
            </div>
            <div className="hover:text-pink">
              <a href="/">Promotions</a>
            </div>
            <div className="hover:text-pink">
              <a href="/">New Arrivals</a>
            </div>
            <div className="hover:text-pink">
              <a href="/">e-Gift Cards</a>
            </div>
          </div>
        </nav>
        <div className="flex-1 grid justify-items-end w-full font-urbanist">
          <p>THIS IS PROMOTION TEXT :D</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
