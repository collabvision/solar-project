"use client";

import { useEffect, useRef, useState } from "react";
import {
  Wallet,
  BatteryCharging,
  TrendingUp,
  Leaf,
  ShieldCheck,
  Building2,
  Menu,
  X,
} from "lucide-react";
import Navbar from "@/app/(component)/Navbar"
import Footer from "@/app/(component)/Footer"

/* =========================================================
   Wattworks Energies — Solar Landing Page (Next.js / JSX)
   Rebuilt from the "Sachi Hospital" template structure,
   re-themed and re-written for solar energy content.
   ========================================================= */

const DEPT_CONTENT = {
  rooftop: {
    tagColor: "rgba(59,130,246,0.12)",
    tagText: "#3b82f6",
    badge: "Residential & Commercial",
    title: "Rooftop Solar Systems Built Around Your Roof",
    body: "Customized rooftop solar solutions for homes, apartments, commercial buildings, educational institutions, hospitals, and industries — engineered for maximum shadow-free generation.",
    cta: "Consult a Rooftop Specialist",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=900&auto=format&fit=crop",
  },
  epc: {
    tagColor: "rgba(16,185,129,0.12)",
    tagText: "#10b981",
    badge: "Turnkey Delivery",
    title: "Complete Solar EPC, Start to Finish",
    body: "Engineering, Procurement, Construction, Installation, Testing, and Commissioning — all delivered under one roof, with net metering and utility approval support handled for you.",
    cta: "Talk to Our EPC Team",
    img: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=900&auto=format&fit=crop",
  },
  ev: {
    tagColor: "rgba(245,158,11,0.14)",
    tagText: "#f59e0b",
    badge: "Future-Ready Infrastructure",
    title: "EV Charging Stations Powered by the Sun",
    body: "Design, supply, installation, and commissioning of EV charging infrastructure for commercial properties, fuel stations, institutions, and public facilities.",
    cta: "Plan an EV Charging Site",
    img: "https://images.unsplash.com/photo-1620912189865-3cd06a6d4f9d?q=80&w=900&auto=format&fit=crop",
  },
};

const BENEFITS = [
  {
    icon: Wallet,
    value: "90%",
    title: "Lower Bills",
    desc: "Save up to 90% on electricity",
  },
  {
    icon: BatteryCharging,
    value: "25+",
    title: "Years",
    desc: "Reliable power generation",
  },
  {
    icon: TrendingUp,
    value: "ROI",
    title: "High Returns",
    desc: "Excellent long-term investment",
  },
  {
    icon: Leaf,
    value: "GREEN",
    title: "Eco Friendly",
    desc: "Reduce carbon emissions",
  },
  {
    icon: ShieldCheck,
    value: "24/7",
    title: "Energy Security",
    desc: "Protection from tariff hikes",
  },
  {
    icon: Building2,
    value: "VALUE",
    title: "Property Boost",
    desc: "Increase property value",
  },
];

const WHY_US = [
  "Complete Turnkey EPC Solutions",
  "High-Quality Tier-1 Solar Components",
  "Expert Engineering & Project Management",
  "Net Metering & Utility Approval Support",
  "Flexible Financing Options",
  "Comprehensive AMC & Maintenance Services",
  "Energy Audits & Performance Analysis",
  "Transparent Pricing & Professional Execution",
  "Dedicated After-Sales Support",
];

const ALL_SERVICES = [
  {
    name: "Rooftop Solar Systems",
    desc: "Customized rooftop solar solutions for homes, apartments, commercial buildings, educational institutions, hospitals, and industries.",
  },
  {
    name: "Ground Mounted Solar Plants",
    desc: "Large-scale solar installations designed for industrial facilities, open land projects, and utility-scale energy generation.",
  },
  {
    name: "Solar Consultancy & Energy Audits",
    desc: "Professional feasibility studies, energy assessments, project planning, and optimization services to maximize solar performance and savings.",
  },
  {
    name: "Solar EPC Solutions",
    desc: "Complete Engineering, Procurement, Construction, Installation, Testing, and Commissioning services under one roof.",
  },
  {
    name: "EV Charging Station Solutions",
    desc: "Design, supply, installation, and commissioning of EV charging infrastructure for commercial properties, fuel stations, institutions, and public facilities.",
  },
  {
    name: "Solar Carports & Industrial Solar Roofs",
    desc: "Innovative solar structures that generate clean energy while providing practical parking and covered workspace solutions.",
  },
  {
    name: "Operations & Maintenance Services",
    desc: "Comprehensive AMC packages, preventive maintenance, performance monitoring, and technical support for maximum plant efficiency.",
  },
];

const INDUSTRIES = [
  "Manufacturing Industries",
  "Hospitals & Healthcare Facilities",
  "Educational Institutions",
  "Housing Societies & Apartments",
  "Warehouses & Logistics Parks",
  "Commercial Buildings",
  "Retail Establishments",
  "Hotels & Resorts",
  "Fuel Stations",
  "Government Organizations",
  "Industrial Parks",
  "Solar Park Developers",
];

