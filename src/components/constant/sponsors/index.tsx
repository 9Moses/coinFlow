import { sponsors } from "@/assets/sponsors";

export const Sponsors = () => {
  return (
    <div className="mx-auto ">
      <div className="flex items-center mx-auto w-5/6 justify-between gap-2">
        {sponsors.map((sponsor) => (
          <img
            key={sponsor.id}
            src={sponsor.image}
            alt={`Sponsor ${sponsor.id}`}
            className="h-8 w-14 md:h-[72px] md:w-[104px] object-contain "
          />
        ))}
      </div>
    </div>
  );
};
