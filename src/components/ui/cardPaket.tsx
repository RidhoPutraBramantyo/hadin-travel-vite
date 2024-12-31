const Blurb = () => {
  return (
    <div className="flex flex-col items-start p-4 gap-4 w-full max-w-xs h-[534px] bg-white rounded-xl shadow-lg">
      <div
        className="w-full h-[210px] bg-cover bg-center rounded-lg"
        style={{
          backgroundImage:
            "url('src/assets/BorobudurSunrisePrambananTempleTrip-1.png')",
        }}
      ></div>

      <div className="flex justify-between items-center w-full h-[30px]">
        <div className="flex items-center gap-1">
          <div className="w-[10px] h-[13px] bg-[#707070]" />
          <span className="text-[#707070] text-xs">Yogyakarta</span>
        </div>

        <div className="flex gap-2">
          <div className="w-[21px] h-[17px] bg-[#707070]" />
          <span className="text-[#707070] text-xs">1 Hari</span>
        </div>
      </div>

      <div className="text-center text-sm text-[#121212] font-semibold">
        Paket Wisata Jogja 1 Hari Paket 6
      </div>

      <div className="text-sm text-[#121212] mt-2">
        Destinasi yang akan dikunjungi yaitu: Rafting Goa Pindul, susur sungai
        dalam goa, Rafting Sungai Oyo, Air Terjun Sri Gethuk, Sky View Heha.
      </div>

      <div className="flex flex-col items-start mt-4">
        <div className="text-xs font-semibold text-[#707070]">Mulai dari</div>
        <div className="text-xl font-semibold text-[#3BB64D]">
          RP360.000 / PAX
        </div>
      </div>

      <div className="flex justify-center items-center p-2 gap-2 w-full h-[40px] bg-[#DD3333] rounded-lg mt-4">
        <span className="text-white text-xs font-semibold">Home</span>
      </div>
    </div>
  );
};

const CardPaket = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="relative flex flex-row justify-between items-center p-2 gap-2 w-full max-w-[1720px] h-[70px] mx-auto">
        <div className="flex flex-row justify-center items-center p-2 gap-2 w-[162px] h-[50px] border-t border-black">
          <p className="text-right text-base font-medium text-black uppercase">
            Paket Wisata
          </p>
        </div>

        <div className="flex flex-row justify-center items-center p-2 gap-2 w-[121px] h-[44px] bg-red-100 rounded-lg">
          <p className="text-right text-sm font-medium text-red-600">
            Lihat Semua
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 mx-auto w-full max-w-screen-xl py-8">
        <Blurb />
        <Blurb />
        <Blurb />
        <Blurb />
        <Blurb />
        <Blurb />
        <Blurb />
        <Blurb />
      </div>
    </div>
  );
};

export default CardPaket;
