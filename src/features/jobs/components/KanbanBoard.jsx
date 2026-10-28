import { OfferCard } from "./OfferCard";
import { jobOffer } from "../../../constants/jobOffer";
import { Plus } from "lucide-react";

export function KanbanBoard({ title, offers, setOffers, setOffer, setOpen }) {
  const filteredOffers = offers.filter((item) => item.status === title);
  const offersCount = filteredOffers.length;

  const handleCreateOffer = () => {
    setOffer(() => ({
      ...jobOffer,
      status: title,
      id: crypto.randomUUID(),
    }));
    setOpen(true);
  };

  return (
    <div className="bg-zinc-200 p-2 min-w-45 flex flex-col gap-2">
      <div className="relative flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <h3 className="text-[18px] font-poppins font-semibold">{title}</h3>
          <p className="px-2 py-0.5 bg-zinc-300 rounded-xl text-sm">
            {offersCount}
          </p>
        </div>
        <button
          onClick={() => handleCreateOffer()}
          className="cursor-pointer p-1 text-zinc-600"
        >
          <Plus size={20} />
        </button>
      </div>
      <div className="flex flex-col gap-2">
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
