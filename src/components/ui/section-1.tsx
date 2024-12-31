const Section1 = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Slider Background with Gradient */}
      <div className="absolute inset-0 bg-cover bg-center bg-[url('src/assets/landscape-mountain.png')] "></div>

      {/* Dot Indicator */}
      <div className="absolute flex gap-2 left-1/2 transform -translate-x-1/2 bottom-6">
        <div className="w-6 h-2 bg-red-600 rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-white font-poppins font-bold text-[8vw] sm:text-6xl lg:text-[150px] opacity-50">
          HADIN
        </h1>
        <p className="text-red-600 font-madi text-[4vw] sm:text-3xl lg:text-[72px] px-4 py-2 mt-4 capitalize">
          Tour & Travel
        </p>
      </div>
    </section>
  );
};
export default Section1;
