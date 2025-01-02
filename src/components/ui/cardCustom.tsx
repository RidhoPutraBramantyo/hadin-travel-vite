import { TbSunset2 } from "react-icons/tb";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaMapMarkerAlt } from "react-icons/fa";

type Destination = {
  title: string;
  description: string;
};

type TravelCardProps = {
  imageSrc: string;
  location: string;
  duration: string;
  title: string;
  price: string;
  destinations: Destination[];
  onBook?: () => void;
};

export function TravelCard({
  imageSrc,
  location,
  duration,
  title,
  price,
  destinations,
  onBook,
}: TravelCardProps) {
  return (
    <Card>
      <CardContent>
        <div className="w-full h-[210px] rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-center object-cover"
            src={imageSrc}
            alt={title}
          />
        </div>
      </CardContent>
      <div className="flex justify-between items-center w-full h-[30px] space-y-1.5 px-4 gap-10">
        <div className="flex text-[#707070] items-center gap-1">
          <div className="w-[15px] h-[17px]">
            <FaMapMarkerAlt className="w-full h-full" />
          </div>
          <span className="text-xs">{location}</span>
        </div>

        <div className="flex text-[#707070] items-center gap-1">
          <div className="w-[21px] h-[17px]">
            <TbSunset2 className="w-full h-full" />
          </div>
          <span className="text-xs whitespace-nowrap">{duration}</span>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <div className="text-sm font-extrabold text-black my-2">
            Destinasi yang akan dikunjungi yaitu:
          </div>
          <ul className="list-inside list-disc text-left text-black">
            {destinations.map((destination, index) => (
              <li key={index} className="text-sm font-medium leading-none">
                {destination.title}
              </li>
            ))}
          </ul>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex flex-col items-start mt-4">
          <div className="text-xs font-semibold text-[#707070]">Mulai dari</div>
          <div className="text-xl font-semibold text-[#3BB64D]">{price}</div>
        </div>
        <Button className="w-full" onClick={onBook}>
          Pesan Sekarang
        </Button>
      </CardFooter>
    </Card>
  );
}

type CardPaketProps = {
  cards: TravelCardProps[];
};

export const CardCustom = ({ cards }: CardPaketProps) => {
  return (
    <div className="flex xl:grid xl:grid-cols-4 gap-8 w-80 sm:w-[620px] md:w-[740px] lg:w-[1010px] xl:w-full overflow-x-auto lg:overflow-visible py-8 px-4">
      {cards.map((card, index) => (
        <TravelCard key={index} {...card} />
      ))}
    </div>
  );
};

export default CardCustom;
