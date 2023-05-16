const SociollaExclusive = () => {
  return (
    <div className="my-12 px-20">
      <h1 className="pb-12 font-dmserif text-center text-4xl">
        sociolla exclusive
      </h1>
      <div className="inline-grid grid-cols-3 gap-8">
        <img
          src="/public/images/banners/new-crush-innisfree.webp"
          alt="new-crush-innisfree"
          className="rounded-md"
        />
        <img
          src="/public/images/banners/keana-extra-voucher.webp"
          alt="keana-extra-voucher"
          className="rounded-md"
        />
        <img
          src="/public/images/banners/acwell-extra-voucher.webp"
          alt="acwell-extra-voucher"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default SociollaExclusive;
