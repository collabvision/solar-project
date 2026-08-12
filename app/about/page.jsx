"use client";

import {
  ArrowUpRight,
  Sun,
  ClipboardCheck,
  Factory,
  BatteryCharging,
  Leaf,
  ShieldCheck,
  ArrowRight,
  BadgeCheck,
  Users,
  SunMedium,
  Car,
  Wrench,
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
      <Navbar theme="light" />

      {/* ===================== ABOUT HERO ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-20 lg:py-24">
        {/* Background Blur */}
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-slate-200/40 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-slate-300/30 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* Heading */}
          <div className="mb-10 text-center sm:mb-14">
            <span className="inline-flex rounded-full mt-4 border border-white/40 bg-white/70 px-4 py-2 text-xs font-semibold shadow-lg backdrop-blur-xl sm:px-5 sm:text-sm">
              ABOUT WattWorks ENERGIES
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Powering A Sustainable Future
              <br className="hidden sm:block" /> Through
              <span className="text-slate-500"> Clean Energy</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              WattWorks Energies Private Limited. is a leading renewable energy
              company dedicated to helping homes, businesses, industries and
              institutions transition to clean, affordable and sustainable
              power. Since 2020, we have been delivering reliable solar
              solutions across Maharashtra, Karnataka and Goa, enabling
              customers to reduce electricity costs, achieve energy independence
              and contribute to a greener future.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid items-center gap-8 sm:gap-10 xl:grid-cols-12">
            {/* LEFT */}
            <div className="xl:col-span-4">
              <div className="rounded-[26px] border border-white/50 bg-white/70 p-6 shadow-2xl backdrop-blur-xl sm:rounded-[32px] sm:p-8">
                <span className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold tracking-wider text-white">
                  WHO WE ARE
                </span>

                <h1 className="mt-6 text-2xl font-black leading-tight text-slate-900 sm:text-2xl md:text-2xl">
                  Engineering
                  <br />
                  Reliable Solar
                  <br />
                  Solutions.
                </h1>
                <p className="mt-6 text-base leading-7 text-slate-500 sm:leading-8">
                  Earlier known as WattWorks Energies Private Limited., we
                  specialize in Engineering, Procurement, Installation,
                  Commissioning, Project Management Consultancy, Engineering
                  Consultancy, Energy Audits, Transformer & Substation
                  Installation, Solar Financing and complete Operation &
                  Maintenance services for renewable energy projects.
                </p>

                {/* Features */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 rounded-2xl bg-slate-100 p-4">
                    <BadgeCheck className="h-9 w-9 shrink-0 text-slate-900 sm:h-10 sm:w-10" />
                    <div>
                      <h4 className="font-semibold">Complete EPC Solutions</h4>
                      <p className="text-sm text-slate-500">
                        Engineering, Procurement, Installation & Commissioning.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-slate-100 p-4">
                    <Leaf className="h-9 w-9 shrink-0 text-slate-900 sm:h-10 sm:w-10" />
                    <div>
                      <h4 className="font-semibold">Sustainable Energy</h4>
                      <p className="text-sm text-slate-500">
                        Delivering efficient, reliable and cost-effective solar
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="./services"
                  className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-black sm:w-auto"
                >
                  All services
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black">
                    <ArrowRight size={18} />
                  </span>
                </a>
              </div>
            </div>

            {/* CENTER */}
            <div className="relative xl:col-span-5">
              <div className="overflow-hidden rounded-[26px] shadow-2xl sm:rounded-[36px]">
                <img
                  src="./others/rooftop3.jpeg"
                  alt=""
                  className="h-[300px] w-full object-cover sm:h-[420px] md:h-[520px] xl:h-[620px]"
                />
              </div>

              {/* Client Card — stacks below the image on small/medium screens, floats over it at xl+ */}
              <div className="mt-4 rounded-[24px] border border-white/40 bg-white/70 p-5 shadow-2xl backdrop-blur-xl xl:absolute xl:bottom-8 xl:left-6 xl:mt-0 xl:w-auto xl:rounded-[30px] xl:p-6">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-100 sm:h-16 sm:w-16">
                    <MapPin className="h-7 w-7 text-black sm:h-8 sm:w-8" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-800">Operating Across</p>
                    <h3 className="text-lg font-black sm:text-xl">
                      Maharashtra Karnataka Goa
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-6 xl:col-span-3">
              {/* Quote */}
              <div className="rounded-[26px] border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-xl sm:rounded-[30px] sm:p-8">
                <span className="text-5xl font-black text-slate-300 sm:text-6xl">
                  "
                </span>
                <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                  "To accelerate the adoption of renewable energy by providing
                  innovative, reliable and cost-effective solar solutions that
                  empower individuals and businesses to achieve sustainable
                  growth while protecting the environment."
                </p>
                {/* <div className="mt-8 flex items-center gap-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/41.jpg"
                    alt=""
                    className="h-14 w-14 shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">Our Mission</h4>
                    <p className="text-sm text-slate-500">
                      Renewable Energy Excellence
                    </p>
                  </div>
                </div> */}
              </div>

              {/* Engineer Image */}
              {/* <div className="overflow-hidden rounded-[24px] sm:rounded-[30px]">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=900&auto=format&fit=crop"
                  className="h-40 w-full object-cover transition duration-500 hover:scale-110 sm:h-52"
                  alt=""
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS + IMAGE ===================== */}
      <section className="relative py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left Card */}
            <div className="lg:col-span-4">
              <div className="h-full rounded-[26px] border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-xl sm:rounded-[32px] sm:p-8">
                <span className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold tracking-wider text-white">
                  WHO WE ARE
                </span>

                <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
                  Delivering Complete
                  <br />
                  Renewable Energy
                  <br />
                  Solutions
                </h2>

                <p className="mt-5 leading-7 text-slate-500 sm:leading-8">
                  At WattWorks Energies, we believe solar energy is one of the
                  most effective ways to address rising energy costs and
                  environmental challenges. Our experienced engineering team
                  designs, procures, installs, commissions, operates and
                  maintains high-performance solar power systems for
                  residential, commercial, industrial and institutional
                  applications across Maharashtra, Karnataka and Goa.
                </p>

                <div className="mt-10 rounded-2xl bg-slate-100 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow">
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
            <div className="space-y-6 sm:space-y-8 lg:col-span-8">
              {/* Stats */}
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
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
                      className="group rounded-[24px] border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-2 sm:rounded-[28px] sm:p-7"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 sm:h-16 sm:w-16">
                        <Icon className="h-7 w-7 text-slate-900 sm:h-8 sm:w-8" />
                      </div>
                      <h3 className="mt-6 text-4xl font-black sm:mt-8 sm:text-5xl">
                        {item.value}
                      </h3>
                      <h4 className="mt-2 text-lg font-bold sm:text-xl">
                        {item.title}
                      </h4>
                      <p className="mt-3 text-sm text-slate-500 sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-[26px] shadow-2xl sm:rounded-[36px]">
                <img
                  src="./others/rooftop1.jpeg"
                  alt=""
                  className="h-[260px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[300px] lg:h-[350px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
                <div className="absolute left-5 bottom-5 max-w-md text-white sm:left-8 sm:bottom-8">
                  <span className="rounded-full bg-white/20 px-3 py-1.5 text-[10px] backdrop-blur-xl sm:px-4 sm:py-2 sm:text-xs">
                    POWERING A SUSTAINABLE FUTURE
                  </span>
                  <h2 className="mt-4 text-2xl font-black leading-tight sm:mt-5 sm:text-3xl lg:text-4xl">
                    Reliable Solar Solutions
                    <br className="hidden sm:block" /> From Design To
                    <br className="hidden sm:block" /> Long-Term Maintenance.
                  </h2>
                  {/* <button className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black sm:mt-8 sm:px-6 sm:text-base">
                    Explore Our Services <ArrowUpRight size={18} />
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ENGINEERING / IMAGE + FLOATING CARDS ===================== */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-slate-100 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute -right-32 bottom-20 h-64 w-64 rounded-full bg-slate-200/50 blur-3xl sm:h-80 sm:w-80" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LEFT */}
            <div>
              <span className="inline-flex rounded-full border border-white bg-white px-4 py-2 text-xs font-semibold shadow-lg sm:px-5 sm:text-sm">
                WHO WE ARE
              </span>

              <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 sm:mt-8 sm:text-4xl lg:text-5xl">
                Engineering
                <br />
                Reliable Solar
                <br />
                Solutions.
              </h2>

              <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-7">
                <p className="text-base leading-7 text-slate-500 sm:text-lg sm:leading-9">
                  At WattWorks Energies, we believe that solar energy is one of
                  the most effective ways to address rising energy costs and
                  environmental challenges. Our team brings together technical
                  expertise, industry knowledge, and a customer-first approach
                  to deliver reliable and efficient solar power systems tailored
                  to individual requirements.
                </p>
                <p className="text-base leading-7 text-slate-500 sm:text-lg sm:leading-9">
                  We specialize in designing, engineering, procuring,
                  installing, commissioning, operating, and maintaining
                  high-performance solar power plants for residential,
                  commercial, industrial, and institutional applications.
                </p>
                <p className="text-base leading-7 text-slate-500 sm:text-lg sm:leading-9">
                  From small rooftop installations to large-scale solar
                  projects, we provide end-to-end solutions that ensure maximum
                  energy generation, optimal system performance, and long-term
                  financial savings.
                </p>
              </div>

              {/* <button className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:scale-105 sm:mt-12 sm:w-auto">
                Explore Our Services
                <ArrowUpRight size={18} />
              </button> */}
            </div>

            {/* RIGHT */}
            <div className="relative">
              {/* Main Image */}
              <div className="overflow-hidden rounded-[28px] shadow-2xl sm:rounded-[36px]">
                <img
                  src="./others/RCC_Floor_Mounted_Structure-5KW.jpeg"
                  alt="Solar Plant"
                  className="h-[320px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[440px] md:h-[560px] lg:h-[720px]"
                />
              </div>

              {/* Floating Card 1 — stacked on mobile/tablet, floats at lg+ */}
              <div className="mt-6 w-full rounded-[24px] border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl lg:absolute lg:-left-8 lg:top-10 lg:mt-0 lg:w-72 lg:rounded-[30px]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 sm:h-16 sm:w-16">
                  <Building2 className="h-7 w-7 text-slate-900 sm:h-8 sm:w-8" />
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-900 sm:text-2xl">
                  End-to-End Solutions
                </h3>
                <p className="mt-3 leading-7 text-slate-500">
                  Design, Engineering, Procurement, Installation, Commissioning,
                  Operation & Maintenance.
                </p>
              </div>

              {/* Floating Card 2 — stacked on mobile/tablet, floats at lg+ */}
              <div className="mt-6 w-full rounded-[24px] border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl lg:absolute lg:-right-8 lg:bottom-10 lg:mt-0 lg:w-72 lg:rounded-[30px]">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-100">
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
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-100">
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

      {/* ===================== TEAM ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-20 lg:py-28">
        <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-slate-200/40 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-slate-300/30 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
            <span className="inline-flex rounded-full border border-white/50 bg-white/80 px-4 py-2 text-xs font-semibold shadow-lg backdrop-blur-xl sm:px-5 sm:text-sm">
              OUR TEAM
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Meet The Experts
              <br />
              Behind WattWorks
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              Our dedicated team of professionals delivers exceptional
              engineering, project management and installation services for
              every renewable energy project.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-4">
            {[
              {
                image: "./others/team-member1.jpeg",
                name: "Your Name",
                role: "Managing Director",
              },
              {
                image: "./others/team-member2.jpeg",
                name: "Your Name",
                role: "Project Director",
              },
              {
                image: "./others/team-member3.jpeg",
                name: "Your Name",
                role: "Senior Engineer",
              },
            ].map((member) => (
              <div
                key={member.role}
                className="group relative overflow-hidden rounded-[28px] bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_90px_rgba(15,23,42,0.18)] sm:rounded-[38px]"
              >
                {/* Image */}
                <div className="relative h-[360px] overflow-hidden sm:h-[420px] lg:h-[480px] xl:h-[520px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent" />
                </div>

                {/* Glass Footer */}
                <div className="absolute inset-x-4 bottom-4 rounded-[22px] border border-white/30 bg-white/15 p-5 backdrop-blur-2xl sm:inset-x-5 sm:bottom-5 sm:rounded-[28px] sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-xl font-black text-white sm:text-l">
                        {member.name}
                      </h3>
                      <p className="mt-1 truncate text-[10px] font-semibold uppercase text-white/80 ">
                        {member.role}
                      </p>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-xl sm:h-14 sm:w-14">
                      <Users className="h-5 w-5 text-white sm:h-6 sm:w-6" />
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

      {/* ===================== MISSION & VISION ===================== */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-slate-100 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-slate-200/40 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
            <span className="inline-flex rounded-full border border-white bg-white px-4 py-2 text-xs font-semibold shadow sm:px-5 sm:text-sm">
              OUR PURPOSE
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Mission &<span className="text-slate-500"> Vision</span>
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              Driving innovation, sustainability and long-term value through
              renewable energy solutions.
            </p>
          </div>

          <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Mission */}
            <div className="group relative overflow-hidden rounded-[28px] border border-white/50 bg-white/80 p-7 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:shadow-[0_40px_90px_rgba(15,23,42,0.15)] sm:rounded-[40px] sm:p-10">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900 text-white sm:h-20 sm:w-20">
                <Rocket className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>

              <span className="text-xs font-bold uppercase tracking-[4px] text-slate-500 sm:text-sm sm:tracking-[5px]">
                OUR MISSION
              </span>

              <h3 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
                Accelerating
                <br />
                Renewable Energy
              </h3>

              <div className="mt-8 h-1 w-24 rounded-full bg-slate-900" />

              <p className="mt-8 text-base leading-7 text-slate-600 sm:text-lg sm:leading-9">
                To provide quality-driven renewable energy solutions that
                deliver long-term savings, reduce operational costs and are
                supported by professional execution and lifelong customer
                service.
              </p>
            </div>

            {/* Vision */}
            <div className="group relative overflow-hidden rounded-[28px] border border-white/50 bg-slate-900 p-7 shadow-[0_30px_80px_rgba(15,23,42,0.12)] transition duration-500 hover:-translate-y-3 hover:shadow-[0_40px_90px_rgba(15,23,42,0.2)] sm:rounded-[40px] sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/30 bg-white/25 text-white backdrop-blur-2xl shadow-2xl sm:h-20 sm:w-20">
                <Eye className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>

              <span className="mt-6 block text-xs font-bold uppercase tracking-[4px] text-slate-300 sm:mt-0 sm:text-sm sm:tracking-[5px]">
                OUR VISION
              </span>

              <h3 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                A Cleaner,
                <br />
                Greener Future
              </h3>

              <div className="mt-8 h-1 w-24 rounded-full bg-white" />

              <p className="mt-8 text-base leading-7 text-slate-300 sm:text-lg sm:leading-9">
                To empower customers with dependable renewable energy solutions
                that lower energy costs and create a cleaner, energy-secure
                future.
              </p>
            </div>

            {/* Center Circle — desktop-only accent, hidden on mobile/tablet by design */}
            <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white bg-white shadow-2xl">
                <SunMedium className="h-10 w-10 text-slate-900" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHAT WE DO — BENTO GRID ===================== */}
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-28">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-slate-200/40 blur-3xl sm:h-[450px] sm:w-[450px]" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl sm:h-[450px] sm:w-[450px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16 lg:mb-20">
            <span className="inline-flex rounded-full border border-white bg-white px-4 py-2 text-xs font-semibold shadow-lg sm:px-5 sm:text-sm">
              WHAT WE DO
            </span>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
              What We Do
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              We offer complete turnkey solar solutions including:
            </p>
          </div>

          {/*
            Mobile / tablet: a single stacked column (sm: two columns) with
            explicit min-heights per card so nothing overlaps.
            Desktop (lg+): the original fixed-row bento grid — min-heights are
            neutralized via lg:min-h-0 so the lg:auto-rows-[220px] + row-span
            combo takes over exactly as designed for large screens.
          */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:auto-rows-[220px] lg:grid-cols-4">
            {/* LARGE FEATURE CARD */}
            <div className="group relative min-h-[420px] overflow-hidden rounded-[28px] sm:col-span-2 sm:min-h-[440px] sm:rounded-[38px] lg:col-span-2 lg:row-span-2 lg:min-h-0">
              <img
                src="./others/rooftop5.jpeg"
                alt="Solar EPC Solutions"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 via-40% to-transparent" />

              {/* Content (single badge — no duplicate) */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl border border-white/30 bg-white/20 backdrop-blur-2xl shadow-2xl sm:mb-8 sm:h-20 sm:w-20">
                  <Sun className="h-8 w-8 text-white drop-shadow-lg sm:h-10 sm:w-10" />
                </div>

                {/* <span className="inline-flex rounded-full border border-white/20 bg-white/20 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[2px] text-white backdrop-blur-xl sm:px-5 sm:py-2 sm:text-xs sm:tracking-[3px]">
                  Featured Service
                </span> */}

                <h3 className="mt-5 max-w-lg text-3xl font-black leading-[1.1] text-white sm:mt-6 sm:text-4xl lg:text-5xl">
                  Solar EPC
                  <br />
                  Solutions
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/90 sm:mt-6 sm:text-lg sm:leading-8">
                  End-to-end Engineering, Procurement, Construction,
                  Installation, Testing, and Commissioning services delivered
                  with the highest standards of quality and safety.
                </p>

                {/* <button className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:scale-105 sm:mt-8 sm:px-7 sm:py-4 sm:text-base">
                  Explore Service
                  <ArrowUpRight size={18} />
                </button> */}
              </div>
            </div>

            {/* SOLAR CONSULTANCY */}
            <div className="group relative min-h-[280px] overflow-hidden rounded-[26px] border border-white/60 bg-white shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:rounded-[32px] lg:min-h-0">
              <img
                src="./others/RCC_Roof_Elevated_Structure-70_KW.jpeg"
                alt="Solar Consultancy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl">
                    <ClipboardCheck className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-black leading-tight text-white">
                    Solar Consultancy,
                    <br />
                    Feasibility Studies
                  </h3>
                </div>
                <p className="text-sm leading-6 text-white/85">
                  Comprehensive site assessments, energy analysis, project
                  planning, and technical advisory services to identify the most
                  effective solar solution for your needs.
                </p>
              </div>
            </div>

            {/* ROOFTOP SOLAR */}
            <div className="group relative min-h-[280px] overflow-hidden rounded-[26px] border border-white/60 bg-white shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:rounded-[32px] lg:min-h-0">
              <img
                src="./others/Residential_Rooftop_Structure-3_KW.jpeg"
                alt="Rooftop Solar"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl">
                    <Home className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-black leading-tight text-white">
                    Rooftop Solar
                    <br />
                    Systems
                  </h3>
                </div>
                <p className="text-sm leading-6 text-white/85">
                  Customized solar solutions for homes, apartments, commercial
                  buildings, hospitals, schools, colleges, and industrial
                  facilities.
                </p>
              </div>
            </div>

            {/* GROUND MOUNTED */}
            <div className="group relative min-h-[300px] overflow-hidden rounded-[26px] border border-white/60 bg-white shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:col-span-2 sm:rounded-[32px] lg:col-span-2 lg:min-h-0">
              <img
                src="./others/rooftop3.jpeg"
                alt="Ground Mounted Solar"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl sm:h-16 sm:w-16 sm:rounded-3xl">
                    <Factory className="h-7 w-7 text-white sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-xl font-black leading-tight text-white sm:text-3xl">
                    Ground-Mounted
                    <br />
                    Solar Plants
                  </h3>
                </div>
                <p className="max-w-xl text-sm leading-6 text-white/85 sm:text-lg sm:leading-8">
                  Efficient solar installations designed for open land
                  applications, industrial projects, and utility-scale energy
                  generation.
                </p>
              </div>
            </div>

            {/* SOLAR CARPORTS */}
            <div className="group relative min-h-[260px] overflow-hidden rounded-[26px] border border-white/60 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:rounded-[32px] lg:min-h-0">
              <img
                src="./others/rooftop4.jpeg"
                alt="Solar Carports"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl">
                    <Car className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-lg font-black leading-tight text-white">
                    Solar Carports, Industrial Solar Structures
                  </h3>
                </div>
                <p className="text-sm leading-6 text-white/85">
                  Innovative structures that combine power generation with
                  practical infrastructure benefits.
                </p>
              </div>
            </div>

            {/* EV CHARGING INFRASTRUCTURE */}
            <div className="group relative min-h-[300px] overflow-hidden rounded-[26px] border border-white/60 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:col-span-2 sm:rounded-[32px] lg:col-span-2 lg:min-h-0">
              <img
                src="./others/rooftop2.jpeg"
                alt="EV Charging Infrastructure"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl sm:h-16 sm:w-16 sm:rounded-3xl">
                    <BatteryCharging className="h-7 w-7 text-white sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-xl font-black leading-tight text-white sm:text-3xl">
                    EV Charging
                    <br />
                    Infrastructure
                  </h3>
                </div>
                <p className="max-w-xl text-sm leading-6 text-white/85 sm:text-lg sm:leading-8">
                  Design, installation, and commissioning of EV charging
                  stations for commercial establishments, fuel stations,
                  institutions, and public facilities.
                </p>
              </div>
            </div>

            {/* OPERATIONS & MAINTENANCE */}
            <div className="group relative min-h-[260px] overflow-hidden rounded-[26px] border border-white/60 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:rounded-[32px] lg:min-h-0">
              <img
                src="./others/RCC_Floor_Mounted_Structure-5KW.jpeg"
                alt="Operations & Maintenance"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl">
                    <Wrench className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-black leading-tight text-white">
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

            {/* ENERGY AUDITS */}
            <div className="group relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:col-span-2 sm:rounded-[36px] lg:col-span-4 lg:min-h-0">
              <img
                src="./others/ai_rooftop.jpeg"
                alt="Energy Audits & Performance Optimization"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/20" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-4 sm:gap-5 lg:gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-xl sm:h-16 sm:w-16 sm:rounded-3xl lg:h-20 lg:w-20">
                    <LineChart className="h-7 w-7 text-white sm:h-8 sm:w-8 lg:h-10 lg:w-10" />
                  </div>
                  <h3 className="text-xl font-black leading-tight text-white sm:text-2xl lg:text-4xl">
                    Energy Audits &
                    <br />
                    Performance Optimization
                  </h3>
                </div>
                <p className="max-w-3xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
                  Detailed energy assessments and performance analysis to help
                  organizations reduce energy consumption and improve
                  operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-slate-100 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-slate-200/40 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16 lg:mb-20">
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold shadow sm:px-5 sm:text-sm">
              WHY CHOOSE WattWorks ENERGIES
            </span>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Why Choose
              <br />
              WattWorks Energies?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              We combine engineering excellence, premium technology and
              customer-focused execution to deliver reliable renewable energy
              solutions that create long-term value.
            </p>
          </div>

          {/* Features */}
          <div className="mx-auto max-w-5xl space-y-10 sm:space-y-12">
            {[
              {
                icon: ShieldCheck,
                title: "Quality Without Compromise",
                text: "We utilize premium-quality Tier-1 solar panels, inverters, and electrical components sourced from trusted industry partners to ensure reliability, durability, and superior performance.",
              },
              {
                icon: Users,
                title: "Customer-Centric Approach",
                text: "Every project is designed around the unique energy requirements and business objectives of our customers. Our goal is not just to install solar systems but to create lasting value through measurable savings and dependable performance.",
              },
              {
                icon: ClipboardCheck,
                title: "Complete Project Support",
                text: "From initial consultation and system design to utility approvals, financing assistance, installation, and long-term maintenance, we provide complete support throughout the lifecycle of the solar plant.",
              },
              {
                icon: HardHat,
                title: "Experienced Technical Team",
                text: "Our team combines engineering expertise, project management capabilities, and practical field experience to deliver projects on time and to the highest standards.",
              },
              {
                icon: Leaf,
                title: "Commitment to Sustainability",
                text: "Every solar installation contributes to reducing greenhouse gas emissions, lowering dependence on fossil fuels, and creating a cleaner environment for future generations.",
                last: true,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div className="flex gap-5 sm:gap-8" key={item.title}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 sm:h-16 sm:w-16 sm:rounded-3xl">
                    <Icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                  </div>
                  <div
                    className={`flex-1 ${
                      item.last ? "" : "border-b border-slate-200 pb-8 sm:pb-10"
                    }`}
                  >
                    <h3 className="text-xl font-black text-slate-900 sm:text-2xl md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-slate-500 sm:mt-5 sm:text-base sm:leading-8">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== VALUES ===================== */}
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-28">
        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-slate-200/40 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16 lg:mb-20">
            <span className="inline-flex rounded-full border border-white bg-white px-4 py-2 text-xs font-semibold shadow sm:px-5 sm:text-sm">
              OUR VALUES
            </span>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
              The Values That
              <br />
              Drive Every Project
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              Our commitment to integrity, excellence, innovation, reliability
              and sustainability guides every renewable energy solution we
              deliver.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {[
              {
                icon: Scale,
                title: "Integrity",
                text: "We conduct every project with transparency, honesty, and professional ethics.",
              },
              {
                icon: Award,
                title: "Excellence",
                text: "We strive for excellence in engineering, execution, customer service, and long-term performance.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                text: "We continuously adopt modern technologies and best practices to deliver superior renewable energy solutions.",
              },
              {
                icon: ShieldCheck,
                title: "Reliability",
                text: "We stand by our commitments and provide dependable support throughout the life of every solar installation.",
              },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl sm:rounded-[32px] sm:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 sm:h-16 sm:w-16">
                    <Icon className="h-7 w-7 text-white sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-slate-900 sm:mt-8 sm:text-3xl">
                    {v.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-500 sm:mt-5 sm:text-base sm:leading-8">
                    {v.text}
                  </p>
                </div>
              );
            })}

            {/* Sustainability */}
            <div className="rounded-[28px] border border-slate-900 bg-slate-900 p-7 text-white shadow-2xl sm:rounded-[36px] sm:p-10 md:col-span-2">
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-white/10 sm:h-20 sm:w-20">
                  <Leaf className="h-8 w-8 text-white sm:h-10 sm:w-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-black sm:text-4xl">
                    Sustainability
                  </h3>
                  <p className="mt-4 max-w-4xl text-sm leading-6 text-white/80 sm:mt-5 sm:text-lg sm:leading-8">
                    We are dedicated to creating positive environmental impact
                    through renewable energy adoption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROJECT EXPERIENCE ===================== */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-slate-100 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-slate-200/40 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center sm:mb-16 lg:mb-20">
            <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold shadow sm:px-5 sm:text-sm">
              OUR PROJECT EXPERIENCE
            </span>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Delivering Renewable
              <br />
              Energy Projects
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              Over the years, WattWorks Energies has successfully executed and
              supported a wide range of solar projects across residential,
              commercial, industrial, educational, and institutional sectors.
            </p>
          </div>

          {/* Featured Project */}
          <div className="group relative mb-8 overflow-hidden rounded-[28px] sm:mb-10 sm:rounded-[40px]">
            <img
              src="./others/rooftop1.jpeg"
              alt="Industrial Rooftop Solar Installations"
              className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[460px] md:h-[560px] lg:h-[650px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute left-5 top-5 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold tracking-[2px] text-white backdrop-blur-xl sm:left-10 sm:top-10 sm:px-6 sm:py-3 sm:text-sm">
              FEATURED PROJECT
            </div>

            <div className="absolute bottom-5 left-5 right-5 max-w-2xl sm:bottom-10 sm:left-10 sm:right-auto">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl sm:mb-6 sm:h-20 sm:w-20">
                <Factory className="h-8 w-8 text-white sm:h-10 sm:w-10" />
              </div>

              <h3 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Industrial
                <br />
                Rooftop Solar
                <br />
                Installations
              </h3>

              <p className="mt-5 text-sm leading-6 text-white/85 sm:mt-6 sm:text-lg sm:leading-8">
                Our portfolio includes large-scale industrial rooftop solar
                installations designed to maximize energy generation, improve
                operational efficiency, and reduce electricity costs.
              </p>
            </div>
          </div>

          {/* Project Grid */}
          {/* <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
                alt: "Residential Solar Power Systems",
                icon: Home,
                title: ["Residential Solar", "Power Systems"],
              },
              {
                image:
                  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop",
                alt: "Solar Carports",
                icon: Car,
                title: ["Solar", "Carports"],
              },
              {
                image:
                  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1?q=80&w=1200&auto=format&fit=crop",
                alt: "Ground Mounted Solar Plants",
                icon: Factory,
                title: ["Ground-Mounted", "Solar Plants"],
              },
              {
                image:
                  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
                alt: "Educational Institution Solar Projects",
                icon: GraduationCap,
                title: ["Educational Institution", "Solar Projects"],
              },
              {
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
                alt: "Open Access Renewable Energy Consultancy",
                icon: ClipboardCheck,
                title: ["Open Access Renewable", "Energy Consultancy"],
              },
              {
                image:
                  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
                alt: "Energy Audit and Optimization Projects",
                icon: FileBarChart,
                title: ["DPR & Energy Audit", "Projects"],
              },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.alt}
                  className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:rounded-[32px]"
                >
                  <div className="relative h-52 overflow-hidden sm:h-64">
                    <img
                      src={p.image}
                      alt={p.alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 sm:mb-5 sm:h-14 sm:w-14">
                      <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                    </div>
                    <h3 className="text-xl font-black sm:text-2xl">
                      {p.title[0]}
                      <br />
                      {p.title[1]}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div> */}

          {/* Bottom Statement */}
          <div className="mt-10 rounded-[28px] border border-slate-200 bg-slate-900 p-7 text-center shadow-2xl sm:mt-12 sm:rounded-[36px] sm:p-10">
            <Award className="mx-auto h-10 w-10 text-white sm:h-12 sm:w-12" />
            <h3 className="mt-5 text-2xl font-black text-white sm:mt-6 sm:text-3xl">
              Our Commitment
            </h3>
            <p className="mx-auto mt-4 max-w-4xl text-sm leading-6 text-white/80 sm:mt-5 sm:text-lg sm:leading-8">
              Each project reflects our commitment to quality, safety,
              efficiency, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== EXPERTISE (STICKY IMAGE + LIST) ===================== */}
      {/* <section className="bg-black py-20 text-white sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 max-w-3xl sm:mb-16 lg:mb-20">
            <span className="rounded-full border border-white/20 px-4 py-2 text-xs sm:text-sm">
              OUR EXPERTISE
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight sm:mt-8 sm:text-5xl lg:text-6xl">
              Engineering
              <br />
              Solar.
              <br />
              Built For Tomorrow.
            </h2>

            <p className="mt-6 text-base text-slate-400 sm:mt-8 sm:text-lg">
              Complete renewable energy services under one roof.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            LEFT — sticky only from lg upward 
            <div className="h-fit lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-[28px] sm:rounded-[40px]">
                <img
                  src={services[0].image}
                  alt=""
                  className="h-[280px] w-full object-cover sm:h-[420px] md:h-[540px] lg:h-[700px]"
                />
              </div>
            </div>

            {/* RIGHT 
            <div>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group border-b border-white/10 py-8 sm:py-10"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4 sm:gap-5">
                        <div className="shrink-0 rounded-2xl bg-white/10 p-3 sm:p-4">
                          <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold sm:text-3xl">
                            {service.title}
                          </h3>
                          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
                            {service.desc}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition group-hover:rotate-45 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}

      {/* ===================== CLOSING CTA ===================== */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
        <img
          src="./others/rooftop5.jpeg"
          alt="Solar Energy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/70" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wider text-white backdrop-blur-xl sm:px-5 sm:text-sm">
              BUILDING LONG-TERM RELATIONSHIPS
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">
              Building Long-Term
              <br />
              Relationships
            </h2>

            <p className="mt-6 text-base leading-7 text-white/80 sm:mt-8 sm:text-lg sm:leading-9">
              At WattWorks Energies, we believe that our responsibility extends
              beyond project completion. Through dedicated after-sales service,
              annual maintenance programs, performance monitoring, and technical
              support, we ensure that every solar plant continues to deliver
              maximum value for decades.
            </p>

            <p className="mt-5 text-base leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-9">
              Our customers trust us because we remain committed to their
              success throughout the life of the system.
            </p>

            <div className="my-10 h-px w-full bg-white/20 sm:my-12" />

            <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold tracking-wider text-emerald-300 backdrop-blur-xl sm:px-5 sm:text-sm">
              JOIN THE RENEWABLE ENERGY REVOLUTION
            </span>

            <h3 className="mt-6 text-2xl font-black leading-tight text-white sm:mt-8 sm:text-3xl md:text-4xl lg:text-5xl">
              Join the Renewable
              <br />
              Energy Revolution
            </h3>

            <p className="mt-6 text-base leading-7 text-white/80 sm:mt-8 sm:text-lg sm:leading-9">
              Whether you are a homeowner looking to reduce electricity bills, a
              business seeking operational savings, or an industry planning a
              large-scale renewable energy investment, WattWorks Energies Pvt.
              Ltd. is your trusted partner for reliable solar power solutions.
            </p>

            <p className="mt-5 text-lg font-medium leading-8 text-white sm:mt-6 sm:text-xl sm:leading-9">
              Together, let's build a cleaner, greener, and more sustainable
              future powered by the sun.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-5">
              <button className="w-full rounded-full bg-white px-8 py-4 text-center font-semibold text-slate-900 transition hover:scale-105 sm:w-auto">
                Contact Our Team
              </button>
              <button className="w-full rounded-full border border-white/20 bg-white/10 px-8 py-4 text-center font-semibold text-white backdrop-blur-xl transition hover:bg-white hover:text-slate-900 sm:w-auto">
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
