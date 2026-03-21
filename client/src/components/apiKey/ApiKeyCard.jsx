import React, { useState } from "react";

const ApiKeyCard = ({ apiKey }) => {
  const [copied, setCopied] = useState(false);

  if (!apiKey) return null;

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-3 space-y-2">

      <h2 className="text-xs font-semibold">🔑 API Key</h2>

      <div className="flex items-center justify-between bg-[#0f172a] px-2 py-1 rounded text-xs">
        <span className="truncate max-w-30">{apiKey}</span>

        <button
          onClick={() => {
            navigator.clipboard.writeText(apiKey);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
        >
          {copied ? "✓" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ApiKeyCard;