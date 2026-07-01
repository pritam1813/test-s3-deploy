"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    experience?: string;
  }>({});
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    setErrors({});
    setFormError("");

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const experience = formData.get("experience") as string;

    // Client-side validation before sending
    const newErrors: typeof errors = {};
    if (!name || name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long.";
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!experience) {
      newErrors.experience = "Please select your explorer level.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFormError("Please correct the errors in the form.");
      setPending(false);
      return;
    }

    try {
      // Dummy Fetch API implementation. In production, this will hit your API route.
      // We wrap it in a try-catch and simulate a response.
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, experience }),
      }).catch(() => {
        // Fallback for simulation when the API route does not exist yet
        return {
          ok: true,
          json: async () => ({
            message: `Thank you, ${name}! You've successfully subscribed to the Nature Explorers Newsletter with your email (${email}) as a ${experience}.`,
          }),
        } as Response;
      });

      if (!response.ok) {
        throw new Error("Failed to submit. Please try again later.");
      }

      const data = await response.json();
      setSuccess(true);
      setMessage(data.message || "Subscription complete!");
    } catch (err: any) {
      setFormError(err.message || "Something went wrong.");
    } finally {
      setPending(false);
    }
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

      {success ? (
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
          <p className="mt-3 text-sm leading-relaxed">{message}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-5 w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-emerald-950 dark:text-emerald-100 bg-emerald-500/20 hover:bg-emerald-500/30 transition-colors"
          >
            Subscribe Another Email
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {formError && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-800 dark:text-rose-300 text-sm">
              {formError}
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
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={pending}
              placeholder="Alex Honnold"
              className={`w-full px-4 py-3 rounded-xl border bg-zinc-50/50 dark:bg-zinc-800/30 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all ${
                errors.name
                  ? "border-rose-500 focus:border-rose-500"
                  : "border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-500"
              }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-400">
                {errors.name}
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
                errors.email
                  ? "border-rose-500 focus:border-rose-500"
                  : "border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-500"
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-400">
                {errors.email}
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
            <div className="relative">
              <select
                id="experience"
                name="experience"
                required
                disabled={pending}
                defaultValue="level"
                className={`w-full px-4 py-3 rounded-xl border bg-zinc-50/50 dark:bg-zinc-800/30 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all cursor-pointer appearance-none ${
                  errors.experience
                    ? "border-rose-500 focus:border-rose-500"
                    : "border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-500"
                }`}
              >
                <option value="level" disabled>
                  Select level...
                </option>
                <option value="Novice Hiker">Novice Hiker</option>
                <option value="Frequent Explorer">Frequent Explorer</option>
                <option value="Wildlife Photographer">
                  Wildlife Photographer
                </option>
                <option value="Alpine Climber">Alpine Climber</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {errors.experience && (
              <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-400">
                {errors.experience}
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
                Processing...
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
