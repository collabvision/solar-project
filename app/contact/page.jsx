"use client";

import {
  Home,
  Building2,
  Factory,
  Sun,
  Warehouse,
  ClipboardCheck,
  LineChart,
  Gauge,
  Wallet,
  BatteryCharging,
  Wrench,
  MapPinned,
  Phone,
  Mail,
  FileBadge,
  Clock3,
} from "lucide-react";
import Navbar from "@/app/(component)/Navbar";
import Footer from "@/app/(component)/Footer";
import { useState } from "react";
const page = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    service: "",
    message: "",
  });
  const onSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      mobile: form.mobile,
      email: form.email,
      service: form.service,
      message: form.message,
    };
    const id = process.env.NEXT_PUBLIC_VISION9_LEADSHEET_APPSCRIPT_API_ID;
    console.log(
      "click form :" +
        id +
        `https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_VISION9_LEADSHEET_APPSCRIPT_API_ID}/exec`,
    );
    try {
      const res = await fetch(`https://script.google.com/macros/s/${id}/exec`, {
        method: "POST",
        headers: {
          // Keep this as text/plain to avoid complex CORS pre-flight checks
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Submitted Successfully");
      } else {
        alert("Submission Failed");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Navbar theme="light" />
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-28">
        {/* Background Blur */}

        <div className="absolute -left-20 top-0 h-[450px] w-[450px] rounded-full bg-slate-200/40 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-[450px] w-[450px] rounded-full bg-slate-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <span className="inline-flex rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold shadow">
                CONTACT US
              </span>

              <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl">
                Get in Touch with
                <br />
                WattWorks Energies
                <br />
                Private Limited
              </h1>

              <p className="mt-8 max-w-2xl text-md leading-9 text-slate-500">
                Looking for reliable solar energy solutions for your home,
                business, industry, or commercial establishment? Our team is
                here to help you with expert guidance, customized solar
                solutions, project consultation, and a free assessment of your
                energy requirements.
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-500">
                Whether you're planning a rooftop solar installation, industrial
                solar project, EV charging station, energy audit, or solar
                consultancy, we'd love to hear from you.
              </p>

              {/* Buttons */}

              {/* <div className="mt-12 flex flex-wrap gap-5">
                <button className="rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:scale-105">
                  Get Free Consultation
                </button>

                <button className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white">
                  Contact Our Team
                </button>
              </div> */}
            </div>

            {/* RIGHT */}

            <div className="relative">
              <div className="overflow-hidden rounded-[40px] shadow-2xl">
                <img
                  src="./others/rooftop-contact-us.jpg"
                  alt="Solar Energy"
                  className="h-[720px] w-full object-cover"
                />
              </div>

              {/* Floating Card */}

              <div className="absolute left-8 top-8 rounded-[30px] border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                    <MapPinned className="h-8 w-8 text-slate-900" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Head Office</p>

                    <h3 className="text-2xl font-black">Belagavi</h3>

                    <p className="text-slate-500">Karnataka, India</p>
                  </div>
                </div>
              </div>

              {/* Floating Card */}

              <div className="absolute bottom-8 right-8 rounded-[30px] border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                    <Phone className="h-8 w-8 text-slate-900" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Call Us</p>

                    <h3 className="text-xl font-black">+91 98458 53002</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mb-20 text-center">
            <span className="inline-flex rounded-full border bg-white px-5 py-2 text-sm font-semibold shadow">
              CONTACT INFORMATION
            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight">
              Let's Start
              <br />A Conversation
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
              Reach out to our team for project consultation, quotations,
              financing assistance and renewable energy solutions.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="sticky top-28 rounded-[40px] border border-slate-200 bg-white p-10 shadow-2xl">
                <span className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold tracking-widest text-white">
                  FREE CONSULTATION
                </span>

                <h3 className="mt-6 text-4xl font-black text-slate-900">
                  Request a Free
                  <br />
                  Solar Consultation
                </h3>

                <p className="mt-6 leading-8 text-slate-500">
                  Want to know how much you can save with solar? Fill out the
                  form and our experts will get in touch with you.
                </p>

                <form onSubmit={onSubmit} className="mt-10 space-y-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none transition focus:border-slate-900"
                  />

                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={form.mobile}
                    onChange={(e) =>
                      setForm({ ...form, mobile: e.target.value })
                    }
                    required
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none transition focus:border-slate-900"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none transition focus:border-slate-900"
                  />

                  <select
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    required
                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none transition focus:border-slate-900"
                  >
                    <option value="">Select Service</option>

                    <option value="Residential Rooftop Solar">
                      Residential Rooftop Solar
                    </option>

                    <option value="Commercial Solar Installation">
                      Commercial Solar Installation
                    </option>

                    <option value="Industrial Solar Power Plant">
                      Industrial Solar Power Plant
                    </option>

                    <option value="Ground Mounted Solar Plant">
                      Ground Mounted Solar Plant
                    </option>

                    <option value="Solar EPC Project">Solar EPC Project</option>

                    <option value="Solar Consultancy">Solar Consultancy</option>

                    <option value="Energy Audit">Energy Audit</option>

                    <option value="Solar Financing">Solar Financing</option>

                    <option value="EV Charging Station">
                      EV Charging Station
                    </option>
                  </select>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 outline-none transition focus:border-slate-900"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-slate-900 py-4 font-semibold text-white transition hover:bg-black"
                  >
                    Request Free Consultation
                  </button>
                </form>
              </div>
            </div>
            {/* RIGHT */}

            <div className="space-y-6 lg:col-span-6">
              {/* Map */}

              <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-slate-900 p-5 shadow-xl">
                <div className="overflow-hidden rounded-[24px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6195593522007!2d74.51444479999999!3d15.874974099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf614cd7360a57%3A0xcebf1837d08d66b2!2sKAYAKA%20TOWERS!5e1!3m2!1sen!2sin!4v1786544019005!5m2!1sen!2sin"
                    className="h-[260px] w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />

              
                </div>

                <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <span className="rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-semibold tracking-[2px] text-white">
                      HEAD OFFICE
                    </span>

                    <h3 className="mt-4 text-3xl font-black text-white">
                      Visit Our Office
                    </h3>

                    <p className="mt-3 max-w-lg leading-7 text-white/75">
                      Kayaka Towers, 1st Floor, Ayodhya Nagar, Belagavi,
                      Karnataka – 590016, India
                    </p>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/C8UTG4ojJCkswNg59"
                    target="_blank"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-105"
                  >
                    Directions
                  </a>
                </div>
              </div>

              {/* Contact Cards */}

              <div className="grid gap-5 md:grid-cols-2">
                {/* Phone */}

                <div className="flex items-center gap-5 rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900">
                    <Phone className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Mobile</p>

                    <h4 className="text-xl font-bold">+91 98458 53002</h4>
                  </div>
                </div>

                {/* Email */}

                <div className="flex items-center gap-5 rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900">
                    <Mail className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Email</p>

                    <h4 className="font-semibold break-all">
                      biz.WattWorks@gmail.com
                    </h4>
                  </div>
                </div>

                {/* GST */}

                <div className="flex items-center gap-5 rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900">
                    <FileBadge className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">GSTIN</p>

                    <h4 className="font-bold">29ABDCS4193K1ZU</h4>
                  </div>
                </div>

                {/* Hours */}

                <div className="flex items-center gap-5 rounded-[28px] bg-slate-900 p-6 text-white shadow-lg">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                    <Clock3 className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="font-bold">Business Hours</h4>

                    <p className="text-sm text-white/70">Mon – Sat</p>

                    <p className="font-medium">09:00 AM – 06:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-28">
        {/* Background */}

        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-slate-200/40 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-slate-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}

          <div className="mb-20 text-center">
            <span className="inline-flex rounded-full border bg-white px-5 py-2 text-sm font-semibold shadow">
              HOW CAN WE HELP?
            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
              Expert Assistance For
              <br />
              Every Solar Requirement
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
              Our team provides expert assistance for residential, commercial,
              industrial and utility-scale renewable energy projects.
            </p>
          </div>

          {/* Services */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Residential */}

            <div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <Home className="h-10 w-10 text-slate-900" />

              <h3 className="mt-8 text-2xl font-black">
                Residential Rooftop
                <br />
                Solar Systems
              </h3>
            </div>

            {/* Commercial */}

            <div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <Building2 className="h-10 w-10 text-slate-900" />

              <h3 className="mt-8 text-2xl font-black">
                Commercial Solar
                <br />
                Installations
              </h3>
            </div>

            {/* Industrial */}

            <div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <Factory className="h-10 w-10 text-slate-900" />

              <h3 className="mt-8 text-2xl font-black">
                Industrial Solar
                <br />
                Power Plants
              </h3>
            </div>

            {/* EPC */}

            <div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <Sun className="h-10 w-10 text-slate-900" />

              <h3 className="mt-8 text-2xl font-black">
                Solar EPC
                <br />
                Projects
              </h3>
            </div>

            {/* Ground */}

            <div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <Warehouse className="h-10 w-10 text-slate-900" />

              <h3 className="mt-8 text-2xl font-black">
                Ground Mounted
                <br />
                Solar Plants
              </h3>
            </div>

            {/* Consultancy */}

            <div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <ClipboardCheck className="h-10 w-10 text-slate-900" />

              <h3 className="mt-8 text-2xl font-black">
                Solar Consultancy
                <br />
                Services
              </h3>
            </div>

            {/* Audit */}

            <div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <LineChart className="h-10 w-10 text-slate-900" />

              <h3 className="mt-8 text-2xl font-black">
                Energy Audits &
                <br />
                Performance Analysis
              </h3>
            </div>

            {/* Net Metering */}

            <div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <Gauge className="h-10 w-10 text-slate-900" />

              <h3 className="mt-8 text-2xl font-black">
                Net Metering
                <br />
                Assistance
              </h3>
            </div>

            {/* Financing */}

            <div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <Wallet className="h-10 w-10 text-slate-900" />

              <h3 className="mt-8 text-2xl font-black">
                Solar Financing
                <br />
                Support
              </h3>
            </div>

            {/* EV */}

            <div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <BatteryCharging className="h-10 w-10 text-slate-900" />

              <h3 className="mt-8 text-2xl font-black">
                EV Charging
                <br />
                Station Installation
              </h3>
            </div>

            {/* O&M */}

            <div className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <Wrench className="h-10 w-10 text-slate-900" />

              <h3 className="mt-8 text-2xl font-black">
                Operations &
                <br />
                Maintenance Services
              </h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
