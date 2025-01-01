import BannerWithButton from "@/components/ui/BannerWithButton";
import CardPaket from "@/components/ui/cardPaket";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";

export default function Wisata() {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-2xl bg-white gap-4 ">
      <BannerWithButton
        backgroundImage="/tour-bg-igor-sporynin-SWbERrVDFkg-unsplash.png"
        buttonLink="/"
        title="Paket Wisata"
      />

      <div className="hidden sm:flex items-center w-fit h-12 px-4 bg-white text-left rounded-lg space-x-3 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:hover:bg-slate-700">
        <span className="font-semibold text-slate-400">Pencarian</span>
        <Input className="w-fit" placeholder="Cari Tour..." />
        <FiSearch className="text-slate-300 dark:text-slate-400" size={24} />
      </div>

      {/* <div className="flex justify-center w-full gap-10">
        <Input />
      </div> */}
      <div className="flex justify-center w-full gap-10">
        <CardPaket />
      </div>
    </div>
  );
}
