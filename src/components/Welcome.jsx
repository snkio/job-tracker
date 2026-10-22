import { ArrowRight } from "lucide-react";

export function Welcome({ setWelcome, setOpen }) {
  const closeWelcome = () => {
    setWelcome(false);
    localStorage.setItem("welcome", "visited");
  };

  return (
    <div className="relative z-50 min-h-screen flex justify-center items-center bg-zinc-950 text-white">
      <div className="flex flex-col gap-4 bg-zinc-900 border border-zinc-800 p-4 rounded-md">
        <div>
          <h1 className="font-poppins text-2xl font-bold md:text-4xl">
            Welcome to Job Track
          </h1>
          <p className="text-xs text-slate-400 max-w-70 md:max-w-full">
            You can create new offer now, or create it later in the Dashboard
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="group flex items-center gap-2 bg-slate-100 text-black rounded-full p-3"
            onClick={() => {
              closeWelcome();
              setOpen(true);
            }}
          >
            New offer
            <ArrowRight
              size={16}
              className="transition-transform duration-300 md:group-hover:translate-x-1"
            />
          </button>
          <button
            className="border-2 text-slate-100 border-slate-100 rounded-full p-2 max-w-30 w-full duration-300 transition-colors md:hover:text-black md:hover:bg-slate-200"
            onClick={() => {
              closeWelcome();
            }}
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
}
