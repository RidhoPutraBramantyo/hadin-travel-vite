import BannerWithButton from "@/components/ui/BannerWithButton";
import CardPaket from "@/components/ui/cardPaket";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";

export default function Umroh() {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-2xl bg-white gap-4 ">
      <BannerWithButton
        backgroundImage="/umroh-bg-omer-f-arslan-W0FhhtnMd8k-unsplash.png"
        buttonLink="/"
        title="Paket Umroh"
      />
      <div className="flex items-center w-fit h-12 px-4 bg-white text-left rounded-lg space-x-3 ring-1 ring-red-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:hover:bg-slate-700">
        <span className="hidden sm:block font-semibold text-slate-400">
          Search
        </span>
        <Input className="w-fit" placeholder="Quick search..." />
        <span className="hidden sm:block">
          <FiSearch className=" text-slate-300 dark:text-slate-400" size={24} />
        </span>
      </div>

      <div className="flex justify-center w-full gap-10">
        <CardPaket />
      </div>
    </div>
  );
}
