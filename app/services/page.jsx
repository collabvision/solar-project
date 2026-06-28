import Navbar from "@/app/(component)/Navbar";
import Footer from "@/app/(component)/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Solar Services | WattWorks Energies Pvt. Ltd.",
  description:
    "Explore WattWorks Energies' comprehensive solar services including Solar EPC, Rooftop Solar Systems, Ground Mounted Solar Plants, Solar Consultancy, Energy Audits, EV Charging Infrastructure, Operations & Maintenance, Solar Financing, and Renewable Energy Solutions across Karnataka, Maharashtra, and Goa.",
  keywords: [
    "Solar EPC",
    "Solar Services",
    "Rooftop Solar",
    "Ground Mounted Solar",
    "Solar Consultancy",
    "Energy Audit",
    "Solar Installation",
    "EV Charging",
    "Solar Financing",
    "Operations and Maintenance",
    "Renewable Energy",
    "WattWorks Energies",
  ],
};

export default function ServicesPage() {
  const services = [
    {
      id: "solar-pv",
      badge: "SOLAR PV SOLUTIONS",
      title: (
        <>
          Reliable Solar Power
          <br />
          For Every Energy Need
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1800&auto=format&fit=crop",
      imageTitle: "Reliable Solar Power",
      imageDesc:
        "Customized solar photovoltaic solutions for residential, commercial, industrial and utility-scale applications.",
      paragraphs: [
        "We design, supply, install, and maintain high-performance solar photovoltaic (PV) systems for residential, commercial, industrial, and utility-scale applications.",
        "Our solar solutions help customers generate clean electricity, reduce utility expenses, and achieve long-term energy independence.",
      ],
      listTitle: "Solutions Include",
      list: [
        "Industrial Rooftop Solar Plants",
        "Commercial Solar Installations",
        "Residential Solar Systems",
        "Ground-Mounted Solar Plants",
        "Solar Farms & Open Access Projects",
        "Solar Carports",
        "Net Metering Solutions",
        "Solar Plant Operation & Maintenance",
      ],
      benefits: [
        "Lower Electricity Bills",
        "Fast Return on Investment",
        "Reduced Carbon Footprint",
        "Long-Term Energy Savings",
        "Low Maintenance Requirements",
      ],
      link: "/services/solar-pv",
    },

    {
      id: "ev-charging",
      badge: "EV CHARGING SOLUTIONS",
      title: (
        <>
          Powering The Future
          <br />
          Of Electric Mobility
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=1800&auto=format&fit=crop",
      imageTitle: "Smart EV Charging",
      imageDesc:
        "Complete EV charging infrastructure designed for commercial, industrial, institutional and public charging applications.",
      paragraphs: [
        "As electric vehicle adoption continues to grow, reliable charging infrastructure is becoming essential for businesses, institutions, fuel stations, residential communities, and commercial properties.",
        "We provide complete EV charging station design, installation, commissioning, and support services.",
      ],
      listTitle: "Applications",
      list: [
        "Commercial Buildings",
        "Fuel Stations",
        "Shopping Centers",
        "Hotels & Resorts",
        "Housing Societies",
        "Educational Campuses",
        "Corporate Offices",
        "Public Charging Infrastructure",
      ],
      benefits: [
        "Future-Ready Infrastructure",
        "New Revenue Opportunities",
        "Enhanced Customer Experience",
        "Sustainable Transportation Support",
      ],
      link: "/services/ev-charging",
    },

    {
      id: "wind-turbines",
      badge: "DOMESTIC SCALE WIND TURBINES",
      title: (
        <>
          Harnessing Wind Energy
          <br />
          For Sustainable Power
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1800&auto=format&fit=crop",
      imageTitle: "Wind + Solar",
      imageDesc:
        "Sustainable small-scale wind energy solutions designed for homes, farms and hybrid renewable energy systems.",
      paragraphs: [
        "For locations with favorable wind conditions, small-scale wind turbines provide an additional source of renewable energy and can complement solar power systems.",
        "Our domestic wind energy solutions are designed for homes, farms, institutions, and rural properties seeking greater energy independence.",
      ],
      listTitle: "Applications",
      list: [
        "Residential Properties",
        "Farmhouses",
        "Rural Communities",
        "Agricultural Facilities",
        "Hybrid Solar-Wind Systems",
      ],
      benefits: [
        "Renewable Power Generation",
        "Reduced Grid Dependence",
        "Hybrid Energy Solutions",
        "Sustainable Energy Production",
      ],
      link: "/services/wind-turbines",
    },

    {
      id: "solar-appliances",
      badge: "SOLAR APPLIANCES",
      title: (
        <>
          Smart Solar-Powered
          <br />
          Products For
          <br />
          Everyday Use
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1800&auto=format&fit=crop",
      imageTitle: "Smart Solar Products",
      imageDesc:
        "Reliable solar-powered appliances designed to reduce energy consumption while supporting sustainable living.",
      paragraphs: [
        "We offer a range of energy-efficient solar-powered appliances designed to reduce electricity consumption and support sustainable living.",
        "Our solutions combine reliability, efficiency, and environmental responsibility.",
      ],
      listTitle: "Available Solutions",
      list: [
        "Solar Water Pumps",
        "Solar Street Lights",
        "Solar Home Lighting Systems",
        "Solar Water Heaters",
        "Solar Security Lighting",
        "Solar Backup Systems",
      ],
      benefits: [
        "Reduced Electricity Costs",
        "Reliable Operation",
        "Environment-Friendly Technology",
        "Low Maintenance",
      ],
      link: "/services/solar-appliances",
    },

    {
      id: "energy-audits",
      badge: "ENERGY AUDITS",
      title: (
        <>
          Identify Energy
          <br />
          Savings And Improve
          <br />
          Efficiency
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1800&auto=format&fit=crop",
      imageTitle: "Improve Efficiency",
      imageDesc:
        "Detailed assessments that help organizations reduce energy consumption and improve operational efficiency.",
      paragraphs: [
        "Energy audits help businesses understand how energy is being consumed and identify opportunities for cost reduction and operational improvement.",
        "Our detailed assessments provide actionable recommendations to improve energy performance and reduce unnecessary expenses.",
      ],
      listTitle: "Audit Services Include",
      list: [
        "Energy Consumption Analysis",
        "Electrical System Assessment",
        "Efficiency Improvement Recommendations",
        "Cost Saving Opportunities",
        "Renewable Energy Integration Planning",
      ],
      benefits: [
        "Lower Operating Costs",
        "Improved Energy Efficiency",
        "Better Resource Utilization",
        "Enhanced Sustainability Performance",
      ],
      link: "/services/energy-audits",
    },

    {
      id: "escom-liaisoning",
      badge: "ESCOM LIAISONING SERVICES",
      title: (
        <>
          Simplifying Utility
          <br />
          Approvals &
          <br />
          Net Metering
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1800&auto=format&fit=crop",
      imageTitle: "Approval Management",
      imageDesc:
        "Complete support for utility approvals and net metering services.",
      paragraphs: [
        "Obtaining utility approvals for renewable energy projects can be complex and time-consuming. Our experienced team manages the entire process, ensuring smooth coordination with relevant authorities.",
      ],
      listTitle: "Services Include",
      list: [
        "Net Metering Applications",
        "Utility Documentation",
        "Approval Coordination",
        "Grid Connectivity Support",
        "Project Compliance Assistance",
      ],
      benefits: [
        "Faster Approvals",
        "Reduced Administrative Burden",
        "Regulatory Compliance",
        "Hassle-Free Project Execution",
      ],
      link: "/services/escom-liaisoning",
    },

    {
      id: "solar-financing",
      badge: "SOLAR FINANCING SOLUTIONS",
      title: (
        <>
          Affordable Financing
          <br />
          For Renewable
          <br />
          Energy Projects
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1800&auto=format&fit=crop",
      imageTitle: "Solar Financing",
      imageDesc:
        "Flexible financing options for residential, commercial and industrial solar projects.",
      paragraphs: [
        "We help customers adopt solar energy without significant upfront investment by facilitating flexible financing options through our financial partners.",
        "Whether you're planning a residential installation or a large industrial project, we can help identify financing solutions that fit your budget.",
      ],
      listTitle: "Financing Options",
      list: [
        "Solar Loans",
        "EMI-Based Solutions",
        "Commercial Project Financing",
        "Industrial Solar Funding",
        "CAPEX Models",
        "Lease & Asset Financing Options",
      ],
      benefits: [
        "Reduced Initial Investment",
        "Faster Solar Adoption",
        "Flexible Repayment Plans",
        "Improved Project Viability",
      ],
      link: "/services/solar-financing",
    },
  ];
  return (
    <>
      <Navbar theme="light" />
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-32">
        {/* Background */}

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-slate-200/30 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-slate-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <span className="inline-flex rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold shadow-lg">
                OUR SERVICES
              </span>

              <h1 className="mt-8 text-3xl font-black leading-tight tracking-tight text-slate-900 md:text-3xl">
                Comprehensive
                <br />
                Renewable Energy
                <br />
                Solutions
              </h1>

              <h2 className="mt-8 text-2xl font-bold leading-relaxed text-slate-700">
                Comprehensive Renewable Energy Solutions for Homes, Businesses,
                and Industries
              </h2>

              <p className="mt-8 text-md text-slate-500">
                At WattWorks Energies Private Limited, we provide end-to-end
                renewable energy and energy management solutions designed to
                help customers reduce energy costs, improve efficiency, and
                achieve sustainability goals.
              </p>

              <p className="mt-6 text-md text-slate-500">
                From solar power systems and EV charging infrastructure to
                energy audits and project financing, our team delivers reliable,
                innovative, and cost-effective solutions tailored to your unique
                requirements.
              </p>

              <p className="mt-6 text-md text-slate-500">
                Whether you are a homeowner, commercial establishment,
                manufacturing facility, educational institution, healthcare
                organization, or large industrial enterprise, we offer the
                expertise and support needed to successfully transition to clean
                energy.
              </p>

              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="#solar-pv"
                  className="rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:scale-105"
                >
                  Explore Services
                </a>

                <a
                  href="/contact"
                  className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 transition hover:border-slate-900"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative">
              <div className="overflow-hidden rounded-[40px] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1800&auto=format&fit=crop"
                  alt="Renewable Energy Solutions"
                  className="h-[700px] w-full object-cover"
                />
              </div>

              {/* Floating Card */}

              <div className="absolute -bottom-8 left-8 right-8 rounded-[32px] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
                <h3 className="text-2xl font-black text-slate-900">
                  Complete Renewable Energy Solutions
                </h3>

                <p className="mt-4 leading-8 text-slate-500">
                  Solar Power • EV Charging • Energy Audits • Solar Financing •
                  Consultancy • EPC • Operation & Maintenance
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-100 p-4 text-center">
                    <h4 className="text-3xl font-black text-slate-900">100%</h4>

                    <p className="mt-1 text-sm text-slate-500">
                      Customized Solutions
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-100 p-4 text-center">
                    <h4 className="text-3xl font-black text-slate-900">
                      End-to-End
                    </h4>

                    <p className="mt-1 text-sm text-slate-500">
                      Project Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {services.map((service, index) => {
        const reverse = index % 2 !== 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`relative overflow-hidden py-20 ${
              reverse ? "bg-slate-50" : "bg-white"
            }`}
          >
            {/* Background */}

            <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

            <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-slate-200/30 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* IMAGE */}

                <div className="relative">
                  <div className="overflow-hidden rounded-[36px] shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.badge}
                      className="h-[700px] w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Floating Card */}

                  <div className="absolute bottom-6 left-6 right-6 rounded-[28px] border border-white/30 bg-white/85 p-6 shadow-xl backdrop-blur-xl">
                    <span className="inline-flex rounded-full bg-slate-900 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[2px] text-white">
                      {service.badge}
                    </span>

                    <h3 className="mt-4 text-2xl font-black text-slate-900">
                      {service.imageTitle}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {service.imageDesc}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}

                <div>
                  <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold shadow">
                    {service.badge}
                  </span>

                  <h2 className="mt-6 text-2xl font-black leading-tight text-slate-900 lg:text-2xl">
                    {service.title}
                  </h2>

                  {service.paragraphs.map((item) => (
                    <p
                      key={item}
                      className="mt-5 text-balance text-slate-500"
                    >
                      {item}
                    </p>
                  ))}

                  {/* LIST */}

                  <div className="mt-10">
                    <h3 className="text-xl font-black text-slate-900">
                      {service.listTitle}
                    </h3>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {service.list.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                          <div className="h-2.5 w-2.5 rounded-full bg-slate-900" />

                          <span className="text-sm font-medium text-slate-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BENEFITS */}

                  <div
                    className={`mt-5 rounded-[24px] p-6 ${
                      reverse
                        ? "border border-slate-200 bg-white shadow-lg"
                        : "bg-slate-900 text-white"
                    }`}
                  >
                    <h3
                      className={`text-l font-black ${
                        reverse ? "text-slate-900" : ""
                      }`}
                    >
                      Benefits
                    </h3>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {service.benefits.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <div
                            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                              reverse
                                ? "bg-slate-900 text-white"
                                : "bg-white text-slate-900"
                            }`}
                          >
                            ✓
                          </div>

                          <span
                            className={`text-sm ${
                              reverse
                                ? "font-medium text-slate-700"
                                : "text-white"
                            }`}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={service.link}
                      className={`mt-3 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:scale-105 ${
                        reverse
                          ? "bg-slate-900 text-white"
                          : "bg-white text-slate-900"
                      }`}
                    >
                      Learn More
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <Footer />
    </>
  );
}
