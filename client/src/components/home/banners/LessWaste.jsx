const LessWasteBanner = () => {
  return (
    <div className="bg-[#FD8CBA] px-20 py-12 flex justify-between">
      <div className="flex-1 flex items-center text-center font-dmserif text-4xl px-2">
        Belanja cantik dengan less waste, mulai dari 4 langkah di sini!
      </div>
      <div className="flex-1">
        <img
          src="/public/images/banners/waste-down-beauty-up.png"
          alt="waste-down-beauty-up"
        />
      </div>
    </div>
  );
};

export default LessWasteBanner;
