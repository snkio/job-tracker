import { useEffect, useState } from "react";
import { Welcome } from "./components/Welcome";
import { OfferModal } from "./components/OfferModal";

export function App() {
  const [welcome, setWelcome] = useState(() => {
    const saved = localStorage.getItem("welcome");

    return saved === "visited" ? false : true;
  });

  const [open, setOpen] = useState(false);
  const [offers, setOffers] = useState([]);
  const [offer, setOffer] = useState("");

  console.log(offers);

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
          ) : null}
        </div>
      )}
    </div>
  );
}