const PROJECTS = [
  {
    status: "Completed",
    dotColor: "#10b981",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=500&auto=format&fit=crop",
    name: "120 KW RCC Rooftop Installation",
    location: "Satara, Maharashtra",
    note: "Live & Generating",
    noteColor: "#3b82f6",
  },
  {
    status: "Completed",
    dotColor: "#64748b",
    img: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=500&auto=format&fit=crop",
    name: "100 KW Industrial Roof-Mount Plant",
    location: "Chakan, Maharashtra",
    note: "Live & Generating",
    noteColor: "#64748b",
  },
  {
    status: "Completed",
    dotColor: "#10b981",
    img: "https://images.unsplash.com/photo-1591293836301-bd0a64e3d055?q=80&w=500&auto=format&fit=crop",
    name: "40 KW Elevated Apartment Structure",
    location: "Pune, Maharashtra",
    note: "Live & Generating",
    noteColor: "#3b82f6",
  },
  {
    status: "Completed",
    dotColor: "#10b981",
    img: "https://images.unsplash.com/photo-1545209463-e2826691602c?q=80&w=500&auto=format&fit=crop",
    name: "48 KW Solar Carport & Bus Port",
    location: "Belagavi, Karnataka",
    note: "Live & Generating",
    noteColor: "#3b82f6",
  },
  {
    status: "Ongoing",
    dotColor: "#10b981",
    img: "https://images.unsplash.com/photo-1592833167665-08e9d1f0bb5d?q=80&w=500&auto=format&fit=crop",
    name: "Residential Rooftop Solar Installations",
    location: "Maharashtra, Karnataka & Goa",
    note: "Multiple Sites",
    noteColor: "#3b82f6",
  },
  {
    status: "Advisory",
    dotColor: "#64748b",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=500&auto=format&fit=crop",
    name: "Solar Park Consultancy & DPR Development",
    location: "Maharashtra, Karnataka & Goa",
    note: "Consultancy",
    noteColor: "#64748b",
  },
  {
    status: "Advisory",
    dotColor: "#64748b",
    img: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=500&auto=format&fit=crop",
    name: "Open Access Renewable Energy Feasibility Studies",
    location: "Maharashtra, Karnataka & Goa",
    note: "Consultancy",
    noteColor: "#64748b",
  },
];

const FAQS = [
  {
    q: "What is an On-Grid Solar System?",
    a: "An on-grid solar system is connected to the utility electricity network. It generates electricity during the day and allows excess power to be exported to the grid through net metering.",
  },
  {
    q: "What is Net Metering?",
    a: "Net metering allows excess electricity generated by your solar plant to be sent to the utility grid. The exported energy is adjusted against your future electricity consumption, reducing your monthly electricity bill.",
  },
  {
    q: "How Much Space Is Required for Solar Installation?",
    a: "Typically, a 1 kW solar plant requires approximately 70–80 square feet of shadow-free rooftop space. The exact requirement depends on site conditions and panel selection.",
  },
  {
    q: "Will My Solar Plant Work During a Power Cut?",
    a: "Standard grid-connected solar systems automatically shut down during power outages for safety reasons. Backup solutions can be incorporated if uninterrupted power is required.",
  },
  {
    q: "Do I Need Government Approval?",
    a: "Yes. Grid-connected solar plants require utility approvals and net metering permissions. Our team handles the complete approval and liaison process on your behalf.",
  },
];

const REVIEWS = [
  {
    avatar:
      "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=150&auto=format&fit=crop",
    quote:
      "With our dedication and expertise in solar energy, we strive to deliver systems that are not just installations, but a lasting commitment to lower bills and a greener future.",
    name: "Aniket Deshmukh",
    role: "Project Manager, Wattworks Energies",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    quote:
      "The team handled our entire 100 KW rooftop project — design, approvals, installation — without a single delay. Our electricity bill dropped within the first month.",
    name: "Priya Kulkarni",
    role: "Facility Head, Chakan Manufacturing Unit",
  },
];

