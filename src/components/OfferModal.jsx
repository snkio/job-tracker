export function OfferModal({
  setOpen,
  offer,
  setOffer,
  setOffers,
  offerId = null,
}) {
  const inputs = [
    { type: "text", name: "company", label: "Company Name", required: true },
    { type: "text", name: "job", label: "Job Title", required: true },
    { type: "number", name: "salary", label: "Salary" },
    {
      type: "select",
      name: "status",
      label: "Status",
      options: ["Saved", "Applied", "Interview", "Offer", "Rejected"],
    },
    {
      type: "select",
      name: "format",
      label: "Work Format",
      options: ["Remote", "Hybrid", "Office"],
    },
    { type: "text", name: "note", label: "Note" },
    { type: "url", name: "link", label: "Link" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setOffer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!offer) return;

    setOffers((prev) => [...prev, offer]);
    setOffer({});
    setOpen(false);
  };
  console.log(inputs[0]["name"]);

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
