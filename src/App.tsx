import { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import LocationInfo from "./components/ui/LocationInfo";
import Section1 from "./components/ui/section-1";
import FeatureSection from "./components/ui/featureCardProps";
import CardPaket from "./components/ui/cardPaket";
import Navbar from "./components/layout/navbar";

function App() {
  // const wisataData = [
  //   {
  //     title: "Wisata Situs Prasejarah",
  //     imgSrc:
  //       "https://hotelunhas.id/wp-content/uploads/2024/10/Taman-Leang-Leang-3-Wisata-Situs-Prasejarah.png",
  //     alt: "Wisata Situs",
  //     content: [
  //       {
  //         heading: "Eksplorasi Situs:",
  //         description:
  //           "Pengunjung dapat menjelajahi berbagai situs prasejarah yang ada di taman ini, melihat langsung tempat-tempat yang menjadi bukti sejarah.",
  //       },
  //       {
  //         heading: "Panduan Tur:",
  //         description:
  //           "Tersedia panduan tur yang memberikan penjelasan mendalam tentang setiap situs yang dijumpai, membantu pengunjung memahami pentingnya setiap temuan arkeologis.",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Wisata Alam",
  //     imgSrc:
  //       "https://hotelunhas.id/wp-content/uploads/2024/10/Taman-Leang-Leang-4-Wisata-Alam.png",
  //     alt: "Wisata Alam",
  //     content: [
  //       {
  //         heading: "Aliran Sungai:",
  //         description:
  //           "Taman ini memiliki aliran sungai yang airnya jernih dan menyegarkan. Pengunjung bisa menikmati keindahan alam sambil merasakan kesejukan air sungai.",
  //       },
  //       {
  //         heading: "Spot Alam Unik:",
  //         description:
  //           "Selain sungai, terdapat banyak spot unik dan indah di taman ini yang menawarkan pengalaman eksplorasi alam yang menarik.",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Wisata Edukasi",
  //     imgSrc:
  //       "https://hotelunhas.id/wp-content/uploads/2024/10/Taman-Leang-Leang-5-Wisata-Edukasi.png",
  //     alt: "Wisata Edukasi",
  //     content: [
  //       {
  //         heading: "Observasi Pendidikan:",
  //         description:
  //           "Taman Prasejarah Leang-Leang ideal untuk pelajar sejarah, geologi, dan arkeologi dengan banyak informasi dan bukti nyata.",
  //       },
  //       {
  //         heading: "Program Edukasi:",
  //         description:
  //           "Taman ini sering mengadakan program edukasi, menarik banyak pengunjung yang ingin belajar langsung dari ahli tentang kehidupan prasejarah dan temuan arkeologis.",
  //       },
  //     ],
  //   },
  // ];

  // const sectionData = [
  //   {
  //     sectionTitle: "Gua Prasejarah",
  //     items: [
  //       {
  //         imgSrc:
  //           "https://hotelunhas.id/wp-content/uploads/2024/10/Taman-Leang-Leang-1-Gua-Prasejarah.png",
  //         alt: "Lukisan ",
  //         title: "Lukisan:",
  //         description:
  //           "Gua ini terkenal dengan lukisan babi rusa dan telapak tangan yang terdapat pada dinding-dindingnya. Lukisan-lukisan ini adalah bukti peradaban terdahulu di daerah ini.",
  //         title2: "Artefak:",
  //         description2:
  //           "Di dalam gua, terdapat berbagai artefak dari peradaban terdahulu seperti alat makan dari batu, sisa makanan yang sudah menjadi tulang, dan benda laut seperti kerang.",
  //       },
  //     ],
  //   },
  //   {
  //     sectionTitle: "Museum",
  //     items: [
  //       {
  //         imgSrc:
  //           "https://hotelunhas.id/wp-content/uploads/2024/10/Taman-Leang-Leang-2-Museum.png",
  //         alt: "Pameran Artefak",
  //         title: "Pameran Artefak:",
  //         description:
  //           "Museum di kawasan ini menampilkan berbagai artefak yang ditemukan di sekitar Taman Prasejarah Leang-Leang. Artefak ini memberikan gambaran tentang peradaban terdahulu.",
  //         title2: "Informasi Edukatif:",
  //         description2:
  //           "Museum juga menyediakan informasi yang mendalam mengenai sejarah, geologi, dan arkeologi daerah ini, yang sangat bermanfaat bagi pengunjung yang ingin belajar lebih banyak tentang masa prasejarah.",
  //       },
  //     ],
  //   },
  // ];

  useEffect(() => {
    Aos.init({
      duration: 1200, // Durasi animasi
      once: true, // Animation will happen only once when scrolling down
    });
  }, []);

  return (
    <div className="relative flex flex-col items-center w-full max-w-screen-2xl bg-white overflow-hidden">
      <Navbar />
      <Section1 />

      <FeatureSection />
      <CardPaket />

      {/* <section className="bg-[url('https://hotelunhas.id/wp-content/uploads/2024/10/Taman-Leang-Leang-Main.png')] bg-cover bg-center w-full flex flex-col items-center py-8">
        <div className="bg-[url('https://hotelunhas.id/wp-content/uploads/2024/10/Taman-Leang-Leang-Main.png')] bg-cover bg-center w-full flex flex-col items-center gap-4 pt-8 pb-4 px-8">
          <div className="max-w-[1366px] w-full">
            <div
              className="w-full flex justify-end md:justify-start"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              <img
                src="https://hotelunhas.id/wp-content/uploads/2024/09/New-bintang-logo-01.png"
                alt="logohotelunhas"
                className="w-24 h-24 object-cover"
              />
            </div>
            <div className="w-full flex flex-col sm:flex-row justify-between">
              <div
                className="w-full flex flex-col gap-0"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="text-4xl font-bold text-black font-andhyta">
                  Taman Prasejarah
                </div>
                <div className="text-4xl font-extrabold text-[#06A6B6]">
                  Leang-leang
                </div>
              </div>
              <div
                className="w-full flex justify-end items-center"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <LocationInfo text="Kel. Leang-Leang, Kec. Bantimurung, Kab. Maros." />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1366px]">
          <div
            className="flex w-full px-8 pt-10 pb-10 text-black"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <p className="text-center bg-yellow-300 text-black bg-opacity-20 px-4 py-2 rounded-xl italic">
              Taman Prasejarah Leang-Leang merupakan bukti sejarah kehadiran
              peradaban terdahulu di daerah ini, dibuktikan oleh lukisan babi
              rusa dan telapak tangan di dinding gua. Di dalam gua, ditemukan
              artefak dari peradaban tersebut seperti alat makan dari batu,
              tulang sisa makanan, dan benda laut seperti kerang. Taman ini juga
              menjadi situs warisan budaya Indonesia, dikelola oleh Balai
              Pelestarian Cagar Budaya Provinsi Sulawesi Selatan.
            </p>
          </div>
          <div
            className="flex flex-col text-black px-8"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <h1 className="text-4xl font-semibold text-black font-andhyta">
              Wahana
            </h1>
            <p className="font-extralight">
              Wahana yang tersedia di taman prasejarah Leang-leang yang dapat
              dinikmati para pengunjung.
            </p>
          </div>

          <div
            className="flex flex-col gap-4 bg-transparent p-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="600"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-4 w-full md:w-3/4">
                {sectionData.map((section, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 p-4 rounded-xl bg-white bg-opacity-30"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay={`${index * 200}`}
                  >
                    <h2 className="text-4xl font-semibold text-black">
                      {section.sectionTitle}
                    </h2>
                    <div className="flex flex-col md:flex-row">
                      {section.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="w-full flex flex-col md:flex-row gap-4 p-2 md:p-0 mb-4 md:mb-0"
                          data-aos="fade-up"
                          data-aos-duration="1200"
                          data-aos-delay={`${idx * 200}`}
                        >
                          {item.imgSrc && (
                            <div className="w-full md:w-1/4">
                              <img
                                src={item.imgSrc}
                                alt={item.alt}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                          )}
                          <div className="w-full md:w-2/3 flex flex-col gap-4 text-black">
                            <div className="">
                              <span className="font-semibold mt-2">
                                {item.title}
                              </span>
                              <p className="text-sm">{item.description}</p>
                            </div>
                            <div className="">
                              <span className="font-semibold mt-2">
                                {item.title2}
                              </span>
                              <p className="text-sm">{item.description2}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-[url('https://hotelunhas.id/wp-content/uploads/2024/10/Taman-Leang-Leang-Side.png')] bg-cover bg-center w-1/4 hidden md:flex flex-col gap-4 pt-8 pb-4 px-8 text-white rounded-xl">
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
              {wisataData.map((wisata, index) => (
                <div
                  key={index}
                  className="flex flex-col p-4 bg-white bg-opacity-30 shadow rounded-xl h-full"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={`${index * 200}`}
                >
                  <h3 className="text-2xl font-bold ">{wisata.title}</h3>
                  <div className="flex flex-col lg:flex-row items-center gap-2 h-full">
                    <div className="">
                      <img
                        src={wisata.imgSrc}
                        alt={wisata.alt}
                        className="rounded-lg mb-2 w-full h-[full] object-cover"
                      />
                    </div>

                    <div className="flex flex-col">
                      {wisata.content.map((item, i) => (
                        <div key={i} className="mb-2">
                          <p className="text-xl md:text-lg font-bold">
                            {item.heading}
                          </p>
                          <p className="text-lg md:text-sm">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
