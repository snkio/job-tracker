export function OfferCard({ item, setOffers, setOffer, offers, setOpen }) {
  const deleteOffer = (id) => {
    setOffers((prev) => prev.filter((offer) => offer.id !== id));
  };

  const editOffer = (id) => {
    const foundOffer = offers.find((offer) => offer.id === id);

    if (foundOffer) {
      setOffer({ ...foundOffer });
      setOpen(true);
    }
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
      <button onClick={() => editOffer(item.id)}>Edit</button>
    </>
  );
}
