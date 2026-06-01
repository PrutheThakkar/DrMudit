import Image from "next/image";
import {
  patientStoriesHero,
  reelsStories,
  youtubeStories,
} from "./data";
import PatientStoriesSliders from "./PatientStoriesSliders";

export const metadata = {
  title: "Patient Stories | Dr. Mudit Khanna",
  description:
    "Watch patient stories, recovery journeys, reels and videos from Dr. Mudit Khanna.",
};

export default function PatientStoriesPage() {
  return (
    <main className="patient-stories-page">
      <section className="patient-stories-hero">
        <div className="container">
          <div className="patient-stories-hero-content">
            <h1>
              {patientStoriesHero.title} <br />
              <span>{patientStoriesHero.highlight}</span>
            </h1>
          </div>

          <div className="patient-stories-hero-image">
            <Image
              src={patientStoriesHero.image}
              alt="Patient stories hero"
              fill
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <PatientStoriesSliders
        reelsStories={reelsStories}
        youtubeStories={youtubeStories}
      />
    </main>
  );
}