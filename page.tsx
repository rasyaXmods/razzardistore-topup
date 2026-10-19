import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0E1A] text-white p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          <span className="text-[#6C5CE7]">RAZZARDI</span>STORE
        </h1>
        <p className="text-gray-400 mb-8">Top up game instan, aman, dan murah.</p>

        <h2 className="text-xl font-semibold mb-4">Pilih Game</h2>
        <div className="grid grid-cols-2 gap-4">
          
          {/* Kartu Mobile Legends */}
          <Link href="/game/mobile-legends" className="bg-[#151A2E] p-4 rounded-xl border border-white/10 text-center hover:border-[#6C5CE7]">
            <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-3"></div>
            <p className="font-medium text-sm">Mobile Legends</p>
          </Link>

          {/* Kartu Free Fire */}
          <Link href="/game/free-fire" className="bg-[#151A2E] p-4 rounded-xl border border-white/10 text-center hover:border-[#6C5CE7]">
            <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-3"></div>
            <p className="font-medium text-sm">Free Fire</p>
          </Link>

        </div>
      </div>
    </main>
  );
}
