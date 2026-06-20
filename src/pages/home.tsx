function Home() {
  return (
    <div className="font-sans text-[#2D2D2D]">

      {/* Nav */}
      <nav className="flex justify-between items-center px-10 py-5 border-b border-[#e0e0e0] bg-white">
        <div>
          <div className="text-[#4A7FA5] text-xl font-semibold tracking-wide">urban tumble</div>
          <div className="text-[#888] text-[10px] tracking-[2.5px] uppercase mt-0.5">Tumble Into Freshness</div>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-sm text-[#555] hover:text-[#4A7FA5] transition-colors">Home</a>
          <a href="#" className="text-sm text-[#555] hover:text-[#4A7FA5] transition-colors">Services</a>
          <a href="#" className="text-sm text-[#555] hover:text-[#4A7FA5] transition-colors">About</a>
          <a href="#" className="text-sm text-[#555] hover:text-[#4A7FA5] transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#F7FAFC] px-10 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight leading-tight mb-4">
          Clean clothes.<br />
          <span className="text-[#4A7FA5]">Happy neighborhood.</span>
        </h1>
        <p className="text-lg text-[#666] max-w-lg mx-auto mb-8 leading-relaxed">
          A modern laundromat built around your time, your comfort, and your community. No hassle. Just fresh.
        </p>
        <button className="bg-[#4A7FA5] text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-[#3a6a8e] transition-colors">
          Our Services
        </button>
        <button className="ml-4 bg-transparent text-[#2D2D2D] border border-[#2D2D2D] px-8 py-3 rounded-md text-sm font-medium hover:bg-[#f0f0f0] transition-colors">
          Get in Touch
        </button>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-10 py-16">
        <div className="text-[11px] tracking-[2.5px] uppercase text-[#4A7FA5] font-semibold mb-2">
          Why Urban Tumble
        </div>
        <h2 className="text-3xl font-bold tracking-tight mb-10">A better laundry day.</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-[#F7FAFC] border border-[#dde8f0] rounded-xl p-7">
            <div className="text-[#4A7FA5] text-2xl mb-4">✦</div>
            <h3 className="text-sm font-semibold mb-2">Spotlessly clean</h3>
            <p className="text-sm text-[#666] leading-relaxed">
              We maintain our machines and our space like it's our own home. Because in a way, it is.
            </p>
          </div>
          <div className="bg-[#F7FAFC] border border-[#dde8f0] rounded-xl p-7">
            <div className="text-[#4A7FA5] text-2xl mb-4">⏱</div>
            <h3 className="text-sm font-semibold mb-2">Respect your time</h3>
            <p className="text-sm text-[#666] leading-relaxed">
              Fast cycles, large-capacity machines, and a layout designed to get you in and out.
            </p>
          </div>
          <div className="bg-[#F7FAFC] border border-[#dde8f0] rounded-xl p-7">
            <div className="text-[#4A7FA5] text-2xl mb-4">♥</div>
            <h3 className="text-sm font-semibold mb-2">Built for neighbors</h3>
            <p className="text-sm text-[#666] leading-relaxed">
              We're not a chain. We're a local spot that actually cares about the people who walk through the door.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-10 border-t border-[#e8e8e8]" />

      {/* Tagline Bar */}
      <section className="bg-[#4A7FA5] text-white text-center py-16 px-8">
        <h2 className="text-3xl font-bold tracking-tight mb-3">Tumble Into Freshness</h2>
        <p className="text-base opacity-85 mb-7">Coming soon to your neighborhood. Stay in the loop.</p>
        <button className="bg-white text-[#4A7FA5] px-8 py-3 rounded-md text-sm font-semibold hover:bg-[#f0f0f0] transition-colors">
          Learn More
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-[#aaa] text-center py-8 text-sm">
        &copy; 2026 <span className="text-[#4A7FA5]">Urban Tumble</span> &mdash; A Laundromat &mdash; All rights reserved.
      </footer>

    </div>
  )
}

export default Home
