export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-slate-900">
            {/* NAVBAR */}
            <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-900/95 backdrop-blur">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                    <div className="text-lg font-semibold text-white">DMA Savunma Sanayi ve Havacılık</div>
                    <nav className="flex gap-6 text-sm text-slate-200">
                        <a href="#hero" className="hover:text-blue-400 transition-colors">
                            Ana Sayfa
                        </a>
                        <a
                            href="#services"
                            className="hover:text-blue-400 transition-colors"
                        >
                            Hizmetler
                        </a>
                        <a href="#about" className="hover:text-blue-400 transition-colors">
                            Hakkımızda
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-blue-400 transition-colors"
                        >
                            İletişim
                        </a>
                    </nav>
                </div>
            </header>

            {/* ANA İÇERİK */}
            <main className="flex-1">
                {/* HERO */}
                <section
                    id="hero"
                    className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-16 text-slate-50"
                >
                    <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-xl">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
                                Kurumsal Çözümler
                            </p>
                            <h1 className="mb-4 text-3xl font-semibold leading-tight md:text-4xl">
                                İşletmenizi güvenilir ve ölçeklenebilir teknolojilerle
                                güçlendiriyoruz.
                            </h1>
                            <p className="mb-6 text-sm text-slate-300 md:text-base">
                                Şirket Adı, kurumsal müşterilerine uçtan uca teknoloji,
                                danışmanlık ve proje yönetimi hizmetleri sunar. İhtiyacınıza özel
                                çözümlerle sürdürülebilir değer üretmenize yardımcı oluruz.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-blue-600/40 transition hover:bg-blue-700"
                                >
                                    Teklif Al
                                </a>
                                <a
                                    href="#services"
                                    className="inline-flex items-center justify-center rounded-full border border-slate-500 px-5 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-200 hover:bg-slate-800/40"
                                >
                                    Hizmetlerimizi İncele
                                </a>
                            </div>
                        </div>

                        <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-2xl">
                            <h2 className="mb-2 text-sm font-semibold text-slate-100">
                                Neler Sunuyoruz?
                            </h2>
                            <p className="mb-4 text-xs text-slate-300">
                                Stratejiden uygulamaya kadar tüm süreçlerde yanınızdayız.
                            </p>
                            <ul className="space-y-2 text-xs text-slate-200">
                                <li>• Teknoloji ve süreç danışmanlığı</li>
                                <li>• Uçtan uca proje ve ürün geliştirme</li>
                                <li>• 7/24 teknik destek ve bakım hizmetleri</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* HİZMETLER */}
                <section
                    id="services"
                    className="border-b border-slate-100 bg-slate-50 py-14"
                >
                    <div className="mx-auto max-w-6xl px-4">
                        <div className="mb-8 max-w-2xl">
                            <h2 className="text-2xl font-semibold text-slate-900">
                                Hizmetlerimiz
                            </h2>
                            <p className="mt-2 text-sm text-slate-600">
                                Farklı ölçeklerdeki firmalara süreç optimizasyonundan teknik
                                mimariye kadar geniş bir yelpazede hizmet sunuyoruz.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <h3 className="mb-2 text-base font-semibold text-slate-900">
                                    Danışmanlık
                                </h3>
                                <p className="text-sm text-slate-600">
                                    Strateji, dijital dönüşüm ve süreç iyileştirme alanlarında
                                    deneyimli ekibimizle yanınızdayız.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <h3 className="mb-2 text-base font-semibold text-slate-900">
                                    Proje Yönetimi
                                </h3>
                                <p className="text-sm text-slate-600">
                                    Projelerinizi zamanında, bütçesinde ve beklenen kalite
                                    standartlarında tamamlamanız için uçtan uca yönetim sunuyoruz.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <h3 className="mb-2 text-base font-semibold text-slate-900">
                                    Teknik Destek
                                </h3>
                                <p className="text-sm text-slate-600">
                                    İş sürekliliğiniz için proaktif izleme, bakım ve kullanıcı
                                    destek hizmetleri sağlıyoruz.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HAKKIMIZDA */}
                <section id="about" className="py-14">
                    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row">
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold text-slate-900">
                                Hakkımızda
                            </h2>
                            <p className="mt-3 text-sm text-slate-600">
                                Şirket Adı, farklı sektörlerden kurumsal müşterilere teknoloji ve
                                danışmanlık çözümleri sunan bağımsız bir şirkettir. Amacımız,
                                işletmelerin teknolojiyi etkin ve sürdürülebilir bir şekilde
                                kullanmasını sağlamaktır.
                            </p>
                            <p className="mt-3 text-sm text-slate-600">
                                Uzman ekibimizle birlikte, her müşterinin ihtiyacına göre
                                özelleştirilmiş çözümler geliştirir, uygulama ve sonrasında da
                                destek süreçlerini yakından takip ederiz.
                            </p>
                        </div>

                        <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                            <h3 className="mb-3 text-sm font-semibold text-slate-900">
                                Değerlerimiz
                            </h3>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li>• Güvenilir ve şeffaf iş ortaklığı</li>
                                <li>• Ölçülebilir ve sürdürülebilir sonuçlar</li>
                                <li>• Sürekli gelişim ve öğrenme kültürü</li>
                                <li>• Müşteri odaklı yaklaşım</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* İLETİŞİM */}
                <section
                    id="contact"
                    className="border-y border-slate-100 bg-slate-50 py-14"
                >
                    <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-semibold text-slate-900">
                                İletişim
                            </h2>
                            <p className="mt-2 text-sm text-slate-600">
                                Aşağıdaki formu doldurarak bizimle iletişime geçebilir veya
                                doğrudan telefon ve e-posta bilgilerimiz üzerinden ulaşabilirsiniz.
                            </p>

                            <div className="mt-5 space-y-1 text-sm text-slate-700">
                                <p>
                                    <span className="font-semibold">Telefon:</span> +90 (555) 555 55 55
                                </p>
                                <p>
                                    <span className="font-semibold">E-posta:</span> info@sirketadi.com
                                </p>
                                <p>
                                    <span className="font-semibold">Adres:</span> Örnek Mah. Örnek
                                    Sok. No:1 İstanbul
                                </p>
                            </div>
                        </div>

                        <form className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="mb-3">
                                <label
                                    htmlFor="name"
                                    className="mb-1 block text-xs font-medium text-slate-700"
                                >
                                    Ad Soyad
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Adınız Soyadınız"
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500/10 transition focus:border-blue-600 focus:ring-2"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="email"
                                    className="mb-1 block text-xs font-medium text-slate-700"
                                >
                                    E-posta
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="ornek@mail.com"
                                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500/10 transition focus:border-blue-600 focus:ring-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="mb-1 block text-xs font-medium text-slate-700"
                                >
                                    Mesajınız
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Kısaca talebinizi yazın"
                                    className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500/10 transition focus:border-blue-600 focus:ring-2"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-blue-600/40 transition hover:bg-blue-700"
                            >
                                Gönder
                            </button>
                            <p className="mt-2 text-[11px] text-slate-500">
                                Bu form şu anda yalnızca ön yüz seviyesindedir. İstersen
                                sonrasında bunu gerçek bir mail gönderme veya veri kaydı ile
                                bağlayabiliriz.
                            </p>
                        </form>
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="border-t border-slate-200 bg-slate-950">
                <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-4 text-xs text-slate-400 sm:flex-row sm:items-center">
                    <p>© {new Date().getFullYear()} Şirket Adı. Tüm hakları saklıdır.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-slate-100 transition-colors">
                            KVKK
                        </a>
                        <a href="#" className="hover:text-slate-100 transition-colors">
                            Gizlilik Politikası
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
