import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | 91bigha.com",
  description: "Terms and conditions governing the use of 91bigha.com and property enquiry workflows."
};

const sections = [
  {
    title: "Platform Use",
    points: [
      "91bigha.com is intended for lawful browsing, property discovery, enquiries, and listing-related interactions.",
      "You agree not to misuse the platform through false enquiries, automated abuse, scraping, or fraudulent representation.",
      "We may restrict or block usage that harms the platform, its users, or listing workflows."
    ]
  },
  {
    title: "Property Information",
    points: [
      "Listings, images, pricing, and availability may change and should be independently confirmed before a transaction decision.",
      "91bigha.com may present information from owners, partners, or internal teams, and final verification remains important.",
      "Property discovery on the platform does not by itself create a booking, sale, or rental agreement."
    ]
  },
  {
    title: "Enquiries And Communication",
    points: [
      "By submitting an enquiry, you consent to being contacted regarding the requirement you submitted.",
      "Response time may vary depending on market, inventory, and operational availability.",
      "WhatsApp and phone-based follow-up is used to speed up lead qualification and support."
    ]
  },
  {
    title: "Third-Party Links And Actions",
    points: [
      "Some interactions may route you to third-party communication tools such as WhatsApp or external service pages.",
      "Those platforms are governed by their own terms, policies, and availability.",
      "91bigha.com is not responsible for interruptions or policy changes on third-party services."
    ]
  },
  {
    title: "Liability And Updates",
    points: [
      "The platform is provided on an as-available basis without a guarantee that every page, listing, or communication flow will be uninterrupted.",
      "We may update, revise, or remove content, features, and workflows when required for operational or legal reasons.",
      "Continued use of the platform after updates means you accept the current version of these terms."
    ]
  }
];

export default function TermsConditionPage() {
  return (
    <>
      <section className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">Terms & Conditions</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Terms & Conditions</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="card border-0 shadow-sm rounded-0">
            <div className="card-body p-4 p-lg-5">
              <div className="section-heading text-start mb-4">
                <h2 className="mb-2">Terms that govern use of 91bigha.com</h2>
                <p className="mb-0">Effective date: March 29, 2026</p>
              </div>

              <div className="d-flex flex-column gap-4">
                {sections.map((section) => (
                  <div key={section.title}>
                    <h4 className="mb-3">{section.title}</h4>
                    <ul className="legal-copy-list mb-0">
                      {section.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
