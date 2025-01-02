// import { useEffect } from "react";
// import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "../ui/button";

const Navbar = () => {
  // useEffect(() => {
  //   Aos.init({
  //     duration: 1200, // Durasi animasi
  //     once: true, // Animation will happen only once when scrolling down
  //   });
  // }, []);
  return (
    <div className=" fixed hidden sm:flex sm:flex-row justify-center items-center max-w-screen-2xl w-fit sm:w-screen xl:w-[90%] top-0  px-4 py-2.5  gap-2.5  h-auto bg-transparent z-30 isolation-isolate">
      <div className="flex flex-row justify-between items-center px-0 sm:px-5 md:px-10 py-2 md:pl-48 mx-auto md:ml-24 gap-4 w-full max-w-[1620px] h-[50px] bg-white bg-opacity-50 border border-white backdrop-blur-lg rounded-lg ">
        <div className="flex flex-row items-center gap-4">
          <div className="flex items-center justify-center py-2 px-4 gap-2.5 w-auto h-auto">
            <a
              href="/wisata"
              className="font-poppins font-medium text-[#121212] hover:text-white text-[16px] leading-[24px]"
            >
              Wisata
            </a>
          </div>

          <div className="flex items-center justify-center py-2 px-4 gap-2.5 w-auto h-auto">
            <a
              href="/umroh"
              className="font-poppins font-medium text-[#121212] hover:text-white text-[16px] leading-[24px]"
            >
              Umroh
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <Button
            onClick={() =>
              (window.location.href = "https://wa.me/082122334455")
            }
          >
            <div className="hidden md:block w-6 h-6">
              <img
                className="w-full h-full object-cover"
                src="/icon-whatsapp.png"
                alt=""
              />
            </div>
            <span className="font-poppins font-medium capitalize">
              Hubungi kami
            </span>
          </Button>
        </div>
      </div>

      <div className="absolute hidden md:flex items-start justify-center w-full md:w-[243.5px] h-[87.21px] left-0 ml-10 top-2.5 z-10">
        <div className="w-[223.5px] h-[67.21px] bg-[url('/logo-hadin-tour-n-travel.png')] bg-cover bg-no-repeat bg-center"></div>
      </div>
    </div>
  );
};

export default Navbar;
