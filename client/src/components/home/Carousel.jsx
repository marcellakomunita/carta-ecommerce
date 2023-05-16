const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="relative my-12 px-20 "
      data-te-carousel-init
      data-te-carousel-slide
    >
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative float-left -mr-[100%] w-full"
          data-te-carousel-item
          data-te-carousel-active
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
            className="block w-full"
            alt="Wild Landscape"
          />
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full"
          data-te-carousel-item
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
            className="block w-full"
            alt="Camera"
          />
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full"
          data-te-carousel-item
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
            className="block w-full"
            alt="Exotic Fruits"
          />
        </div>

        <button
          className="absolute top-0 bottom-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none"
          type="button"
          data-te-target="#carouselExampleIndicators"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#8C8582"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none"
          type="button"
          data-te-target="#carouselExampleIndicators"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#8C8582"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>

      <div
        className="mt-3 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        <button
          type="button"
          data-te-target="#carouselExampleIndicators"
          data-te-slide-to="0"
          data-te-carousel-active
          className="bg-lg-grey focus:bg-pink hover:bg-pink mx-[3px] box-content h-3 w-3 rounded-full flex-initial cursor-pointer"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-te-target="#carouselExampleIndicators"
          data-te-slide-to="1"
          className="bg-lg-grey focus:bg-pink hover:bg-pink mx-[3px] box-content h-3 w-3 rounded-full flex-initial cursor-pointer"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-te-target="#carouselExampleIndicators"
          data-te-slide-to="2"
          className="bg-lg-grey focus:bg-pink hover:bg-pink mx-[3px] box-content h-3 w-3 rounded-full flex-initial cursor-pointer"
          aria-label="Slide 3"
        ></button>
      </div>
    </div>
  );
};

export default Carousel;
