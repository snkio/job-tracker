import { jobOffer } from "../constants/jobOffer";
import { inputs } from "../constants/offerFormFields";

export function OfferModal({ setOpen, offer, setOffer, setOffers }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setOffer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!offer) return;

    setOffers((prev) => {
      const exists = prev.some((item) => item.id === offer.id);

      if (exists) {
        return prev.map((item) => (item.id === offer.id ? offer : item));
      }

      return [...prev, offer];
    });

    setOffer(() => ({ ...jobOffer, id: crypto.randomUUID() }));
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 flex min-h-screen flex-col justify-center items-center bg-zinc-950/50 backdrop-blur-sm">
      <div className="absolute bg-zinc-200 max-w-md w-full p-2 rounded-2xl">
        <h2 className="text-[20px] md:text-2xl font-poppins font-bold">
          Editor
        </h2>
        <form onSubmit={handleSave}>
          <>
            {inputs.map((item, i) => {
              const { options } = item;
              return (
                <div key={i}>
                  {item.type !== "select" ? (
                    <label className="flex flex-col">
                      <span className="font-bold">{item.label}</span>
                      <input
                        type={item.type}
                        name={item.name}
                        value={offer[item.name]}
                        required={item.required}
                        onChange={handleChange}
                      />
                    </label>
                  ) : (
                    <label className="flex flex-col">
                      <span className="font-bold">{item.label}</span>
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
            <div className="flex gap-4">
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button>Save</button>
            </div>
          </>
        </form>
      </div>
    </div>
  );
}
