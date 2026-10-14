export function OfferModal({
  setOpen,
  offer,
  setOffer,
  setOffers,
  offerId = null,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    setOffers((prev) => [...prev, offer]);
  };
  return (
    <div className="fixed inset-0 flex min-h-screen flex-col justify-center items-center bg-zinc-950/50 backdrop-blur-sm">
      <div className="absolute bg-zinc-200 max-w-md w-full p-2 rounded-2xl">
        <div className="flex justify-between">
          {offerId === null ? <h2>Creating:</h2> : <h2>Editing</h2>}
          <p onClick={() => setOpen(false)}>Close</p>
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
            setOpen(false);
          }}
        >
          <input
            type="text"
            value={offer}
            onChange={(e) => setOffer(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
