import Navbar from "@/app/(component)/Navbar";
import Footer from "@/app/(component)/Footer";

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
  return (
    <>
      <Navbar theme="light" />

          <main className="min-h-screen pt-32">
              
              <h1 className="text-center text-7xl font-bold ">Services</h1>
        {/* Hero Section */}

        {/* Services Sections */}

        {/* Why Choose Us */}

        {/* Process */}

        {/* FAQ */}

        {/* CTA */}
      </main>

      <Footer />
    </>
  );
}
