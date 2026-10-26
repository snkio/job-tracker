import { Ellipsis } from "lucide-react";
import { useState } from "react";

export function OfferCard({ item, setOffers, setOffer, offers, setOpen }) {
  const [more, setMore] = useState(false);

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

  console.log(more);

  return (
    <>
      <div className="flex">
        <p>{item.company}</p>
        <div>
          <button onClick={() => setMore((prev) => !prev)}>
            <Ellipsis />
          </button>
          {more ? (
            <ul>
              <li onClick={() => editOffer(item.id)}>Edit</li>
              <li onClick={() => deleteOffer(item.id)}>Delete</li>
            </ul>
          ) : null}
        </div>
      </div>
      <p>{item.job}</p>
      <p>{item.salary}</p>
      <p>{item.format}</p>
      <a href={item.link} target="_blank">
        {item.link}
      </a>
      {/* <button onClick={() => deleteOffer(item.id)}>Delete</button>
      <button onClick={() => editOffer(item.id)}>Edit</button> */}
    </>
  );
}
