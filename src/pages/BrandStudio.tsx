import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, Copy, Check, Send, Sparkles, Smartphone, Monitor, RotateCcw, 
  HelpCircle, CheckCircle2, MessageSquare, PhoneCall, ShieldCheck 
} from 'lucide-react';

interface Palette {
  name: string;
  primary: string;
  secondary: string;
  action: string;
  mainBg: string;
  altBg: string;
  darkText: string;
  mutedText: string;
  inverseText: string;
}

const PRESET_PALETTES: Palette[] = [
  {
    name: 'Allegro Classic',
    primary: '#facc15', // Yellow
    secondary: '#a1a1aa', // Muted gray
    action: '#facc15', // Yellow
    mainBg: '#000000', // Black
    altBg: '#18181b', // Zinc 900
    darkText: '#ffffff', // White text
    mutedText: '#a1a1aa', // Gray text
    inverseText: '#000000' // Black text
  },
  {
    name: 'Forest Emerald',
    primary: '#10b981', // Emerald green
    secondary: '#6ee7b7', // Light green
    action: '#f59e0b', // Amber/gold CTA
    mainBg: '#064e3b', // Deep forest green
    altBg: '#022c22', // Darker forest green
    darkText: '#ecfdf5', // Light mint text
    mutedText: '#a7f3d0', // Muted mint text
    inverseText: '#ffffff'
  },
  {
    name: 'Midnight Ocean',
    primary: '#3b82f6', // Ocean blue
    secondary: '#93c5fd', // Light blue
    action: '#f43f5e', // Rose/pink CTA
    mainBg: '#0f172a', // Slate 900
    altBg: '#020617', // Slate 950
    darkText: '#f8fafc', // Light slate text
    mutedText: '#94a3b8', // Muted slate text
    inverseText: '#ffffff'
  },
  {
    name: 'Sunset Coral',
    primary: '#f97316', // Orange
    secondary: '#fca5a5', // Light coral
    action: '#10b981', // Emerald green CTA
    mainBg: '#1e1b4b', // Indigo 950
    altBg: '#0f0e17', // Dark background
    darkText: '#faf5ff', // White text
    mutedText: '#c084fc', // Purple text
    inverseText: '#ffffff'
  },
  {
    name: 'Light Corporate',
    primary: '#2563eb', // Royal blue
    secondary: '#4b5563', // Gray
    action: '#10b981', // Green
    mainBg: '#ffffff', // Pure white
    altBg: '#f3f4f6', // Light gray
    darkText: '#1f2937', // Dark gray text
    mutedText: '#6b7280', // Muted text
    inverseText: '#ffffff'
  }
];

