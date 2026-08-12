"use client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/app/(component)/Navbar";
import Footer from "@/app/(component)/Footer";

import { services } from "@/app/(component)/Services";

import { motion } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Phone,
  Mail,
  BadgeCheck,
} from "lucide-react";

/* =========================================
   SEO
========================================= */

// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   const service = services.find((item) => item.slug === slug);

//   if (!service) {
//     return {};
//   }

//   return {
//     title: service.seo.title,
//     description: service.seo.description,
//     keywords: service.seo.keywords,

//     openGraph: {
//       title: service.seo.title,
//       description: service.seo.description,
//       images: [service.hero.image],
//     },
//   };
// }

/* =========================================
   PAGE
========================================= */

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <Navbar theme="dark" />
      {/* =====================================
              HERO
      ===================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background */}

        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />

        <div className="absolute right-0 top-0 h-[32rem] w-[32rem] rounded-full bg-blue-300/20 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-slate-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <div className="text-center">
            {/* Badge */}

            <span className="inline-flex rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold tracking-wide text-slate-700 shadow">
              {service.hero.badge}
            </span>

            {/* Title */}

            <h1 className="mx-auto mt-8 max-w-5xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {service.hero.title}
            </h1>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
              {service.hero.description}
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-slate-600 px-8 py-4 font-semibold text-white transition hover:bg-slate-700"
              >
                Get Free Consultation
                <ArrowUpRight size={18} />
              </Link>

              <a
                href="tel:+919845853002"
                className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 transition hover:border-slate-600"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>

          {/* Bottom Card */}

          <div className="mt-16 rounded-[36px] border border-white/70 bg-white/80 p-8 shadow-2xl backdrop-blur-xl md:p-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-700">
                  Professional
                </p>

                <h3 className="mt-2 text-2xl font-black text-slate-900">
                  Expert Engineering
                </h3>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-700">
                  Sustainable
                </p>

                <h3 className="mt-2 text-2xl font-black text-slate-900">
                  Renewable Energy
                </h3>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-700">
                  Reliable
                </p>

                <h3 className="mt-2 text-2xl font-black text-slate-900">
                  Long-Term Support
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =====================================
              QUICK STATS
      ===================================== */}
      <section className="relative -mt-14 pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 rounded-[40px] border border-slate-200 bg-white p-8 shadow-[0_30px_90px_rgba(15,23,42,.08)] md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                value: "25+",
                title: "Years System Life",
              },

              {
                value: "100%",
                title: "Customized Solutions",
              },

              {
                value: "7+",
                title: "Renewable Services",
              },

              {
                value: "24×7",
                title: "Technical Support",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-slate-100 bg-slate-50 p-8 text-center transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h2 className="text-5xl font-black text-slate-900">
                  {item.value}
                </h2>

                <p className="mt-3 font-medium text-slate-500">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* =====================================
              INTRODUCTION
      ===================================== */}
      <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
        {/* Background */}

        <div className="absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-slate-100/40 blur-[170px]" />

        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-slate-100/40 blur-[170px]" />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
          <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-xl md:p-12 lg:p-16">
            <span className="inline-flex rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-700">
              About This Service
            </span>

            <h2 className="mt-8 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
              {service.intro.title}
            </h2>

            <div className="mt-10 space-y-7 border-l-4 border-slate-500 pl-6">
              {service.intro.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-slate-600 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="tel:+919845853002"
                className="inline-flex items-center gap-3 rounded-full bg-slate-600 px-8 py-4 font-semibold text-white transition hover:bg-slate-700"
              >
                <Phone size={18} />
                Call Expert
              </a>

              <a
                href="mailto:biz.WattWorks@gmail.com"
                className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 transition hover:border-slate-600"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* =====================================
              BENEFITS
      ===================================== */}
      <section className="relative overflow-hidden bg-slate-950 py-28 text-white">
        <div className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-white/5 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-white/5 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
              Why Choose This Solution
            </span>

            <h2 className="mt-8 text-5xl font-black">
              {service.benefits.title}
            </h2>

            <p className="mt-8 text-lg leading-9 text-white/70">
              {service.benefits.description}
            </p>
          </div>

          <div className="mt-20 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
            {service.benefits.items.map((item) => (
              <div
                key={item}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-3 hover:bg-white hover:text-slate-900"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-slate-900 transition group-hover:bg-slate-900 group-hover:text-white">
                  <Check size={30} />
                </div>

                <h3 className="mt-8 text-xl font-bold leading-8">{item}</h3>

                <p className="mt-4 text-sm leading-7 opacity-70">
                  Professional renewable energy solutions designed to maximize
                  performance, efficiency and long-term value.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* =====================================
              CONTENT SECTIONS
      ===================================== */}
      {service.content.map((section, index) => (
        <motion.section
          key={section.title}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`relative overflow-hidden py-20 ${
            index % 2 === 0
              ? "bg-white"
              : "bg-gradient-to-br from-slate-50 via-white to-blue-50"
          }`}
        >
          {/* Background */}

          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, 20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 14,
              ease: "easeInOut",
            }}
            className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-slate-200/20 blur-3xl"
          />

          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -25, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "easeInOut",
            }}
            className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-12">
              {/* Left left */}

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-4"
              >
                <span className="rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-700">
                  Section {String(index + 1).padStart(2, "0")}
                </span>

                <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900">
                  {section.title}
                </h2>

                <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-slate-500 to-slate-500" />

                <p className="mt-8 text-lg leading-9 text-slate-600">
                  {section.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-full bg-slate-600 px-7 py-4 font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-slate-700 hover:shadow-xl"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>

              {/* Right */}

              <div className="space-y-10 lg:col-span-8">
                {section.groups.map((group, groupIndex) => (
                  <motion.div
                    key={group.title}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: groupIndex * 0.12,
                      duration: 0.6,
                    }}
                  >
                    {/* Title */}

                    <div className="mb-8 flex items-center gap-4">
                      <div className="h-12 w-2 rounded-full bg-gradient-to-b from-slate-500 to-slate-500" />

                      <h3 className="text-2xl font-black text-slate-900">
                        {group.title}
                      </h3>
                    </div>

                    {/* Items */}

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                      {group.items.map((item, itemIndex) => (
                        <motion.div
                          key={item}
                          initial={{
                            opacity: 0,
                            scale: 0.92,
                          }}
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay: itemIndex * 0.05,
                            duration: 0.45,
                          }}
                          whileHover={{
                            y: -8,
                            scale: 1.03,
                          }}
                          className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:border-slate-300 hover:shadow-2xl"
                        >
                          <div className="flex items-start gap-5">
                            <div className="mt-2 h-3 w-3 rounded-full bg-gradient-to-r from-slate-500 to-slate-500" />

                            <p className="leading-8 text-slate-700">{item}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      ))}
      {/* =====================================
              PROCESS
      ===================================== */}
      <section className="relative overflow-hidden bg-slate-950 py-28 text-white">
        <div className="absolute left-0 top-0 h-[30rem] w-[30rem] rounded-full bg-white/5 blur-[160px]" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-slate-500/10 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-xl">
              Our Process
            </span>

            <h2 className="mt-8 text-5xl font-black">
              {service.process.title}
            </h2>
          </div>

          <div className="relative mt-24">
            <div className="absolute left-1/2 hidden h-full w-[2px] -translate-x-1/2 bg-white/10 lg:block" />

            <div className="space-y-14">
              {service.process.steps.map((step, index) => {
                const reverse = index % 2 === 1;

                return (
                  <div
                    key={step.step}
                    className={`grid items-center gap-10 lg:grid-cols-2 ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div>
                      <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:bg-white hover:text-slate-900">
                        <span className="text-6xl font-black text-white/20">
                          {step.step}
                        </span>

                        <h3 className="mt-5 text-3xl font-black">
                          {step.title}
                        </h3>

                        <p className="mt-5 leading-8 opacity-80">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="hidden justify-center lg:flex">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white text-3xl font-black text-slate-900 shadow-2xl">
                        {step.step}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* =====================================
              WHY CHOOSE US
      ===================================== */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute -left-32 top-0 h-[26rem] w-[26rem] rounded-full bg-slate-100 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-slate-200/40 blur-[180px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold shadow">
              Why WattWorks
            </span>

            <h2 className="mt-8 text-5xl font-black text-slate-900">
              {service.whyChoose.title}
            </h2>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {service.whyChoose.items.map((item) => (
              <div
                key={item.title}
                className="group rounded-[34px] border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white transition group-hover:rotate-6">
                  <BadgeCheck size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-black text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* =====================================
              FAQ
      ===================================== */}
      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <span className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold shadow">
              Frequently Asked Questions
            </span>

            <h2 className="mt-8 text-5xl font-black text-slate-900">
              {service.faq.title}
            </h2>
          </div>

          <div className="mt-20 space-y-6">
            {service.faq.items.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-bold text-slate-900">
                  {faq.question}

                  <span className="text-3xl transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-6 leading-8 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>{" "}
      {/* =====================================
              CTA
      ===================================== */}
      <section className="relative overflow-hidden bg-slate-950 py-28 text-white">
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-white/5 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[34rem] w-[34rem] rounded-full bg-slate-500/10 blur-[200px]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="rounded-[48px] border border-white/10 bg-white/5 p-10 shadow-[0_30px_80px_rgba(0,0,0,.4)] backdrop-blur-2xl md:p-16">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
                  Get Started Today
                </span>

                <h2 className="mt-8 text-5xl font-black leading-tight">
                  {service.cta.title}
                </h2>

                <p className="mt-8 text-lg leading-9 text-white/75">
                  {service.cta.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={`tel:${service.cta.phone}`}
                    className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>

                  <a
                    href={`mailto:${service.cta.email}`}
                    className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-xl transition hover:bg-white hover:text-slate-900"
                  >
                    <Mail size={18} />
                    Email Us
                  </a>
                </div>
              </div>

              <div className="rounded-[36px] border border-white/10 bg-white/10 p-10 backdrop-blur-xl">
                <div className="space-y-7">
                  <div className="flex items-center gap-4">
                    <Phone className="text-white" />

                    <div>
                      <p className="text-sm text-white/60">Phone</p>

                      <p className="font-semibold">{service.cta.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="text-white" />

                    <div>
                      <p className="text-sm text-white/60">Email</p>

                      <p className="font-semibold">{service.cta.email}</p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white py-4 font-semibold text-slate-900 transition hover:scale-[1.02]"
                  >
                    {service.cta.button}

                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =====================================
              RELATED SERVICES
      ===================================== */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <span className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold shadow">
                Explore More
              </span>

              <h2 className="mt-6 text-5xl font-black text-slate-900">
                Related Services
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {relatedServices.slice(0, 6).map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 transition group-hover:text-slate-700">
                    {item.hero.title}
                  </h3>

                  <p className="mt-5 line-clamp-3 leading-8 text-slate-600">
                    {item.hero.description}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-3 font-semibold text-slate-900">
                    Learn More
                    <ArrowUpRight
                      size={18}
                      className="transition group-hover:translate-x-2 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
