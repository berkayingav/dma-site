// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";

// --- VERİLER ---

// Kategorilere İKON (SVG path) bilgisi ekledim
const MENU_ITEMS = [
    {
        id: "start",
        name: "Start Power Üniteleri",
        desc: "Jet ve turboprop motorlar için yüksek akım.",
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z" // Yıldırım ikonu
    },
    {
        id: "continuous",
        name: "Sürekli Güç Kaynakları",
        desc: "Bakım ve aviyonik testler için temiz DC güç.",
        iconPath: "M18.36 6.64a9 9 0 1 1-12.73 0 M12 2v10" // Power/Standby ikonu
    },
    {
        id: "hybrid",
        name: "Hybrid (Start + Sürekli)",
        desc: "İki fonksiyon tek bir kompakt şasede.",
        iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" // Saat/Zaman/Hibrit ikonu
    },
    {
        id: "battery",
        name: "Batarya Arabaları",
        desc: "Mobil ve pratik saha enerji çözümleri.",
        iconPath: "M23 12h-2v4h2v-4zM1 12h2v4H1v-4zm4-5h14v10H5V7z" // Akü/Batarya ikonu
    },
    {
        id: "tru",
        name: "TRU Sistemleri",
        desc: "AC'den DC'ye yüksek kapasiteli dönüşüm.",
        iconPath: "M4 7h16M4 17h16M4 12h16" // Server/Unit ikonu
    },
];

const CATEGORIES = [
    { id: "start", name: "Start Power Üniteleri" },
    { id: "continuous", name: "Sürekli Güç Kaynakları 10–30V DC" },
    { id: "hybrid", name: "Hybrid Start + Sürekli 28V DC" },
    { id: "battery", name: "Batarya Arabaları" },
    { id: "tru", name: "Transformer Rectifier Units (TRU)" },
];

const PRODUCTS = [
    {
        id: "dma-gpu-30",
        name: "DMA GPU-30",
        category: "continuous",
        power: "28V DC, 30A Continuous",
        highlight: "Hafif hava araçları ve bakım hatları için kompakt çözüm.",
        specs: ["Giriş: 230V AC", "Çıkış: 28V DC / 30A", "Taşınabilir şase"],
        image: "/api/placeholder/400/300",
    },
    {
        id: "dma-gpu-150-start",
        name: "DMA GPU-150S",
        category: "start",
        power: "28V DC, 1500A Start Peak",
        highlight: "Turbo-prop ve hafif jet motorları için yüksek start gücü.",
        specs: ["Dahili batarya paketi", "Hızlı şarj", "Düşük bakım"],
        image: "/api/placeholder/400/300",
    },
    {
        id: "dma-gpu-300-hybrid",
        name: "DMA GPU-300H",
        category: "hybrid",
        power: "28V DC, 300A Cont. / 3000A Peak",
        highlight: "Start ve sürekli güç fonksiyonlarını tek gövdede birleştiren güç.",
        specs: ["Endüstriyel şase", "Düşük gürültü", "Uzak kumanda opsiyonu"],
        image: "/api/placeholder/400/300",
    },
    {
        id: "dma-bc-50",
        name: "DMA BC-50",
        category: "battery",
        power: "24V DC Batarya Arabası",
        highlight: "Saha koşullarına uygun dayanıklı batarya arabası.",
        specs: ["NATO konnektör", "Bakım kolaylığı", "Opsiyonel hızlı şarj"],
        image: "/api/placeholder/400/300",
    },
    {
        id: "dma-tru-90",
        name: "DMA TRU-90",
        category: "tru",
        power: "90 kVA TRU",
        highlight: "Büyük gövdeli uçaklar için AC-DC dönüşüm.",
        specs: ["Giriş: 3~ 400V AC", "Çıkış: 28V DC", "Sabit tesis kurulumu"],
        image: "/api/placeholder/400/300",
    },
];

