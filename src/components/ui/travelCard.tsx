const TravelCard = () => {
  return (
    <div className="relative w-[430px] h-[534px] bg-white shadow-[0px_120px_48px_rgba(0,0,0,0.01),0px_68px_41px_rgba(0,0,0,0.05),0px_30px_30px_rgba(0,0,0,0.09)] rounded-2xl p-4 flex flex-col gap-2">
      <div className="flex flex-col items-start">
        <h1 className="font-poppins font-semibold text-2xl text-black">
          PT. Hadin Nusantara Travel
        </h1>
        <p className="font-poppins font-light text-2xl text-gray-600">
          Easy With Us
        </p>
      </div>
      <div className="w-[400px] h-[210px] rounded-lg overflow-hidden">
        <img
          src="BorobudurSunrisePrambananTempleTrip.jpg"
          alt="Travel Package"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center text-gray-600 text-lg">
          <span className="mr-2">📍</span>
          <span>Jl. Perintis Kemerdekaan KM 10, Makassar</span>
        </div>
        <div className="flex items-center text-gray-600 text-lg">
          <span className="mr-2">✉️</span>
          <span>unhashotel@gmail.com</span>
        </div>
        <div className="flex items-center text-gray-600 text-lg">
          <span className="mr-2">📞</span>
          <span>(0411) 89 0000 9 / 0811 446 7373</span>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="px-5 py-2 bg-red-600 text-white rounded-md font-poppins font-semibold">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TravelCard;
