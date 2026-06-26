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
      
            <section className="relative py-28 bg-white overflow-hidden">
        {/* Background Blur */}

        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />

        <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-slate-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <span className="inline-flex rounded-full border bg-white px-5 py-2 text-sm font-semibold shadow">
                WHO WE ARE
              </span>

              <h2 className="mt-8 text-5xl font-black leading-tight tracking-tight text-slate-900">
                Engineering
                <br />
                Sustainable Energy
                <br />
                For Every Business.
              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-500">
                WattWorks Energies Private Limited, formerly known as Wattworks
                Energies Pvt. Ltd., is a Belagavi-based renewable energy company
                committed to transforming the energy landscape through
                efficient, sustainable and cost-effective solar solutions.
              </p>

              <p className="mt-6 text-lg leading-9 text-slate-500">
                Since 2020, we have helped residential, commercial, industrial
                and institutional customers reduce electricity costs while
                moving toward energy independence and environmental
                sustainability.
              </p>

              {/* Features */}

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {[
                  "Residential Projects",
                  "Commercial EPC",
                  "Industrial Solar",
                  "Government Approvals",
                  "Net Metering",
                  "AMC Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <CheckCircle2 className="h-5 w-5 text-slate-900" />

                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-12 inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:scale-105">
                Discover Our Services
                <ArrowRight size={18} />
              </button>
            </div>

            {/* RIGHT */}

            <div className="relative">
              {/* Main Image */}

              <div className="overflow-hidden rounded-[36px] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop"
                  className="h-[650px] w-full object-cover"
                  alt=""
                />
              </div>

              {/* Floating Card */}

              <div className="absolute -left-8 top-10 w-64 rounded-[28px] border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
                  <Building2 className="h-8 w-8" />
                </div>

                <h3 className="mt-5 text-4xl font-black">2020</h3>

                <p className="mt-2 text-slate-500">
                  Established with a vision to make clean energy accessible to
                  everyone.
                </p>
              </div>

              {/* Floating Card */}

              <div className="absolute -right-8 bottom-10 w-72 rounded-[28px] border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                    <MapPinned className="h-7 w-7" />
                  </div>

                  <div>
                    <h4 className="font-bold">Regional Presence</h4>

                    <p className="text-sm text-slate-500">
                      Maharashtra, Karnataka & Goa
                    </p>
                  </div>
                </div>

                <div className="mt-6 h-px bg-slate-200" />

                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                    <SunMedium className="h-7 w-7" />
                  </div>

                  <div>
                    <h4 className="font-bold">Turnkey EPC</h4>

                    <p className="text-sm text-slate-500">
                      Design • Procurement • Installation • O&M
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
