import Link from "next/link";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [games, banners] = await Promise.all([
    db.game.findMany({ where: { active: true }, orderBy: { sortOrder: "asc" } }),
    db.banner.findMany({ where: { active: true }, orderBy: { sortOrder: "asc" } }),
  ]);

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 bg-bg-primary/95 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-display font-bold">
            <span className="text-accent">TOPUP</span>KILAT
          </Link>
          <nav className="flex gap-4 text-sm text-gray-400">
            <Link href="/cek-pesanan" className="hover:text-white">Cek Pesanan</Link>
            <Link href="/bantuan" className="hover:text-white">Bantuan</Link>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-6">
        <input
          type="search"
          placeholder="Cari game (MLBB, Free Fire, Genshin...)"
          className="w-full h-12 px-4 rounded-xl bg-bg-card border border-white/10 focus:border-accent outline-none"
        />
      </section>

      {banners.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-4">
          <div className="grid gap-4">
            {banners.map((b) => (
              <Link key={b.id} href={b.link || "#"} className="block rounded-2xl overflow-hidden">
                <img src={b.imageUrl} alt="Promo" className="w-full h-auto" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-lg font-display font-semibold mb-4">Game Populer</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {games.map((g) => (
            <Link
              key={g.id}
              href={`/game/${g.slug}`}
              className="bg-bg-card rounded-xl p-3 text-center border border-white/10 hover:border-accent transition-colors"
            >
              {g.icon && <img src={g.icon} alt={g.name} className="w-full aspect-square rounded-lg object-cover mb-2" />}
              <p className="text-xs font-medium truncate">{g.name}</p>
            </Link>
          ))}
          {games.length === 0 && (
            <p className="col-span-full text-center text-gray-500 py-12">
              Katalog game belum diisi. Login admin untuk menambah.
            </p>
          )}
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_BRAND_NAME}. Bukan afiliasi resmi publisher game.</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/syarat">Syarat & Ketentuan</Link>
          <Link href="/privasi">Kebijakan Privasi</Link>
          <Link href="/refund">Kebijakan Refund</Link>
        </div>
      </footer>
    </main>
  );
}