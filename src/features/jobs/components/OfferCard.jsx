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

  return (
    <article className="bg-zinc-100 px-2 py-1 rounded-md shadow-md">
      <div className="relative flex items-center justify-between">
        <a href={item.link} target="_blank" rel="noopener">
          {item.company}
        </a>
        <button
          onClick={() => setMore((prev) => !prev)}
          aria-label="More options"
        >
          <Ellipsis />
        </button>
        {more ? (
          <ul className="z-10 absolute top-full right-0 bg-white flex flex-col gap-1.5 rounded-xs min-w-20 shadow-md">
            <li>
              <button
                onClick={() => editOffer(item.id)}
                className="w-full text-left p-2 duration-300 transition-colors hover:bg-gray-300/80"
              >
                Edit
              </button>
            </li>
            <li>
              <button
                onClick={() => deleteOffer(item.id)}
                className="w-full text-left text-red-600 p-2 duration-300 transition-colors hover:bg-gray-300/80"
              >
                Delete
              </button>
            </li>
          </ul>
        ) : null}
      </div>
      <p>{item.job}</p>
      <p>{item.salary}</p>
      <p>{item.format}</p>
    </article>
  );
}
