import React, { useState } from "react";


const Main = () => {
const API_URL = "http://127.0.0.1:8000"; // change to your deployed URL later
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });

      const data = await response.json();
      if (response.ok) {
        setResult(data.prediction);
      } else {
        setError(data.detail || "Something went wrong");
      }
    } catch (err) {
      setError("Backend not reachable. "+err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Transparent glass-like card */}
      <div className="w-full max-w-lg bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-semibold text-center mb-6 text-white">
          Toxic Comment Detection
        </h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <textarea
            className="w-full h-28 resize-none rounded-xl border border-white/30 bg-white/10 text-white p-3 outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Type a comment to analyze..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="w-full rounded-xl py-2 font-medium text-white bg-indigo-600 disabled:opacity-60 hover:bg-indigo-700 transition"
          >
            {loading ? "Checking..." : "Check comment"}
          </button>
        </form>

        {(result || error) && (
          <div className="mt-5 text-center">
            {result && (
              <span
                className={`inline-block rounded-xl px-4 py-2 text-sm font-semibold ${
                  result.includes("Toxic")
                    ? "bg-red-500/20 text-red-200"
                    : "bg-green-500/20 text-green-200"
                }`}
              >
                {result}
              </span>
            )}
            {error && (
              <div className="text-sm text-amber-200 bg-amber-500/20 rounded-xl px-3 py-2">
                {error}
              </div>
            )}
          </div>
        )}

        <div className="mt-6 text-xs text-gray-300 text-center">
          API: <code>{API_URL}</code>
        </div>
      </div>
    </div>
  );
};

export default Main;
