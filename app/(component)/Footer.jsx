"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <h2 className="footer-title">WATTWORKS</h2>

          <div className="footer-grid">
            {/* Company */}
            <div>
              <h3>Wattworks Energies</h3>

              <p>
                Solar Consultancy | EPC | Energy Audits | Solar Carports |
                EV Charging Stations | Operations & Maintenance.
              </p>

              <div className="footer-contact">
                <a href="tel:+919845853002">+91 98458 53002</a>

                <a href="mailto:biz.wattworks@gmail.com">
                  biz.wattworks@gmail.com
                </a>

                <span>Maharashtra • Karnataka • Goa</span>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4>Company</h4>

              <ul>
                <li>
                  <Link href="/about">About Us</Link>
                </li>

                <li>
                  <Link href="/services">Services</Link>
                </li>

                <li>
                  <Link href="/projects">Projects</Link>
                </li>

                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4>Services</h4>

              <ul>
                <li>Rooftop Solar</li>

                <li>Solar EPC</li>

                <li>Ground Mounted Solar</li>

                <li>Energy Audits</li>

                <li>EV Charging</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4>Support</h4>

              <ul>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>

                <li>
                  <Link href="/contact">Get Quote</Link>
                </li>

                <li>
                  <Link href="/contact">Free Consultation</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Wattworks Energies Pvt. Ltd. All
              Rights Reserved.
            </p>

            <div className="footer-links">
              <Link href="/privacy-policy">Privacy Policy</Link>

              <Link href="/terms-and-conditions">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          padding: 110px 0 35px;
          background: #fff;
        }

        .container {
          max-width: 1400px;
          margin: auto;
          padding: 0 24px;
        }

        .footer-title {
          font-size: clamp(60px, 9vw, 150px);
          font-weight: 900;
          text-align: center;
          line-height: 0.9;
          letter-spacing: -4px;
          margin-bottom: 70px;

          background: linear-gradient(to bottom, #0f172a, #cbd5e1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 50px;

          padding-top: 45px;
          border-top: 1px solid #e5e7eb;
        }

        .footer-grid h3 {
          font-size: 30px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 18px;
        }

        .footer-grid h4 {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 20px;
        }

        .footer-grid p {
          color: #64748b;
          line-height: 1.8;
        }

        .footer-contact {
          margin-top: 25px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-contact a,
        .footer-contact span {
          color: #475569;
          text-decoration: none;
          transition: 0.3s;
        }

        .footer-contact a:hover {
          color: #000;
        }

        .footer-grid ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-grid li {
          margin-bottom: 14px;
          color: #64748b;
        }

        .footer-grid li a {
          color: inherit;
          text-decoration: none;
          transition: 0.3s;
        }

        .footer-grid li:hover,
        .footer-grid li a:hover {
          color: #000;
        }

        .footer-bottom {
          margin-top: 60px;
          padding-top: 30px;
          border-top: 1px solid #e5e7eb;

          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .footer-bottom p {
          color: #64748b;
        }

        .footer-links {
          display: flex;
          gap: 24px;
        }

        .footer-links a {
          color: #64748b;
          text-decoration: none;
          transition: 0.3s;
        }

        .footer-links a:hover {
          color: #000;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .footer {
            padding: 70px 0 30px;
          }

          .footer-title {
            font-size: 56px;
            margin-bottom: 40px;
            letter-spacing: -2px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-links {
            justify-content: center;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  );
}