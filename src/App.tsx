import { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
// import LocationInfo from "./components/ui/LocationInfo";
import Section1 from "./components/ui/section-1";
import FeatureSection from "./components/ui/featureCardProps";
import CardPaket from "./components/ui/cardPaket";
import Navbar from "./components/layout/navbar";
import TourNavlink from "./components/layout/TourPackageHeader";

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
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <main className="relative flex flex-col items-center w-full max-w-screen-2xl bg-white ">
      <Navbar />
      <Section1 />

      <FeatureSection />
      <section className="flex flex-col gap-10">
        <TourNavlink title="Paket Wisata" link="/wisata" />
        <CardPaket />
      </section>
      <section className="flex flex-col gap-10">
        <TourNavlink title="Paket Umroh" link="/umroh" />
        <CardPaket />
      </section>
    </main>
  );
}

export default App;
