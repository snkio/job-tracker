import { X } from "lucide-react";

export function OfferInfo({ setModal, info }) {
  if (!info) return null;

  return (
    <div className="fixed inset-0 flex min-h-screen flex-col justify-center items-center bg-zinc-950/50 backdrop-blur-sm z-50 p-4">
      <div className="relative bg-zinc-100 max-w-md w-full p-5 rounded-2xl flex flex-col gap-4">
        <div>
          <div className="flex justify-between">
            <h2 className="text-xl md:text-2xl font-poppins font-semibold">
              {info.job}
            </h2>
            <button
              onClick={() => setModal(false)}
              aria-label="Close modal"
              className="cursor-pointer transition-transform duration-300 ease-out md:hover:rotate-90"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-sm text-zinc-500 mt-0.5">{info.company}</p>
        </div>

        <div className="grid grid-cols-2 text-sm border-t border-zinc-200/60 pt-3">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
              Salary
            </span>
            <p className="font-bold text-zinc-900">
              {info.salary ? `$${Number(info.salary).toLocaleString()}` : "—"}
            </p>
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
              Format
            </span>
            <p className="font-medium text-zinc-700">{info.format}</p>
          </div>
        </div>

        {info.note && (
          <div className="border-t border-zinc-200/60 pt-3 flex flex-col gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
              Notes
            </span>
            <p className="text-xs text-zinc-600 max-h-24 overflow-y-auto">
              {info.note}
            </p>
          </div>
        )}

        {info.link && (
          <a
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center bg-zinc-900 md:hover:bg-zinc-800 text-white font-semibold py-2 rounded-lg transition-colors duration-200 text-xs mt-1 cursor-pointer"
          >
            Apply to Position
          </a>
        )}
      </div>
    </div>
  );
}
