import { useEffect, useState } from "react";
import { Welcome } from "./components/Welcome";
import { OfferModal } from "./components/OfferModal";
import { KanbanBoard } from "./features/jobs/components/KanbanBoard";

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
  const [offer, setOffer] = useState({
    company: "",
    job: "",
    salary: "",
    status: "Saved",
    format: "Remote",
    note: "",
    link: "",
  });

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
            <KanbanBoard title="Saved" offers={offers} />
          )}
        </div>
      )}
    </div>
  );
}
