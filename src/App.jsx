import { useEffect, useState } from "react";
import { Welcome } from "./components/Welcome";
import { OfferModal } from "./components/OfferModal";
import { KanbanBoard } from "./features/jobs/components/KanbanBoard";
import { jobOffer } from "./constants/jobOffer";

export function App() {
  const [welcome, setWelcome] = useState(() => {
    const saved = localStorage.getItem("welcome");

    return saved === "visited" ? false : true;
  });

  const [open, setOpen] = useState(false);
  const [offers, setOffers] = useState(() => {
    const saved = localStorage.getItem("offers");

    if (saved) {
      return JSON.parse(saved);
    }

    return [];
  });
  const [offer, setOffer] = useState(() => ({
    ...jobOffer,
    id: crypto.randomUUID(),
  }));
  console.log(offer);

  useEffect(() => {
    localStorage.setItem("offers", JSON.stringify(offers));
  }, [offers]);

  return (
    <div className="relative min-h-screen">
      {welcome ? (
        <Welcome setWelcome={setWelcome} setOpen={setOpen} />
      ) : (
        <div>
          <button onClick={() => setOpen(true)}>Plus</button>
          {open ? (
            <OfferModal
              setOpen={setOpen}
              offer={offer}
              offers={offers}
              setOffers={setOffers}
              setOffer={setOffer}
            />
          ) : (
            <div>
              <KanbanBoard
                title="Saved"
                offers={offers}
                setOffers={setOffers}
              />
              <KanbanBoard
                title="Applied"
                offers={offers}
                setOffers={setOffers}
              />
              <KanbanBoard
                title="Interview"
                offers={offers}
                setOffers={setOffers}
              />
              <KanbanBoard
                title="Offer"
                offers={offers}
                setOffers={setOffers}
              />
              <KanbanBoard
                title="Rejected"
                offers={offers}
                setOffers={setOffers}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
