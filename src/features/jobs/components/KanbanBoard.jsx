import { OfferCard } from "./OfferCard";

export function KanbanBoard({ title, offers, setOffers, setOffer, setOpen }) {
  const filteredOffers = offers.filter((item) => item.status === title);

  return (
    <div className="flex flex-col">
      <h3 className="text-[18px]">{title}</h3>
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