export default function WattworksLandingPage() {
  const [activeTab, setActiveTab] = useState("rooftop");
  const [openFaq, setOpenFaq] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const heroRef = useRef(null);
  const revealRefs = useRef([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll-reveal animation via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Subtle parallax on hero background
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handler = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      hero.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
    };
    hero.addEventListener("mousemove", handler);
    return () => hero.removeEventListener("mousemove", handler);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const t = setInterval(
      () => setReviewIndex((i) => (i + 1) % REVIEWS.length),
      6000,
    );
    return () => clearInterval(t);
  }, []);

  const addReveal = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const dept = DEPT_CONTENT[activeTab];

  return (
    <>
      {/* ===================== HEADER ===================== */}
<Navbar theme="dark" />      {/* ===================== HERO ===================== */}
      <section className="hero-canvas" id="home" ref={heroRef}>
        <div className="hero-content">
          <h1>
            Switch to Solar.
            <br />
            Power a Sustainable Tomorrow.
          </h1>
          <p>
            Affordable, end-to-end solar energy solutions that help homes,
            businesses, and industries across Maharashtra, Karnataka, and Goa
            reduce electricity costs and achieve energy independence.
          </p>
          <a href="https://wa.me/919845853002" className="cta-pill-btn">
            Get a Free Solar Assessment <span className="arrow-circle">↗</span>
          </a>
        </div>

        <div className="hero-bottom">
          <div className="hero-floating-left">
            <div className="team-avatars">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=150&auto=format&fit=crop"
                alt="Wattworks solar engineer"
              />
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=150&auto=format&fit=crop"
                alt="Wattworks site engineer"
              />
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&auto=format&fit=crop"
                alt="Wattworks project manager"
              />
            </div>
            <p>
              Our experienced EPC team pairs technical expertise with dedicated
              after-sales support, since 2020.
            </p>
          </div>

          <div className="hero-floating-bottom-bar">
            <span style={{ color: "var(--accent)" }}>●</span> LEADING SOLAR
            EXCELLENCE WITH WATTWORKS
          </div>

          <div className="social-vertical-dock">
            <a href="#" className="social-pill">
              Instagram
            </a>
            <a href="#" className="social-pill">
              Twitter
            </a>
            <a href="#" className="social-pill">
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT / INTRO ===================== */}
      <section className="intro-section" id="about">
        <div className="container">
          <div className="badge-center">
            <span className="badge-pill">Let's know us ➔</span>
          </div>
          <h2 className="large-headline reveal" ref={addReveal}>
            Explore Options, About Wattworks, Your Energy Savings, Our Priority
          </h2>

          <div className="split-grid-layout reveal" ref={addReveal}>
            <div className="left-info-block">
              <span
                className="badge-pill"
                style={{ marginBottom: 15, display: "inline-block" }}
              >
                About Us
              </span>
              <h3>
                Wattworks Energies Pvt. Ltd. is a trusted solar energy company
                providing end-to-end solar power solutions since 2020.
              </h3>
              <p>
                We deliver residential, commercial, industrial, institutional,
                and utility-scale projects across Maharashtra, Karnataka, and
                Goa — reducing electricity costs and contributing to a greener
                future.
              </p>
              <a href="#services" className="btn-black">
                Learn More{" "}
                <span
                  className="arrow-circle"
                  style={{
                    background: "var(--white)",
                    color: "var(--text-main)",
                  }}
                >
                  ↗
                </span>
              </a>
            </div>

            <div className="asym-card">
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop"
                alt="Rooftop solar installation"
              />
              <div className="card-overlay">
                <span className="card-tag">Rooftop System</span>
                <h4>
                  A versatile rooftop solution offering a wide range of solar
                  capacities
                </h4>
                <span className="card-arrow-btn">↗</span>
              </div>
            </div>

            <div className="asym-card" style={{ marginTop: 40 }}>
              <img
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=600&auto=format&fit=crop"
                alt="Industrial solar plant"
              />
              <div className="card-overlay">
                <span className="card-tag">Industrial Plant</span>
                <h4>
                  High-capacity systems built for factories and warehouses
                </h4>
                <span className="card-arrow-btn">↗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE SOLAR ENERGY ===================== */}
      <section className="benefits-section">
        <div className="container">
          <div className="badge-center">
            <span className="badge-pill">Why Choose Solar Energy?</span>
          </div>
          <h2
            className="large-headline reveal"
            ref={addReveal}
            style={{ marginBottom: 20 }}
          >
            Electricity costs keep rising every year. Solar lets you generate
            your own power and cut your dependence on the grid.
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-muted)",
              maxWidth: 700,
              margin: "0 auto 50px",
            }}
          >
            Benefits of Going Solar
          </p>
          <div className="benefits-grid reveal" ref={addReveal}>
            {BENEFITS.map((item) => {
              const Icon = item.icon;

              return (
                <div className="benefit-card" key={item.title}>
                  <div
                    className="benefit-icon"
                    style={{ background: `${item.color}15` }}
                  >
                    <Icon size={30} strokeWidth={2.3} color={item.color} />
                  </div>

                  <h2 className="benefit-value" style={{ color: item.color }}>
                    {item.value}
                  </h2>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRIES STRIP ===================== */}
      <section className="facilities-section" id="industries">
        <div className="container">
          <div className="badge-center">
            <span className="badge-pill">Industries We Serve</span>
          </div>
          <h2
            className="large-headline reveal"
            ref={addReveal}
            style={{ fontSize: "2.2rem", marginBottom: 40 }}
          >
            Customized Solar Solutions Across Every Sector
          </h2>
          <div className="industries-grid reveal" ref={addReveal}>
            {INDUSTRIES.map((ind) => (
              <span key={ind} className="industry-chip">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SERVICES SHOWCASE ===================== */}
      <section className="facility-showcase" id="services">
        <div className="container">
          <div className="facility-flex-header reveal" ref={addReveal}>
            <div>
              <span className="badge-pill">Services</span>
              <h2
                style={{
                  fontSize: "2.8rem",
                  fontWeight: 700,
                  marginTop: 15,
                  letterSpacing: "-1px",
                }}
              >
                Explore Our Solar Services
              </h2>
            </div>
            <a href="#" className="btn-black">
              View All Services <span style={{ fontSize: "0.8rem" }}>➔</span>
            </a>
          </div>

          <div className="facility-gallery reveal" ref={addReveal}>
            <div className="fac-card">
              <img
                src="https://images.unsplash.com/photo-1559302995-f1d6e557a524?q=80&w=600&auto=format&fit=crop"
                alt="Solar EPC site"
              />
              <div className="fac-overlay">
                <span className="fac-tag">Solar EPC</span>
                <div>
                  <h3
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 600,
                      marginBottom: 10,
                    }}
                  >
                    Complete Engineering &amp; Commissioning
                  </h3>
                  <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                    Engineering, procurement, construction, testing, and
                    commissioning delivered end-to-end.
                  </p>
                </div>
              </div>
            </div>

            <div className="fac-card">
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop"
                alt="Ground mounted solar plant"
              />
              <div className="fac-overlay">
                <span className="fac-tag">Ground-Mounted</span>
                <div>
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 600,
                      marginBottom: 10,
                    }}
                  >
                    Utility-Scale Solar Plants
                  </h3>
                  <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                    Large-scale installations for industrial facilities and
                    open-land projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="fac-card">
              <img
                src="https://images.unsplash.com/photo-1545209463-e2826691602c?q=80&w=600&auto=format&fit=crop"
                alt="Solar carport"
              />
              <div className="fac-overlay">
                <span className="fac-tag">Carports</span>
                <div>
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 600,
                      marginBottom: 10,
                    }}
                  >
                    Solar Carports &amp; Industrial Roofs
                  </h3>
                  <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                    Clean energy generation with practical parking and workspace
                    cover.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE WATTWORKS / WHAT SETS US APART ===================== */}
      <section className="apart-section">
        <div className="container">
          <div className="badge-center">
            <span className="badge-pill">Why Choose Wattworks Energies?</span>
          </div>
          <h2
            className="large-headline reveal"
            ref={addReveal}
            style={{ fontSize: "2.4rem" }}
          >
            We combine technical expertise, premium-quality components, and
            dedicated customer support to maximize your long-term savings.
          </h2>
          <div className="apart-grid reveal" ref={addReveal}>
            {WHY_US.map((item) => (
              <div className="apart-item" key={item}>
                <span className="apart-dot" />
                {item}
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-muted)",
              maxWidth: 760,
              margin: "40px auto 0",
            }}
          >
            Our commitment to quality, integrity, and customer satisfaction has
            made us a preferred solar partner for homes, businesses, industries,
            hospitals, educational institutions, housing societies, and
            commercial establishments.
          </p>
        </div>
      </section>

      {/* ===================== ALL SOLAR SERVICES (full list) ===================== */}
      <section className="all-services-section">
        <div className="container">
          <div className="badge-center">
            <span className="badge-pill">Our Solar Services</span>
          </div>
          <h2
            className="large-headline reveal"
            ref={addReveal}
            style={{ fontSize: "2.4rem" }}
          >
            Every Service You Need, Under One Roof
          </h2>
          <div className="all-services-grid reveal" ref={addReveal}>
            {ALL_SERVICES.map((s) => (
              <div className="all-service-card" key={s.name}>
                <h4>{s.name}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROJECTS GRID ===================== */}
      <section className="team-section" id="projects">
        <div className="container">
          <div className="badge-center">
            <span className="badge-pill">Project Experience</span>
          </div>
          <h2 className="large-headline reveal" ref={addReveal}>
            Notable Projects Delivered Across Three States
          </h2>

          <div className="team-grid reveal" ref={addReveal}>
            {PROJECTS.map((p) => (
              <div className="doc-profile-card" key={p.name}>
                <div className="status-indicator">
                  <div
                    className="status-dot"
                    style={{ background: p.dotColor }}
                  />
                  {p.status}
                </div>
                <div className="doc-image-frame">
                  <img src={p.img} alt={p.name} />
                </div>
                <h4
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    marginBottom: 4,
                  }}
                >
                  {p.name}
                </h4>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                    marginBottom: 15,
                  }}
                >
                  {p.location}
                </p>
                <hr
                  style={{
                    border: 0,
                    borderTop: "1px solid #e2e8f0",
                    marginBottom: 15,
                  }}
                />
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-main)",
                    fontWeight: 600,
                  }}
                >
                  Status: <span style={{ color: p.noteColor }}>{p.note}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="client-reviews">
        <div className="container">
          <div className="badge-center">
            <span className="badge-pill">Testimonials</span>
          </div>

          <div className="review-slider-wrapper reveal" ref={addReveal}>
            {REVIEWS.map((r, i) => (
              <div
                className={`review-card ${i === reviewIndex ? "active" : ""}`}
                key={r.name}
              >
                <img src={r.avatar} alt={r.name} className="review-avatar" />
                <p className="quote-text">&quot;{r.quote}&quot;</p>
                <div className="review-meta">
                  <h5>{r.name}</h5>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    {r.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-dots">
            {REVIEWS.map((_, i) => (
              <div
                key={i}
                onClick={() => setReviewIndex(i)}
                className={`dot ${i === reviewIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MARQUEE ===================== */}
  <section className="marquee-section">



  <div className="marquee-container">

    <div className="marquee-track">

      {[
        "Rooftop Solar",
        "Solar EPC",
        "Engineering Consultancy",
        "Energy Audits",
        "Ground Mounted Solar",
        "Solar Carports",
        "EV Charging",
        "Net Metering",
        "Solar Financing",
        "Operations & Maintenance",
        "Solar Water Pumps",
        "Heat Pumps",
      ]
        .concat([
          "Rooftop Solar",
          "Solar EPC",
          "Engineering Consultancy",
          "Energy Audits",
          "Ground Mounted Solar",
          "Solar Carports",
          "EV Charging",
          "Net Metering",
          "Solar Financing",
          "Operations & Maintenance",
          "Solar Water Pumps",
          "Heat Pumps",
        ])
        .map((item, index) => (
          <span key={index}>{item}</span>
        ))}

    </div>

  </div>

</section>

      {/* ===================== SERVICE SWITCHER ===================== */}
      <section className="dept-switcher-section">
        <div className="container">
          <div className="badge-center">
            <span className="badge-pill">Solutions by Need</span>
          </div>
          <h2 className="large-headline reveal" ref={addReveal}>
            Solar Ecosystems Custom Fitted To Your Energy Needs
          </h2>

          <div className="tab-pill-container reveal" ref={addReveal}>
            <button
              className={`tab-trigger ${activeTab === "rooftop" ? "active" : ""}`}
              onClick={() => setActiveTab("rooftop")}
            >
              Rooftop Solar
            </button>
            <button
              className={`tab-trigger ${activeTab === "epc" ? "active" : ""}`}
              onClick={() => setActiveTab("epc")}
            >
              Solar EPC
            </button>
            <button
              className={`tab-trigger ${activeTab === "ev" ? "active" : ""}`}
              onClick={() => setActiveTab("ev")}
            >
              EV Charging
            </button>
          </div>

          <div className="dept-display-panel reveal" ref={addReveal}>
            <div className="dept-panel-content active">
              <span
                className="badge-pill"
                style={{
                  background: dept.tagColor,
                  color: dept.tagText,
                  marginBottom: 20,
                  display: "inline-block",
                }}
              >
                {dept.badge}
              </span>
              <h3
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  marginBottom: 20,
                  letterSpacing: "-1px",
                }}
              >
                {dept.title}
              </h3>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: 30,
                }}
              >
                {dept.body}
              </p>
              <a href="https://wa.me/919845853002" className="btn-black">
                {dept.cta}{" "}
                <span
                  className="arrow-circle"
                  style={{
                    background: "var(--white)",
                    color: "var(--text-main)",
                  }}
                >
                  ↗
                </span>
              </a>
            </div>

            <div>
              <img
                src={dept.img}
                className="dept-display-image"
                alt={dept.title}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="badge-center">
            <span className="badge-pill">Common Questions</span>
          </div>
          <h2 className="large-headline reveal" ref={addReveal}>
            Everything You Need To Know About Going Solar With Wattworks
          </h2>

          <div className="faq-accordion-wrapper reveal" ref={addReveal}>
            {FAQS.map((item, i) => (
              <div
                className={`faq-item ${openFaq === i ? "open" : ""}`}
                key={item.q}
              >
                <button
                  className="faq-trigger"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <div className="faq-icon-circle">▼</div>
                </button>
                <div
                  className="faq-content"
                  style={{ maxHeight: openFaq === i ? "300px" : "0px" }}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MISSION / CLOSING CTA ===================== */}
      <section className="mission-section">
        <div className="container">
          <div className="badge-center">
            <span className="badge-pill">Our Mission</span>
          </div>
          <h2
            className="large-headline reveal"
            ref={addReveal}
            style={{ fontSize: "2.6rem" }}
          >
            Building a Cleaner and Greener Future
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-muted)",
              maxWidth: 760,
              margin: "0 auto 16px",
              lineHeight: 1.7,
            }}
          >
            At Wattworks Energies Pvt. Ltd., we believe clean energy is not just
            an investment — it is a commitment to a sustainable future. Our
            mission is to help businesses and homeowners harness the power of
            the sun through reliable, affordable, and high-performance solar
            solutions.
          </p>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-main)",
              fontWeight: 700,
              marginBottom: 36,
            }}
          >
            Make the switch today and start saving for the next 25 years.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="https://wa.me/919845853002" className="cta-pill-btn dark">
              Request Your Free Solar Consultation{" "}
              <span className="arrow-circle">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <Footer/>
     

      <style jsx global>{`
        :root {
          --primary: #0e2a3d;
          --primary-light: #1e88c7;
          --accent: #10b981;
          --bg-dark: #081b27;
          --bg-light: #f8fafc;
          --white: #ffffff;
          --text-main: #0f172a;
          --text-muted: #64748b;
          --font-display: "Segoe UI", system-ui, -apple-system, sans-serif;
          --curve-preset: cubic-bezier(0.25, 1, 0.5, 1);
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: var(--font-display);
          scroll-behavior: smooth;
        }
        body {
          background-color: var(--white);
          color: var(--text-main);
          overflow-x: hidden;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: var(--white);
        }
        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .reveal {
          opacity: 0;
          transform: translateY(50px);
          transition:
            opacity 0.8s var(--curve-preset),
            transform 0.8s var(--curve-preset);
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .site-header {
          position: absolute;
          top: 20px;
          left: 0;
          width: 100%;
          z-index: 100;
        }
        .nav-wrapper {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 100px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 10px 30px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
        }
        .nav-left {
          display: flex;
          gap: 12px;
        }
        .nav-pill {
          text-decoration: none;
          color: var(--white);
          font-size: 0.85rem;
          font-weight: 500;
          padding: 8px 18px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          transition: all 0.3s ease;
        }
        .nav-pill:hover,
        .nav-pill.active {
          background: var(--white);
          color: var(--primary);
        }
        .nav-center {
          position: relative;
        }
        .logo-curved-container {
          background: var(--white);
          padding: 15px 40px;
          border-radius: 0 0 35px 35px;
          margin-top: -12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          text-align: center;
          animation: pulseGlow 3s infinite;
        }
        .logo-curved-container a {
          text-decoration: none;
          font-weight: 800;
          font-size: 1.4rem;
          color: var(--text-main);
          letter-spacing: -0.5px;
        }
        .logo-curved-container span {
          display: block;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--text-muted);
        }
        .nav-right {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 20px;
        }
        .search-bar {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 8px 16px;
          border-radius: 50px;
          color: var(--white);
          font-size: 0.85rem;
          outline: none;
          width: 150px;
          transition: width 0.4s ease;
        }
        .search-bar::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        .search-bar:focus {
          width: 220px;
          background: rgba(255, 255, 255, 0.3);
        }
        .btn-black {
          background: var(--bg-dark);
          color: var(--white);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.3s ease;
        }
        .btn-black:hover {
          transform: scale(1.05);
        }

        .hero-canvas {
          margin: 20px;
          border-radius: 40px;
          background:
            linear-gradient(rgba(8, 27, 39, 0.45), rgba(8, 27, 39, 0.25)),
            url("https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2670&auto=format&fit=crop")
              center/cover no-repeat;
          min-height: 90vh;
          padding-top: 180px;
          color: var(--white);
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
        }
        .hero-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }
        .hero-content h1 {
          font-size: 4.5rem;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -2px;
          margin-bottom: 20px;
        }
        .hero-content p {
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto 40px;
          opacity: 0.9;
        }
        .cta-pill-btn {
          background: var(--white);
          color: var(--text-main);
          padding: 16px 36px;
          border-radius: 100px;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s var(--curve-preset);
        }
        .cta-pill-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        .arrow-circle {
          background: var(--bg-dark);
          color: var(--white);
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
        }
        .hero-floating-left {
          position: absolute;
          bottom: 40px;
          left: 40px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 20px;
          border-radius: 24px;
          max-width: 280px;
        }
        .team-avatars {
          display: flex;
          margin-bottom: 10px;
        }
        .team-avatars img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          border: 2px solid var(--white);
          margin-right: -10px;
          object-fit: cover;
        }
        .hero-floating-left p {
          font-size: 0.8rem;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.9);
        }
        .hero-floating-bottom-bar {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.9);
          color: var(--text-main);
          padding: 12px 30px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 15px;
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }
        .social-vertical-dock {
          position: absolute;
          right: 40px;
          bottom: 40px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .social-pill {
          background: rgba(255, 255, 255, 0.8);
          color: var(--text-main);
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          transition: all 0.3s ease;
          text-align: center;
        }
        .social-pill:hover {
          background: var(--white);
          transform: translateX(-5px);
        }

        .intro-section {
          padding: 100px 0;
          background: var(--white);
        }
        .badge-center {
          text-align: center;
          margin-bottom: 30px;
        }
        .badge-pill {
          background: var(--bg-light);
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid #e2e8f0;
        }
        .large-headline {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          letter-spacing: -1.5px;
          max-width: 900px;
          margin: 0 auto 80px;
          line-height: 1.2;
        }
        .split-grid-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr 0.8fr;
          gap: 30px;
          align-items: flex-start;
        }
        .left-info-block h3 {
          font-size: 1.8rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 20px;
        }
        .left-info-block p {
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .asym-card {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          height: 400px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04);
          transition: transform 0.4s var(--curve-preset);
        }
        .asym-card:hover {
          transform: translateY(-10px);
        }
        .asym-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(8, 27, 39, 0.75) 20%,
            transparent 60%
          );
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: var(--white);
        }
        .card-overlay h4 {
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .card-tag {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .card-arrow-btn {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: var(--white);
          color: var(--text-main);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          transition: background 0.3s ease;
        }
        .asym-card:hover .card-arrow-btn {
          background: var(--primary-light);
          color: var(--white);
        }

        .facilities-section {
          padding: 80px 0;
          background: var(--bg-light);
        }
        .partners-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 30px;
          padding: 40px 0;
          border-bottom: 1px solid #e2e8f0;
          opacity: 0.6;
        }
        .partners-bar span {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 1px;
        }

        /* Benefits of Going Solar */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 1200px;
          margin: auto;
        }

        .benefit-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 30px;
          padding: 34px;
          min-height: 280px;

          display: flex;
          flex-direction: column;

          transition: 0.35s;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .benefit-card::before {
          content: "";
          position: absolute;
          right: -40px;
          top: -40px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: #f3f4f6;
        }

        .benefit-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.08);
        }

        .benefit-icon {
          width: 70px;
          height: 70px;
          border-radius: 22px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 30px;
        }

        .benefit-value {
          font-size: 54px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 12px;
          letter-spacing: -2px;
        }

        .benefit-card h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .benefit-card p {
          color: #64748b;
          line-height: 1.7;
          font-size: 15px;
          margin-top: auto;
        }

        @media (max-width: 992px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
        .check-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--accent);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
        }

        /* Industries grid */
        .industries-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
        }
        .industry-chip {
          background: var(--white);
          border: 1px solid #e2e8f0;
          border-radius: 50px;
          padding: 10px 22px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
          transition: all 0.3s var(--curve-preset);
        }
        .industry-chip:hover {
          background: var(--bg-dark);
          color: var(--white);
          border-color: var(--bg-dark);
          transform: translateY(-2px);
        }

        /* What Sets Us Apart */
        .apart-section {
          padding: 100px 0;
          background: var(--bg-light);
        }
        .apart-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .apart-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--white);
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 18px 20px;
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-main);
        }
        .apart-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--primary-light);
          flex-shrink: 0;
        }

        /* All services list */
        .all-services-section {
          padding: 100px 0;
          background: var(--white);
        }
        .all-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .all-service-card {
          background: var(--bg-light);
          border: 1px solid #e2e8f0;
          border-radius: 22px;
          padding: 28px;
          transition: all 0.4s var(--curve-preset);
        }
        .all-service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(14, 42, 61, 0.06);
          background: var(--white);
        }
        .all-service-card h4 {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--text-main);
        }
        .all-service-card p {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.55;
        }

        /* Mission / closing CTA */
        .mission-section {
          padding: 110px 0;
          background: var(--bg-light);
        }
        .cta-pill-btn.dark {
          background: var(--bg-dark);
          color: var(--white);
        }
        .cta-pill-btn.dark .arrow-circle {
          background: var(--white);
          color: var(--bg-dark);
        }
        .cta-pill-btn.dark:hover {
          box-shadow: 0 20px 40px rgba(8, 27, 39, 0.25);
        }

        @media (max-width: 768px) {
          .benefits-grid,
          .apart-grid,
          .all-services-grid {
            grid-template-columns: 1fr;
          }
        }

        footer {
          background: var(--white);
          padding: 100px 0 40px;
        }
        .footer-giant-text {
          font-size: 7vw;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -4px;
          line-height: 0.9;
          text-align: center;
          margin-bottom: 60px;
          background: linear-gradient(to bottom, var(--text-main) 60%, #e2e8f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .footer-bottom-grid {
          display: grid;
          grid-template-columns: 2fr repeat(3, 1fr);
          gap: 40px;
          padding-top: 40px;
          border-top: 1px solid #e2e8f0;
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .footer-col h5 {
          color: var(--text-main);
          font-size: 1rem;
          margin-bottom: 15px;
        }
        .footer-col ul {
          list-style: none;
        }
        .footer-col ul li {
          margin-bottom: 10px;
        }
        .footer-col ul li a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-col ul li a:hover {
          color: var(--primary-light);
        }

        @keyframes pulseGlow {
          0%,
          100% {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          }
          50% {
            box-shadow: 0 10px 30px rgba(30, 136, 199, 0.15);
          }
        }

        @media (max-width: 1024px) {
          .split-grid-layout {
            grid-template-columns: 1fr;
          }
          .hero-content h1 {
            font-size: 3.2rem;
          }
          .nav-left,
          .nav-right {
            display: none;
          }
          .nav-wrapper {
            grid-template-columns: 1fr;
            justify-content: center;
          }
        }

        .facility-showcase {
          padding: 100px 0;
          background: var(--white);
        }
        .facility-flex-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 50px;
          flex-wrap: wrap;
          gap: 20px;
        }
        .facility-gallery {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 25px;
        }
        .fac-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          height: 480px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.03);
          transition: all 0.4s var(--curve-preset);
        }
        .fac-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .fac-card:hover img {
          transform: scale(1.05);
        }
        .fac-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(8, 27, 39, 0.85) 10%,
            rgba(8, 27, 39, 0.2) 60%,
            transparent
          );
          padding: 35px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: var(--white);
        }
        .fac-tag {
          align-self: flex-start;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .team-section {
          padding: 100px 0;
          background: var(--bg-light);
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }
        .doc-profile-card {
          background: var(--white);
          border-radius: 32px;
          padding: 24px;
          border: 1px solid #e2e8f0;
          position: relative;
          transition: all 0.4s var(--curve-preset);
        }
        .doc-profile-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(14, 42, 61, 0.06);
        }
        .doc-image-frame {
          height: 260px;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 20px;
          background: #cbd5e1;
        }
        .doc-image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .status-indicator {
          position: absolute;
          top: 40px;
          right: 40px;
          background: var(--white);
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
        .status-dot {
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
        }

        .client-reviews {
          padding: 120px 0;
          background: var(--white);
          position: relative;
        }
        .review-slider-wrapper {
          max-width: 850px;
          margin: 0 auto;
          position: relative;
          min-height: 280px;
        }
        .review-card {
          background: var(--white);
          border: 1px solid #e2e8f0;
          border-radius: 32px;
          padding: 50px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.02);
          text-align: center;
          position: absolute;
          width: 100%;
          opacity: 0;
          transform: scale(0.95) translateY(20px);
          transition: all 0.6s var(--curve-preset);
          pointer-events: none;
        }
        .review-card.active {
          opacity: 1;
          transform: scale(1) translateY(0);
          pointer-events: auto;
        }
        .review-avatar {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          margin: 0 auto 20px;
          object-fit: cover;
          border: 3px solid var(--bg-light);
        }
        .quote-text {
          font-size: 1.4rem;
          font-weight: 500;
          line-height: 1.6;
          color: var(--text-main);
          margin-bottom: 25px;
        }
        .review-meta h5 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--primary);
        }
        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }
        .dot {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          border-radius: 50%;
          cursor: pointer;
          transition: 0.3s;
        }
        .dot.active {
          background: var(--primary-light);
        }

        .marquee-container {
          overflow: hidden;
          padding: 40px 0;
          background: var(--white);
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          white-space: nowrap;
        }
        .marquee-track {
          display: flex;
          gap: 80px;
          animation: smoothMarquee 25s linear infinite;
        }
        .marquee-track span {
          font-size: 1.5rem;
          font-weight: 800;
          color: #94a3b8;
          text-transform: lowercase;
          letter-spacing: -0.5px;
        }
        @keyframes smoothMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .dept-switcher-section {
          padding: 120px 0;
          background: var(--bg-light);
        }
        .tab-pill-container {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }
        .tab-trigger {
          background: var(--white);
          border: 1px solid #e2e8f0;
          padding: 12px 26px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s var(--curve-preset);
        }
        .tab-trigger.active,
        .tab-trigger:hover {
          background: var(--bg-dark);
          color: var(--white);
          border-color: var(--bg-dark);
          transform: translateY(-2px);
        }
        .dept-display-panel {
          background: var(--white);
          border-radius: 32px;
          padding: 40px;
          border: 1px solid #e2e8f0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          min-height: 400px;
        }
        .dept-display-image {
          width: 100%;
          height: 350px;
          border-radius: 24px;
          object-fit: cover;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.04);
        }

        .faq-section {
          padding: 120px 0;
          background: var(--white);
        }
        .faq-accordion-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          border-bottom: 1px solid #e2e8f0;
          padding: 24px 0;
        }
        .faq-trigger {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-main);
          cursor: pointer;
          padding: 10px 0;
        }
        .faq-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          transition: transform 0.4s var(--curve-preset);
        }
        .faq-item.open .faq-icon-circle {
          transform: rotate(180deg);
          background: var(--bg-dark);
          color: var(--white);
        }
        .faq-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s var(--curve-preset);
        }
        .faq-content p {
          padding: 15px 0 5px;
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .dept-display-panel {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .dept-display-image {
            height: 240px;
          }
          .facility-gallery {
            grid-template-columns: 1fr;
          }
          .footer-bottom-grid {
            grid-template-columns: 1fr;
          }
          .footer-giant-text {
            font-size: 12vw;
          }
        }

        /* =========================
   HERO
========================= */

        .hero-canvas {
          position: relative;
          overflow: hidden;

          min-height: 100vh;

          padding: 140px 24px 60px;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          margin: 16px;

          border-radius: 32px;

          background:
            linear-gradient(rgba(8, 27, 39, 0.55), rgba(8, 27, 39, 0.45)),
            url("https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2600&auto=format&fit=crop")
              center/cover no-repeat;
        }

        .hero-content {
          max-width: 900px;
          width: 100%;

          text-align: center;

          z-index: 5;
        }

        .hero-content h1 {
          font-size: clamp(2.4rem, 7vw, 5.5rem);
          line-height: 1.05;
          font-weight: 800;
          color: white;
          letter-spacing: -2px;
        }

        .hero-content p {
          margin: 28px auto 36px;

          max-width: 700px;

          font-size: clamp(1rem, 2vw, 1.25rem);

          line-height: 1.7;

          color: rgba(255, 255, 255, 0.9);
        }

        .cta-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 14px;

          padding: 16px 28px;

          border-radius: 999px;

          background: white;
          color: #0f172a;

          font-weight: 700;

          transition: 0.35s;
        }

        .cta-pill-btn:hover {
          transform: translateY(-5px);
        }

        .arrow-circle {
          width: 34px;
          height: 34px;

          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: 999px;

          background: #081b27;
          color: white;
        }

        /* =========================
   Floating Card
========================= */

        .hero-floating-left {
          position: absolute;

          left: 32px;
          bottom: 32px;

          width: 300px;

          background: rgba(255, 255, 255, 0.12);

          backdrop-filter: blur(18px);

          border: 1px solid rgba(255, 255, 255, 0.18);

          border-radius: 28px;

          padding: 22px;

          z-index: 5;
        }

        .team-avatars {
          display: flex;
          margin-bottom: 14px;
        }

        .team-avatars img {
          width: 44px;
          height: 44px;

          border-radius: 50%;

          object-fit: cover;

          border: 3px solid white;

          margin-right: -10px;
        }

        .hero-floating-left p {
          color: white;

          font-size: 0.95rem;

          line-height: 1.6;
        }

        /* =========================
   Bottom Badge
========================= */

        .hero-floating-bottom-bar {
          position: sticky;

          bottom: 35px;

          left: 50%;

          transform: translateX(-50%);

          background: white;

          border-radius: 999px;

          padding: 14px 28px;

          font-weight: 700;

          font-size: 0.95rem;

          white-space: nowrap;

          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);

          z-index: 5;
        }

        /* =========================
   Social
========================= */

        .social-vertical-dock {
          position: absolute;

          right: 32px;
          bottom: 32px;

          display: flex;
          flex-direction: column;

          gap: 12px;

          z-index: 5;
        }

        .social-pill {
          padding: 10px 20px;

          background: rgba(255, 255, 255, 0.88);

          border-radius: 999px;

          text-decoration: none;

          color: #0f172a;

          font-weight: 600;

          transition: 0.3s;
        }

        .social-pill:hover {
          background: white;

          transform: translateX(-6px);
        }

        /* ===================================
            TABLET
=================================== */

        @media (max-width: 1024px) {
          .hero-canvas {
            padding-top: 160px;
          }

          .hero-content {
            max-width: 700px;
          }

          .hero-floating-bottom-bar {
            position: static;

            transform: none;

            margin-top: 40px;
          }

          .hero-floating-left {
            position: static;

            margin-top: 35px;

            width: 100%;
            max-width: 420px;
          }

          .social-vertical-dock {
            position: static;

            flex-direction: row;

            justify-content: center;

            margin-top: 28px;
          }
        }

        /* ===================================
            MOBILE
=================================== */

        @media (max-width: 768px) {
          .hero-canvas {
            padding: 120px 20px 40px;

            margin: 10px;

            border-radius: 24px;

            min-height: auto;
          }

          .hero-content h1 {
            font-size: clamp(2rem, 11vw, 3.5rem);

            line-height: 1.08;
          }

          .hero-content p {
            font-size: 1rem;

            margin: 20px auto 28px;
          }

          .cta-pill-btn {
            width: 100%;

            justify-content: center;

            padding: 16px;
          }

          .hero-floating-left {
            margin-top: 28px;

            padding: 18px;
          }

          .hero-floating-bottom-bar {
            width: 100%;

            text-align: center;

            white-space: normal;

            font-size: 0.85rem;

            padding: 14px 18px;

            margin-top: 22px;
          }

          .social-vertical-dock {
            width: 100%;

            display: grid;

            grid-template-columns: repeat(3, 1fr);

            gap: 10px;

            margin-top: 20px;
          }

          .social-pill {
            text-align: center;

            padding: 12px;
          }
        }

        .hero-bottom {
          position: absolute;
          bottom: 30px;
          left: 30px;
          right: 30px;

          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .hero-bottom {
            position: static;
            margin-top: 40px;
            flex-direction: column;
            align-items: center;
          }
        }

        .mobile-nav {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-wrapper {
            display: none;
          }

          .mobile-nav {
            display: flex;
          }
        }

        /* Hide mobile nav on desktop */
        .mobile-nav {
          display: none;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .site-header {
            top: 12px;
            padding: 0 14px;
          }

          .nav-wrapper {
            display: none;
          }

          .mobile-nav {
            display: flex;

            justify-content: space-between;
            align-items: center;

            background: rgba(255, 255, 255, 0.15);

            backdrop-filter: blur(18px);

            border: 1px solid rgba(255, 255, 255, 0.18);

            border-radius: 20px;

            padding: 14px 18px;

            color: white;
          }

          .mobile-logo h2 {
            font-size: 30px;

            font-weight: 800;

            line-height: 1;

            letter-spacing: -1px;

            margin: 0;
          }

          .mobile-logo span {
            display: block;

            margin-top: 6px;

            font-size: 11px;

            letter-spacing: 5px;

            opacity: 0.8;
          }

          .menu-btn {
            width: 52px;
            height: 52px;

            border: none;

            border-radius: 16px;

            background: white;

            color: #0f172a;

            font-size: 28px;

            cursor: pointer;

            display: flex;

            justify-content: center;
            align-items: center;

            transition: 0.3s;
          }

          .menu-btn:hover {
            transform: rotate(90deg);

            background: #10b981;

            color: white;
          }
        }

        .mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .mobile-menu {
            display: flex;
            flex-direction: column;
            gap: 18px;

            margin-top: 14px;

            padding: 20px;

            border-radius: 20px;

            background: white;

            backdrop-filter: blur(20px);
          }

          .mobile-menu a {
            color: black;
            text-decoration: none;
            font-weight: 600;
            text-align: center;
          }

          .mobile-quote-btn {
            background: white;
            color: #0f172a !important;

            text-align: center;

            padding: 14px;

            border-radius: 12px;
          }
        }

        .marquee-section{
    padding:80px 0;
    background:#fff;
    overflow:hidden;
}

