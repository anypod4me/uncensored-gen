"use client";
import { useState } from 'react';
import { Loader2, Download, Zap, ShieldAlert } from 'lucide-react';

export default function FluxGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = () => {
    if (!prompt) return;
    setLoading(true);

    // 1. Generate a random seed to ensure a unique image every time
    const seed = Math.floor(Math.random() * 1000000);

    // 2. Build the Uncensored API URL
    // safe=false & nsfw=true bypasses all filters
    // width/height at 2048 for max base resolution
    const baseUrl = "https://pollinations.ai";
    const params = `?width=2048&height=1152&seed=${seed}&model=flux&safe=false&nologo=true&enhance=true`;
    const fullUrl = `${baseUrl}${encodeURIComponent(prompt)}${params}`;

    // 3. Background pre-loading to handle the "loading" spinner accurately
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
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center p-4 md:p-10 font-sans">
      <div className="w-full max-w-4xl space-y-8">
        
        {/* Mobile-Friendly Header */}
        <div className="text-center space-y-2 pt-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
            FLUX UNLIMITED 4K
          </h1>
          <div className="flex items-center justify-center gap-2 text-zinc-500 font-bold uppercase text-xs tracking-widest">
            <ShieldAlert size={14} className="text-red-500" /> 
            NO FILTERS • NO COST • NO LIMITS
          </div>
        </div>

        {/* Prompt Input Box */}
        <div className="bg-zinc-900/50 p-4 md:p-6 rounded-3xl border border-zinc-800 shadow-2xl space-y-4 backdrop-blur-md">
          <textarea 
            className="w-full h-32 p-4 bg-zinc-950 border border-zinc-800 rounded-2xl focus:ring-2 focus:ring-red-600 outline-none resize-none text-lg placeholder:text-zinc-700 transition-all"
            placeholder="Describe anything... NSFW, 4K, hyper-realistic, uncensored..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          
          <button 
            onClick={generateImage}
            disabled={loading || !prompt}
            className="w-full py-4 bg-red-600 hover:bg-red-500 disabled:bg-zinc-800 rounded-2xl font-black text-xl transition-all flex justify-center items-center gap-2 active:scale-95"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={24} />
            ) : (
              <><Zap size={20} fill="currentColor" /> GENERATE 4K</>
            )}
          </button>
        </div>

        {/* Display Results */}
        {imageUrl && !loading && (
          <div className="space-y-4 animate-in fade-in zoom-in duration-500">
            <div className="rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-[0_0_60px_-15px_rgba(220,38,38,0.4)]">
              <img 
                src={imageUrl} 
                alt="AI Generated Uncensored Content" 
                className="w-full h-auto object-cover" 
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-3">
              <a 
                href={imageUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 py-4 bg-zinc-800 hover:bg-zinc-700 rounded-2xl font-bold text-center flex items-center justify-center gap-2 transition-colors"
              >
                <Download size={18} /> OPEN FULL 4K IMAGE
              </a>
            </div>
          </div>
        )}

        {/* Mobile Footer Note */}
        <footer className="text-center text-zinc-600 text-sm pb-10">
          Built for Unrestricted Creative Freedom.
        </footer>
      </div>
    </main>
  );
}
