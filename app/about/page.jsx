"use client";

import {
  ArrowUpRight,
  Sun,
  ClipboardCheck,
  Factory,
  BatteryCharging,
  Leaf,
  Zap,
  ShieldCheck,
  ArrowRight,
  BadgeCheck,
  Users,
  CalendarDays,
  MapPinned,
  SunMedium,
  CheckCircle2,
  Car,
  DraftingCompass,
  BarChart3,
  Wrench,
  Cable,
  Flame,
  Droplets,
  Wind,
  Lightbulb,
  Building2,
} from "lucide-react";

export default function AboutHero() {
  const services = [
    {
      title: "Solar EPC Solutions",
      desc: "Engineering, Procurement, Construction, Installation & Commissioning.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
      icon: Sun,
    },
    {
      title: "Rooftop Solar",
      desc: "Residential & Commercial Rooftop Systems.",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=900&auto=format&fit=crop",
      icon: Building2,
    },
    {
      title: "Industrial Solar",
      desc: "Large scale solar plants for industries.",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=900&auto=format&fit=crop",
      icon: Factory,
    },
    {
      title: "EV Charging",
      desc: "Complete EPC for EV Charging Stations.",
      image:
        "https://images.unsplash.com/photo-1593941707882-a56bbc8df0d4?q=80&w=900&auto=format&fit=crop",
      icon: Car,
    },
    {
      title: "Solar Financing",
      desc: "Flexible financing assistance for projects.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=900&auto=format&fit=crop",
      icon: BatteryCharging,
    },
  ];
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24">
        {/* Background Blur */}
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-slate-200/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-slate-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mb-14 text-center">
            <span className="inline-flex rounded-full border border-white/40 bg-white/70 px-5 py-2 text-sm font-semibold shadow-lg backdrop-blur-xl">
              ABOUT WATTWORKS ENERGIES
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
              Powering A Better Tomorrow
              <br />
              Through
              <span className="text-slate-500"> Clean Energy</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
              WattWorks Energies Private Limited is dedicated to transforming
              the energy landscape by delivering efficient, sustainable and
              cost-effective solar solutions for homes, businesses and
              industries across Maharashtra, Karnataka and Goa.
            </p>
          </div>

          {/* Main Grid */}

          <div className="grid items-center gap-10 xl:grid-cols-12">
            {/* LEFT */}

            <div className="xl:col-span-4">
              <div className="rounded-[32px] border border-white/50 bg-white/70 p-8 shadow-2xl backdrop-blur-xl">
                <span className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold tracking-wider text-white">
                  WHO WE ARE
                </span>

                <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
                  Building
                  <br />
                  Sustainable
                  <br />
                  Solar Solutions.
                </h1>

                <p className="mt-6 text-base leading-8 text-slate-500">
                  Earlier known as Wattworks Energies Pvt. Ltd., we specialize
                  in Engineering, Procurement, Installation, Commissioning,
                  Consultancy, Energy Audits, EV Charging Infrastructure and
                  complete Renewable Energy Solutions.
                </p>

                {/* Features */}

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 rounded-2xl bg-slate-100 p-4">
                    <BadgeCheck className="h-10 w-10 text-slate-900" />

                    <div>
                      <h4 className="font-semibold">MNRE Focused</h4>

                      <p className="text-sm text-slate-500">
                        Sustainable & reliable engineering.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-slate-100 p-4">
                    <Leaf className="h-10 w-10 text-slate-900" />

                    <div>
                      <h4 className="font-semibold">Clean Energy</h4>

                      <p className="text-sm text-slate-500">
                        Reducing carbon emissions every day.
                      </p>
                    </div>
                  </div>
                </div>

                <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-black">
                  Learn More
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                    <ArrowRight size={18} />
                  </span>
                </button>
              </div>
            </div>

            {/* CENTER */}

            <div className="relative xl:col-span-5">
              <div className="overflow-hidden rounded-[36px] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1400&auto=format&fit=crop"
                  alt=""
                  className="h-[620px] w-full object-cover"
                />
              </div>

              {/* Floating Client Card */}

              <div className="absolute -bottom-8 left-6 rounded-[30px] border border-white/40 bg-white/70 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                    <Users className="h-8 w-8 text-slate-900" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Trusted Across</p>

                    <h3 className="text-4xl font-black">1500+</h3>

                    <p className="text-slate-500">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="space-y-6 xl:col-span-3">
              {/* Quote */}

              <div className="rounded-[30px] border border-white/40 bg-white/70 p-8 shadow-xl backdrop-blur-xl">
                <span className="text-6xl font-black text-slate-300">"</span>

                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Our mission is to accelerate renewable energy adoption through
                  innovative, reliable and cost-effective solar solutions.
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/41.jpg"
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-bold">Founder</h4>

                    <p className="text-sm text-slate-500">Wattworks Energies</p>
                  </div>
                </div>
              </div>

              {/* Engineer Image */}

              <div className="overflow-hidden rounded-[30px]">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=900&auto=format&fit=crop"
                  className="h-52 w-full object-cover transition duration-500 hover:scale-110"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left Card */}

            <div className="lg:col-span-4">
              <div className="h-full rounded-[32px] border border-white/40 bg-white/70 p-8 shadow-xl backdrop-blur-xl">
                <span className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold tracking-wider text-white">
                  OUR JOURNEY
                </span>

                <h2 className="mt-6 text-4xl font-black leading-tight">
                  Building Renewable Energy
                  <br />
                  Since 2020
                </h2>

                <p className="mt-5 leading-8 text-slate-500">
                  From a small engineering team to a trusted renewable energy
                  company serving Maharashtra, Karnataka and Goa, our journey
                  has been driven by innovation, quality and customer
                  satisfaction.
                </p>

                <div className="mt-10 rounded-2xl bg-slate-100 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
                      <BadgeCheck className="h-7 w-7" />
                    </div>

                    <div>
                      <h4 className="font-bold">Trusted Engineering</h4>

                      <p className="text-sm text-slate-500">
                        Complete Solar EPC Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}

            <div className="space-y-8 lg:col-span-8">
              {/* Stats */}

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  {
                    icon: Zap,
                    value: "25+",
                    title: "MW+",
                    text: "Projects Executed",
                  },
                  {
                    icon: Users,
                    value: "1500+",
                    title: "Clients",
                    text: "Happy Customers",
                  },
                  {
                    icon: Sun,
                    value: "25+",
                    title: "Years",
                    text: "Panel Performance",
                  },
                  {
                    icon: ShieldCheck,
                    value: "100%",
                    title: "Quality",
                    text: "Safety Assured",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group rounded-[28px] border border-white/40 bg-white/70 p-7 shadow-xl backdrop-blur-xl transition hover:-translate-y-2"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
                        <Icon className="h-8 w-8 text-slate-900" />
                      </div>

                      <h3 className="mt-8 text-5xl font-black">{item.value}</h3>

                      <h4 className="mt-2 text-xl font-bold">{item.title}</h4>

                      <p className="mt-3 text-slate-500">{item.text}</p>
                    </div>
                  );
                })}
              </div>

              {/* Image */}

              <div className="relative overflow-hidden rounded-[36px] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1400&auto=format&fit=crop"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

                <div className="absolute left-8 bottom-8 max-w-md text-white">
                  <span className="rounded-full bg-white/20 px-4 py-2 text-xs backdrop-blur-xl">
                    POWERING THE FUTURE
                  </span>

                  <h2 className="mt-5 text-4xl font-black leading-tight">
                    Every Solar Panel Installed Is A Step Towards A Cleaner
                    Planet.
                  </h2>

                  <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black">
                    Explore Projects
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
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

      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="rounded-full border bg-white px-5 py-2 text-sm font-semibold shadow">
              OUR SERVICES
            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight">
              Complete Renewable
              <br />
              Energy Solutions
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-500">
              From consultancy to commissioning, financing and maintenance,
              Wattworks delivers complete end-to-end renewable energy solutions.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            {/* BIG CARD */}

            <div className="group relative overflow-hidden rounded-[40px] lg:col-span-7">
              <img
                src={services[0].image}
                className="h-[620px] w-full object-cover transition duration-700 group-hover:scale-110"
                alt=""
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute left-8 top-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-xl">
                  <Sun className="h-8 w-8 text-white" />
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <span className="rounded-full bg-white/20 px-4 py-2 text-xs text-white backdrop-blur">
                  FLAGSHIP SERVICE
                </span>

                <h2 className="mt-6 text-5xl font-black text-white">
                  Solar EPC
                  <br />
                  Solutions
                </h2>

                <p className="mt-5 max-w-lg text-white/80">
                  Complete Engineering, Procurement, Construction, Installation
                  and Commissioning with the highest quality standards.
                </p>

                <button className="mt-8 flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold">
                  Explore
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>

            {/* RIGHT */}

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5">
              {services.slice(1).map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="group overflow-hidden rounded-[30px] border border-white/50 bg-white shadow-xl transition duration-300 hover:-translate-y-2"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={service.image}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        alt=""
                      />

                      <div className="absolute inset-0 bg-black/20" />
                    </div>

                    <div className="p-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                        <Icon className="h-7 w-7" />
                      </div>

                      <h3 className="mt-5 text-2xl font-bold">
                        {service.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-500">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-32 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 max-w-3xl">
            <span className="rounded-full border border-white/20 px-5 py-2 text-sm">
              OUR EXPERTISE
            </span>

            <h2 className="mt-8 text-6xl font-black leading-tight">
              Engineering
              <br />
              Solar.
              <br />
              Built For Tomorrow.
            </h2>

            <p className="mt-8 text-lg text-slate-400">
              Complete renewable energy services under one roof.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* LEFT */}

            <div className="sticky top-24 h-fit">
              <div className="overflow-hidden rounded-[40px]">
                <img
                  src={services[0].image}
                  className="h-[700px] w-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT */}

            <div>
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="group border-b border-white/10 py-10"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex gap-5">
                        <div className="rounded-2xl bg-white/10 p-4">
                          <Icon className="h-7 w-7" />
                        </div>

                        <div>
                          <h3 className="text-3xl font-bold">
                            {service.title}
                          </h3>

                          <p className="mt-5 max-w-md leading-8 text-slate-400">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div>
                        <ArrowUpRight className="transition group-hover:rotate-45" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
