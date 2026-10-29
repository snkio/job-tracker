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
    <article className="bg-zinc-100 p-3 rounded-md shadow-md flex flex-col gap-1.5">
      <div className="relative flex items-center justify-between">
        <a
          href={item.link}
          target="_blank"
          rel="noopener"
          className="font-poppins font-semibold hover:underline"
        >
          {item.company}
        </a>
        <button
          onClick={() => setMore((prev) => !prev)}
          aria-label="More options"
          className="text-zinc-600"
        >
          <Ellipsis />
        </button>
        {more ? (
          <ul className="z-10 absolute top-full right-0 bg-white flex flex-col rounded-md min-w-20 shadow-md">
            <li>
              <button
                onClick={() => editOffer(item.id)}
                className="w-full text-left px-3 py-1.5 duration-300 transition-colors md:hover:bg-zinc-200 text-sm"
              >
                Edit
              </button>
            </li>
            <li>
              <button
                onClick={() => deleteOffer(item.id)}
                className="w-full text-red-600 text-left px-3 py-1.5 duration-300 transition-colors md:hover:bg-red-50 text-sm"
              >
                Delete
              </button>
            </li>
          </ul>
        ) : null}
      </div>

      <p className="text-zinc-600 text-sm">{item.job}</p>

      <div className="flex justify-between items-center text-xs font-semibold text-zinc-500 mt-1 border-t border-zinc-200/60 pt-2">
        <p className="text-zinc-700">
          {item.salary ? `$${Number(item.salary).toLocaleString()}` : "—"}
        </p>
        <p className="bg-zinc-200/50 px-2 py-0.5 rounded-md">{item.format}</p>
      </div>
    </article>
  );
}
