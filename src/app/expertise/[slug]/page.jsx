import Image from "next/image";
import { notFound } from "next/navigation";
import { expertiseCategories, getExpertisePage } from "../data";
import ExpertiseTabs from "./ExpertiseTabs";

export async function generateStaticParams() {
  return expertiseCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getExpertisePage(slug);

  if (!page) {
    return {
      title: "Expertise | Dr. Mudit Khanna",
    };
  }

  return {
    title: `${page.pageTitle} | Dr. Mudit Khanna`,
    description: page.heroText,
  };
}

export default async function ExpertiseDetailPage({ params }) {
  const { slug } = await params;
  const page = getExpertisePage(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="expertise-detail-page">
      <section className="expertise-hero">
        <div className="container">
          <div className="expertise-hero-top">
            <div>
              <h1>
                {page.heroTitle} <br />
                <span>{page.heroHighlight}</span>
              </h1>
            </div>

            {/* {page.heroText && <p>{page.heroText}</p>} */}
          </div>

          <div className="expertise-hero-image">
            <Image
              src={page.heroImage}
              alt={page.pageTitle}
              fill
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <ExpertiseTabs tabs={page.tabs} />
    </main>
  );
}