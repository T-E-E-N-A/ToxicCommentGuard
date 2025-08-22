import { useState } from "react";

const API_URL = "http://127.0.0.1:8000"; // change to your deployed URL later

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    setError("");

    try {
      const res = await fetch(`${API_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      if (!res.ok) {
        throw new Error(`API error ${res.status}`);
      }
      const data = await res.json();
      const label = data.prediction === 1 ? "🚨 Toxic" : "✅ Not Toxic";
      setResult(label);
    } catch (err) {
      setError(err.message || "Failed to reach backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">Toxic Comment Detection</h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <textarea
            className="w-full h-28 resize-none rounded-xl border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-indigo-500"
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
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {result}
              </span>
            )}
            {error && (
              <div className="text-sm text-amber-700 bg-amber-100 rounded-xl px-3 py-2">
                {error}
              </div>
            )}
          </div>
        )}

        <div className="mt-6 text-xs text-gray-500 text-center">
          API: <code>{API_URL}</code>
        </div>
      </div>
    </div>
  );
}
