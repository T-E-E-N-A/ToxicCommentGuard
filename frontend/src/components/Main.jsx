import { useState } from "react";

const Main = () => {
  // const API_URL = "http://127.0.0.1:8000"; // change to your deployed URL later
  const API_URL = "http://127.0.0.1:5000/predict";

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
      setError("Backend not reachable. " + err);
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

        {/* Dedicated Output Box */}
        <div className="mt-6">
          <h2 className="text-white text-lg font-medium mb-2">Toxicity:</h2>
          <div className="w-full min-h-[80px] rounded-xl border border-white/30 bg-white/10 p-3 text-white text-sm overflow-y-auto">
            {loading && <p className="text-indigo-300">Processing...</p>}
            {result && (
              <p
                className={`font-semibold ${
                  result.includes("Toxic") ? "text-red-300" : "text-green-300"
                }`}
              >
                {result}
              </p>
            )}
            {error && <p className="text-amber-300">{error}</p>}
            {!loading && !result && !error && (
              <p className="text-gray-400 italic">No analysis yet.</p>
            )}
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-300 text-center">
          API: <code>{API_URL}</code>
        </div>
      </div>
    </div>
  );
};

export default Main;
