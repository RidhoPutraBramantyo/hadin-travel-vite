// components/FeatureSection.tsx

import { Button } from "./button";

type FeatureCardProps = {
  title: string;
  imageUrl: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  imageUrl,
  description,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 w-full h-auto">
      <div className="w-full h-full flex justify-center items-center bg-[#F2EFEA] rounded-xl overflow-hidden">
        <img className="w-full h-full bg-cover" src={imageUrl} alt="image" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-[#DD3333] text-lg font-semibold">{title}</span>
        <p className="text-[#121212] text-sm leading-6 font-medium mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const featureData = [
    {
      title: "Customer Satisfied",
      imageUrl: "/grid-customer-satisfied.png",
      description:
        "Kami berkomitmen untuk memberikan layanan yang responsif, ramah, dan solutif yang siap membantu Anda kapanpun.",
    },
    {
      title: "Secure",
      imageUrl: "/grid-secure.png",
      description:
        "Untuk memastikan perjalanan pelanggan aman dan nyaman kami memastikan setiap aspek terpenuhi dengan standar kualitas terbaik.",
    },
    {
      title: "Flexibel",
      imageUrl: "/grid-flexibel.png",
      description:
        "Paket perjalanan yang kami tawarkan bisa fleksibel sehingga dapat disesuaikan dengan preferensi dan kebutuhan setiap pelanggan.",
    },
    {
      title: "Assist",
      imageUrl: "/grid-assist.png",
      description:
        "Kami memiliki tim yang siap memberikan dukungan kapanpun selama dalam masa perjalanan sehingga akan meningkatkan kepuasan pelanggan.",
    },
  ];

  return (
    <section className="flex flex-col gap-10 p-10">
      <div className="relative flex flex-row justify-between items-center p-2 gap-2 w-full max-w-[1720px] h-[70px] mx-auto">
        <div className="flex flex-row justify-center items-center p-2 gap-2 w-[162px] h-[50px] border-t border-black">
          <p className="text-right text-base font-medium text-black uppercase">
            Tentang Kami
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-10 ">
        <div className="flex w-full md:w-3/4 lg:w-1/2 justify-center ">
          <div className="w-full h-full  rounded-[16px] overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src="/about-us-sideleft-image.png"
              alt="about-us-sideleft-image.png"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-10">
          <div className="flex flex-col items-start gap-[31px] p-0 w-full text-[20px] leading-[30px] font-normal font-poppins">
            <p className="text-black text-left">
              <a href="" className="text-[#DD3333]">
                PT Hadin Nusantara Travel
              </a>{" "}
              merupakan badan usaha milik Universitas Hasanuddin yang bergerak
              di bidang penyedia jasa layanan perjalanan dan akomodasi baik
              secara domestik maupun internasional. Perusahaan kami terletak di
              Jl. Perintis Kemerdekaan KM 10, Makassar. Awalnya badan usaha ini
              hanya ditujukan untuk melayani civitas akademika dari Universitas
              Hasanuddin, tetapi terus berkembang dan akhirnya membuka layanan
              untuk umum.
            </p>
          </div>

          <div className="flex items-center gap-[10px] p-[10px] w-[243px] h-[50px]  border-t-[1px] border-[#121212]">
            <div className="w-auto h-[30px] text-right text-[20px] leading-[30px] font-medium text-black font-poppins">
              Mengapa pilih kami??
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8  w-full h-auto">
            {featureData.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                imageUrl={feature.imageUrl}
                description={feature.description}
              />
            ))}
          </div>

          <Button
            className="w-fit"
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
            <div className="font-poppins font-medium capitalize">
              <span>Hubungi kami</span>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