.marquee-heading{
    text-align:center;
    margin-bottom:40px;
}

.section-badge{
    display:inline-block;
    padding:10px 22px;
    border-radius:999px;
    border:1px solid #e5e7eb;
    background:#fff;
    font-size:13px;
    font-weight:600;
    letter-spacing:2px;
    text-transform:uppercase;
    box-shadow:0 10px 30px rgba(0,0,0,.06);
}

.marquee-heading h2{
    margin-top:22px;
    font-size:52px;
    font-weight:800;
    line-height:1.1;
    color:#0f172a;
}

.marquee-container{
    position:relative;
    overflow:hidden;
    white-space:nowrap;
}

.marquee-track{
    display:flex;
    width:max-content;
    animation:marquee 30s linear infinite;
}

.marquee-track span{
    margin-right:18px;
    padding:16px 30px;
    border-radius:999px;
    background:#0f172a;
    color:#fff;
    font-weight:600;
    font-size:16px;
    white-space:nowrap;
    box-shadow:0 12px 30px rgba(15,23,42,.12);
    transition:.3s;
}

.marquee-track span:hover{
    background:#1e293b;
    transform:translateY(-4px);
}

@keyframes marquee{
    from{
        transform:translateX(0);
    }
    to{
        transform:translateX(-50%);
    }
}

@media(max-width:768px){

    .marquee-section{
        padding:60px 0;
    }

    .marquee-heading h2{
        font-size:36px;
    }

    .marquee-track span{
        padding:12px 22px;
        font-size:14px;
    }

    .marquee-container{
        margin-top:20px;
    }

}

      `}</style>
    </>
  );
}
