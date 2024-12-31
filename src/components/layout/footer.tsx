const Footer = () => {
  return (
    <footer className="relative flex flex-col items-start px-6 py-16 gap-16 bg-gray-200 w-full max-w-screen-xl mx-auto">
      <section className="flex w-full">
        <div className="flex flex-wrap justify-start items-center gap-4 w-full">
          <div className="text-red-600 text-lg font-semibold w-full sm:w-auto">
            PT. HADIN NUSANTARA TRAVEL
          </div>
          <div className="text-gray-600 text-lg font-light italic w-full sm:w-auto">
            Easy With Us
          </div>
        </div>

        <div className="flex items-center gap-10 bg-gray-50 rounded-xl p-2 w-full sm:w-fit h-10">
          <div className="w-7 h-7 rounded-full">
            <img
              src="src/assets/icon-whatsapp-green.png"
              alt="icon-whatsapp-green.png"
            />
          </div>
          <div className="w-7 h-7 rounded-full">
            <img
              src="src/assets/icon-instagram-linear.png"
              alt="icon-instagram-linear.png"
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col items-start gap-6 w-full sm:w-[1027px]">
        <div className="flex flex-row items-center gap-2 w-full">
          <div className="w-6 h-6  rounded">
            <img src="src/assets/icon-mdi_map-marker.png" alt="" />
          </div>{" "}
          <div className="text-gray-600 text-lg">
            Jl. Perintis Kemerdekaan KM 10 ( Kampus UNHAS ), Kota Makassar,
            Sulawesi Selatan, Kode Pos 90245
          </div>
        </div>

        <div className="flex flex-row items-center gap-2 w-full sm:w-[275px]">
          <div className="w-6 h-6  rounded">
            <img src="src/assets/icon-bxl_gmail.png" alt="" />
          </div>
          <div className="text-gray-600 text-lg">unhashotel@gmail.com</div>
        </div>

        <div className="flex flex-row items-center gap-2 w-full sm:w-[347px]">
          <div className="w-6 h-6  rounded">
            <img src="src/assets/icon-material-symbols_call-sharp.png" alt="" />
          </div>
          <div className="text-gray-600 text-lg">
            (0411) 89 0000 9 / 0811 446 7373
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
