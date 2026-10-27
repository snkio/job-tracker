import { OfferCard } from "./OfferCard";
import { jobOffer } from "../../../constants/jobOffer";
import { Plus } from "lucide-react";

export function KanbanBoard({ title, offers, setOffers, setOffer, setOpen }) {
  const filteredOffers = offers.filter((item) => item.status === title);
  const offersCount = filteredOffers.length;

  return (
    <div className="flex flex-col">
      <div className="relative flex gap-2 items-center">
        <h3 className="text-[18px] font-poppins font-semibold">{title}</h3>
        <p>{offersCount}</p>
        <button
          onClick={() => {
            setOffer(() => ({
              ...jobOffer,
              status: title,
              id: crypto.randomUUID(),
            }));
            setOpen(true);
          }}
        >
          <Plus />
        </button>
      </div>
      <div>
        {filteredOffers.map((item) => (
          <OfferCard
            key={item.id}
            item={item}
            offers={offers}
            setOffers={setOffers}
            setOffer={setOffer}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}
