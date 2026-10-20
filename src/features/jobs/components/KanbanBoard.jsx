import { OfferCard } from "./OfferCard";

export function KanbanBoard({ title, offers, setOffers, setOffer, setOpen }) {
  const filteredOffers = offers.filter((item) => item.status === title);

  return (
    <>
      <h3 className="text-red-500">{title}</h3>
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
    </>
  );
}
