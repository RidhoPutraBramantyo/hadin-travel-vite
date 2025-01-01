import BannerWithButton from "@/components/ui/BannerWithButton";
import CardPaket from "@/components/ui/cardPaket";

export default function Wisata() {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-2xl bg-white ">
      <BannerWithButton
        backgroundImage="src/assets/tour-bg-igor-sporynin-SWbERrVDFkg-unsplash.png"
        buttonLink="/"
        title="Paket WIsata"
      />
      <div className="flex flex-col gap-10">
        <CardPaket />
      </div>
    </div>
  );
}
