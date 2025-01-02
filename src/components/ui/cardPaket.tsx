import CardCustom from "./cardCustom";

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

interface KumpulanDataPaket {
  kumpulanPaketTravel: TravelCard[];
}
export default function CardPaket({ kumpulanPaketTravel }: KumpulanDataPaket) {
  return <CardCustom cards={kumpulanPaketTravel} />;
}
