import kneeHero from "../images/knee-replacement-header.webp";

import hipHero from "../images/DMK_Expertise_Hip Replacement_Banner.webp";

import regenHero from "../images/regenerative-treatment-banner.webp";
import painHero from "../images/pain-management.webp";

import painMain from "../images/pain-management.webp";
import kneeMain from "../images/DMK_Expertise_Knee Replacement.webp";
import kneeosteoarthritis from "../images/DMK_Expertise_Knee Osteoarthritis.webp";
import kneeReplacementTKR from "../images/DMK_Expertise_Muscle‑Sparing _ Minimally Invasive TKR_.webp";
import PartialKneeReplacement from "../images/DMK_Expertise_Partial (Unicondylar) Knee Replacement_.webp";
import RoboticAssisted from "../images/DMK_Expertise_Robotic‑Assisted Total Knee Replacement_.webp";

import hipreplacement from "../images/DMK_Expertise_Hip Replacement.webp";
import DAA from "../images/DMK_Expertise_DAA Total Hip Replacement.webp";
import ComplexandRevision from "../images/DMK_Expertise_Complex and Revision Hip Replacement.webp";
import RoboticAssistedHip from "../images/DMK_Expertise_Robotic-Assisted Hip Replacement.webp";

import regenMain from "../images/knee-replacement-header.webp";
import hipMain from "../images/knee-replacement-header.webp";

const expertiseData = {
  "knee-replacement": {
    slug: "knee-replacement",
    pageTitle: "Knee Replacement",
    heroTitle: "Expert Care For",
    heroHighlight: "Knee Replacement",
    heroText:
      "Advanced knee replacement care focused on restoring movement, reducing pain, and helping you return to everyday life confidently.",
    heroImage: kneeHero,
    tabs: [
      {
        label: "Knee Replacement",
        title: "Knee Replacement",
        image: kneeMain,
        description:
          "Knee replacement is a surgery in which the worn-out surfaces of the knee joint are removed and covered with smooth metal and medical-grade plastic components to reduce pain and improve movement. It is usually considered when knee osteoarthritis or injury causes severe pain, stiffness or deformity that is no longer controlled with medicines, physiotherapy or injections, and day-to-day activities such as walking, climbing stairs and sleep are significantly affected.",
      },
      {
        label: "Knee Osteoarthritis",
        title: "Knee Osteoarthritis",
        image: kneeosteoarthritis,
        description:
          "Knee osteoarthritis happens when the protective cartilage in the knee gradually wears down. This can lead to pain, stiffness, swelling, reduced movement and difficulty in daily activities. Treatment depends on the stage of arthritis and may include lifestyle changes, medicines, physiotherapy, injections or surgery.",
      },
      {
        label: "Total Knee Replacement (TKR)",
        title: "Total Knee Replacement (TKR)",
        image: kneeReplacementTKR,
        description:
          "Total Knee Replacement is a procedure where the damaged surfaces of the knee joint are replaced with artificial components. It is designed to relieve pain, correct deformity and improve mobility when the entire knee joint is significantly affected.",
      },
      {
        label: "Partial Knee Replacement",
        title: "Partial Knee Replacement",
        image: PartialKneeReplacement,
        description:
          "Partial knee replacement is suitable for selected patients where only one part of the knee is damaged. It preserves more natural bone and tissue and may allow a smoother recovery when performed for the right indication.",
      },
      {
        label: "Robotic-Assisted Total Knee Replacement",
        title: "Robotic-Assisted Total Knee Replacement",
        image: RoboticAssisted,
        description:
          "Robotic-assisted knee replacement helps the surgeon plan and place the implant with high precision. It supports accurate alignment, balanced movement and a personalised surgical approach based on the patient’s anatomy.",
      },
    ],
  },

  "hip-replacement": {
    slug: "hip-replacement",
    pageTitle: "Hip Replacement",
    heroTitle: "Expert Care For",
    heroHighlight: "Hip Replacement",
    heroText:
      "Advanced hip replacement care focused on reducing pain, improving mobility, and helping patients move with greater confidence.",
    heroImage: hipHero,
    tabs: [
      {
        label: "Hip Replacement",
        title: "Hip Replacement",
        image: hipreplacement,
        description:
          "Hip replacement is a surgery in which the damaged parts of the hip joint are replaced with artificial components. It is usually considered when hip arthritis, injury or joint damage causes persistent pain, stiffness and difficulty in walking, sitting, climbing stairs or performing daily activities.",
      },
      {
        label: "DAA (Direct Anterior Approach) Total Hip Replacement",
        title: "DAA (Direct Anterior Approach) Total Hip Replacement",
        image: DAA,
        description:
          "DAA (Direct Anterior Approach) Total Hip Replacement is a muscle-sparing hip replacement technique performed from the front of the hip. In suitable patients, it may support faster recovery, less muscle disruption and improved early mobility.",
      },
      {
        label: "Complex and Revision Hip Replacement",
        title: "Complex and Revision Hip Replacement",
        image: ComplexandRevision,
        description:
          "Complex and Revision Hip Replacement involves replacing a previously implanted hip prosthesis or addressing complicated hip conditions. It is designed to restore function, relieve pain, and improve mobility in challenging cases.",
      },
      {
        label: "Robotic‑Assisted Hip Replacement (Planning)",
        title: "Robotic‑Assisted Hip Replacement (Planning)",
        image: RoboticAssistedHip,
        description:
          "Robotic-assisted hip replacement helps the surgeon plan and place the implant with high precision. It supports accurate alignment, balanced movement and a personalised surgical approach based on the patient’s anatomy.",
      },
    ],
  },

  "regenerative-treatment": {
    slug: "regenerative-treatment",
    pageTitle: "Regenerative Treatment",
    heroTitle: "Regenerative Therapies For",
    heroHighlight: "Joint Recovery",
    heroText:
      "Minimally invasive regenerative treatments aimed at reducing pain and promoting tissue healing for selected joint conditions.",
    heroImage: regenHero,
    tabs: [
      {
        label: "Regenerative Treatment",
        title: "Regenerative Treatment",
        image: regenMain,
        description:
          "Regenerative therapies such as platelet-rich plasma (PRP) and stem-cell supported treatments aim to stimulate healing in damaged tissues and provide an alternative to surgery in selected cases.",
      },
      {
        label: "Pain Management",
        title: "Pain Management",
        image: regenMain,
        description:
          "Regenerative therapies such as platelet-rich plasma (PRP) and stem-cell supported treatments aim to stimulate healing in damaged tissues and provide an alternative to surgery in selected cases.",
      },
    ],
  },

  "pain-management": {
    slug: "pain-management",
    pageTitle: "Pain Management",
    heroTitle: "Comprehensive",
    heroHighlight: "Pain Management",
    heroText:
      "Individualised pain management strategies combining non-operative treatments, injections, and rehabilitation to improve function and quality of life.",
    heroImage: painHero,
    tabs: [
      {
        label: "Pain Management",
        title: "Pain Management",
        image: painMain,
        description:
          "A multidisciplinary approach to control pain, address underlying causes, and support recovery through targeted therapies and rehabilitation plans.",
      },
    ],
  },
};

export const expertiseCategories = Object.values(expertiseData);

export const expertiseSlugs = Object.keys(expertiseData);

export function getExpertisePage(slug) {
  return expertiseData[slug];
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}