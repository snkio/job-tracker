export function Welcome({ setWelcome, setOpen }) {
  const closeWelcome = () => {
    setWelcome(false);
    localStorage.setItem("welcome", "visited");
  };

  return (
    <div className="relative z-50 min-h-screen flex justify-center items-center bg-zinc-950/80 text-white">
      <div className="flex flex-col gap-4 bg-zinc-900 border border-zinc-800 p-4 rounded-md text-center">
        <h1>Welcome to Job Track!</h1>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => {
              closeWelcome();
              setOpen(true);
            }}
          >
            Create new offer
          </button>
          <button
            onClick={() => {
              closeWelcome();
            }}
          >
            Create later...
          </button>
        </div>
      </div>
    </div>
  );
}
