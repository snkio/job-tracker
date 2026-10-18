export function OfferCard({ item, setOffers }) {
  const deleteOffer = (id) => {
    setOffers((prev) => prev.filter((offer) => offer.id !== id));
  };

  return (
    <>
      <p>{item.company}</p>
      <p>{item.job}</p>
      <p>{item.salary}</p>
      <p>{item.format}</p>
      <a href={item.link} target="_blank">
        {item.link}
      </a>
      <button onClick={() => deleteOffer(item.id)}>Delete</button>
    </>
  );
}
