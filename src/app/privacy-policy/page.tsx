import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | 91bigha.com",
  description: "Privacy policy for 91bigha.com covering data collection, communication, and platform usage."
};

const sections = [
  {
    title: "Information We Collect",
    points: [
      "Contact details you share with us, such as your name, phone number, city, and enquiry information.",
      "Property preferences and search intent you submit through forms, WhatsApp enquiries, or listing interactions.",
      "Basic technical data such as browser, device, pages visited, and interaction patterns used to improve the platform."
    ]
  },
  {
    title: "How We Use Your Information",
    points: [
      "To respond to property enquiries, rental requests, buying requirements, and listing-related communication.",
      "To connect you with relevant property opportunities, site visits, or support follow-up based on your request.",
      "To improve search flows, lead quality, and platform performance across 91bigha.com."
    ]
  },
  {
    title: "Sharing Of Data",
    points: [
      "We may share enquiry information with relevant internal representatives or listing partners only when needed to fulfil your request.",
      "We do not sell user data as a standalone product.",
      "We may disclose information when required for legal compliance, fraud prevention, or platform protection."
    ]
  },
  {
    title: "Cookies And Analytics",
    points: [
      "We may use cookies, session tools, and analytics tags to understand navigation behavior and improve experience.",
      "These tools help us understand which pages, filters, and property flows are being used most often.",
      "You can manage cookies through your browser settings, though some site behavior may be affected."
    ]
  },
  {
    title: "Your Choices",
    points: [
      "You may contact us to request correction or deletion of enquiry information you have submitted.",
      "You may stop communication by telling our team during a call or WhatsApp conversation.",
      "For privacy-related requests, use the contact page and include enough detail for us to identify your enquiry."
    ]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">Privacy Policy</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Privacy Policy</li>
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
                <h2 className="mb-2">How 91bigha.com handles enquiry and platform data</h2>
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
