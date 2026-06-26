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
  MapPin,
} from "lucide-react";
import { Rocket, Eye, Scale, Award } from "lucide-react";
import {
  Home,
  GraduationCap,
  FileBarChart,
  HardHat,
  LineChart,
  Phone,
} from "lucide-react";
import Navbar from "@/app/(component)/Navbar";
import Footer from "@/app/(component)/Footer";
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
      <Navbar theme="light" />{" "}
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
              Powering A Sustainable Future
              <br />
              Through
              <span className="text-slate-500"> Clean Energy</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
              Wattworks Energies Pvt. Ltd. is a leading renewable energy company
              dedicated to helping homes, businesses, industries and
              institutions transition to clean, affordable and sustainable
              power. Since 2020, we have been delivering reliable solar
              solutions across Maharashtra, Karnataka and Goa, enabling
              customers to reduce electricity costs, achieve energy independence
              and contribute to a greener future.
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
                  Engineering
                  <br />
                  Reliable Solar
                  <br />
                  Solutions.
                </h1>
                <p className="mt-6 text-base leading-8 text-slate-500">
                  Earlier known as Wattworks Energies Pvt. Ltd., we specialize
                  in Engineering, Procurement, Installation, Commissioning,
                  Project Management Consultancy, Engineering Consultancy,
                  Energy Audits, Transformer & Substation Installation, Solar
                  Financing and complete Operation & Maintenance services for
                  renewable energy projects.
                </p>

                {/* Features */}

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 rounded-2xl bg-slate-100 p-4">
                    <BadgeCheck className="h-10 w-10 text-slate-900" />

                    <div>
                      <h4 className="font-semibold">Complete EPC Solutions</h4>

                      <p className="text-sm text-slate-500">
                        Engineering, Procurement, Installation & Commissioning.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-slate-100 p-4">
                    <Leaf className="h-10 w-10 text-slate-900" />

                    <div>
                      <h4 className="font-semibold">Sustainable Energy</h4>

                      <p className="text-sm text-slate-500">
                        Delivering efficient, reliable and cost-effective solar
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-black">
                  Learn About Our Services{" "}
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
                    <MapPin className="h-8 w-8 text-slate-900" />{" "}
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Operating Across</p>

                    <h3 className="text-xl font-black">
                      Maharashtra Karnataka Goa
                    </h3>

                    {/* <p className="text-slate-500">Karnataka • Goa</p> */}
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
                  "To accelerate the adoption of renewable energy by providing
                  innovative, reliable and cost-effective solar solutions that
                  empower individuals and businesses to achieve sustainable
                  growth while protecting the environment."
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/41.jpg"
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-bold">Our Mission</h4>

                    <p className="text-sm text-slate-500">
                      Renewable Energy Excellence
                    </p>
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
                  WHO WE ARE{" "}
                </span>

                <h2 className="mt-6 text-4xl font-black leading-tight">
                  Delivering Complete
                  <br />
                  Renewable Energy
                  <br />
                  Solutions
                </h2>

                <p className="mt-5 leading-8 text-slate-500">
                  At Wattworks Energies, we believe solar energy is one of the
                  most effective ways to address rising energy costs and
                  environmental challenges. Our experienced engineering team
                  designs, procures, installs, commissions, operates and
                  maintains high-performance solar power systems for
                  residential, commercial, industrial and institutional
                  applications across Maharashtra, Karnataka and Goa.
                </p>

                <div className="mt-10 rounded-2xl bg-slate-100 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">
                      <BadgeCheck className="h-7 w-7" />
                    </div>

                    <div>
                      <h4 className="font-bold">End-to-End Solar Expertise</h4>

                      <p className="text-sm text-slate-500">
                        Engineering • Procurement • Installation • O&M
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
                    icon: Sun,
                    value: "2020",
                    title: "Since",
                    text: "Promoting Renewable Energy",
                  },
                  {
                    icon: Building2,
                    value: "3",
                    title: "States",
                    text: "Maharashtra • Karnataka • Goa",
                  },
                  {
                    icon: Wrench,
                    value: "360°",
                    title: "Solutions",
                    text: "Complete Turnkey Solar Services",
                  },
                  {
                    icon: Leaf,
                    value: "100%",
                    title: "Clean",
                    text: "Sustainable Energy Focus",
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
                    POWERING A SUSTAINABLE FUTURE{" "}
                  </span>

                  <h2 className="mt-5 text-4xl font-black leading-tight">
                    Reliable Solar Solutions
                    <br />
                    From Design To
                    <br />
                    Long-Term Maintenance.
                  </h2>

                  <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black">
                    Explore Our Services <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white py-28">
        {/* Background */}

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-slate-200/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <span className="inline-flex rounded-full border border-white bg-white px-5 py-2 text-sm font-semibold shadow-lg">
                WHO WE ARE
              </span>

              <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900">
                Engineering
                <br />
                Reliable Solar
                <br />
                Solutions.
              </h2>

              <div className="mt-10 space-y-7">
                <p className="text-lg leading-9 text-slate-500">
                  At Wattworks Energies, we believe that solar energy is one of
                  the most effective ways to address rising energy costs and
                  environmental challenges. Our team brings together technical
                  expertise, industry knowledge, and a customer-first approach
                  to deliver reliable and efficient solar power systems tailored
                  to individual requirements.
                </p>

                <p className="text-lg leading-9 text-slate-500">
                  We specialize in designing, engineering, procuring,
                  installing, commissioning, operating, and maintaining
                  high-performance solar power plants for residential,
                  commercial, industrial, and institutional applications.
                </p>

                <p className="text-lg leading-9 text-slate-500">
                  From small rooftop installations to large-scale solar
                  projects, we provide end-to-end solutions that ensure maximum
                  energy generation, optimal system performance, and long-term
                  financial savings.
                </p>
              </div>

              <button className="mt-12 inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:scale-105">
                Explore Our Services
                <ArrowUpRight size={18} />
              </button>
            </div>

            {/* RIGHT */}

            <div className="relative">
              {/* Main Image */}

              <div className="overflow-hidden rounded-[36px] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop"
                  alt="Solar Plant"
                  className="h-[720px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Card 1 */}

              <div className="absolute -left-8 top-10 w-72 rounded-[30px] border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
                  <Building2 className="h-8 w-8 text-slate-900" />
                </div>

                <h3 className="mt-5 text-2xl font-black text-slate-900">
                  End-to-End Solutions
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  Design, Engineering, Procurement, Installation, Commissioning,
                  Operation & Maintenance.
                </p>
              </div>

              {/* Floating Card 2 */}

              <div className="absolute -right-8 bottom-10 w-72 rounded-[30px] border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                      <Sun className="h-7 w-7 text-slate-900" />
                    </div>

                    <div>
                      <h4 className="font-bold">Residential & Commercial</h4>

                      <p className="text-sm text-slate-500">
                        Rooftop Solar Solutions
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-slate-200" />

                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                      <Factory className="h-7 w-7 text-slate-900" />
                    </div>

                    <div>
                      <h4 className="font-bold">Industrial Applications</h4>

                      <p className="text-sm text-slate-500">
                        High-Performance Solar Plants
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-28">
        {/* Background */}

        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-slate-200/40 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-slate-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-white/50 bg-white/80 px-5 py-2 text-sm font-semibold shadow-lg backdrop-blur-xl">
              OUR TEAM
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
              Meet The Experts
              <br />
              Behind Wattworks
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
              Our dedicated team of professionals delivers exceptional
              engineering, project management and installation services for
              every renewable energy project.
            </p>
          </div>

          {/* Team Grid */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
                name: "Your Name",
                role: "Managing Director",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
                name: "Your Name",
                role: "Project Director",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
                name: "Your Name",
                role: "Senior Engineer",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
                name: "Your Name",
                role: "Operations Head",
              },
            ].map((member) => (
              <div
                key={member.role}
                className="group relative overflow-hidden rounded-[38px] bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_90px_rgba(15,23,42,0.18)]"
              >
                {/* Image */}

                <div className="relative h-[520px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent" />
                </div>

                {/* Glass Footer */}

                <div className="absolute inset-x-5 bottom-5 rounded-[28px] border border-white/30 bg-white/15 p-6 backdrop-blur-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-white">
                        {member.name}
                      </h3>

                      <p className="mt-1 text-xs font-semibold uppercase tracking-[4px] text-white/80">
                        {member.role}
                      </p>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-xl">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}

                <div className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white py-28">
        {/* Background */}

        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-slate-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mx-auto mb-20 max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-white bg-white px-5 py-2 text-sm font-semibold shadow">
              OUR PURPOSE
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900 md:text-6xl">
              Mission &<span className="text-slate-500"> Vision</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-500">
              Driving innovation, sustainability and long-term value through
              renewable energy solutions.
            </p>
          </div>

          <div className="relative grid gap-10 lg:grid-cols-2">
            {/* Mission */}

            <div className="group relative overflow-hidden rounded-[40px] border border-white/50 bg-white/80 p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:shadow-[0_40px_90px_rgba(15,23,42,0.15)]">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-900 text-white">
                <Rocket className="h-10 w-10" />
              </div>

              <span className="text-sm font-bold uppercase tracking-[5px] text-slate-500">
                OUR MISSION
              </span>

              <h3 className="mt-5 text-4xl font-black text-slate-900">
                Accelerating
                <br />
                Renewable Energy
              </h3>

              <div className="mt-8 h-1 w-24 rounded-full bg-slate-900" />

              <p className="mt-8 text-lg leading-9 text-slate-600">
                To accelerate the adoption of renewable energy by providing
                innovative, reliable, and cost-effective solar solutions that
                empower individuals and businesses to achieve sustainable growth
                while protecting the environment.
              </p>
            </div>

            {/* Vision */}

            <div className="group relative overflow-hidden rounded-[40px] border border-white/50 bg-slate-900 p-10 shadow-[0_30px_80px_rgba(15,23,42,0.12)] transition duration-500 hover:-translate-y-3 hover:shadow-[0_40px_90px_rgba(15,23,42,0.2)]">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/30 bg-white/25 backdrop-blur-2xl shadow-2xl">
                {" "}
                <Eye className="h-10 w-10" />
              </div>

              <span className="text-sm font-bold uppercase tracking-[5px] text-slate-300">
                OUR VISION
              </span>

              <h3 className="mt-5 text-4xl font-black text-white">
                A Cleaner,
                <br />
                Greener Future
              </h3>

              <div className="mt-8 h-1 w-24 rounded-full bg-white" />

              <p className="mt-8 text-lg leading-9 text-slate-300">
                To become a trusted leader in the renewable energy sector by
                delivering world-class solar solutions that contribute to a
                cleaner, greener, and energy-independent future for generations
                to come.
              </p>
            </div>

            {/* Center Circle */}

            <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white bg-white shadow-2xl">
                <SunMedium className="h-10 w-10 text-slate-900" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-slate-50 py-28">
        {/* Background */}

        <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-slate-200/40 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-slate-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mb-20 text-center">
            <span className="inline-flex rounded-full border border-white bg-white px-5 py-2 text-sm font-semibold shadow-lg">
              WHAT WE DO
            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
              What We Do
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
              We offer complete turnkey solar solutions including:
            </p>
          </div>

          {/* Bento Grid */}

          <div className="grid auto-rows-[220px] grid-cols-1 gap-6 lg:grid-cols-4">
            {/* =======================================================
          LARGE FEATURE CARD
      ======================================================== */}
            <div className="group relative overflow-hidden rounded-[38px] lg:col-span-2 lg:row-span-2">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1800&auto=format&fit=crop"
                alt="Solar EPC Solutions"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-40% to-transparent" />

              {/* Badge */}

              <div className="absolute left-8 top-8">
                <div className="rounded-full bg-white/20 px-5 py-2 text-xs font-semibold tracking-[3px] text-white backdrop-blur-xl">
                  FEATURED SERVICE
                </div>
              </div>

              {/* Content */}

              {/* Content */}

              <div className="absolute bottom-8 left-8 right-8">
                {/* Icon */}

                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/30 bg-white/20 backdrop-blur-2xl shadow-2xl">
                  <Sun className="h-10 w-10 text-white drop-shadow-lg" />
                </div>

                {/* Badge */}

                <span className="inline-flex rounded-full border border-white/20 bg-white/20 px-5 py-2 text-xs font-semibold tracking-[3px] uppercase text-white backdrop-blur-xl">
                  Featured Service
                </span>

                {/* Title */}

                <h3 className="mt-6 max-w-lg text-5xl font-black leading-[1.1] text-white">
                  Solar EPC
                  <br />
                  Solutions
                </h3>

                {/* Description */}

                <p className="mt-6 max-w-xl text-lg leading-8 text-white/90">
                  End-to-end Engineering, Procurement, Construction,
                  Installation, Testing, and Commissioning services delivered
                  with the highest standards of quality and safety.
                </p>

                {/* Button */}

                <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-slate-900 transition duration-300 hover:scale-105">
                  Explore Service
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>{" "}
            {/* =======================================================
          SOLAR CONSULTANCY
      ======================================================== */}
            {/* =======================================================
    SOLAR CONSULTANCY
======================================================== */}
            <div className="group relative overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop"
                alt="Solar Consultancy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Top */}

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl">
                    <ClipboardCheck className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-l font-black leading-tight text-white">
                    Solar Consultancy,
                    <br />
                    Feasibility Studies
                  </h3>
                </div>

                {/* Bottom */}

                <p className="text-sm leading-6 text-white/85">
                  Comprehensive site assessments, energy analysis, project
                  planning, and technical advisory services to identify the most
                  effective solar solution for your needs.
                </p>
              </div>
            </div>
            {/* =======================================================
          ROOFTOP SOLAR
      ======================================================== */}
            {/* =======================================================
    ROOFTOP SOLAR
======================================================== */}
            <div className="group relative overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop"
                alt="Rooftop Solar"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between p-6">
                {/* Top */}

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl">
                    <Home className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-l font-black leading-tight text-white">
                    Rooftop Solar
                    <br />
                    Systems
                  </h3>
                </div>

                {/* Bottom */}

                <p className="text-sm leading-6 text-white/85">
                  Customized solar solutions for homes, apartments, commercial
                  buildings, hospitals, schools, colleges, and industrial
                  facilities.
                </p>
              </div>
            </div>
            {/* =======================================================
          GROUND MOUNTED
      ======================================================== */}
            <div className="group relative overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl lg:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1800&auto=format&fit=crop"
                alt="Ground Mounted Solar"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between p-8">
                {/* Top */}

                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl">
                    <Factory className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-black leading-tight text-white">
                    Ground-Mounted
                    <br />
                    Solar Plants
                  </h3>
                </div>

                {/* Bottom */}

                <p className="max-w-xl text-lg leading-8 text-white/85">
                  Efficient solar installations designed for open land
                  applications, industrial projects, and utility-scale energy
                  generation.
                </p>
              </div>
            </div>
            {/* =======================================================
    SOLAR CARPORTS
======================================================== */}
            <div className="group relative overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop"
                alt="Solar Carports"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl">
                    <Car className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-black leading-tight text-white">
                    Solar Carports, Industrial Solar Structures
                  </h3>
                </div>

                <p className="text-sm leading-6 text-white/85">
                  Innovative structures that combine power generation with
                  practical infrastructure benefits.
                </p>
              </div>
            </div>
            {/* =======================================================
    EV CHARGING INFRASTRUCTURE
======================================================== */}
            <div className="group relative overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl lg:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=1600&auto=format&fit=crop"
                alt="EV Charging Infrastructure"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl">
                    <BatteryCharging className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-black leading-tight text-white">
                    EV Charging
                    <br />
                    Infrastructure
                  </h3>
                </div>

                <p className="max-w-xl text-lg leading-8 text-white/85">
                  Design, installation, and commissioning of EV charging
                  stations for commercial establishments, fuel stations,
                  institutions, and public facilities.
                </p>
              </div>
            </div>
            {/* =======================================================
    OPERATIONS & MAINTENANCE
======================================================== */}
            <div className="group relative overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
                alt="Operations & Maintenance"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl">
                    <Wrench className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-black leading-tight text-white">
                    Operations, Maintenance
                  </h3>
                </div>

                <p className="text-sm leading-6 text-white/85">
                  Comprehensive annual maintenance services, performance
                  monitoring, preventive maintenance, and technical support to
                  ensure peak system efficiency.
                </p>
              </div>
            </div>
            {/* =======================================================
    ENERGY AUDITS
======================================================== */}
            <div className="group relative overflow-hidden rounded-[36px] border border-white/60 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl lg:col-span-4">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1800&auto=format&fit=crop"
                alt="Energy Audits & Performance Optimization"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/20" />

              <div className="absolute inset-0 flex flex-col justify-between p-10">
                <div className="flex items-center gap-6">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl">
                    <LineChart className="h-10 w-10 text-white" />
                  </div>

                  <h3 className="text-4xl font-black leading-tight text-white">
                    Energy Audits &
                    <br />
                    Performance Optimization
                  </h3>
                </div>

                <p className="max-w-3xl text-lg leading-8 text-white/85">
                  Detailed energy assessments and performance analysis to help
                  organizations reduce energy consumption and improve
                  operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white py-28">
        {/* Background */}

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-slate-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mb-20 text-center">
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold shadow">
              WHY CHOOSE WATTWORKS ENERGIES
            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
              Why Choose
              <br />
              Wattworks Energies?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
              We combine engineering excellence, premium technology and
              customer-focused execution to deliver reliable renewable energy
              solutions that create long-term value.
            </p>
          </div>

          {/* Features */}

          <div className="mx-auto max-w-5xl space-y-12">
            {/* 1 */}

            <div className="flex gap-8">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-slate-900">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>

              <div className="flex-1 border-b border-slate-200 pb-10">
                <h3 className="text-3xl font-black text-slate-900">
                  Quality Without Compromise
                </h3>

                <p className="mt-5 leading-8 text-slate-500">
                  We utilize premium-quality Tier-1 solar panels, inverters, and
                  electrical components sourced from trusted industry partners
                  to ensure reliability, durability, and superior performance.
                </p>
              </div>
            </div>

            {/* 2 */}

            <div className="flex gap-8">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-slate-900">
                <Users className="h-8 w-8 text-white" />
              </div>

              <div className="flex-1 border-b border-slate-200 pb-10">
                <h3 className="text-3xl font-black text-slate-900">
                  Customer-Centric Approach
                </h3>

                <p className="mt-5 leading-8 text-slate-500">
                  Every project is designed around the unique energy
                  requirements and business objectives of our customers. Our
                  goal is not just to install solar systems but to create
                  lasting value through measurable savings and dependable
                  performance.
                </p>
              </div>
            </div>

            {/* 3 */}

            <div className="flex gap-8">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-slate-900">
                <ClipboardCheck className="h-8 w-8 text-white" />
              </div>

              <div className="flex-1 border-b border-slate-200 pb-10">
                <h3 className="text-3xl font-black text-slate-900">
                  Complete Project Support
                </h3>

                <p className="mt-5 leading-8 text-slate-500">
                  From initial consultation and system design to utility
                  approvals, financing assistance, installation, and long-term
                  maintenance, we provide complete support throughout the
                  lifecycle of the solar plant.
                </p>
              </div>
            </div>

            {/* 4 */}

            <div className="flex gap-8">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-slate-900">
                <HardHat className="h-8 w-8 text-white" />
              </div>

              <div className="flex-1 border-b border-slate-200 pb-10">
                <h3 className="text-3xl font-black text-slate-900">
                  Experienced Technical Team
                </h3>

                <p className="mt-5 leading-8 text-slate-500">
                  Our team combines engineering expertise, project management
                  capabilities, and practical field experience to deliver
                  projects on time and to the highest standards.
                </p>
              </div>
            </div>

            {/* 5 */}

            <div className="flex gap-8">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-slate-900">
                <Leaf className="h-8 w-8 text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-black text-slate-900">
                  Commitment to Sustainability
                </h3>

                <p className="mt-5 leading-8 text-slate-500">
                  Every solar installation contributes to reducing greenhouse
                  gas emissions, lowering dependence on fossil fuels, and
                  creating a cleaner environment for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-slate-50 py-28">
        {/* Background */}

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-slate-200/40 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-slate-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mb-20 text-center">
            <span className="inline-flex rounded-full border border-white bg-white px-5 py-2 text-sm font-semibold shadow">
              OUR VALUES
            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
              The Values That
              <br />
              Drive Every Project
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
              Our commitment to integrity, excellence, innovation, reliability
              and sustainability guides every renewable energy solution we
              deliver.
            </p>
          </div>

          {/* Grid */}

          <div className="grid gap-6 md:grid-cols-2">
            {/* Integrity */}

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900">
                <Scale className="h-8 w-8 text-white" />
              </div>

              <h3 className="mt-8 text-3xl font-black text-slate-900">
                Integrity
              </h3>

              <p className="mt-5 leading-8 text-slate-500">
                We conduct every project with transparency, honesty, and
                professional ethics.
              </p>
            </div>

            {/* Excellence */}

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900">
                <Award className="h-8 w-8 text-white" />
              </div>

              <h3 className="mt-8 text-3xl font-black text-slate-900">
                Excellence
              </h3>

              <p className="mt-5 leading-8 text-slate-500">
                We strive for excellence in engineering, execution, customer
                service, and long-term performance.
              </p>
            </div>

            {/* Innovation */}

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>

              <h3 className="mt-8 text-3xl font-black text-slate-900">
                Innovation
              </h3>

              <p className="mt-5 leading-8 text-slate-500">
                We continuously adopt modern technologies and best practices to
                deliver superior renewable energy solutions.
              </p>
            </div>

            {/* Reliability */}

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>

              <h3 className="mt-8 text-3xl font-black text-slate-900">
                Reliability
              </h3>

              <p className="mt-5 leading-8 text-slate-500">
                We stand by our commitments and provide dependable support
                throughout the life of every solar installation.
              </p>
            </div>

            {/* Sustainability */}

            <div className="rounded-[36px] border border-slate-900 bg-slate-900 p-10 text-white shadow-2xl md:col-span-2">
              <div className="flex items-start gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10">
                  <Leaf className="h-10 w-10 text-white" />
                </div>

                <div>
                  <h3 className="text-4xl font-black">Sustainability</h3>

                  <p className="mt-5 max-w-4xl text-lg leading-8 text-white/80">
                    We are dedicated to creating positive environmental impact
                    through renewable energy adoption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white py-28">
        {/* Background */}

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-slate-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mb-20 text-center">
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold shadow">
              OUR PROJECT EXPERIENCE
            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
              Delivering Renewable
              <br />
              Energy Projects
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-500">
              Over the years, Wattworks Energies has successfully executed and
              supported a wide range of solar projects across residential,
              commercial, industrial, educational, and institutional sectors.
            </p>
          </div>

          {/* Featured Project */}

          <div className="group relative mb-10 overflow-hidden rounded-[40px]">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1800&auto=format&fit=crop"
              alt="Industrial Rooftop Solar Installations"
              className="h-[650px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Badge */}

            <div className="absolute left-10 top-10 rounded-full bg-white/20 px-6 py-3 text-sm font-semibold tracking-[2px] text-white backdrop-blur-xl">
              FEATURED PROJECT
            </div>

            {/* Content */}

            <div className="absolute bottom-10 left-10 max-w-2xl">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl">
                <Factory className="h-10 w-10 text-white" />
              </div>

              <h3 className="text-6xl font-black leading-tight text-white">
                Industrial
                <br />
                Rooftop Solar
                <br />
                Installations
              </h3>

              <p className="mt-6 text-lg leading-8 text-white/85">
                Our portfolio includes large-scale industrial rooftop solar
                installations designed to maximize energy generation, improve
                operational efficiency, and reduce electricity costs.
              </p>
            </div>
          </div>

          {/* Project Grid */}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {" "}
            {/* Residential Solar */}
            <div className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop"
                  alt="Residential Solar Power Systems"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30" />
              </div>

              <div className="p-7">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900">
                  <Home className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-2xl font-black">
                  Residential Solar
                  <br />
                  Power Systems
                </h3>
              </div>
            </div>
            {/* Solar Carports */}
            <div className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop"
                  alt="Solar Carports"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30" />
              </div>

              <div className="p-7">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900">
                  <Car className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-2xl font-black">
                  Solar
                  <br />
                  Carports
                </h3>
              </div>
            </div>
            {/* Ground Mounted */}
            <div className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1?q=80&w=1200&auto=format&fit=crop"
                  alt="Ground Mounted Solar Plants"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30" />
              </div>

              <div className="p-7">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900">
                  <Factory className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-2xl font-black">
                  Ground-Mounted
                  <br />
                  Solar Plants
                </h3>
              </div>
            </div>
            {/* Educational */}
            <div className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
                  alt="Educational Institution Solar Projects"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30" />
              </div>

              <div className="p-7">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-2xl font-black">
                  Educational Institution
                  <br />
                  Solar Projects
                </h3>
              </div>
            </div>
            {/* Consultancy */}
            <div className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
                  alt="Open Access Renewable Energy Consultancy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30" />
              </div>

              <div className="p-7">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900">
                  <ClipboardCheck className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-2xl font-black">
                  Open Access Renewable
                  <br />
                  Energy Consultancy
                </h3>
              </div>
            </div>
            {/* DPR */}
            <div className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop"
                  alt="Energy Audit and Optimization Projects"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30" />
              </div>

              <div className="p-7">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900">
                  <FileBarChart className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-2xl font-black">
                  DPR & Energy Audit
                  <br />
                  Projects
                </h3>
              </div>
            </div>
          </div>

          {/* Bottom Statement */}

          <div className="mt-12 rounded-[36px] border border-slate-200 bg-slate-900 p-10 text-center shadow-2xl">
            <Award className="mx-auto h-12 w-12 text-white" />

            <h3 className="mt-6 text-3xl font-black text-white">
              Our Commitment
            </h3>

            <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-white/80">
              Each project reflects our commitment to quality, safety,
              efficiency, and customer satisfaction.
            </p>
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
      <section className="relative overflow-hidden py-32">
        {/* Background Image */}

        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop"
          alt="Solar Energy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/70" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold tracking-wider text-white backdrop-blur-xl">
              BUILDING LONG-TERM RELATIONSHIPS
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
              Building Long-Term
              <br />
              Relationships
            </h2>

            <p className="mt-8 text-lg leading-9 text-white/80">
              At Wattworks Energies, we believe that our responsibility extends
              beyond project completion. Through dedicated after-sales service,
              annual maintenance programs, performance monitoring, and technical
              support, we ensure that every solar plant continues to deliver
              maximum value for decades.
            </p>

            <p className="mt-6 text-lg leading-9 text-white/80">
              Our customers trust us because we remain committed to their
              success throughout the life of the system.
            </p>

            {/* Divider */}

            <div className="my-12 h-px w-full bg-white/20" />

            <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold tracking-wider text-emerald-300 backdrop-blur-xl">
              JOIN THE RENEWABLE ENERGY REVOLUTION
            </span>

            <h3 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl">
              Join the Renewable
              <br />
              Energy Revolution
            </h3>

            <p className="mt-8 text-lg leading-9 text-white/80">
              Whether you are a homeowner looking to reduce electricity bills, a
              business seeking operational savings, or an industry planning a
              large-scale renewable energy investment, Wattworks Energies Pvt.
              Ltd. is your trusted partner for reliable solar power solutions.
            </p>

            <p className="mt-6 text-xl font-medium leading-9 text-white">
              Together, let's build a cleaner, greener, and more sustainable
              future powered by the sun.
            </p>

            {/* CTA */}

            <div className="mt-12 flex flex-wrap gap-5">
              <button className="rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105">
                Contact Our Team
              </button>

              <button className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white hover:text-slate-900">
                Explore Our Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
