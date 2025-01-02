import BannerWithButton from "@/components/ui/BannerWithButton";
import CardPaket from "@/components/ui/cardPaket";
import { Input } from "@/components/ui/input";
import { useEffect, useState, useMemo } from "react";
import { FiSearch } from "react-icons/fi";

interface Destination {
  title: string;
  description: string;
}

interface TravelCard {
  imageSrc: string;
  location: string;
  duration: string;
  title: string;
  price: string;
  destinations: Destination[];
}

const getFilteredItems = (query: string, items: TravelCard[]): TravelCard[] => {
  if (!query) return items;
  return items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );
};

export default function Wisata() {
  const [paketTravel, setPaketTravel] = useState<TravelCard[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setPaketTravel(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredItems = useMemo(
    () => getFilteredItems(query, paketTravel),
    [query, paketTravel]
  );

  return (
    <div className="flex flex-col items-center w-full max-w-screen-2xl bg-white gap-4 ">
      <BannerWithButton
        backgroundImage="/tour-bg-igor-sporynin-SWbERrVDFkg-unsplash.webp"
        buttonLink="/"
        title="Paket Umroh"
      />
      <div className="flex items-center w-fit h-12 px-4 bg-white text-left rounded-lg space-x-3 ring-1 ring-red-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:hover:bg-slate-700">
        <span className="hidden sm:block font-semibold text-slate-400">
          Cari
        </span>
        <Input
          className="w-fit"
          placeholder="Judul paket..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="hidden sm:block">
          <FiSearch className=" text-slate-300 dark:text-slate-400" size={24} />
        </span>
      </div>

      <div className="flex justify-center w-full gap-10">
        <CardPaket kumpulanPaketTravel={filteredItems} />
      </div>
    </div>
  );
}
