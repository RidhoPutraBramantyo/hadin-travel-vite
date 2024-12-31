import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200, // Durasi animasi
      once: true, // Animation will happen only once when scrolling down
    });
  }, []);
  return (
    <div className=" fixed hidden sm:flex flex-row justify-center items-center max-w-screen-2xl w-[90%] top-0 px-4 py-2.5  gap-2.5  h-auto bg-transparent z-10 isolation-isolate">
      <div className="flex flex-row justify-between items-center px-5 md:px-10 py-2 ml-auto md:ml-44 gap-4 w-11/12 max-w-[1620px] h-[50px] bg-white bg-opacity-50 border border-white backdrop-blur-lg rounded-lg z-0">
        <div className="flex flex-row items-center gap-4">
          <div className="flex items-center justify-center py-2 px-4 gap-2.5 w-auto h-auto">
            <span className="font-poppins font-medium text-[#121212] text-[16px] leading-[24px]">
              Wisata
            </span>
          </div>

          <div className="flex items-center justify-center py-2 px-4 gap-2.5 w-auto h-auto">
            <span className="font-poppins font-medium text-[#121212] text-[16px] leading-[24px]">
              Umroh
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row p-2 items-center gap-2.5 w-[164.9px] h-[40px] bg-[#DD3333] rounded-lg">
            <div className="w-[19.9px] h-[20px]">
              <img src="src/assets/icon-whatsapp.png" alt="" />
            </div>
            <span className="font-poppins font-medium text-white text-[16px] leading-[24px] text-right capitalize">
              Hubungi kami
            </span>
          </div>
        </div>
      </div>

      <div className="absolute hidden md:flex items-start justify-center w-full md:w-[243.5px] h-[87.21px] left-20 top-2.5 z-10">
        <div className="w-[223.5px] h-[67.21px] bg-[url('src/assets/logo-hadin-tour-n-travel.png')] bg-cover bg-no-repeat bg-center"></div>
      </div>
    </div>
  );
};

export default Navbar;
