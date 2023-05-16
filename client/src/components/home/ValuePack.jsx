import ProductCard from "./ProductCard";

const ValuePack = () => {
  return (
    <div className="my-12 px-20">
      <h1 className="pb-12 font-dmserif text-center text-4xl">value pack</h1>
      <div className="inline-grid grid-cols-5 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ValuePack;
