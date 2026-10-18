import { OfferCard } from "./OfferCard";

export function KanbanBoard({ title, offers, setOffers }) {
  const filteredOffers = offers.filter((item) => item.status === title);

  return (
    <>
      <h3 className="text-red-500">{title}</h3>
      {filteredOffers.map((item) => (
        <OfferCard key={item.id} item={item} setOffers={setOffers} />
      ))}
    </>
  );
}
