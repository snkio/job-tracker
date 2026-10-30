import { useEffect, useState } from "react";
import { Welcome } from "./components/Welcome";
import { OfferModal } from "./components/OfferModal";
import { KanbanBoard } from "./features/jobs/components/KanbanBoard";
import { jobOffer } from "./constants/jobOffer";

const boardTitles = ["Saved", "Applied", "Interview", "Offer", "Rejected"];

export function App() {
  const [welcome, setWelcome] = useState(() => {
    const saved = localStorage.getItem("welcome");

    return saved === "visited" ? false : true;
  });

  const [open, setOpen] = useState(false);
  const [offers, setOffers] = useState(() => {
    const saved = localStorage.getItem("offers");

    return saved ? JSON.parse(saved) : [];
  });
  const [offer, setOffer] = useState(() => ({
    ...jobOffer,
    id: crypto.randomUUID(),
  }));

  useEffect(() => {
    localStorage.setItem("offers", JSON.stringify(offers));
  }, [offers]);

  return (
    <div className="max-w-7xl mx-auto relative min-h-screen">
      <h1 className="font-poppins text-2xl font-semibold md:text-4xl my-4">
        Dashboard
      </h1>
      {welcome ? (
        <Welcome setWelcome={setWelcome} setOpen={setOpen} />
      ) : (
        <div>
          {open ? (
            <OfferModal
              setOpen={setOpen}
              offer={offer}
              offers={offers}
              setOffers={setOffers}
              setOffer={setOffer}
            />
          ) : (
            <div className="flex flex-wrap justify-between gap-4">
              {boardTitles.map((title) => (
                <KanbanBoard
                  key={title}
                  title={title}
                  offers={offers}
                  setOffer={setOffer}
                  setOffers={setOffers}
                  setOpen={setOpen}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
