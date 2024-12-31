import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Footer from "./components/layout/footer.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <body className="font-poppins w-full flex flex-col justify-center items-center m-0">
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </Router>
      <Footer />
    </body>
  </StrictMode>
);
