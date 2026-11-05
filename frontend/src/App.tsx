function App() {
  return (
      <main className="min-h-screen bg-[#F5F0E8] flex items-center justify-center p-8">
        <div className="max-w-lg rounded-2xl bg-white p-10 shadow-xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C56B45]">
            Tailwind CSS v4
          </p>

          <h1 className="mb-4 text-4xl font-bold text-[#292824]">
            It's working!
          </h1>

          <p className="text-base leading-relaxed text-gray-600">
            React, TypeScript, Vite and Tailwind CSS are successfully integrated.
          </p>

          <button className="mt-8 rounded-full bg-[#C56B45] px-8 py-3 font-semibold text-white transition hover:bg-[#A95334]">
            Test Button
          </button>
        </div>
      </main>
  )
}

export default App