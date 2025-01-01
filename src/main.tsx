import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Footer from "./components/layout/footer.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wisata from "./pages/wisata.tsx";
import Umroh from "./pages/umroh.tsx";
import Carousel from "./pages/slider.tsx";

const images = [
  "/landscape-mountain.png",
  "/umroh-bg-omer-f-arslan-W0FhhtnMd8k-unsplash.png",
  "/tour-bg-igor-sporynin-SWbERrVDFkg-unsplash.png",
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <body className="font-poppins w-full flex flex-col justify-center items-center m-0">
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/wisata" element={<Wisata />} />
          <Route path="/umroh" element={<Umroh />} />
          <Route path="/emba" element={<Carousel slides={images}></Carousel>} />
        </Routes>
      </Router>
      <Footer />
    </body>
  </StrictMode>
);
