"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Wallet,
  BatteryCharging,
  TrendingUp,
  Leaf,
  ShieldCheck,
  Building2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/app/(component)/Navbar";
import Footer from "@/app/(component)/Footer";
import { UserRound } from "lucide-react";
// import "./animateHome.css";

/* =========================================================
   WattWorks Energies — Solar Landing Page (Next.js / JSX)
   Cinematic GSAP edition.

   Layered on top of the original structure/content:
   - Hero: line-mask title reveal, cursor-reactive spotlight,
     scroll parallax on the background image.
   - Scroll choreography: staggered wave-reveals per section
     driven by ScrollTrigger (replaces IntersectionObserver).
   - 3D tilt on cards (benefits, services, projects, about).
   - Magnetic CTA buttons and tab triggers.
   - Animated counters on the benefit stats.
   - Velocity-reactive skew on the infinite marquee.
   - GSAP-eased FAQ accordion + testimonial crossfade.
   - Soft ambient light orbs for depth.

   Requires: npm install gsap
   ========================================================= */

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
    color: "#3b82f6",
  },
  {
    icon: BatteryCharging,
    value: "25+",
    title: "Years",
    desc: "Reliable power generation",
    color: "#10b981",
  },
  {
    icon: TrendingUp,
    value: "ROI",
    title: "High Returns",
    desc: "Excellent long-term investment",
    color: "#f59e0b",
  },
  {
    icon: Leaf,
    value: "GREEN",
    title: "Eco Friendly",
    desc: "Reduce carbon emissions",
    color: "#22c55e",
  },
  {
    icon: ShieldCheck,
    value: "24/7",
    title: "Energy Security",
    desc: "Protection from tariff hikes",
    color: "#6366f1",
  },
  {
    icon: Building2,
    value: "VALUE",
    title: "Property Boost",
    desc: "Increase property value",
    color: "#0ea5e9",
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
    img: "./others/RCC_Floor_Mounted_Structure-5KW.jpeg",
    name: "RCC Floor Mounted Structure - 5 KW",
    location: "Satara, Maharashtra",
    note: "Live & Generating",
    noteColor: "#3b82f6",
  },
  {
    status: "Completed",
    dotColor: "#64748b",
    img: "./others/RCC_Roof_Elevated_Structure-70_KW.jpeg",
    name: "RCC Roof Elevated Structure - 70 KW",
    location: "Chakan, Maharashtra",
    note: "Live & Generating",
    noteColor: "#64748b",
  },
  {
    status: "Completed",
    dotColor: "#10b981",
    img: "./others/Residential_Rooftop_Structure-3_KW.jpeg",
    name: "Residential Rooftop Structure - 3 KW",
    location: "Pune, Maharashtra",
    note: "Live & Generating",
    noteColor: "#3b82f6",
  },
  {
    status: "Completed",
    dotColor: "#10b981",
    img: "./others/rooftop5.jpeg",
    name: "RCC Rooftop Satara - 210 KW",
    location: "Khatav, Satara",
    note: "Live & Generating",
    noteColor: "#3b82f6",
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
    role: "Project Manager, WattWorks Energies",
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

export default function WattWorksLandingPage() {
  const [activeTab, setActiveTab] = useState("rooftop");
  const [openFaq, setOpenFaq] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);

  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const heroGlowRef = useRef(null);
  const benefitValueRefs = useRef([]);
  const faqRefs = useRef([]);
  const faqFirstRun = useRef(true);
  const reviewRefs = useRef([]);
  const deptContentRef = useRef(null);
  const deptImageRef = useRef(null);

  const dept = DEPT_CONTENT[activeTab];

  /* ---------- Respect reduced motion by fast-forwarding, not disabling ---------- */
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.globalTimeline.timeScale(40);
    }
  }, []);

  /* ---------- Hero entrance choreography + scroll parallax ---------- */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-title-line span", {
        yPercent: 130,
        rotate: 4,
        opacity: 0,
        duration: 1.1,
        stagger: 0.14,
      })
        .from(".hero-content p", { y: 26, opacity: 0, duration: 0.9 }, "-=0.55")
        .from(
          ".hero-content .cta-pill-btn",
          { y: 18, opacity: 0, scale: 0.92, duration: 0.7 },
          "-=0.5",
        )
        .from(
          ".hero-floating-left",
          { x: -50, opacity: 0, duration: 0.8 },
          "-=0.55",
        )
        .from(
          ".hero-floating-bottom-bar",
          { y: 24, opacity: 0, duration: 0.7 },
          "-=0.5",
        )
        .from(
          ".social-vertical-dock .social-pill",
          { x: 34, opacity: 0, stagger: 0.08, duration: 0.6 },
          "-=0.5",
        );

      gsap.to(".hero-canvas", {
        backgroundPosition: "50% 32%",
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-canvas",
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  /* ---------- Cursor-reactive hero spotlight + a whisper of 3D on the title ---------- */
  useEffect(() => {
    const hero = heroRef.current;
    const glow = heroGlowRef.current;
    if (!hero || !glow) return;

    gsap.set(glow, { xPercent: -50, yPercent: -50 });
    const moveX = gsap.quickTo(glow, "x", { duration: 0.5, ease: "power3" });
    const moveY = gsap.quickTo(glow, "y", { duration: 0.5, ease: "power3" });
    const tiltTitle = gsap.quickTo(".hero-content h1", "rotationY", {
      duration: 0.9,
      ease: "power3",
    });

    const handler = (e) => {
      const rect = hero.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      moveX(px);
      moveY(py);
      tiltTitle((px / rect.width - 0.5) * 5);
    };
    hero.addEventListener("mousemove", handler);
    return () => hero.removeEventListener("mousemove", handler);
  }, []);

  /* ---------- Scroll-triggered reveals (single elements + grid waves) ---------- */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 56 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      [
        ".benefits-grid",
        ".industries-grid",
        ".apart-grid",
        ".all-services-grid",
        ".team-grid",
      ].forEach((sel) => {
        const grid = document.querySelector(sel);
        if (!grid) return;
        gsap.fromTo(
          grid.children,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: grid, start: "top 85%" },
          },
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  /* ---------- 3D tilt for cards ---------- */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".tilt-card");
      const cleanups = [];
      cards.forEach((card) => {
        const rx = gsap.quickTo(card, "rotationX", {
          duration: 0.5,
          ease: "power3",
        });
        const ry = gsap.quickTo(card, "rotationY", {
          duration: 0.5,
          ease: "power3",
        });
        const lift = gsap.quickTo(card, "z", { duration: 0.5, ease: "power3" });
        const onMove = (e) => {
          const rect = card.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          ry(px * 12);
          rx(-py * 12);
          lift(24);
        };
        const onLeave = () => {
          rx(0);
          ry(0);
          lift(0);
        };
        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        });
      });
      return () => cleanups.forEach((fn) => fn());
    }, pageRef);
    return () => ctx.revert();
  }, []);

  /* ---------- Magnetic CTAs & tabs ---------- */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const magnets = gsap.utils.toArray(
        ".cta-pill-btn, .btn-black, .tab-trigger",
      );
      const cleanups = [];
      magnets.forEach((btn) => {
        const mx = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
        const my = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });
        const onMove = (e) => {
          const rect = btn.getBoundingClientRect();
          mx((e.clientX - rect.left - rect.width / 2) * 0.28);
          my((e.clientY - rect.top - rect.height / 2) * 0.35);
        };
        const onLeave = () => {
          mx(0);
          my(0);
        };
        btn.addEventListener("mousemove", onMove);
        btn.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          btn.removeEventListener("mousemove", onMove);
          btn.removeEventListener("mouseleave", onLeave);
        });
      });
      return () => cleanups.forEach((fn) => fn());
    }, pageRef);
    return () => ctx.revert();
  }, []);

  /* ---------- Ambient floating light orbs ---------- */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".ambient-orb").forEach((orb, i) => {
        gsap.to(orb, {
          x: () => gsap.utils.random(-70, 70),
          y: () => gsap.utils.random(-50, 50),
          duration: () => gsap.utils.random(7, 12),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.4,
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  /* ---------- Marquee: velocity-reactive skew on scroll ---------- */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".marquee-track").forEach((track) => {
        ScrollTrigger.create({
          trigger: track,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const skew = gsap.utils.clamp(-10, 10, self.getVelocity() / -280);
            gsap.to(track, {
              skewX: skew,
              duration: 0.5,
              ease: "power3.out",
              overwrite: true,
            });
          },
        });
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  /* ---------- Benefit stat counters ---------- */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      BENEFITS.forEach((b, i) => {
        const el = benefitValueRefs.current[i];
        if (!el) return;
        const match = b.value.match(/\d+/);
        if (match) {
          const num = parseInt(match[0], 10);
          const suffix = b.value.replace(match[0], "");
          const counter = { val: 0 };
          gsap.to(counter, {
            val: num,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
            onUpdate: () => {
              el.textContent = Math.round(counter.val) + suffix;
            },
          });
        } else {
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.6 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.7,
              ease: "back.out(2)",
              scrollTrigger: { trigger: el, start: "top 85%" },
            },
          );
        }
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  /* ---------- Testimonial crossfade + autoplay ---------- */
  useEffect(() => {
    REVIEWS.forEach((_, i) => {
      const el = reviewRefs.current[i];
      if (!el) return;
      if (i === reviewIndex) {
        gsap.fromTo(
          el,
          { autoAlpha: 0, scale: 0.94, y: 26 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" },
        );
      } else {
        gsap.to(el, {
          autoAlpha: 0,
          scale: 0.94,
          y: -14,
          duration: 0.5,
          ease: "power2.in",
        });
      }
    });
  }, [reviewIndex]);

  useEffect(() => {
    const t = setInterval(
      () => setReviewIndex((i) => (i + 1) % REVIEWS.length),
      6000,
    );
    return () => clearInterval(t);
  }, []);

  /* ---------- FAQ accordion (GSAP-eased height) ---------- */
  useLayoutEffect(() => {
    FAQS.forEach((_, i) => {
      const el = faqRefs.current[i];
      if (!el) return;
      const isOpen = openFaq === i;
      gsap.to(el, {
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        duration: faqFirstRun.current ? 0 : isOpen ? 0.5 : 0.35,
        ease: isOpen ? "power3.out" : "power3.in",
      });
    });
    faqFirstRun.current = false;
  }, [openFaq]);

  /* ---------- Department switcher: clip-path reveal on tab change ---------- */
  useEffect(() => {
    gsap.fromTo(
      deptContentRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
    );
    gsap.fromTo(
      deptImageRef.current,
      {
        opacity: 0,
        scale: 1.06,
        clipPath: "inset(10% 10% 10% 10% round 24px)",
      },
      {
        opacity: 1,
        scale: 1,
        clipPath: "inset(0% 0% 0% 0% round 24px)",
        duration: 0.75,
        ease: "power3.out",
      },
    );
  }, [activeTab]);

  return (
    <div className="ww-root" ref={pageRef}>
      {/* ===================== HEADER ===================== */}
      <Navbar theme="dark" />

      {/* ===================== HERO ===================== */}
      <section className="hero-canvas" id="home" ref={heroRef}>
        <div className="hero-spotlight" ref={heroGlowRef} />

        <div className="hero-content">
          <h1>
            <span className="hero-title-line">
              <span>Switch to Solar.</span>
            </span>
            <span className="hero-title-line">
              <span>Power a Sustainable Tomorrow.</span>
            </span>
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
            {/* <div className="team-avatars">
              <div className="user-avatar">
                <UserRound size={22} />
              </div>
              <div className="user-avatar">
                <UserRound size={22} />
              </div>
              <div className="user-avatar">
                <UserRound size={22} />
              </div>
            </div> */}
            <p>
              Our experienced EPC team pairs technical expertise with dedicated
              after-sales support, since 2020.
            </p>
          </div>

          {/* <div className="hero-floating-bottom-bar">
            <span style={{ color: "var(--accent)" }}>●</span> LEADING SOLAR
            EXCELLENCE WITH WattWorks
          </div> */}

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
        <div
          className="ambient-orb"
          style={{
            top: "5%",
            left: "4%",
            width: 320,
            height: 320,
            background:
              "radial-gradient(circle, rgba(30,136,199,0.22), transparent 70%)",
          }}
        />
        <div
          className="ambient-orb"
          style={{
            bottom: "0%",
            right: "6%",
            width: 260,
            height: 260,
            background:
              "radial-gradient(circle, rgba(16,185,129,0.18), transparent 70%)",
          }}
        />
        <div className="container">
          <div className="badge-center">
            <span className="badge-pill">Let's know us ➔</span>
          </div>
          <h2 className="large-headline reveal">
            Explore Options, About WattWorks, Your Energy Savings, Our Priority
          </h2>

          <div className="split-grid-layout reveal">
            <div className="left-info-block">
              <span
                className=" text-4xl font-bold border border-gray-400 rounded-4xl p-4 "
                style={{ marginBottom: 15, display: "inline-block" }}
              >
                About Us
              </span>
              <h3>
                WattWorks Energies Private Limited. is a trusted solar energy
                company providing end-to-end solar power solutions since 2020.
              </h3>
              <p>
                We deliver residential, commercial, industrial, institutional,
                and utility-scale projects across Maharashtra, Karnataka, and
                Goa — reducing electricity costs and contributing to a greener
                future.
              </p>
              <a href="./about" className="btn-black">
                About Us{" "}
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

            <div className="asym-card tilt-card">
              <img
                src="./others/rooftop2.jpeg"
                alt="Rooftop solar installation"
              />
              <div className="card-overlay">
                <span className="card-tag text-black">Rooftop System</span>
                <h4>
                  A versatile rooftop solution offering a wide range of solar
                  capacities
                </h4>
              </div>
            </div>

            <div className="asym-card tilt-card">
              <img src="./others/rooftop5.jpeg" alt="Industrial solar plant" />
              <div className="card-overlay">
                <span className="card-tag text-black">Industrial Plant</span>
                <h4>
                  High-capacity systems built for factories and warehouses
                </h4>
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
          <h2 className="large-headline reveal" style={{ marginBottom: 20 }}>
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
          <div className="benefits-grid reveal">
            {BENEFITS.map((item, i) => {
              const Icon = item.icon;

              return (
                <div className="benefit-card tilt-card" key={item.title}>
                  <div
                    className="benefit-icon"
                    style={{ background: `${item.color}15` }}
                  >
                    <Icon size={30} strokeWidth={2.3} color={item.color} />
                  </div>

                  <h2
                    className="benefit-value"
                    style={{ color: item.color }}
                    ref={(el) => (benefitValueRefs.current[i] = el)}
                  >
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
            style={{ fontSize: "2.2rem", marginBottom: 40 }}
          >
            Customized Solar Solutions Across Every Sector
          </h2>
          <div className="industries-grid reveal">
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
          <div className="facility-flex-header reveal">
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

          <div className="facility-gallery reveal">
            <div className="fac-card tilt-card">
              <img src="./others/ai_rooftop.jpeg" alt="Solar EPC site" />
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

            <div className="fac-card tilt-card">
              <img
                src="./others/rooftop3.jpeg"
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

            <div className="fac-card tilt-card">
              <img src="./others/rooftop4.jpeg" alt="Solar carport" />
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

      {/* ===================== WHY CHOOSE WattWorks ===================== */}
      <section className="apart-section">
        <div className="container">
          <div className="badge-center">
            <span className="badge-pill">Why Choose WattWorks Energies?</span>
          </div>
          <h2 className="large-headline reveal" style={{ fontSize: "2.4rem" }}>
            We combine technical expertise, premium-quality components, and
            dedicated customer support to maximize your long-term savings.
          </h2>
          <div className="apart-grid reveal">
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

      {/* ===================== ALL SOLAR SERVICES ===================== */}
      <section className="all-services-section">
        <div className="container">
          <div className="badge-center">
            <span className="badge-pill">Our Solar Services</span>
          </div>
          <h2 className="large-headline reveal" style={{ fontSize: "2.4rem" }}>
            Every Service You Need, Under One Roof
          </h2>
          <div className="all-services-grid reveal">
            {ALL_SERVICES.map((s) => (
              <div className="all-service-card tilt-card" key={s.name}>
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
          <h2 className="large-headline reveal">
            Notable Projects Delivered Across Three States
          </h2>

          <div className="team-grid reveal">
            {PROJECTS.map((p) => (
              <div className="doc-profile-card tilt-card" key={p.name}>
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
                {/* <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.85rem",
                    marginBottom: 15,
                  }}
                >
                  {p.location}
                </p> */}
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

          <div className="review-slider-wrapper reveal">
            {REVIEWS.map((r, i) => (
              <div
                className="review-card"
                key={r.name}
                ref={(el) => (reviewRefs.current[i] = el)}
                style={{ visibility: i === 0 ? "visible" : "hidden" }}
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
        <div
          className="ambient-orb"
          style={{
            top: "8%",
            right: "6%",
            width: 300,
            height: 300,
            background:
              "radial-gradient(circle, rgba(245,158,11,0.16), transparent 70%)",
          }}
        />
        <div className="container">
          <div className="badge-center">
            <span className="badge-pill">Solutions by Need</span>
          </div>
          <h2 className="large-headline reveal">
            Solar Ecosystems Custom Fitted To Your Energy Needs
          </h2>

          <div className="tab-pill-container reveal">
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

          <div className="dept-display-panel reveal">
            <div className="dept-panel-content active" ref={deptContentRef}>
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
                ref={deptImageRef}
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
          <h2 className="large-headline reveal">
            Everything You Need To Know About Going Solar With WattWorks
          </h2>

          <div className="faq-accordion-wrapper reveal">
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
                  ref={(el) => (faqRefs.current[i] = el)}
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
        <div
          className="ambient-orb"
          style={{
            top: "10%",
            left: "10%",
            width: 340,
            height: 340,
            background:
              "radial-gradient(circle, rgba(16,185,129,0.18), transparent 70%)",
          }}
        />
        <div
          className="ambient-orb"
          style={{
            bottom: "5%",
            right: "8%",
            width: 260,
            height: 260,
            background:
              "radial-gradient(circle, rgba(30,136,199,0.2), transparent 70%)",
          }}
        />
        <div className="container">
          <div className="badge-center">
            <span className="badge-pill">Our Mission</span>
          </div>
          <h2 className="large-headline reveal" style={{ fontSize: "2.6rem" }}>
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
            At WattWorks Energies Private Limited., we believe clean energy is
            not just an investment — it is a commitment to a sustainable future.
            Our mission is to help businesses and homeowners harness the power
            of the sun through reliable, affordable, and high-performance solar
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
      <Footer />

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

        button:focus-visible,
        a:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 3px;
          border-radius: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1 !important;
            transform: none !important;
          }
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .reveal {
          will-change: transform, opacity;
        }

        /* ---- ambient light + 3D helpers ---- */
        .ambient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
          z-index: 0;
        }
        .intro-section,
        .mission-section,
        .dept-switcher-section {
          position: relative;
          overflow: hidden;
        }
        .benefits-grid,
        .facility-gallery,
        .all-services-grid,
        .team-grid,
        .split-grid-layout {
          perspective: 1400px;
        }
        .tilt-card {
          transform-style: preserve-3d;
          will-change: transform;
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
        }

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
            url("./others/rooftop3.jpeg") center/cover no-repeat;
        }

        .hero-spotlight {
          position: absolute;
          top: 0;
          left: 0;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(16, 185, 129, 0.32),
            rgba(16, 185, 129, 0) 70%
          );
          filter: blur(14px);
          pointer-events: none;
          mix-blend-mode: screen;
          z-index: 1;
        }

        .hero-content {
          max-width: 900px;
          width: 100%;
          text-align: center;
          z-index: 5;
          position: relative;
          perspective: 1000px;
        }

        .hero-title-line {
          display: block;
          overflow: hidden;
        }
        .hero-title-line span {
          display: inline-block;
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
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
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
          font-size: 0.9rem;
        }

        .hero-floating-left {
          position: absolute;
          left: 32px;
          bottom: 32px;
          width: 300px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
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

        .hero-floating-bottom-bar {
          background: white;
          border-radius: 999px;
          padding: 14px 28px;
          font-weight: 700;
          font-size: 0.95rem;
          white-space: nowrap;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          z-index: 5;
        }

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
          z-index: 5;
        }

        @media (max-width: 1024px) {
          .hero-canvas {
            padding-top: 160px;
          }
          .hero-content {
            max-width: 700px;
          }
          .hero-bottom {
            position: static;
            margin-top: 40px;
            flex-direction: column;
            align-items: center;
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

        @media (max-width: 768px) {
          .hero-canvas {
            padding: 120px 20px 40px;
            margin: 10px;
            border-radius: 24px;
            min-height: auto;
          }
          .hero-title-line span {
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
        }

        .facilities-section {
          padding: 80px 0;
          background: var(--bg-light);
        }

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
        }
        .fac-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .fac-card:hover img {
          transform: scale(1.06);
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
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5);
          animation: statusPulse 2.2s ease-out infinite;
        }
        @keyframes statusPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.45);
          }
          70% {
            box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
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

        .marquee-section {
          padding: 40px 0;
          background: var(--white);
          overflow: hidden;
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
          width: max-content;
          animation: smoothMarquee 25s linear infinite;
          transform-origin: center;
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
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
          transition:
            background 0.4s var(--curve-preset),
            color 0.4s var(--curve-preset),
            border-color 0.4s var(--curve-preset);
        }
        .tab-trigger.active,
        .tab-trigger:hover {
          background: var(--bg-dark);
          color: var(--white);
          border-color: var(--bg-dark);
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
          position: relative;
          z-index: 2;
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
          transition:
            transform 0.4s var(--curve-preset),
            background 0.4s var(--curve-preset);
        }
        .faq-item.open .faq-icon-circle {
          transform: rotate(180deg);
          background: var(--bg-dark);
          color: var(--white);
        }
        .faq-content {
          height: 0;
          opacity: 0;
          overflow: hidden;
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
          .marquee-track span {
            padding: 12px 22px;
            font-size: 14px;
          }
        }
        /* ==========================
   ABOUT SECTION MOBILE
========================== */

        @media (max-width: 1024px) {
          .split-grid-layout {
            grid-template-columns: 1fr;
            gap: 28px;
            align-items: stretch;
          }

          .left-info-block {
            order: 1;
            text-align: center;
            max-width: 700px;
            margin: auto;
          }

          .left-info-block h3 {
            font-size: 2rem;
            line-height: 1.3;
          }

          .left-info-block p {
            margin: 20px auto 32px;
            max-width: 650px;
          }

          .left-info-block .btn-black {
            justify-content: center;
          }

          .asym-card {
            order: 2;
            width: 100%;
            height: 420px;
          }

          .second-card {
            order: 3;
            margin-top: 0 !important;
          }
        }
        @media (max-width: 768px) {
          .intro-section {
            padding: 70px 0;
          }

          .split-grid-layout {
            gap: 22px;
          }

          .left-info-block {
            text-align: left;
          }

          .left-info-block h3 {
            font-size: 1.7rem;
            line-height: 1.35;
          }

          .left-info-block p {
            font-size: 0.98rem;
            line-height: 1.8;
            margin: 18px 0 28px;
          }

          .left-info-block .btn-black {
            width: 100%;
            justify-content: center;
          }

          .asym-card {
            height: 340px;
            border-radius: 24px;
          }

          .card-overlay {
            padding: 22px;
          }

          .card-tag {
            top: 16px;
            left: 16px;
            font-size: 0.72rem;
            padding: 6px 14px;
          }

          .card-overlay h4 {
            font-size: 1.15rem;
            line-height: 1.45;
            max-width: 90%;
          }

          .card-arrow-btn {
            width: 42px;
            height: 42px;
            right: 18px;
            bottom: 18px;
          }
        }
        @media (max-width: 480px) {
          .container {
            padding: 0 18px;
          }

          .large-headline {
            font-size: 2rem;
            margin-bottom: 50px;
          }

          .left-info-block h3 {
            font-size: 1.45rem;
          }

          .left-info-block p {
            font-size: 0.92rem;
          }

          .asym-card {
            height: 280px;
            border-radius: 20px;
          }

          .card-overlay {
            padding: 18px;
          }

          .card-overlay h4 {
            font-size: 1rem;
            line-height: 1.5;
          }

          .card-tag {
            font-size: 0.68rem;
          }

          .card-arrow-btn {
            width: 38px;
            height: 38px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
