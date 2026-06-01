import Image from "next/image";

import AffiliationsSwiper from "../../components/about/AffiliationsSwiper";
import AboutAnimations from "../../components/about/AboutAnimations";
import TreatmentInfoSwitcher from "../../components/about/TreatmentSwitcher";

import aboutHero from "../images/DMK_Aboutpage_DoctorImage.webp";
import approachLeftOne from "../images/PA_1.webp";
import approachLeftTwo from "../images/PA_3.webp";
import approachLeftthree from "../images/PA_5.webp";

import approachRightOne from "../images/PA_2.webp";
import approachRightTwo from "../images/PA_4.webp";

import treatmentHipMain from "../images/DMK_Aboutpage_AreaofExpertise_Detailed evaluation.webp";
import treatmentKnee from "../images/DMK_Aboutpage_AreaofExpertise_Evidence based treatment_.webp";
import treatmentRobotic from "../images/DMK_Aboutpage_AreaofExpertise_Clear, honest guidance.webp";
import treatmentSubvastus from "../images/DMK_Aboutpage_AreaofExpertise_Restoring movement.webp";
import treatmentRevision from "../images/DMK_Aboutpage_AreaofExpertise_Patient education_.webp";



import affOne from "../images/the-royal-clg-logo.svg";
import affTwo from "../images/british-logo.svg";
import affThree from "../images/orthopaedic-logo.svg";
import affFour from "../images/indian-society-logo.svg";
import affFive from "../images/indian-arthroscopy.svg";
import affSix from "../images/bombay-orthopaedic-logo.svg";

import trainingIconOne from "../images/Icon_Trained-at-King-George-Medical-College-India .svg";
import trainingIconTwo from "../images/Icon__Advanced-qualifications-in-UK-and-Europe.svg";
import trainingIconThree from "../images/Icon_Fellowships-at-leading-centres-in-the-USA.svg";
import trainingIconFour from "../images/Icon__Experienced-in-complex-and-revision-joint-replacements.svg";

export const metadata = {
  title: "About | Dr. Mudit Khanna",
  description:
    "About Dr. Mudit Khanna, Orthopaedic and Joint Replacement Surgeon.",
};

const trainingItems = [
  {
    icon: trainingIconOne,
    id: 1,
    iconAlt: "Trained at King George",
    text: (
      <>
        Trained at King George <br />
        Medical College, India
      </>
    ),
  },
  {
    icon: trainingIconTwo,
    iconAlt: "Advanced qualifications",
    id: 2,
    text: (
      <>
        Advanced qualifications <br />
        in UK and Europe
      </>
    ),
  },
  {
    icon: trainingIconThree,
     iconAlt: "Fellowships at leading",
    id: 3,
    text: (
      <>
        Fellowships at leading <br />
        centres in the USA
      </>
    ),
  },
  {
    icon: trainingIconFour,
     iconAlt: "Experienced in complex and",
    id: 4,
    text: (
      <>
        Experienced in complex and <br />
        revision joint replacements
      </>
    ),
  },
];

const affiliations = [
  {
    title: "Member of Royal College of Surgeons of Edinburgh, UK",
    image: affOne,
  },
  {
    title: "Member of Indian Orthopaedic Society, UK",
    image: affTwo,
  },
  {
    title: "Member of Indian Orthopaedic Association",
    image: affThree,
  },
  {
    title: "Member of Indian Society of Hip and Knee Surgeons, India",
    image: affFour,
  },
  {
    title: "Member of Indian Arthroscopy Society, India",
    image: affFive,
  },
  {
    title: "Member of Bombay Orthopaedic Society",
    image: affSix,
  },
];

const approachCards = [
  {
    number: "01",
    title: "Detailed evaluation of each joint before recommending surgery",
    image: approachLeftOne,
    imagePosition: "left",
  },
  {
    number: "02",
    title: "Evidence-based treatment planning for long-term outcomes",
    image: approachRightOne,
    imagePosition: "right",
  },
  {
    number: "03",
    title: "Clear, honest guidance through conservative care, surgery, and recovery",
    image: approachLeftTwo,
    imagePosition: "left",
  },
  {
    number: "04",
    title: "Focus on restoring movement and quality of life",
    image: approachRightTwo,
    imagePosition: "right",
  },
  {
    number: "05",
    title:
      "Patient education and step-by-step guidance through recovery, so decisions are informed and confident",
    image: approachLeftthree,
    imagePosition: "left",
  },
];

const approachItems = [
  "Detailed evaluation of each joint before recommending surgery",
  "Evidence-based treatment planning for long-term outcomes",
  "Clear, honest guidance through conservative care, surgery, and recovery",
  "Focus on restoring movement and quality of life",
  "Patient education and step-by-step guidance through recovery, so decisions are informed and confident",
];

const treatmentCards = [
  {
    title: "Makoplasty® Robotic Partial Knee Replacement",
    image: treatmentKnee,
  },
  {
    title: "Robotic Hip & Knee Replacement (Mako Smart Robotics)",
    image: treatmentRobotic,
  },
  {
    title: "Subvastus Total Knee Replacement",
    image: treatmentSubvastus,
  },
  {
    title: "Complex & Revision Surgery",
    image: treatmentRevision,
  },
];

