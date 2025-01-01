import BannerWithButton from "@/components/ui/BannerWithButton";
import CardPaket from "@/components/ui/cardPaket";

export default function Umroh() {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-2xl bg-white ">
      <BannerWithButton
        backgroundImage="src/assets/umroh-bg-omer-f-arslan-W0FhhtnMd8k-unsplash.png"
        buttonLink="/"
        title="Paket Umroh"
      />
      <div className="flex flex-col gap-10">
        <CardPaket />
      </div>
    </div>
  );
}
