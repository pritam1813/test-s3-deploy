"use client";

import { useActionState, startTransition } from "react";
import { subscribeToNewsletter, FormState } from "../actions";

const initialState: FormState = {
  status: "idle",
  message: "",
};

export default function NewsletterForm() {
  const [state, formAction, pending] = useActionState(
    subscribeToNewsletter,
    initialState,
  );

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className="w-full max-w-md p-8 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-2xl border border-zinc-200/50 dark:border-zinc-800/50 transition-all duration-500 hover:shadow-emerald-500/10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Join the Explorers
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Subscribe to get curated wilderness routes, hidden natural wonders,
          and eco-travel updates.
        </p>
      </div>

      {state.status === "success" ? (
        <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-emerald-500 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="font-semibold text-lg">Subscription Complete!</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed">{state.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-5 w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-emerald-950 dark:text-emerald-100 bg-emerald-500/20 hover:bg-emerald-500/30 transition-colors"
          >
            Subscribe Another Email
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {state.status === "error" && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-800 dark:text-rose-300 text-sm animate-shake">
              {state.message}
            </div>
          )}

          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
            >
              Your Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={pending}
                placeholder="Alex Honnold"
                className={`w-full px-4 py-3 rounded-xl border bg-zinc-50/50 dark:bg-zinc-800/30 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all ${
                  state.errors?.name
                    ? "border-rose-500 focus:border-rose-500"
                    : "border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-500"
                }`}
              />
            </div>
            {state.errors?.name && (
              <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-400">
                {state.errors.name[0]}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={pending}
              placeholder="alex@elcapitan.com"
              className={`w-full px-4 py-3 rounded-xl border bg-zinc-50/50 dark:bg-zinc-800/30 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all ${
                state.errors?.email
                  ? "border-rose-500 focus:border-rose-500"
                  : "border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-500"
              }`}
            />
            {state.errors?.email && (
              <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-400">
                {state.errors.email[0]}
              </p>
            )}
          </div>

          {/* Experience Select */}
          <div>
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
            >
              Explorer Level
            </label>
            <select
              id="experience"
              name="experience"
              required
              disabled={pending}
              className={`w-full px-4 py-3 rounded-xl border bg-zinc-50/50 dark:bg-zinc-800/30 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all appearance-none cursor-pointer ${
                state.errors?.experience
                  ? "border-rose-500 focus:border-rose-500"
                  : "border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-500"
              }`}
            >
              <option value="" disabled selected>
                Select level...
              </option>
              <option value="Novice Hiker">Novice Hiker</option>
              <option value="Frequent Explorer">Frequent Explorer</option>
              <option value="Wildlife Photographer">
                Wildlife Photographer
              </option>
              <option value="Alpine Climber">Alpine Climber</option>
            </select>
            {state.errors?.experience && (
              <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-400">
                {state.errors.experience[0]}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={pending}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/35"
          >
            {pending ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Processing Subscription...
              </>
            ) : (
              "Subscribe to Explorers"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
