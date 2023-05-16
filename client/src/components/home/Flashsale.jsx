import ProductCard from "./ProductCard";

const Flashsale = () => {
  const times = ["00:00", "15:00", "18:00"];
  return (
    <div className="">
      <div className="px-20 py-3 mb-2 text-xs flex justify-between items-center bg-lg-pink">
        <div className="inline-grid grid-cols-3 gap-4">
          {times.map((time) => {
            return (
              <button
                key={time}
                className="bg-dk-pink py-2 px-8 text-white font-extrabold tracking-wide rounded-md flex justify-center"
                style={{ letterSpacing: "0.1em" }}
              >
                {time}
              </button>
            );
          })}
        </div>
        <div className="w-full flex justify-end">
          <p
            className="mr-2 font-bold font-urbanist"
            style={{ letterSpacing: "0.2em" }}
          >
            NOW LIVE
          </p>
          <p>
            Ends in <span className="text-dk-pink">09:16:10</span>
          </p>
        </div>
      </div>
      <div className="bg-[url('/public/images/flashsale-bg.webp')] pt-4 pb-12">
        <div className="px-20 flex justify-between mb-8">
          <img src="/public/images/flashsale-icon.webp" alt="flashsale" />
          <span className="flex items-center">
            <button className="bg-pink text-white text-xs font-bold tracking-wide px-12 py-2 rounded-md">
              SEE ALL
            </button>
          </span>
        </div>
        <div className="px-20 inline-grid grid-cols-5 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Flashsale;
("");
