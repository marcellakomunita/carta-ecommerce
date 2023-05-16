const EmailSubscription = () => {
  return (
    <div className="my-12 px-20 py-7 bg-lg-pink flex justify-between">
      <p className="w-full font-dmserif text-4xl">
        pretty things in your inbox
      </p>
      <form action="post" className="flex w-full">
        <input
          type="text"
          placeholder="Enter your email"
          className="p-3 w-full border-dk-grey font-lato text-md"
        />
        <button
          type="submit"
          className="bg-black text-white text-xs font-bold px-8 py-3"
          style={{ letterSpacing: "0.3em" }}
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default EmailSubscription;
