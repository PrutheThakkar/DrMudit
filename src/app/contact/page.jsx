import Image from "next/image";
import contactBanner from "../images/contact-page -banner.webp";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact | Dr. Mudit Khanna",
  description:
    "Book an appointment or contact Dr. Mudit Khanna for orthopaedic consultation.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>
              Let’s Start <br />
              <span>Your Recovery Journey</span>
            </h1>
          </div>

          <div className="contact-hero-image">
            <Image
              src={contactBanner}
              alt="Contact Dr. Mudit Khanna"
              fill
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-grid">
            <div className="contact-map-box">
              <iframe
                title="Wockhardt Hospital Mumbai Central"
                src="https://www.google.com/maps?q=Wockhardt%20Hospital%20Mumbai%20Central&output=embed"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}