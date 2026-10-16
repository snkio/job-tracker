import { inputs } from "../constants/offerFormFields";

export function OfferModal({
  setOpen,
  offer,
  setOffer,
  setOffers,
  offerId = null,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setOffer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!offer) return;

    setOffers((prev) => [...prev, offer]);
    setOffer({
      company: "",
      job: "",
      salary: "",
      status: "Saved",
      format: "Remote",
      note: "",
      link: "",
    });
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 flex min-h-screen flex-col justify-center items-center bg-zinc-950/50 backdrop-blur-sm">
      <div className="absolute bg-zinc-200 max-w-md w-full p-2 rounded-2xl">
        <div className="flex justify-between">
          {offerId === null ? <h2>Creating:</h2> : <h2>Editing</h2>}
          <p onClick={() => setOpen(false)}>Close</p>
        </div>
        <form onSubmit={handleSave}>
          <>
            {inputs.map((item, i) => {
              const { options } = item;
              return (
                <div key={i}>
                  {item.type !== "select" ? (
                    <label>
                      <span>{item.label}</span>
                      <input
                        type={item.type}
                        name={item.name}
                        value={offer[item.name]}
                        required={item.required}
                        onChange={handleChange}
                      />
                    </label>
                  ) : (
                    <label>
                      <span>{item.label}</span>
                      <select
                        name={item.name}
                        value={offer[item.name]}
                        onChange={handleChange}
                      >
                        {options.map((option, id) => (
                          <option key={id} name={option[0]} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                  )}
                </div>
              );
            })}
            <button>Save</button>
          </>
        </form>
      </div>
    </div>
  );
}
