import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

interface Tour {
  title: string;
  link: string;
}

const TourNavlink = ({ title, link }: Tour) => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-row justify-between items-center p-2 gap-2 w-full max-w-[1720px] h-[70px] mx-auto">
      <div className="flex flex-row justify-center items-center p-2 gap-2 w-[162px] h-[50px] border-t border-black">
        <p className="text-right text-base font-medium text-black uppercase">
          {title}
        </p>
      </div>

      <Button onClick={() => navigate(link)} variant="secondary">
        Lihat Semua
      </Button>
    </div>
  );
};

export default TourNavlink;
