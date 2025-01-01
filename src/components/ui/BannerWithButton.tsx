import React from "react";
import { Button } from "../ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface BannerWithButtonProps {
  backgroundImage: string; // URL untuk gambar latar belakang
  buttonLink: string; // Rute tujuan ketika tombol diklik
  title: string; // Judul teks yang ditampilkan
}

const BannerWithButton: React.FC<BannerWithButtonProps> = ({
  backgroundImage,
  buttonLink,
  title,
}) => {
  const navigate = useNavigate(); // Hook untuk navigasi

  return (
    <div
      className="flex items-center gap-8 w-full h-[228px] p-10 left-0 top-[-0.5px] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
    >
      <Button
        onClick={() => navigate(buttonLink)} // Navigasi ketika tombol diklik
        className="h-10 w-10 flex items-center justify-center bg-[#e3e3e380] rounded-[52px] p-0"
      >
        <IoIosArrowBack className="w-full h-full object-cover" size={30} />
      </Button>
      <div className=" sm:w-[240px] h-[54px] flex items-center order-1 flex-grow-0">
        <p className="font-poppins font-bold text-xl sm:text-3xl text-white">
          {title}
        </p>
      </div>
    </div>
  );
};

export default BannerWithButton;