const treatmentInfoItems = [
  {
    title: "Direct Anterior Approach (DAA) Hip Replacement",
    description:
      "Minimally invasive, muscle-sparing technique allowing faster recovery, reduced pain, and low dislocation risk.",
    shortDescription:
      "Muscle-sparing hip replacement approach for faster recovery.",
    image: treatmentHipMain,
  },
  {
    title: "Makoplasty® Robotic Partial Knee Replacement",
    description:
      "Precision robotic technology for partial knee replacement with improved accuracy, alignment, and a more natural knee feel.",
    shortDescription:
      "Precision robotic technology for partial knee replacement.",
    image: treatmentKnee,
  },
  {
    title: "Robotic Hip & Knee Replacement",
    description:
      "Advanced robotic-assisted surgery designed to improve accuracy, implant positioning, alignment, and long-term outcomes.",
    shortDescription:
      "Robotic-assisted surgery for improved accuracy and alignment.",
    image: treatmentRobotic,
  },
  {
    title: "Subvastus Total Knee Replacement",
    description:
      "A muscle-sparing approach for total knee replacement that may support less pain, faster recovery, and better knee function.",
    shortDescription:
      "Muscle-sparing knee approach for smoother recovery.",
    image: treatmentSubvastus,
  },
  {
    title: "Complex & Revision Surgery",
    description:
      "Expertise in complex primary and revision surgeries for challenging hip and knee joint conditions.",
    shortDescription:
      "Advanced care for complex and revision joint surgery.",
    image: treatmentRevision,
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="about-page">
        <section className="about-hero about-animate-section">
          <div className="about-container container">
            <div className="about-hero-top">
              <div className="about-reveal">
                <h1 className="about-title">
                  Where Athletic Instinct Meets <br />
                  <span>Surgical Precision</span>
                </h1>
              </div>

              <div className="about-hero-copy about-reveal">
                {/* <p>
                  Dr. Mudit Khanna is a hip and knee replacement and arthroscopy
                  specialist with over 15 years of focused orthopaedic
                  experience.
                </p> */}
              </div>
            </div>

            <div className="about-hero-image about-image-reveal">
              <Image
                src={aboutHero}
                alt="Dr. Mudit Khanna in operation theatre"
                fill
                priority
                sizes="100vw"
              />
            </div>

            <div className="about-intro about-reveal">
              <p>
                Dr. Mudit Khanna is a hip and knee replacement and arthroscopy specialist with over 15 years of focused orthopaedic experience.
                An active sportsman and member of the Indian Medical Tennis Team, he brings the same discipline, focus,
                and strategic thinking from the court to every joint he evaluates. He believes that good outcomes start
                with understanding the joint and the patient, not just imaging or tests. Every recommendation,
                whether conservative care, partial replacement, or complex surgery is made
                with precision and clear reasoning.
              </p>
            </div>
          </div>
        </section>

        <section className="about-training about-animate-section">
          <div className="about-container container">
            <div className="div-title">
              <p>Training & Experience</p>
            </div>

            <h2 className="heading">15+ years</h2>

            <p className="sub-heading">
              of restoring movement through precision-led hip and knee replacement
              surgery.
            </p>

            <div className="about-training-grid">
              <div className="about-training-list">
                {trainingItems.map((item, index) => (
                  <div
                    className="about-training-item about-card-reveal"
                    key={item.id}
                    style={{ "--line-delay": `${index * 0.45}s` }}
                  >
                    <div className="about-training-icon">
                      <Image
                        src={item.icon}
                        alt={item.iconAlt}
                        width={80}
                        height={80}
                      />
                    </div>

                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>




        <section className="about-approach-new about-animate-section">
          <div className="about-container container">
            <div className="div-title">
              <p>Personal Approach</p>
            </div>
            <h2 className="heading">Every Joint Has A Story</h2>

            <p className="sub-heading">
              Treatment planned around your pain, movement, and life.
            </p>

            <div className="about-approach-new-list">
              {approachCards.map((item) => (
                <div
                  className={`about-approach-new-card image-${item.imagePosition}`}
                  key={item.number}
                >
                  <div className="about-approach-new-image">
                    <Image src={item.image} alt={item.title} fill sizes="38vw" />
                  </div>

                  <div className="about-approach-new-content">
                    <span className="count">{item.number}</span>
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-affiliations about-animate-section">
          <div className="about-container container">
            <div className="div-title">
              <p>Affiliations</p>
            </div>
             <h2 className="heading">Professional Distinctions</h2>

            <p className="sub-heading">
             Trusted memberships and associations supporting advanced orthopaedic care, continuous learning, and clinical excellence.
            </p>

            <AffiliationsSwiper items={affiliations} />
          </div>
        </section>


        <div className="container">
          <TreatmentInfoSwitcher items={treatmentInfoItems} />
        </div>
      </main>

      <AboutAnimations />
    </>
  );
}