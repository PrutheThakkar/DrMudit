import blogOne from "../images/Knee Replacement.jpg";
import blogTwo from "../images/Hip Replacement.jpg";
import blogThree from "../images/Regenerative Treatment.jpg";

export const faqs = [
  {
    question: "Can my knee or hip be treated without surgery?",
    answer:
      "In early and moderate stages, many patients improve with weight management, medicines, physiotherapy, exercise, activity modification and injections. Surgery is usually discussed only when pain, stiffness or deformity affects daily life despite non-surgical care.",
  },
  {
    question: "When should I start thinking about joint replacement?",
    answer:
      "Joint replacement may be considered when pain affects walking, stairs, sleep, daily activities, and when medicines, physiotherapy or injections are no longer giving enough relief.",
  },
  {
    question: "How painful is knee replacement surgery?",
    answer:
      "Modern anaesthesia, pain-control protocols and physiotherapy help reduce pain after surgery. Some discomfort is expected, but it is usually managed with medicines and guided rehabilitation.",
  },
  {
    question: "How many days will I be in the hospital, and when can I walk?",
    answer:
      "Most patients are encouraged to stand and walk with support soon after surgery, depending on their condition and surgeon's advice. Hospital stay varies by procedure and recovery.",
  },
  {
    question: "Will I be able to sit cross-legged or use Indian toilets after surgery?",
    answer:
      "This depends on the type of surgery, implant, flexibility, strength, and recovery. Your surgeon and physiotherapist will guide you on safe movements after surgery.",
  },
];

const insightsData = {
  "do-you-really-need-total-knee-replacement-or-is-a-partial-knee-enough": {
    slug: "do-you-really-need-total-knee-replacement-or-is-a-partial-knee-enough",
    title: "Do You Really Need A Total Knee Replacement Or Is A Partial Knee Enough?",
    category: "Knee Replacement",
    date: "26 May 2026",
    readTime: "4 min read",
    image: blogOne,
    excerpt:
      "Not every painful knee needs a total knee replacement. In selected cases, partial knee replacement may be enough.",
    content: [
      {
        heading: "Understanding the difference",
        paragraphs: [
          "Total knee replacement is considered when the entire knee joint is significantly damaged.",
          "Partial knee replacement may be suitable when only one compartment of the knee is affected and the remaining knee structure is healthy.",
        ],
      },
      {
        heading: "Why evaluation matters",
        paragraphs: [
          "The right decision depends on X-rays, joint alignment, ligament condition, pain pattern and functional limitation.",
          "A detailed orthopaedic evaluation helps decide whether partial or total knee replacement is the better option.",
        ],
      },
    ],
  },

  "the-hidden-cost-of-waiting-too-long-for-knee-replacement": {
    slug: "the-hidden-cost-of-waiting-too-long-for-knee-replacement",
    title: "The Hidden Cost Of Waiting Too Long For Knee Replacement",
    category: "Knee Replacement",
    date: "26 May 2026",
    readTime: "5 min read",
    image: blogTwo,
    excerpt:
      "Delaying knee replacement for too long can affect mobility, posture, confidence and overall quality of life.",
    content: [
      {
        heading: "Waiting can change movement",
        paragraphs: [
          "When knee pain continues for years, patients may start walking differently to avoid pain.",
          "This can affect the hip, spine, opposite knee and overall balance.",
        ],
      },
      {
        heading: "The right time is important",
        paragraphs: [
          "Surgery should not be rushed, but it should also not be delayed until movement and confidence are severely affected.",
          "A timely consultation helps patients understand all available options.",
        ],
      },
    ],
  },

  "too-young-for-knee-replacement-what-surgeons-actually-consider": {
    slug: "too-young-for-knee-replacement-what-surgeons-actually-consider",
    title: "Too Young For Knee Replacement? What Surgeons Actually Consider",
    category: "Knee Replacement",
    date: "26 May 2026",
    readTime: "4 min read",
    image: blogThree,
    excerpt:
      "Age is one factor, but pain, joint damage, lifestyle limitation and quality of life matter too.",
    content: [
      {
        heading: "Age is not the only factor",
        paragraphs: [
          "Many patients worry they are too young for knee replacement.",
          "Surgeons look at joint damage, pain severity, activity limitations, overall health and treatment history before recommending surgery.",
        ],
      },
      {
        heading: "Individualised decisions",
        paragraphs: [
          "The goal is not just to replace a joint, but to help the patient move better, reduce pain and return to daily life with confidence.",
        ],
      },
    ],
  },
};

export const insights = Object.values(insightsData);

export function getInsightBySlug(slug) {
  return insightsData[slug];
}