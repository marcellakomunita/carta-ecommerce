const Footer = () => {
  return (
    <div className="my-12 px-20 inline-grid grid-cols-4 gap-8">
      <div>
        <p
          className="font-bold py-2  font-urbanist"
          style={{ letterSpacing: "0.175em" }}
        >
          INFORMATION
        </p>
        <ul className="leading-8 list-none ">
          <li>
            <a href="/">About Us</a>
          </li>
        </ul>
        <ul className="leading-8 list-none ">
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
        <ul className="leading-8 list-none ">
          <li>
            <a href="/">Careers</a>
          </li>
        </ul>
        <ul className="leading-8 list-none ">
          <li>
            <a href="/">Our Store</a>
          </li>
        </ul>
        <ul className="leading-8 list-none ">
          <li>
            <a href="/">About Us</a>
          </li>
        </ul>
        <ul className="leading-8 list-none ">
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
        <ul className="leading-8 list-none ">
          <li>
            <a href="/">Careers</a>
          </li>
        </ul>
        <ul className="leading-8 list-none ">
          <li>
            <a href="/">Our Store</a>
          </li>
        </ul>
      </div>

      <div>
        <p
          className="font-bold py-2  font-urbanist"
          style={{ letterSpacing: "0.175em" }}
        >
          PAYMENT OPTIONS
        </p>
        <img src="/public/images/payment-opts.png" alt="payment-opts" />
      </div>

      <div>
        <p
          className="font-bold py-2  font-urbanist"
          style={{ letterSpacing: "0.175em" }}
        >
          OUR MOBILE APP
        </p>
        <p className="mb-5">
          Scan QR code atau download aplikasi SOCO by Sociolla yang tersedia di
          iOS dan Android.
        </p>
        <div className="flex items-center">
          <div className="border border-black p-2 rounded-md mr-2">
            <img src="/public/images/mobile-app-qr.png" alt="mobile-app-qr" />
          </div>
          <div className="">
            <img src="/public/images/mobile-app-ios.png" alt="mobile-app-ios" />
            <img
              src="/public/images/mobile-app-gplay.png"
              alt="mobile-app-gplay"
            />
          </div>
        </div>
      </div>

      <div>
        <p
          className="font-bold py-2 font-urbanist"
          style={{ letterSpacing: "0.175em" }}
        >
          CUSTOMER CARE
        </p>
        <p className="font-medium">Email</p>
        <p className="pb-2">
          <a href="/">cs@sociolla.com</a>
        </p>
        <p className="font-medium tracking-wider">Whatsapp</p>
        <p className="pb-2">
          <a href="/">08111211121</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
