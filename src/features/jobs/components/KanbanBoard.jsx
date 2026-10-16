import { OfferCard } from "./OfferCard";

export function KanbanBoard({ title, offers }) {
  return (
    <>
      <h3>{title}</h3>
      {offers.map((item, i) => (
        <OfferCard key={i} item={item} title={title} />
      ))}
    </>
  );
}
