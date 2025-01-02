import { createWriteStream } from "fs";
import { SitemapStream } from "sitemap";

// Base URL situs Anda
const BASE_URL = "https://hadin-travel.firebaseapp.com";

// Daftar URL yang ingin dimasukkan dalam sitemap
const pages = ["/", "/wisata", "/about"];

const generateSitemap = () => {
  const stream = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream("./public/sitemap.xml"); // Lokasi output di public/

  stream.pipe(writeStream);

  pages.forEach((page) => {
    stream.write({ url: page, changefreq: "weekly", priority: 0.8 });
  });

  stream.end();

  console.log("Sitemap berhasil dibuat di ./public/sitemap.xml");
};

generateSitemap();
