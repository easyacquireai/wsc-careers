export interface Job {
  slug: string;
  title: string;
  type: string;
  location: string;
  department: string;
  summary: string;
  description: string;
  whatYoullDo: string[];
  requirements: string[];
}

export const jobs: Job[] = [
  {
    slug: "head-of-performance-marketing",
    title: "Head of Performance Marketing",
    type: "Full-time",
    location: "Remote (US)",
    department: "Marketing",
    summary:
      "Own marketing strategy and performance across the entire WSC portfolio. Lead war rooms, drive growth, and report directly to co-founders.",
    description:
      "Own the overall marketing strategy, growth opportunities, and performance trajectory for every offer in the WSC portfolio. Reports directly to co-founders. Lead pod war room meetings, work hands-on with media buyers, copywriters, designers, and editors. Own all weekly client calls providing performance updates and strategic recommendations directly to creators.",
    whatYoullDo: [
      "Marketing Strategy: Own overall marketing strategy for each offer including funnel architecture, ad angle development, audience targeting strategy, offer positioning, and growth roadmaps.",
      "War Room Leadership: Lead pod war rooms 2-3x/week reviewing performance data, identifying what is working and underperforming.",
      "Growth Opportunities: Identify and recommend new funnel types, ad angles, split tests, and monetization approaches.",
      "Hands-On Collaboration: Work directly with media buyer, copywriter, designers, and editors on overall success of each offer.",
      "Creative Concept Development: Collaborate with Creative Director on creative concepts for ad campaigns.",
      "Client Communication: Own all weekly client calls across the portfolio.",
      "Performance Analysis: Review ROAS, CPA, CVR, EPC, and funnel metrics daily and weekly.",
      "Leadership Collaboration: Work with co-founders on strategy, results, and growth opportunities.",
    ],
    requirements: [
      "3-5 years in direct response performance marketing scaling offers to 6-7 figures monthly",
      "Proven strategic thinking across multiple offers simultaneously",
      "Full-funnel understanding (acquisition funnels, ascension models, email sequences, upsell flows, backend monetization)",
      "Media buying literacy (ROAS, CPA, CPM, CTR fluency)",
      "Data-driven decision making with attribution tools (Hyros)",
      "Client-facing confidence for weekly calls with high-profile creators",
      "Communication and leadership to lead war rooms and set strategic direction",
      "Versatility across niches (vocal coaching, business acquisition, trading, career coaching, health)",
      "Speed and adaptability in fast-moving environment",
    ],
  },
  {
    slug: "senior-copywriter",
    title: "Senior Copywriter",
    type: "Full-time",
    location: "Remote (US)",
    department: "Creative",
    summary:
      "Write high-converting ad copy, VSLs, and funnel pages across 5–8 creator offers generating six and seven figures monthly.",
    description:
      "Own copy across a portfolio of 5-8 creator offers generating six and seven figures monthly. Work in pod-based team structure alongside designer, media buyer, video editors. Participate in war room meetings pitching ad concepts and collaborating on split-test strategies.",
    whatYoullDo: [
      "Ad Copy at Volume: Write 40-50+ ad copy variations per week across assigned offers",
      "Funnel Copy and CRO: Write and optimize landing pages, order forms, upsell pages, checkout flows with weekly split-tests",
      "Long-Form Sales Copy: Write VSL scripts, sales letters, email sequences, upsell copy",
      "Awareness-Level Targeting: Write across full awareness spectrum",
      "War Room Participation: Pod war rooms 2-3x/week",
      "Cross-Functional Collaboration: Work with designer, media buyer, video editors",
      "AI and Systems: Use internal AI-powered tools and frameworks",
    ],
    requirements: [
      "3+ years direct response copywriting (ads, VSLs, emails, sales pages)",
      "Proven performance with measurable results (CTR, CVR, ROAS, revenue)",
      "CRO and data literacy with split-testing experience",
      "Versatility across niches and brand voices",
      "Speed and quality at 40-50+ ad variations per week baseline",
      "Clear communication for war room collaboration",
    ],
  },
  {
    slug: "senior-media-buyer",
    title: "Senior Media Buyer",
    type: "Full-time",
    location: "Remote (US)",
    department: "Marketing",
    summary:
      "Scale paid media campaigns across Meta, LinkedIn, and YouTube — deploying $150K–$300K+ monthly ad spend per client.",
    description:
      "Manage and scale paid media campaigns across Meta (primary), LinkedIn, and YouTube deploying $150K-$300K+ monthly ad spend per client across 5-8 active offers. Follow Keep/Kill/Scale methodology.",
    whatYoullDo: [
      "Campaign Strategy and Execution: Own end-to-end paid campaigns across Meta, LinkedIn, YouTube",
      "Rapid Creative Launching: Launch new creatives within 12-hour turnaround",
      "Budget Management and Scaling: Deploy $150K-$300K+ monthly per client",
      "Keep/Kill/Scale Methodology: Evaluate every campaign and creative through this framework",
      "Testing and Optimization: Rigorous split-testing across audiences, placements, creatives, copy",
      "Attribution and Analytics: Use Hyros alongside platform analytics, deliver weekly reports",
      "War Room Participation: Join pod war rooms 2-3x/week",
      "Cross-Functional Collaboration: Guide creative team on what hooks, angles, visuals are performing",
    ],
    requirements: [
      "3+ years managing performance-based paid media campaigns",
      "Track record scaling campaigns to 6-7 figures monthly revenue",
      "Deep expertise in Meta Business Manager, working knowledge of LinkedIn and YouTube Ads",
      "Experience with Hyros or similar attribution platforms",
      "Strong creative testing frameworks",
      "KPI analysis (CPA, ROAS, CTR, CPM, funnel conversion data)",
      "Speed and decisiveness with real budget on the line",
      "Excellent communication",
      "U.S. business hours availability",
    ],
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    type: "Full-time",
    location: "Remote",
    department: "Creative",
    summary:
      "Design scroll-stopping paid ads and high-converting funnel graphics for top creators. Your work gets tested in-market every week.",
    description:
      "Design scroll-stopping paid ads, high-performing funnel graphics, and brand-consistent visuals. Fast-paced high-output role in pod-based team structure. Work gets tested in-market every week with direct measurable results.",
    whatYoullDo: [
      "Ad Creative Production: Design 10+ high-converting paid image ads per client per week",
      "Funnel Graphics: Sales page graphics, upsell visuals, testimonial graphics, checkout elements",
      "Concept Translation: Turn hooks, copy, and offers into conversion-focused designs",
      "Creative Research: Analyze market leaders and competitors",
      "Team Collaboration: Work with copywriter and media buyer, participate in war rooms",
      "Brand Consistency: Maintain visual alignment across multiple client brand guidelines",
      "Rapid Iteration: Produce variations quickly when creatives show performance",
    ],
    requirements: [
      "1-2 years designing ads for direct-response marketing campaigns",
      "Portfolio showing paid ad creatives and funnel graphics designed for conversion",
      "Deep understanding of visual hierarchy and attention-grabbing layouts",
      "Proficiency in Adobe Creative Suite, Figma, or similar",
      "High volume, high quality output across multiple clients weekly",
      "Comfortable with tight deadlines",
      "Strong communication for cross-functional collaboration",
      "Available during U.S. business hours",
    ],
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}
