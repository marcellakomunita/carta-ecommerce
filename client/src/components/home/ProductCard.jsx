import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, brandId, categoryId, name, price, stock } = props;
  const url = name
    ? id
      ? id +
        "-" +
        name
          .toLowerCase()
          .replace(/\([^()]*\)/g, "")
          .replace(/[^a-zA-Z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "")
      : "/"
    : "/";
  return (
    <Link to={`/details/${url}`}>
      <div className="product bg-white py-4 px-2 rounded-sm font-urbanist">
        <div className="relative ">
          <div className="btns absolute inset-y-2 left-0 w-full flex justify-between">
            <div className="fav-btn bg-dk-pink w-12 h-12 rounded-full flex justify-center items-center">
              <p className="text-white font-bold text-md">25%</p>
            </div>
            <div className="fav-btn">
              <span className="">
                <button type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="#111111"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-6 z-10"
                  >
                    <path
                      d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
                      strokeWidth="1"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </button>
              </span>
            </div>
          </div>
          <div>
            <img
              src="/public/images/product.png"
              alt="product"
              className="mb-6"
            />
            <p className="font-bold" style={{ letterSpacing: "0.3em" }}>
              {brandId}
            </p>
            <p className="line-clamp-2 text-dk-grey font-light py-1">{name}</p>
            <p className="text-grey">
              <del>Rp {price}</del>
            </p>
            <p className="text-pink font-bold">Rp 269.450</p>
            <p className="text-pink">-15%</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
