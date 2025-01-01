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

const notifications = [
  {
    title: "Rafting Goa Pindul",
    description: "1 hour ago",
  },
  {
    title: "Susur sungai dalam goa",
    description: "1 hour ago",
  },
  {
    title: "Rafting Sungai Oyo",
    description: "2 hours ago",
  },
  {
    title: "Air Terjun Sri Gethuk",
    description: "2 hours ago",
  },
  {
    title: "Sky View Heha",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function CardDemo({}: CardProps) {
  return (
    <Card className="w-[270px] xl:w-full">
      <CardContent>
        <div className="w-full h-[210px] rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-center object-cover"
            src="/BorobudurSunrisePrambananTempleTrip-1.png"
            alt=""
          />
        </div>
      </CardContent>
      <div className="flex justify-between items-center w-full h-[30px] space-y-1.5 p-4 gap-10">
        <div className="flex text-[#707070] items-center gap-1">
          <div className="w-[15px] h-[17px] ">
            <FaMapMarkerAlt className="w-full h-full" />
          </div>
          <span className=" text-xs">Yogyakarta</span>
        </div>

        <div className="flex text-[#707070] items-center gap-1">
          <div className="w-[21px] h-[17px] ">
            <TbSunset2
              className="w-full h-full"
              // src="/sunset-vector.svg"
              // alt=""
            />
          </div>
          <span className="text-xs whitespace-nowrap">1 Hari</span>
        </div>
      </div>
      <CardHeader>
        <CardTitle>Paket Wisata Jogja 1 Hari Paket 6</CardTitle>
        <CardDescription className="text-left">
          <div className="text-sm font-extrabold text-black my-2">
            Destinasi yang akan dikunjungi yaitu:
          </div>
          <div>
            <ul className="list-inside list-disc text-left text-black">
              {notifications.map((notification, index) => (
                <li key={index} className="text-sm font-medium leading-none">
                  {notification.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start mt-4">
            <div className="text-xs font-semibold text-[#707070]">
              Mulai dari
            </div>
            <div className="text-xl font-semibold text-[#3BB64D]">
              RP360.000 / PAX
            </div>
          </div>
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Button className="w-full">Pesan Sekarang</Button>
      </CardFooter>
    </Card>
  );
}

const CardPaket = () => {
  return (
    <div className=" flex xl:grid xl:grid-cols-4 gap-8 w-80 sm:w-[620px] md:w-[740px] lg:w-[1010px] xl:w-full overflow-x-auto lg:overflow-visible py-8 px-4">
      <CardDemo />
      <CardDemo />
      <CardDemo />
      <CardDemo />
    </div>
  );
};

export default CardPaket;
