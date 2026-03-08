"use client";

import { useState } from "react";
import { Loader2, Download, Zap, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Flux Generator - Unrestricted AI",
  description: "Generate unique Flux model images with no filters or limits.",
};

export default function FluxGenerator() {
  const [prompt, setPrompt] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const generateImage = () => {
    if (!prompt) return;
    setLoading(true);

    const seed = Math.floor(Math.random() * 1000000);
    const baseUrl = "https://pollinations.ai";
    const params = `?width=2048&height=1152&seed=${seed}&model=flux&safe=false&nologo=true&enhance=true`;
    const fullUrl = `${baseUrl}/p/${encodeURIComponent(prompt)}${params}`;

    const img = new Image();
    img.src = fullUrl;
    img.onload = () => {
      setImageUrl(fullUrl);
      setLoading(false);
    };
    img.onerror = () => {
      alert("Generation failed. Try a different prompt.");
      setLoading(false);
    };
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center p-4 md:p-10 font-sans selection:bg-red-500/30">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center space-y-2 pt-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-400">
            FLUX UNLIMITED 4K
          </h1>
          <div className="flex items-center justify-center gap-2 text-zinc-500 font-bold uppercase text-xs tracking-[0.2em]">
            <ShieldAlert size={14} className="text-red-600 animate-pulse" />
            NO FILTERS • NO COST • NO LIMITS
          </div>
        </div>

        <div className="bg-zinc-900/40 p-4 md:p-6 rounded-[2rem] border border-zinc-800/50 shadow-2xl space-y-4 backdrop-blur-xl">
          <textarea
            className="w-full h-32 p-5 bg-zinc-950/50 border border-zinc-800 rounded-2xl focus:ring-2 focus:ring-red-600/50 focus:border-red-600 outline-none resize-none text-lg placeholder:text-zinc-700 transition-all duration-300"
            placeholder="Describe anything... hyper-realistic, 4K, cinematic lighting..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            onClick={generateImage}
            disabled={loading || !prompt}
            className="w-full py-5 bg-red-600 hover:bg-red-500 disabled:bg-zinc-800/50 disabled:text-zinc-600 rounded-2xl font-black text-xl transition-all duration-300 flex justify-center items-center gap-3 active:scale-[0.98] shadow-lg shadow-red-900/20"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={24} />
            ) : (
              <>
                <Zap size={22} fill="currentColor" /> GENERATE 4K
              </>
            )}
          </button>
        </div>

        {imageUrl && !loading && (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-700">
            <div className="rounded-[2rem] overflow-hidden border border-zinc-800 shadow-[0_0_80px_-20px_rgba(220,38,38,0.3)] bg-zinc-900">
              <img
                src={imageUrl}
                alt="AI Result"
                className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href={imageUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-2xl font-bold text-center flex items-center justify-center gap-2 transition-all"
              >
                <Download size={18} /> OPEN RAW IMAGE
              </a>
            </div>
          </div>
        )}

        <footer className="text-center text-zinc-600 text-xs font-medium tracking-widest pt-10 pb-10">
          POWERED BY FLUX.1 • UNRESTRICTED ACCESS
        </footer>
      </div>
    </main>
  );
}