import { jobOffer } from "../constants/jobOffer";
import { inputs } from "../constants/offerFormFields";
import { X } from "lucide-react";

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
      <div className="absolute bg-zinc-200 max-w-md w-full p-3 rounded-2xl">
        <div className="flex justify-between mb-4">
          <h2 className="text-[20px] md:text-2xl font-poppins font-bold">
            Editing
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="transition-transform duration-300 ease-out md:hover:rotate-90"
          >
            <X />
          </button>
        </div>
        <form onSubmit={handleSave} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {inputs.map((item, i) => {
              const { options } = item;
              return (
                <div key={i}>
                  {item.type !== "select" ? (
                    <label className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-zinc-700">
                        {item.label}
                      </span>
                      <input
                        type={item.type}
                        name={item.name}
                        value={offer[item.name]}
                        required={item.required}
                        onChange={handleChange}
                        className="w-full bg-zinc-100 border border-zinc-300 px-3 py-2 outline-none focus:border-zinc-500 rounded-lg transition-all duration-300"
                      />
                    </label>
                  ) : (
                    <label className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-zinc-700">
                        {item.label}
                      </span>
                      <select
                        name={item.name}
                        value={offer[item.name]}
                        onChange={handleChange}
                        className="w-full bg-zinc-100 border border-zinc-300 px-3 py-2 outline-none focus:border-zinc-500 rounded-lg transition-all duration-300 cursor-pointer"
                      >
                        {options.map((option, id) => (
                          <option key={id} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                  )}
                </div>
              );
            })}
          </div>
          <button
            type="submit"
            className="w-full bg-zinc-900 md:hover:bg-zinc-800 text-white font-bold p-2 rounded-lg transition-colors duration-300 mt-2"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
