import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights, getInsightBySlug } from "../data";

export async function generateStaticParams() {
  return insights.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getInsightBySlug(slug);

  if (!blog) {
    return { title: "Insight | Dr. Mudit Khanna" };
  }

  return {
    title: `${blog.title} | Dr. Mudit Khanna`,
    description: blog.excerpt,
  };
}

export default async function InsightDetailPage({ params }) {
  const { slug } = await params;
  const blog = getInsightBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="insight-detail-page">
      <section className="insight-detail-hero">
        <div className="container">
          <Link href="/insights" className="back-to-insights">
            ← Back to Insights
          </Link>

          <div className="insight-detail-meta">
            <span>{blog.category}</span>
            <span>{blog.date}</span>
            <span>{blog.readTime}</span>
          </div>

          <h1>{blog.title}</h1>
          <p>{blog.excerpt}</p>

          <div className="insight-detail-image">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="insight-detail-content">
        <div className="container">
          <article className="insight-article">
            {blog.content.map((section) => (
              <div className="insight-article-block" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}