const REFERENCES = [
    { id: 1, name: "TUSAŞ", code: "TAI" },
    { id: 2, name: "ASELSAN", code: "ASL" },
    { id: 3, name: "ROKETSAN", code: "ROK" },
    { id: 4, name: "BAYKAR", code: "BYK" },
    { id: 5, name: "TEI", code: "TEI" },
    { id: 6, name: "THY TEKNİK", code: "THY" },
    { id: 7, name: "HAVELSAN", code: "HVL" },
    { id: 8, name: "STM", code: "STM" },
];

// --- BİLEŞENLER ---

// 1. Splash Screen (Helikopter Animasyonu)
const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [isFlying, setIsFlying] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsFlying(true), 200);
                    setTimeout(onComplete, 1500);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 3) + 1;
            });
        }, 30);
        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white overflow-hidden">
            <div className={`relative transition-all duration-1000 ${isFlying ? "-translate-y-[150vh] scale-75" : "translate-y-0"}`}>
                <div className="relative w-64 h-32">
                    <svg className="absolute inset-0 text-slate-800 w-full h-full" viewBox="0 0 200 100" fill="currentColor">
                        <path d="M60,40 Q60,20 90,20 L160,20 Q190,20 190,50 Q190,80 150,80 L90,80 L70,90 L50,90 L60,80 Q40,80 30,60 L10,60 L10,40 L30,40 Z" />
                        <path d="M10,50 L-20,50 L-25,40 L-30,60 Z" />
                        <rect x="110" y="10" width="10" height="10" />
                    </svg>
                    <div
                        className="absolute inset-0 overflow-hidden transition-all duration-100 ease-linear"
                        style={{ height: `${progress}%`, top: `${100 - progress}%` }}
                    >
                        <svg className="absolute bottom-0 left-0 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] w-full h-full" viewBox="0 0 200 100" fill="currentColor">
                            <path d="M60,40 Q60,20 90,20 L160,20 Q190,20 190,50 Q190,80 150,80 L90,80 L70,90 L50,90 L60,80 Q40,80 30,60 L10,60 L10,40 L30,40 Z" />
                            <path d="M10,50 L-20,50 L-25,40 L-30,60 Z" />
                            <rect x="110" y="10" width="10" height="10" />
                        </svg>
                    </div>
                    <div className={`absolute -top-2 left-10 w-48 h-2 bg-slate-700 rounded-full origin-center ${isFlying ? "animate-spin-fast" : "animate-spin-slow"}`}>
                        <div className={`w-full h-full rounded-full transition-colors duration-500 ${progress > 50 ? "bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,1)]" : "bg-slate-600"}`}></div>
                    </div>
                    <div className={`absolute top-10 -left-8 w-1 h-12 bg-slate-700 origin-center ${isFlying ? "animate-spin-fast" : "animate-spin-slow"}`}>
                        <div className={`w-full h-full transition-colors duration-500 ${progress > 80 ? "bg-blue-400" : "bg-slate-600"}`}></div>
                    </div>
                </div>
                <div className={`absolute left-1/2 bottom-0 w-2 h-48 bg-gradient-to-t from-slate-800 to-gray-600 -translate-x-1/2 translate-y-full transition-all duration-500 ${isFlying ? "translate-y-[200%] opacity-0" : "-translate-y-4"}`}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-4 bg-gray-400 rounded-sm"></div>
                    <div className="absolute inset-0 bg-blue-500 opacity-50 animate-pulse" style={{ height: `${progress}%`, top: 'auto', bottom: 0 }}></div>
                </div>
            </div>
            <div className={`mt-12 text-center transition-opacity duration-500 ${isFlying ? "opacity-0" : "opacity-100"}`}>
                <p className="text-4xl font-bold text-blue-500 tabular-nums">{progress < 100 ? progress : 100}%</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mt-2 animate-pulse">Sistemler Başlatılıyor</p>
            </div>
            <style jsx>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin 0.8s linear infinite; }
        .animate-spin-fast { animation: spin 0.1s linear infinite; }
      `}</style>
        </div>
    );
};

// --- ANA SAYFA ---

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    // Mega Menu state'i: Hangi menünün açık olduğunu tutar (örn: 'products')
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (loading) {
        return <SplashScreen onComplete={() => setLoading(false)} />;
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-900 selection:text-white animate-fade-in">

            {/* --- NAVBAR --- */}
            <header
                onMouseLeave={() => setActiveMenu(null)} // Header'dan çıkınca menüyü kapat
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled || activeMenu
                        ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-3"
                        : "bg-transparent py-6"
                    }`}
            >
                <div className="mx-auto max-w-7xl px-6 flex items-center justify-between relative">
                    {/* LOGO */}
                    <div className="flex items-center gap-3 group cursor-pointer z-20">
                        <div className="h-10 w-10 bg-blue-600 rounded-sm flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-600/20">D</div>
                        <div className={`flex flex-col leading-none transition-colors ${scrolled || activeMenu ? "text-white" : "text-white"}`}>
                            <span className="font-bold text-lg tracking-wide">DMA</span>
                            <span className="text-[10px] tracking-[0.2em] uppercase opacity-80">Savunma</span>
                        </div>
                    </div>

                    {/* MENU LINKS */}
                    <nav className="hidden md:flex items-center gap-8 h-full z-20">
                        {/* Mega Menu Trigger */}
                        <div
                            className="relative h-full flex items-center"
                            onMouseEnter={() => setActiveMenu("products")}
                        >
                            <button
                                className={`text-sm font-medium uppercase tracking-wider transition-all py-4 ${(scrolled || activeMenu) ? "text-slate-200 hover:text-white" : "text-white hover:text-blue-200"
                                    }`}
                            >
                                Ürünler
                            </button>

                            {/* Aktif menü işaretçisi (çizgi) */}
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform transition-transform duration-300 ${activeMenu === "products" ? "scale-x-100" : "scale-x-0"}`}></span>
                        </div>

                        {["Kurumsal", "Hizmetler", "Kariyer", "İletişim"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onMouseEnter={() => setActiveMenu(null)} // Diğerlerine gelince mega menüyü kapat
                                className={`text-sm font-medium uppercase tracking-wider transition-all hover:text-blue-400 ${(scrolled || activeMenu) ? "text-slate-200" : "text-white"
                                    }`}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <button className="hidden md:block border border-blue-500 text-blue-400 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300 z-20">
                        Teklif Al
                    </button>
                </div>

                {/* --- MEGA MENU CONTENT (TUSAŞ STYLE) --- */}
                <div
                    className={`absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl transition-all duration-300 overflow-hidden ${activeMenu === "products"
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-4"
                        }`}
                >
                    <div className="max-w-7xl mx-auto flex h-[400px]">

                        {/* SOL: GÖRSEL ALANI (TUSAŞ GİBİ) */}
                        <div className="w-1/3 relative bg-slate-900 overflow-hidden">
                            {/* Arka plan görseli */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

                            <div className="absolute bottom-8 left-8 right-8 z-10">
                                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Öne Çıkan Teknoloji</p>
                                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">GELECEĞİ GÜÇLENDİREN SİSTEMLER</h3>
                                <button className="text-xs text-white border border-white/30 px-4 py-2 hover:bg-white hover:text-slate-900 transition uppercase font-semibold">
                                    İncele
                                </button>
                            </div>
                        </div>

                        {/* SAĞ: KATEGORİ LİSTESİ */}
                        <div className="w-2/3 p-10 bg-white">
                            <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                                {MENU_ITEMS.map((item) => (
                                    <a key={item.id} href={`#${item.id}`} className="group flex items-start gap-4 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                                        {/* İkon Kutusu */}
                                        <div className="w-12 h-12 flex-shrink-0 bg-blue-50 text-blue-600 rounded flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                                            </svg>
                                        </div>
                                        {/* Yazı */}
                                        <div>
                                            <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors flex items-center gap-2">
                                                {item.name}
                                                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500">→</span>
                                            </h4>
                                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Alt Bilgi Şeridi */}
                            <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                                <p>Tüm güç ünitelerimiz NATO standartlarına uygundur.</p>
                                <a href="#products" className="font-bold text-slate-900 hover:underline">Tüm Kataloğu Görüntüle</a>
                            </div>
                        </div>

                    </div>
                </div>

            </header>

            {/* --- HERO SECTION --- */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559627779-a0ace82a348c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl w-full px-6 mt-20">
                    <div className="max-w-2xl space-y-6 animate-fade-in-up">
                        <div className="flex items-center gap-2">
                            <span className="h-[2px] w-10 bg-blue-500"></span>
                            <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.2em]">Yerli ve Milli Güç</p>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                            GÖKLERDEKİ <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">GÜVENCENİZ</span>
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl max-w-lg font-light leading-relaxed">
                            Askeri ve sivil havacılık için geliştirilmiş, ileri teknoloji Yer Güç Üniteleri (GPU) ile operasyonlarınız kesintisiz devam etsin.
                        </p>
                        <div className="pt-4 flex gap-4">
                            <a href="#products" className="bg-blue-600 text-white px-8 py-3 rounded-sm font-semibold text-sm uppercase tracking-wider hover:bg-blue-700 transition shadow-lg shadow-blue-900/50">Ürünleri İncele</a>
                            <a href="#about" className="border border-slate-500 text-slate-300 px-8 py-3 rounded-sm font-semibold text-sm uppercase tracking-wider hover:bg-slate-800 hover:text-white transition">Hakkımızda</a>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </div>
            </section>

            {/* --- STATS BAR --- */}
            <div className="bg-blue-900 py-12 border-b border-blue-800">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { num: "20+", text: "Yıllık Tecrübe" },
                        { num: "%100", text: "Yerli Mühendislik" },
                        { num: "500+", text: "Tamamlanan Proje" },
                        { num: "7/24", text: "Teknik Destek" }
                    ].map((stat, i) => (
                        <div key={i} className="space-y-1">
                            <p className="text-4xl font-bold text-white">{stat.num}</p>
                            <p className="text-xs uppercase tracking-widest text-blue-200">{stat.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- REFERANSLAR (SONSUZ SLIDER) --- */}
            <section className="py-10 bg-slate-100 border-b border-slate-200 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Güç Verdiğimiz Referanslar</p>
                </div>
                <div className="relative w-full overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-slate-100 to-transparent"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-slate-100 to-transparent"></div>
                    <div className="flex w-max animate-scroll hover:animate-pause">
                        {/* 1. SET */}
                        <div className="flex gap-16 px-8">
                            {REFERENCES.map((ref) => (
                                <div key={ref.id} className="flex flex-col items-center justify-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                    <div className="h-16 w-32 border-2 border-slate-300 rounded flex items-center justify-center bg-white text-slate-700 font-bold text-xl shadow-sm">{ref.code}</div>
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{ref.name}</span>
                                </div>
                            ))}
                        </div>
                        {/* 2. SET (Kopya) */}
                        <div className="flex gap-16 px-8">
                            {REFERENCES.map((ref) => (
                                <div key={`copy-${ref.id}`} className="flex flex-col items-center justify-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                    <div className="h-16 w-32 border-2 border-slate-300 rounded flex items-center justify-center bg-white text-slate-700 font-bold text-xl shadow-sm">{ref.code}</div>
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{ref.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ÜRÜNLER --- */}
            <section id="products" className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">TEKNOLOJİK ÇÖZÜMLER</h2>
                        <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
                        <p className="text-slate-500 max-w-2xl mx-auto pt-4">Havacılık standartlarına tam uyumlu, zorlu saha koşulları için test edilmiş güç sistemleri.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        <button className="px-6 py-2 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">Tümü</button>
                        {CATEGORIES.map(cat => (
                            <button key={cat.id} className="px-6 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-full text-xs font-bold uppercase tracking-wider transition">
                                {cat.name.split(" ")[0]}...
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PRODUCTS.map((product) => (
                            <div key={product.id} className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-64 bg-slate-100 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
                                        <span className="text-4xl opacity-20 font-black">GPU</span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                        <p className="text-white text-xs font-bold uppercase tracking-wider">{CATEGORIES.find(c => c.id === product.category)?.name}</p>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{product.name}</h3>
                                        <span className="bg-blue-50 text-blue-700 text-[10px] px-2 py-1 rounded font-bold uppercase">{product.power.split(",")[0]}</span>
                                    </div>
                                    <p className="text-sm text-slate-600 line-clamp-2">{product.highlight}</p>
                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                        <button className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1 hover:gap-2 transition-all">Detayları İncele <span>→</span></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- HAKKIMIZDA --- */}
            <section id="about" className="py-24 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 space-y-6 relative z-10">
                        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase rounded-full">Kurumsal</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">GELECEĞİN SAVUNMA TEKNOLOJİLERİ</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">DMA Savunma, sivil ve askeri havacılık uygulamaları için yer destek ekipmanları ve güç elektroniği çözümleri geliştiren, mühendislik odaklı bir teknoloji şirketidir.</p>
                        <ul className="space-y-3 pt-2">
                            {["Yüksek güvenilirlik ve performans", "Sahada bakım kolaylığı sağlayan modüler mimari", "Uluslararası havacılık standartlarına uyum"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700"><span className="h-2 w-2 bg-blue-600 rounded-full"></span>{item}</li>
                            ))}
                        </ul>
                        <div className="pt-4">
                            <button className="bg-slate-900 text-white px-8 py-3 rounded-sm font-semibold uppercase text-xs tracking-wider hover:bg-slate-800 transition">Şirket Profili</button>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
                        <div className="relative bg-white p-2 rounded-lg shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                            <div className="h-80 bg-slate-800 rounded flex items-center justify-center text-slate-600">Görsel Alanı</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- İLETİŞİM (CTA) --- */}
            <section className="bg-blue-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
                    <h2 className="text-3xl font-bold">PROJENİZ İÇİN GÜÇ ÇÖZÜMÜNE Mİ İHTİYACINIZ VAR?</h2>
                    <p className="text-blue-100 text-lg">Filo yapınıza ve operasyonel gereksinimlerinize en uygun GPU modelini belirlemek için mühendislerimizle görüşün.</p>
                    <button className="bg-white text-blue-900 px-10 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-blue-50 transition shadow-lg">Bize Ulaşın</button>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-slate-950 text-slate-400 py-16 text-sm">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="space-y-4">
                        <h3 className="text-white font-bold text-lg">DMA SAVUNMA</h3>
                        <p className="opacity-70 leading-relaxed">Örnek OSB, 1. Cadde No:10 <br /> Ankara, Türkiye</p>
                        <p className="opacity-70">+90 (312) 000 00 00</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Hızlı Linkler</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition">Kurumsal</a></li>
                            <li><a href="#" className="hover:text-white transition">Ürünler</a></li>
                            <li><a href="#" className="hover:text-white transition">İletişim</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Ürün Grupları</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition">Start Üniteleri</a></li>
                            <li><a href="#" className="hover:text-white transition">Sürekli Güç (DC)</a></li>
                            <li><a href="#" className="hover:text-white transition">Hibrit Çözümler</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Bülten</h4>
                        <div className="flex gap-2">
                            <input type="email" placeholder="E-posta" className="bg-slate-900 border border-slate-800 px-3 py-2 rounded w-full focus:outline-none focus:border-blue-600" />
                            <button className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">→</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} DMA Savunma Sanayi. Tüm hakları saklıdır.</p>
                    <div className="flex gap-6"><a href="#" className="hover:text-white">KVKK</a></div>
                </div>
            </footer>

            {/* --- GLOBAL STYLES --- */}
            <style jsx global>{`
          @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
          .animate-fade-in { animation: fade-in 1s ease-in-out; }
          .animate-fade-in-up { animation: fade-in 1s ease-in-out, slide-up 1s ease-out; }
          @keyframes slide-up { from { transform: translateY(20px); } to { transform: translateY(0); } }
          @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-scroll { animation: scroll 30s linear infinite; }
          .hover\:animate-pause:hover { animation-play-state: paused; }
      `}</style>
        </div>
    );
}