export const BrandStudio: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Color States
  const [primary, setPrimary] = useState('#facc15');
  const [secondary, setSecondary] = useState('#a1a1aa');
  const [action, setAction] = useState('#facc15');
  const [mainBg, setMainBg] = useState('#000000');
  const [altBg, setAltBg] = useState('#18181b');
  const [darkText, setDarkText] = useState('#ffffff');
  const [mutedText, setMutedText] = useState('#a1a1aa');
  const [inverseText, setInverseText] = useState('#000000');

  // Helper States
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [businessName, setBusinessName] = useState('');
  const [copied, setCopied] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Load colors from URL query params on mount
  useEffect(() => {
    const p = searchParams.get('p');
    const s = searchParams.get('s');
    const a = searchParams.get('a');
    const mb = searchParams.get('mb');
    const ab = searchParams.get('ab');
    const dt = searchParams.get('dt');
    const mt = searchParams.get('mt');
    const it = searchParams.get('it');
    const bname = searchParams.get('bname');

    if (p) setPrimary(p.startsWith('#') ? p : `#${p}`);
    if (s) setSecondary(s.startsWith('#') ? s : `#${s}`);
    if (a) setAction(a.startsWith('#') ? a : `#${a}`);
    if (mb) setMainBg(mb.startsWith('#') ? mb : `#${mb}`);
    if (ab) setAltBg(ab.startsWith('#') ? ab : `#${ab}`);
    if (dt) setDarkText(dt.startsWith('#') ? dt : `#${dt}`);
    if (mt) setMutedText(mt.startsWith('#') ? mt : `#${mt}`);
    if (it) setInverseText(it.startsWith('#') ? it : `#${it}`);
    if (bname) setBusinessName(bname);
  }, [searchParams]);

  // Apply a preset
  const applyPreset = (preset: Palette) => {
    setPrimary(preset.primary);
    setSecondary(preset.secondary);
    setAction(preset.action);
    setMainBg(preset.mainBg);
    setAltBg(preset.altBg);
    setDarkText(preset.darkText);
    setMutedText(preset.mutedText);
    setInverseText(preset.inverseText);
  };

  // Reset to default
  const handleReset = () => {
    applyPreset(PRESET_PALETTES[0]);
  };

  // Generate the shareable URL
  const generateShareUrl = () => {
    const cleanHex = (color: string) => color.replace('#', '');
    const url = new URL(window.location.href);
    url.searchParams.set('p', cleanHex(primary));
    url.searchParams.set('s', cleanHex(secondary));
    url.searchParams.set('a', cleanHex(action));
    url.searchParams.set('mb', cleanHex(mainBg));
    url.searchParams.set('ab', cleanHex(altBg));
    url.searchParams.set('dt', cleanHex(darkText));
    url.searchParams.set('mt', cleanHex(mutedText));
    url.searchParams.set('it', cleanHex(inverseText));
    if (businessName) url.searchParams.set('bname', businessName);
    return url.toString();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(generateShareUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppSubmit = () => {
    const shareUrl = generateShareUrl();
    const message = `Hi Allegro Digital! 🚀 I've finalized my brand colors in the Brand Studio for ${businessName || 'my business'}. Here is my custom palette link: ${shareUrl}`;
    window.open(`https://wa.me/27823006996?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-24 pb-24 min-h-screen bg-black text-zinc-100 relative">
      <Helmet>
        <title>Brand Color Studio | Allegro Digital</title>
        <meta name="description" content="Design your custom brand color palette in real-time and preview how your high-converting website will look instantly." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button & Title */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-yellow-400 transition-colors text-sm font-bold mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                Brand Color <span className="text-yellow-400">Studio</span>
              </h1>
              <p className="text-zinc-400 text-sm sm:text-base mt-1">
                Customize your brand colors in real-time and see how your website will look instantly.
              </p>
            </div>
            
            {/* Reset Button */}
            <button 
              onClick={handleReset}
              className="self-start md:self-auto flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs font-bold hover:text-yellow-400 transition-colors text-zinc-400"
            >
              <RotateCcw className="w-4 h-4" /> Reset Colors
            </button>
          </div>
        </div>

        {/* Studio Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Color Controllers (5 cols) */}
          <div className="lg:col-span-5 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 shadow-2xl relative">
            <div className="flex items-center gap-2 text-yellow-400 font-extrabold text-lg mb-6 font-heading border-b border-zinc-800 pb-3">
              <Sparkles className="w-5 h-5" /> Brand Customizer
            </div>

            {/* Presets Block */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Pre-designed Themes
              </label>
              <div className="flex flex-wrap gap-2">
                {PRESET_PALETTES.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => applyPreset(preset)}
                    className="px-3 py-1.5 bg-zinc-950 hover:bg-zinc-800 border border-zinc-850 rounded-lg text-xs font-medium text-zinc-300 transition-colors flex items-center gap-1.5"
                  >
                    <span 
                      className="w-2.5 h-2.5 rounded-full inline-block border border-black/20" 
                      style={{ backgroundColor: preset.primary }}
                    />
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Inputs Grid */}
            <div className="space-y-4 mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-850 pb-2">
                Color Specifications
              </label>

              {/* 1. Primary */}
              <div className="flex items-center justify-between gap-4 p-2.5 bg-zinc-950 border border-zinc-850 rounded-xl">
                <div>
                  <div className="text-sm font-bold text-white">1. Primary Color</div>
                  <div className="text-[10px] text-zinc-500">Headers, branding, accents</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-zinc-400">{primary.toUpperCase()}</span>
                  <input 
                    type="color" 
                    value={primary} 
                    onChange={(e) => setPrimary(e.target.value)}
                    className="w-10 h-10 border-0 bg-transparent rounded-lg cursor-pointer shrink-0"
                  />
                </div>
              </div>

              {/* 2. Secondary */}
              <div className="flex items-center justify-between gap-4 p-2.5 bg-zinc-950 border border-zinc-850 rounded-xl">
                <div>
                  <div className="text-sm font-bold text-white">2. Secondary Color</div>
                  <div className="text-[10px] text-zinc-500">Subtitles, badges, hover accents</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-zinc-400">{secondary.toUpperCase()}</span>
                  <input 
                    type="color" 
                    value={secondary} 
                    onChange={(e) => setSecondary(e.target.value)}
                    className="w-10 h-10 border-0 bg-transparent rounded-lg cursor-pointer shrink-0"
                  />
                </div>
              </div>

              {/* 3. Action */}
              <div className="flex items-center justify-between gap-4 p-2.5 bg-zinc-950 border border-zinc-850 rounded-xl">
                <div>
                  <div className="text-sm font-bold text-white">3. Action Color</div>
                  <div className="text-[10px] text-zinc-500">Primary CTA, Book Buttons</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-zinc-400">{action.toUpperCase()}</span>
                  <input 
                    type="color" 
                    value={action} 
                    onChange={(e) => setAction(e.target.value)}
                    className="w-10 h-10 border-0 bg-transparent rounded-lg cursor-pointer shrink-0"
                  />
                </div>
              </div>

              {/* 4. Backgrounds */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2 p-2.5 bg-zinc-950 border border-zinc-850 rounded-xl">
                  <div>
                    <div className="text-xs font-bold text-white">4a. Main BG</div>
                    <div className="text-[9px] text-zinc-500">Default section backdrop</div>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[10px] font-mono text-zinc-400">{mainBg.toUpperCase()}</span>
                    <input 
                      type="color" 
                      value={mainBg} 
                      onChange={(e) => setMainBg(e.target.value)}
                      className="w-8 h-8 border-0 bg-transparent rounded-lg cursor-pointer shrink-0"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 p-2.5 bg-zinc-950 border border-zinc-850 rounded-xl">
                  <div>
                    <div className="text-xs font-bold text-white">4b. Alternate BG</div>
                    <div className="text-[9px] text-zinc-500">Contrast sections</div>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[10px] font-mono text-zinc-400">{altBg.toUpperCase()}</span>
                    <input 
                      type="color" 
                      value={altBg} 
                      onChange={(e) => setAltBg(e.target.value)}
                      className="w-8 h-8 border-0 bg-transparent rounded-lg cursor-pointer shrink-0"
                    />
                  </div>
                </div>
              </div>

              {/* 5. Typography Neutrals */}
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col gap-1 p-2 bg-zinc-950 border border-zinc-850 rounded-xl">
                  <div class="text-[10px] font-bold text-white">5a. Dark Neutral</div>
                  <div class="text-[8px] text-zinc-500">Main text</div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[9px] font-mono text-zinc-400">{darkText.toUpperCase()}</span>
                    <input 
                      type="color" 
                      value={darkText} 
                      onChange={(e) => setDarkText(e.target.value)}
                      className="w-6 h-6 border-0 bg-transparent rounded-lg cursor-pointer shrink-0"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1 p-2 bg-zinc-950 border border-zinc-850 rounded-xl">
                  <div class="text-[10px] font-bold text-white">5b. Muted Text</div>
                  <div class="text-[8px] text-zinc-500">Secondary text</div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[9px] font-mono text-zinc-400">{mutedText.toUpperCase()}</span>
                    <input 
                      type="color" 
                      value={mutedText} 
                      onChange={(e) => setMutedText(e.target.value)}
                      className="w-6 h-6 border-0 bg-transparent rounded-lg cursor-pointer shrink-0"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1 p-2 bg-zinc-950 border border-zinc-850 rounded-xl">
                  <div class="text-[10px] font-bold text-white">5c. Inverse Text</div>
                  <div class="text-[8px] text-zinc-500">Text on CTA</div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[9px] font-mono text-zinc-400">{inverseText.toUpperCase()}</span>
                    <input 
                      type="color" 
                      value={inverseText} 
                      onChange={(e) => setInverseText(e.target.value)}
                      className="w-6 h-6 border-0 bg-transparent rounded-lg cursor-pointer shrink-0"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Block */}
            <div className="hidden lg:block bg-zinc-950 border border-zinc-850 p-4 rounded-2xl">
              <label className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">
                Business Name (Optional)
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="e.g. Walmer Plumbers"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-yellow-400 mb-4"
              />
              
              <button
                onClick={() => setShowSubmitModal(true)}
                className="w-full py-4 bg-yellow-400 text-black font-extrabold rounded-xl hover:bg-yellow-300 transition-colors shadow-[0_0_20px_rgba(250,204,21,0.2)] flex items-center justify-center gap-2 text-sm"
              >
                I am happy :)
              </button>
            </div>
          </div>

          {/* RIGHT: Live Preview Mockup (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Viewport Control Bar */}
            <div className="bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-2xl flex items-center justify-between gap-4">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                🖥️ Live Design Preview (Interactive)
              </span>
              <div className="flex items-center bg-zinc-950 border border-zinc-850 rounded-lg p-0.5">
                <button
                  onClick={() => setPreviewMode('desktop')}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all ${previewMode === 'desktop' ? 'bg-yellow-400 text-black' : 'text-zinc-400 hover:text-white'}`}
                >
                  <Monitor className="w-3.5 h-3.5" /> Desktop
                </button>
                <button
                  onClick={() => setPreviewMode('mobile')}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all ${previewMode === 'mobile' ? 'bg-yellow-400 text-black' : 'text-zinc-400 hover:text-white'}`}
                >
                  <Smartphone className="w-3.5 h-3.5" /> Mobile
                </button>
              </div>
            </div>

            {/* Preview Area */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-4 flex items-center justify-center overflow-hidden min-h-[600px] shadow-2xl relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(24,24,27,0.8)_0%,transparent_80%)] pointer-events-none" />

              {/* Viewport Container */}
              <div 
                className={`transition-all duration-300 bg-white border border-zinc-800 overflow-y-auto shadow-2xl ${
                  previewMode === 'desktop' ? 'w-full h-[650px] rounded-xl' : 'w-[360px] h-[600px] rounded-[36px] border-[8px] border-zinc-800 px-1'
                }`}
                style={{ backgroundColor: mainBg, color: darkText }}
              >
                
                {/* 1. Mock Navbar */}
                <div 
                  className="px-6 py-4 border-b flex items-center justify-between sticky top-0 backdrop-blur-md z-30"
                  style={{ backgroundColor: `${mainBg}90`, borderColor: `${mutedText}30` }}
                >
                  <span className="font-extrabold text-sm tracking-tight font-heading" style={{ color: darkText }}>
                    {businessName.toUpperCase() || 'LOGO'}
                  </span>
                  <div className="flex items-center gap-4 text-xs font-semibold" style={{ color: mutedText }}>
                    <span class="cursor-pointer hover:opacity-80">Home</span>
                    <span class="cursor-pointer hover:opacity-80">Services</span>
                    <span 
                      class="px-3 py-1 rounded-full text-[10px] font-bold transition-opacity cursor-pointer"
                      style={{ backgroundColor: action, color: inverseText }}
                    >
                      Book Free Call
                    </span>
                  </div>
                </div>

                {/* 2. Mock Hero Section */}
                <div className="px-8 py-16 text-center relative overflow-hidden" style={{ backgroundColor: mainBg }}>
                  {/* Decorative circle glow */}
                  <div 
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-[80px] opacity-10 pointer-events-none"
                    style={{ backgroundColor: primary }}
                  />

                  <div className="relative z-10">
                    <span 
                      className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border mb-4"
                      style={{ color: primary, borderColor: `${primary}30`, backgroundColor: `${primary}05` }}
                    >
                      Premium Service Trades
                    </span>
                    <h2 
                      className="text-2xl sm:text-3xl font-extrabold font-heading mb-4 leading-tight"
                      style={{ color: darkText }}
                    >
                      Fast, Trusted Local Services <br />
                      <span style={{ color: primary }}>Across Port Elizabeth</span>
                    </h2>
                    <p 
                      className="text-xs sm:text-sm max-w-md mx-auto mb-8 leading-relaxed"
                      style={{ color: mutedText }}
                    >
                      We deliver professional emergency plumbing, electrical, and maintenance support straight to your home or office in PE.
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <span 
                        className="px-5 py-2.5 rounded-full text-xs font-bold shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: action, color: inverseText }}
                      >
                        Request Instant Callback
                      </span>
                      <span 
                        className="px-5 py-2.5 rounded-full text-xs font-bold border cursor-pointer hover:opacity-80 transition-all"
                        style={{ borderColor: `${mutedText}40`, color: darkText }}
                      >
                        Learn More
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Mock Services Block */}
                <div className="px-8 py-12" style={{ backgroundColor: altBg }}>
                  <div className="text-center mb-8">
                    <h3 className="text-lg font-bold font-heading mb-1" style={{ color: darkText }}>
                      Our Core Services
                    </h3>
                    <p className="text-[10px]" style={{ color: mutedText }}>
                      Professional local expertise you can count on
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div 
                      className="p-5 border rounded-xl"
                      style={{ backgroundColor: mainBg, borderColor: `${mutedText}20` }}
                    >
                      <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center" style={{ backgroundColor: `${primary}10`, color: primary }}>
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h4 class="text-xs font-bold mb-1" style={{ color: darkText }}>Residential Repair</h4>
                      <p class="text-[10px]" style={{ color: mutedText }}>Fast, accredited assistance at your doorstep.</p>
                    </div>

                    <div 
                      className="p-5 border rounded-xl"
                      style={{ backgroundColor: mainBg, borderColor: `${mutedText}20` }}
                    >
                      <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center" style={{ backgroundColor: `${secondary}10`, color: secondary }}>
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <h4 class="text-xs font-bold mb-1" style={{ color: darkText }}>Commercial Contract</h4>
                      <p class="text-[10px]" style={{ color: mutedText }}>Reliable maintenance retainers for offices.</p>
                    </div>
                  </div>
                </div>

                {/* 4. Mock CTA Section */}
                <div className="px-8 py-12 text-center" style={{ backgroundColor: mainBg }}>
                  <div 
                    className="border rounded-2xl p-6 relative overflow-hidden"
                    style={{ borderColor: `${primary}30`, backgroundColor: altBg }}
                  >
                    <h3 className="text-lg font-extrabold font-heading mb-2" style={{ color: darkText }}>
                      Need a Reliable Quote?
                    </h3>
                    <p className="text-[10px] mb-6 max-w-xs mx-auto" style={{ color: mutedText }}>
                      Get connected with our Gqeberha dispatch team and receive a callback within 15 minutes.
                    </p>
                    <span 
                      className="inline-block px-6 py-3 rounded-full text-xs font-bold cursor-pointer hover:opacity-90"
                      style={{ backgroundColor: action, color: inverseText }}
                    >
                      Call Dispatcher Now
                    </span>
                  </div>
                </div>

                {/* 5. Mock Footer */}
                <div 
                  className="px-6 py-6 border-t text-center text-[9px]"
                  style={{ backgroundColor: altBg, borderColor: `${mutedText}20`, color: mutedText }}
                >
                  © {new Date().getFullYear()} {businessName || 'Local Business Pty Ltd'}. All rights reserved.
                </div>

              </div>
            </div>

            {/* Mobile Submit Block (below mockup) */}
            <div className="block lg:hidden bg-zinc-900 border border-zinc-800 p-6 rounded-3xl mt-4 shadow-xl">
              <label className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">
                Business Name (Optional)
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="e.g. Walmer Plumbers"
                className="w-full bg-zinc-950 border border-zinc-850 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-yellow-400 mb-4"
              />
              <button
                onClick={() => setShowSubmitModal(true)}
                className="w-full py-4 bg-yellow-400 text-black font-extrabold rounded-xl hover:bg-yellow-300 transition-colors shadow-[0_0_20px_rgba(250,204,21,0.2)] flex items-center justify-center gap-2 text-sm"
              >
                I am happy :)
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* SUBMIT POPUP MODAL */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl">
            
            <h3 className="text-2xl font-extrabold text-white font-heading mb-2 flex items-center gap-2">
              🎉 Your Brand Palette is Ready!
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              I've locked in your brand colors. You can copy the custom share link below or send it directly to our lead developer over WhatsApp.
            </p>

            {/* Generated Link Input */}
            <div className="mb-6">
              <label class="block text-xs font-bold text-zinc-500 mb-2 uppercase tracking-wider">
                Your Share Link
              </label>
              <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-xl p-1.5 pl-3">
                <input
                  type="text"
                  readOnly
                  value={generateShareUrl()}
                  className="bg-transparent border-0 w-full text-xs font-mono text-zinc-300 focus:outline-none focus:ring-0 mr-2 select-all"
                />
                <button
                  onClick={handleCopyLink}
                  className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${copied ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800'}`}
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              <button
                onClick={handleWhatsAppSubmit}
                className="w-full py-3.5 bg-yellow-400 text-black font-extrabold rounded-xl hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2 text-sm shadow-[0_0_20px_rgba(250,204,21,0.2)]"
              >
                <Send className="w-4 h-4" /> Send via WhatsApp
              </button>
              <button
                onClick={() => setShowSubmitModal(false)}
                className="w-full py-3.5 bg-zinc-950 border border-zinc-850 hover:bg-zinc-900 text-zinc-300 font-bold rounded-xl transition-colors text-sm"
              >
                Close Studio
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
