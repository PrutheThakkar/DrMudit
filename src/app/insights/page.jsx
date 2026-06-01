import Image from "next/image";
import Link from "next/link";
import { insights, faqs } from "./data";

export const metadata = {
  title: "Insights | Dr. Mudit Khanna",
  description:
    "Read orthopaedic insights on knee replacement, hip replacement, regenerative treatment, and joint care.",
};

export default function InsightsPage() {
  return (
    <main className="insights-page">
      <section className="insights-hero">
        <div className="container">
          <div className="insights-hero-content">
            <h1>
              Beyond <br />
              <span>The Diagnosis</span>
            </h1>
          </div>

          <div className="insights-hero-image">
            <Image
              src={insights[0].image}
              alt="Orthopaedic insights"
              fill
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="insights-list-section">
        <div className="container">
           <div className="div-title">
            <p>Blogs</p>
            </div>
          <div className="insights-section-title">
            <h2>Knowledge & Insights</h2>
          </div>

          <div className="insights-grid">
            {insights.map((blog) => (
              <Link
                href={`/insights/${blog.slug}`}
                className="insight-card"
                key={blog.slug}
              >
                <div className="insight-card-image">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="33vw"
                  />
                </div>

                <div className="insight-card-content">
                  <h3>{blog.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="insights-faq-section">
        <div className="container">
          <div className="div-title">
            <p>FAQ</p>
            </div>
          <div className="insights-section-title">
            <h2>Common Questions, Clear Answers</h2>
          </div>
         

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details
                className="faq-item"
                key={faq.question}
                open={index === 0}
              >
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}