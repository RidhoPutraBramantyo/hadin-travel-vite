import { useState } from "react";
// import {
//   BsFillArrowRightCircleFill,
//   BsFillArrowLeftCircleFill,
// } from "react-icons/bs";

interface Any {
  slides: any;
}
export default function Carousel({ slides }: Any) {
  let [current, setCurrent] = useState(0);

  //   let previousSlide = () => {
  //     if (current === 0) setCurrent(slides.length - 1);
  //     else setCurrent(current - 1);
  //   };

  //   let nextSlide = () => {
  //     if (current === slides.length - 1) setCurrent(0);
  //     else setCurrent(current + 1);
  //   };

  return (
    <div className="overflow-hidden w-full h-screen relative">
      <div
        className={`h-full flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s: string) => {
          return <img className="object-cover" src={s} />;
        })}
      </div>

      {/* <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div> */}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-white font-poppins font-bold text-8xl sm:text-6xl lg:text-[150px] opacity-50">
          HADIN
        </h1>
        <p className="absolute text-red-600 font-madi text-5xl sm:text-3xl lg:text-[72px] px-4 py-2 mt-16  capitalize">
          Tour & Travel
        </p>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s: string, i: number) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={` rounded-full cursor-pointer  ${
                i == current ? "w-8 h-4 bg-red-600" : "w-4 h-4 bg-gray-300"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
