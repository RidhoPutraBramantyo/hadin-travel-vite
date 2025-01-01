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
import TourPackageHeader from "../layout/TourPackageHeader";

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

{
  /*
  Rafting Goa Pindul, susur sungai dalam goa, Rafting Sungai Oyo, Air Terjun Sri Gethuk, Sky View Heha.
  */
}

type CardProps = React.ComponentProps<typeof Card>;

export function CardDemo({}: CardProps) {
  return (
    <Card className={`"w-[380px]"`}>
      <CardContent className="grid gap-4">
        {/* <BellRing /> */}
        <div
          className="w-full h-[210px] bg-cover bg-center rounded-lg"
          style={{
            backgroundImage:
              "url('src/assets/BorobudurSunrisePrambananTempleTrip-1.png')",
          }}
        ></div>
        {/* <Switch /> */}
      </CardContent>
      <div className="flex justify-between items-center w-full h-[30px] space-y-1.5 p-4">
        <div className="flex text-[#707070] items-center gap-1">
          <div className="w-[15px] h-[15px] ">
            <FaMapMarkerAlt
              className="w-full h-full"
              // src="src/assets/icon-mdi_map-marker.png"
              // alt=""
            />
          </div>
          <span className=" text-xs">Yogyakarta</span>
        </div>

        <div className="flex gap-2 text-[#707070]">
          <div className="w-[21px] h-[17px] ">
            <TbSunset2
              className="w-full h-full"
              // src="src/assets/sunset-vector.svg"
              // alt=""
            />
          </div>
          <span className="text-xs">1 Hari</span>
        </div>
      </div>
      <CardHeader>
        <CardTitle>Paket Wisata Jogja 1 Hari Paket 6</CardTitle>
        <CardDescription>
          {" "}
          <div className="text-sm text-black my-2">
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
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-auto w-full max-w-screen-xl py-8">
      <CardDemo />
      <CardDemo />
      <CardDemo />
      <CardDemo />
    </div>
  );
};

export default CardPaket;
