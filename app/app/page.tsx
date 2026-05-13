import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold text-flow-blue mb-4">FLOW 🌊</h1>
        <p className="text-xl text-gray-600 mb-8">
          Дневник эмоционального коучинга для юных спортсменов
        </p>
        <div className="flex flex-col gap-4">
          <Link
            href="/auth"
            className="bg-flow-blue text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
          >
            Войти
          </Link>
          <Link
            href="/auth?mode=register"
            className="border-2 border-flow-blue text-flow-blue px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-50 transition"
          >
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </main>
  )
}
