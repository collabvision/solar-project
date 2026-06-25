import React from 'react'

const page = () => {
  return (
    <div>
      <section id="about" className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <span className="px-5 py-2 rounded-full border bg-white text-sm font-semibold">
        About Wattworks
      </span>

      <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">
        Building a Cleaner Future
      </h2>

      <p className="mt-5 max-w-2xl mx-auto text-slate-500">
        Trusted solar EPC company delivering reliable, efficient and
        sustainable energy solutions across Maharashtra, Karnataka and Goa.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left */}

      <div className="relative">

        <img
          src="/design/about.png"
          className="rounded-[40px] shadow-2xl object-cover w-full h-[620px]"
        />

        <div className="absolute -right-8 top-10 space-y-5">

          <div className="bg-white rounded-3xl p-6 shadow-xl w-48">
            <h3 className="text-4xl font-black text-emerald-500">
              500+
            </h3>

            <p className="text-slate-500 mt-1">
              Projects Completed
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl w-48">
            <h3 className="text-4xl font-black text-blue-600">
              25+
            </h3>

            <p className="text-slate-500">
              Years Performance
            </p>
          </div>

        </div>

      </div>

      {/* Right */}

      <div>

        <span className="text-emerald-500 font-semibold">
          WHO WE ARE
        </span>

        <h2 className="mt-4 text-5xl font-black leading-tight">
          Clean Energy.
          <br />
          Smart Investment.
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-500">
          WattWorks Energies Private Limited provides end-to-end
          solar EPC solutions for residential, commercial and
          industrial customers. Our experienced engineering team
          designs, installs and maintains high-performance solar
          systems that reduce electricity costs while supporting
          a greener future.
        </p>

        <div className="grid grid-cols-2 gap-5 mt-10">

          {[
            "Residential Solar",
            "Commercial Solar",
            "Industrial Solar",
            "Net Metering",
            "Energy Audit",
            "AMC Support",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm"
            >
              <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                ✓
              </div>

              <span className="font-semibold">
                {item}
              </span>
            </div>
          ))}

        </div>

        <button className="mt-10 rounded-full bg-slate-900 px-8 py-4 text-white font-semibold hover:bg-emerald-600 transition">
          Learn More →
        </button>

      </div>

    </div>

  </div>
</section>
    </div>
  )
}

export default page
