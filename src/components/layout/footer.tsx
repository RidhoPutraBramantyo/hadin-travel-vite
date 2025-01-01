const Footer = () => {
  const contactInfo = [
    {
      icon: "src/assets/icon-mdi_map-marker.png",
      text: "Jl. Perintis Kemerdekaan KM 10 ( Kampus UNHAS ), Kota Makassar, Sulawesi Selatan, Kode Pos 90245",
      width: "sm:w-[1027px]",
    },
    {
      icon: "src/assets/icon-bxl_gmail.png",
      text: "unhashotel@gmail.com",
      width: "sm:w-[275px]",
    },
    {
      icon: "src/assets/icon-material-symbols_call-sharp.png",
      text: "(0411) 89 0000 9 / 0811 446 7373",
      width: "sm:w-[347px]",
    },
  ];
  return (
    <footer className="relative flex flex-col items-start px-6 py-16 gap-16 bg-gray-200 w-full max-w-screen-2xl mx-auto">
      <section className="flex flex-col sm:flex-row w-full">
        <div className="flex flex-wrap justify-start items-center gap-2 w-full">
          <span className="text-red-600 text-lg font-semibold w-full sm:w-auto">
            PT. HADIN NUSANTARA TRAVEL
          </span>
          <span className="text-gray-600 text-lg font-light italic w-full sm:w-auto">
            Easy With Us
          </span>
        </div>
        <div className="flex w-full sm:w-fit justify-end  p-2">
          <div className="flex items-center gap-5 bg-gray-50 rounded-xl p-2 w-fit h-fit">
            <div className="w-7 h-7 rounded-full">
              <img
                className="w-full f-full object-cover"
                src="src/assets/icon-whatsapp-green.png"
                alt="icon-whatsapp-green.png"
              />
            </div>
            <div className="w-7 h-7 rounded-full">
              <img
                className="w-full f-full object-cover"
                src="src/assets/icon-instagram-linear.png"
                alt="icon-instagram-linear.png"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-start gap-6 w-full">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row items-start gap-2 w-full ${item.width}`}
          >
            <div className="w-6 h-6">
              <img className="w-6 h-6" src={item.icon} alt="" />
            </div>
            <div className="text-gray-600 text-lg text-start max-w-[90%]">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
