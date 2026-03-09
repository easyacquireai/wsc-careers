export interface Job {
  slug: string;
  title: string;
  type: string;
  location: string;
  department: string;
  compensation: string;
  summary: string;
  whoWeAre: string;
  theRole: string;
  whatYoullDoHeading: string;
  whatYoullDo: string[];
  requirements: string[];
  compensationAndBenefits: string[];
}

export const jobs: Job[] = [
  {
    slug: "head-of-performance-marketing",
    title: "Head of Performance Marketing",
    type: "Full-Time Contractor",
    location: "Remote (U.S. preferred)",
    department: "Marketing",
    compensation: "$12,000/month base + profit share",
    summary:
      "Own marketing strategy and performance across the entire WSC portfolio. Lead war rooms, drive growth, and report directly to co-founders.",
    whoWeAre:
      "We Scale Creators is a performance marketing agency that partners with top influencers and info-product creators to build, launch, and scale high-performing offers. We operate on a profit-share model. We front all capital and ad spend, build funnels, run paid traffic, and scale aggressively. Our partners pay nothing upfront. We only win when they win. Our portfolio includes creators like Cheryl Porter (38M+ followers) alongside established info-product businesses across fitness, finance, career coaching, health, and business education. We have generated over $50M in revenue for our partners and currently manage multiple seven-figure monthly offers across a growing portfolio of 10 to 15 active creator partnerships.",
    theRole:
      "We are hiring a Head of Performance Marketing to own the overall marketing strategy, growth opportunities, and performance trajectory for every offer in the WSC portfolio. This role reports directly to the co-founders and sits in the strategic leadership layer of the company. You will lead pod war room meetings, work hands-on with media buyers, copywriters, designers, and editors to ensure strategy translates into results, and bring new funnel concepts, ad angles, and split-test ideas to the table every week. You will collaborate with our Creative Director on creative concepts, bringing the marketing angle and audience insight while the Creative Director owns final creative direction. You will also own all weekly client calls, providing performance updates and strategic recommendations directly to the creators we partner with. This requires someone who can speak confidently about results and build trust with high-profile partners. You will have access to our proprietary Internal Hub, an AI-powered platform built on $50M+ in performance data that provides copy generation, creative briefing, and performance analytics tools designed to multiply your strategic output across a large portfolio.",
    whatYoullDoHeading: "What You Will Own",
    whatYoullDo: [
      "Marketing Strategy. Own the overall marketing strategy for each offer in the portfolio. This includes funnel architecture, ad angle development, audience targeting strategy, offer positioning, and growth roadmaps. You are the person responsible for making sure every offer is moving forward.",
      "War Room Leadership. Lead pod war rooms 2 to 3 times per week. Open each session by reviewing performance data, identifying what is working, what is underperforming, and where the opportunities are. Set the strategic context that the Creative Director and execution team use to make decisions.",
      "Growth Opportunities. Continuously identify and recommend new funnel types, new angles for ads, new split tests, and new monetization approaches. You are the person who sees what is possible and pushes the team to go after it.",
      "Hands-On Collaboration. Work directly and hands-on with the media buyer, copywriter, designers, and editors on the overall success of each offer. This is not about reviewing their individual deliverables line by line. It is about making sure the strategy you set is being executed effectively and that the results reflect it.",
      "Creative Concept Development. Collaborate with the Creative Director to develop creative concepts for ad campaigns. You bring the marketing strategy, the angle, the audience insight. The Creative Director makes the final call on creative direction and execution.",
      "Client Communication. Own all weekly client calls across the portfolio. Provide performance updates, strategic recommendations, and growth plans directly to the creators we partner with. Build and maintain strong relationships based on trust and results.",
      "Performance Analysis. Review ROAS, CPA, CVR, EPC, and funnel metrics across all offers on a daily and weekly basis. Use our Internal Hub and attribution tools to identify trends, diagnose problems, and make data-backed strategic recommendations.",
      "Leadership Collaboration. Work directly with the co-founders on marketing strategy, results, and growth opportunities for specific offers. Participate in strategic planning and provide input on new client onboarding, offer development, and portfolio-level decisions.",
    ],
    requirements: [
      "Performance Marketing Experience. 3 to 5 years in direct response performance marketing with a strong track record of scaling offers to six or seven figures in monthly revenue. Info-products, coaching, or creator economy experience is strongly preferred.",
      "Strategic Thinking. Proven ability to develop marketing strategies across multiple offers simultaneously. You should be able to look at an offer, identify the bottleneck in the funnel, and recommend a specific test or strategic shift to fix it.",
      "Full-Funnel Understanding. Deep knowledge of front-end acquisition funnels, low-ticket to high-ticket ascension models, email sequences, upsell flows, and backend monetization. You need to understand how the entire revenue engine works, not just the ads.",
      "Media Buying Literacy. You do not need to be a media buyer, but you need to understand ad accounts well enough to look at campaign data and have an informed conversation about what to change. You should be fluent in ROAS, CPA, CPM, CTR, and how they connect to funnel performance.",
      "Data-Driven Decision Making. Comfortable reviewing performance dashboards, attribution data (we use Hyros), and funnel analytics to make strategic recommendations. Gut instinct is valuable, but data wins.",
      "Client-Facing Confidence. This role requires weekly calls with high-profile creators and business owners. You must be articulate, professional, and confident when presenting results and recommendations. Creators trust us with their brand. You need to reinforce that trust every week.",
      "Communication and Leadership. Strong communicator who can lead a war room, set strategic direction for a team, and clearly articulate the rationale behind marketing decisions. You are not managing people. You are leading strategy.",
      "Versatility Across Niches. Ability to develop marketing strategies across multiple niches simultaneously. Our portfolio spans vocal coaching, business acquisition, trading education, career coaching, functional medicine, and more.",
      "Speed and Adaptability. Comfortable in a fast-moving environment where strategy evolves weekly based on real performance data. You do not get attached to plans that are not working.",
      "Nice to have: Agency founder or operator background. Experience building and scaling your own offers or running marketing for a portfolio of clients.",
    ],
    compensationAndBenefits: [
      "Base Salary. $12,000 per month.",
      "Profit Share. Percentage of pod profit across all offers you oversee. This role spans the entire portfolio, which means your profit share scales as the company grows. Significant upside for the right person.",
      "Strategic Leadership. You sit in the strategic leadership layer alongside the co-founders and Creative Director. This is not a middle-management role. Your decisions directly shape the trajectory of a $50M+ portfolio.",
      "AI-Powered Tools. Access to our proprietary Internal Hub built on $50M+ in performance data. This platform provides copy generation, creative briefing, and performance analytics designed to multiply your strategic output.",
      "Growth Path. As WSC scales to 15+ offers and beyond, this role grows in scope, compensation, and strategic influence. The right person in this seat becomes a true partner in the business.",
      "Remote and Flexible. Fully remote, results-driven culture. We care about output, not hours logged.",
    ],
  },
  {
    slug: "senior-copywriter",
    title: "Senior Copywriter",
    type: "Full-Time Contractor",
    location: "Remote (U.S. based)",
    department: "Creative",
    compensation: "$7,000 - $8,000/month base + profit share",
    summary:
      "Write high-converting ad copy, VSLs, and funnel pages across 5\u20138 creator offers generating six and seven figures monthly.",
    whoWeAre:
      "We Scale Creators is a performance marketing agency that partners with top influencers and info-product creators to build, launch, and scale high-performing offers. We operate on a profit-share model: we front all capital and ad spend, build funnels, run paid traffic, and scale aggressively. Our partners pay nothing upfront \u2014 we only win when they win. Our portfolio includes creators like Cheryl Porter (38M+ followers) alongside established info-product businesses across fitness, finance, career coaching, health, and business education. We\u2019ve generated $50M+ in revenue for our partners and currently manage multiple seven-figure monthly offers.",
    theRole:
      "We\u2019re hiring a Senior Copywriter to own copy across a portfolio of 5-8 creator offers generating six and seven figures monthly. You won\u2019t be writing in a vacuum. You\u2019ll work inside a pod-based team structure alongside a designer, media buyer, video editors, and virtual assistants, with creative direction from our Creative Director and marketing strategy from our Head of Performance Marketing. You\u2019ll participate in war room meetings where you pitch ad concepts, receive performance data, and collaborate on split-test strategies in real time. This is not an entry-level role. We need someone who can take a creative brief, internalize a client\u2019s voice, and produce high-converting copy across ads, funnels, emails, and VSLs without hand-holding. You\u2019ll have strategic direction and feedback loops, but between meetings, you execute autonomously and at volume. This is a high-base + profit share role with significant upside as the portfolio grows.",
    whatYoullDoHeading: "What You\u2019ll Do",
    whatYoullDo: [
      "Ad Copy at Volume: Write 40-50+ ad copy variations per week across your assigned offers \u2014 hooks, bodies, angles, and overlay text for both video and image ads.",
      "Funnel Copy & CRO: Write and optimize landing pages, order forms, upsell pages, and checkout flows. Run weekly split-tests with a CRO mindset, using data to drive decisions.",
      "Long-Form Sales Copy: Write VSL scripts, sales letters, email sequences, and upsell copy for both new launches and existing offers.",
      "Awareness-Level Targeting: Write across the full awareness spectrum (problem aware, solution aware, product aware, and most aware), tailoring messaging to where the audience is in their journey.",
      "War Room Participation: Participate in pod war rooms 2-3x/week where you\u2019ll pitch creative concepts, review performance data, and collaborate with the team on what\u2019s working and what to test next.",
      "Cross-Functional Collaboration: Work directly with our designer on ad creative pairing (your copy + their visuals), our media buyer on performance feedback loops, and our video editors on hook/body scripting.",
      "AI & Systems: Use our internal AI-powered tools, templates, and frameworks to move fast. We\u2019ve built systems to accelerate copy production \u2014 you\u2019ll leverage them, not fight them.",
    ],
    requirements: [
      "Direct Response Copywriting: 3+ years writing conversion-driven ads, VSLs, emails, and sales pages in the direct response space. Info-products, coaching, or creator economy experience strongly preferred.",
      "Proven Performance: Show us measurable results \u2014 CTR, CVR, ROAS, revenue generated, or before/after funnel metrics. We care about what your copy did, not just what it looked like.",
      "CRO & Data Literacy: Experience running split-tests and making data-driven improvements. You should be comfortable reading ad account metrics and understanding what they mean for your copy.",
      "Versatility Across Niches: Ability to write across multiple niches and adopt different brand voices quickly. Our portfolio spans vocal coaching, business acquisition, trading education, career coaching, health, and more.",
      "Speed + Quality: Can produce high-volume copy without sacrificing quality. 40-50+ ad variations per week is the baseline, not the ceiling.",
      "Communication: Clear communicator who thrives in a collaborative environment. You\u2019ll be in war rooms with the team multiple times per week and need to articulate your thinking.",
    ],
    compensationAndBenefits: [
      "Base Salary: $7,000-$8,000/month depending on experience.",
      "Profit Share: Percentage of pod profit across the offers you work on. As the portfolio scales, your bonus grows with it \u2014 top performers earn well above base.",
      "High-Impact Work: Write for some of the biggest creators and offers in the info-product space. Your copy will be seen by millions.",
      "Growth Path: As WSC scales to 15+ offers across multiple pods, top performers move into senior leadership roles with expanded scope and compensation.",
      "Remote & Flexible: Fully remote, results-driven culture. We care about output, not hours logged.",
    ],
  },
  {
    slug: "senior-media-buyer",
    title: "Senior Media Buyer",
    type: "Full-Time Contractor",
    location: "Remote (U.S. preferred)",
    department: "Marketing",
    compensation: "$7,000 - $8,000/month base + profit share",
    summary:
      "Scale paid media campaigns across Meta, LinkedIn, and YouTube \u2014 deploying $150K\u2013$300K+ monthly ad spend per client.",
    whoWeAre:
      "We Scale Creators is a performance marketing agency that partners with top influencers and info-product creators to build, launch, and scale high-performing offers. We operate on a profit-share model. We front all capital and ad spend, build funnels, run paid traffic, and scale aggressively. Our partners pay nothing upfront. We only win when they win. Our portfolio includes creators like Cheryl Porter (38M+ followers) alongside established info-product businesses across fitness, finance, career coaching, health, and business education. We have generated over $50M in revenue for our partners and currently manage multiple seven-figure monthly offers.",
    theRole:
      "We are hiring a Senior Media Buyer who is equal parts data-driven performance marketer and creative strategist. You will manage and scale paid media campaigns across Meta (primary), LinkedIn, and YouTube, deploying $150K to $300K+ in monthly ad spend per client across a portfolio of 5 to 8 active offers. This is a pivotal role within our pod-based team structure. You will work alongside a copywriter, designer, video editors, and virtual assistants with creative direction from our Creative Director and marketing strategy from our Head of Performance Marketing and directly from Leadership. You will participate in war room meetings multiple times per week where the team reviews performance data, identifies opportunities, and plans the next round of creative tests. You must thrive in a fast-paced environment, be obsessed with numbers and rapid iteration, and have the ownership mentality to drive consistent scale. When a campaign is working, you scale it. When it is not, you kill it fast and move on. We follow a Keep/Kill/Scale methodology and expect you to make those calls with confidence. This is a high-base plus profit share role with significant upside as the portfolio grows.",
    whatYoullDoHeading: "What You Will Do",
    whatYoullDo: [
      "Campaign Strategy and Execution. Own end-to-end execution of paid campaigns across Meta, LinkedIn, and YouTube. This includes strategy, audience segmentation, targeting, budget allocation, and ongoing optimization.",
      "Rapid Creative Launching. Launch new video, static, and copy creatives within a 12-hour turnaround. Speed of testing is a competitive advantage and a core expectation of this role.",
      "Budget Management and Scaling. Strategically deploy and manage $150K to $300K+ in monthly ad spend per client. You will be responsible for scaling winning campaigns aggressively while maintaining target KPIs.",
      "Keep/Kill/Scale Methodology. Evaluate every campaign, ad set, and creative through a Keep/Kill/Scale framework. Identify winners fast, cut losers faster, and allocate budget to what is performing. No emotional attachment to creative.",
      "Testing and Optimization. Implement rigorous split-testing across audiences, placements, creatives, and copy. Identify creative fatigue and audience saturation before they impact performance. Proactively recommend new test angles.",
      "Attribution and Analytics. Use Hyros for attribution tracking alongside platform-native analytics. Deliver detailed weekly performance reports covering ROAS, CPA, CTR, and CPM with clear insights, diagnostics, and recommended action plans.",
      "War Room Participation. Join pod war rooms 2 to 3 times per week. Review performance data with the team, provide feedback on which creatives are winning or losing, and collaborate on what to test next.",
      "Cross-Functional Collaboration. Work directly with our copywriter, designer, and leadership team to guide winning ad creation. Provide clear feedback on what types of hooks, angles, and visuals are performing so the creative team can produce more of what works.",
    ],
    requirements: [
      "Direct Response Media Buying. 3+ years managing performance-based paid media campaigns. Info-products, coaching, or creator economy experience is strongly preferred.",
      "Proven Scale. Track record of scaling campaigns to six or seven figures in monthly revenue across paid media platforms. Show us the numbers.",
      "Platform Proficiency. Deep expertise in Meta Business Manager (required). Working knowledge of LinkedIn Ads and YouTube Ads. Experience with Advantage+ campaigns is a plus.",
      "Attribution Expertise. Experience with Hyros or similar third-party attribution platforms. You should understand the difference between platform-reported and actual performance.",
      "Creative Testing Frameworks. Strong understanding of how to structure creative tests, read results, and translate performance data into actionable creative briefs for the team.",
      "KPI Analysis. Ability to derive insights from CPA, ROAS, CTR, CPM, and funnel conversion data that influence both creative and budget allocation decisions.",
      "Speed and Decisiveness. Comfortable making fast budget and optimization decisions with real money on the line. Hesitation costs money in this role.",
      "Communication. Excellent communicator who can clearly articulate what is working, what is not, and why. You will be in war rooms with the team multiple times per week and on performance calls with leadership.",
      "Availability. U.S.-based or willing to work full-time during U.S. business hours.",
    ],
    compensationAndBenefits: [
      "Base Salary. $7,000 to $8,000 per month, depending on experience.",
      "Profit Share. Percentage of pod profit across the offers you manage. As the portfolio scales, your bonus grows with it. Top performers earn well above base.",
      "Real Budget, Real Impact. You will manage millions in annual ad spend across some of the biggest offers in the creator economy. This is not a small-budget testing role.",
      "Performance Feedback Loop. Your optimization decisions directly impact revenue. You will see the results of your work in real-time, every single day.",
      "Growth Path. As WSC scales to 15+ offers across multiple pods, top performers move into senior leadership roles with expanded scope and compensation.",
      "Remote and Flexible. Fully remote, results-driven culture. We care about output, not hours logged.",
    ],
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer (Direct-Response Advertising)",
    type: "Full-Time Contractor",
    location: "Remote (must be available during U.S. business hours)",
    department: "Creative",
    compensation: "$3,500 - $4,500/month",
    summary:
      "Design scroll-stopping paid ads and high-converting funnel graphics for top creators. Your work gets tested in-market every week.",
    whoWeAre:
      "We Scale Creators is a performance marketing agency that partners with top influencers and info-product creators to build, launch, and scale high-performing offers. We operate on a profit-share model. We front all capital and ad spend, build funnels, run paid traffic, and scale aggressively. Our partners pay nothing upfront. We only win when they win. Our portfolio includes creators like Cheryl Porter (38M+ followers) alongside established info-product businesses across fitness, finance, career coaching, health, and business education. We have generated over $50M in revenue for our partners and currently manage multiple seven-figure monthly offers.",
    theRole:
      "We are hiring a Graphic Designer who can blend conversion metrics with creative firepower. You will design scroll-stopping paid ads, high-performing funnel graphics, and brand-consistent visuals that drive millions in revenue. This is a fast-paced, high-output role embedded inside our pod-based team structure. You will work alongside a copywriter, media buyer, video editors, and virtual assistants with creative direction from our Creative Director and Founders directly. Your work gets tested in-market every single week, which means you will see direct, measurable results from what you create. You will receive creative briefs, overlay copy from our copywriting team, and brand guidelines for each client. Your job is to turn those inputs into compelling, conversion-focused ad creatives and funnel assets at volume and on deadline.",
    whatYoullDoHeading: "What You Will Do",
    whatYoullDo: [
      "Ad Creative Production. Design 10+ high-converting paid image ads per client per week. This includes static ads, carousel ads, and graphic overlays for video content.",
      "Funnel Graphics. Create sales page graphics, upsell and downsell visuals, testimonial graphics, order bump assets, and checkout page elements.",
      "Concept Translation. Turn hooks, copy, and offers into compelling, conversion-focused designs. You are not just making things look good. You are designing for action.",
      "Creative Research. Analyze market leaders and competitors for design inspiration and performance insights. Stay current on what is working in paid advertising creative.",
      "Team Collaboration. Work directly with our copywriter on ad creative pairing (their copy plus your visuals) and our media buyer on performance feedback. Participate in pod war rooms where the team reviews results and plans new concepts.",
      "Brand Consistency. Maintain visual alignment with each client\u2019s brand guidelines while pushing creative boundaries. Every client has a different look and feel, and you will need to move between them quickly.",
      "Rapid Iteration. When an ad creative shows early signs of performance, be ready to produce variations quickly. Speed of iteration is a competitive advantage.",
    ],
    requirements: [
      "Direct-Response Design Experience. 1 to 2 years designing ads for direct-response marketing campaigns. Info-products, coaching, or creator economy experience is a plus.",
      "Portfolio with Results. Strong portfolio showing paid ad creatives and funnel graphics. We want to see work that was designed to convert, not just look good. If you can share performance data on your designs, even better.",
      "Design for Conversion. Deep understanding of visual hierarchy, attention-grabbing layouts, and design principles that drive clicks and purchases. Aesthetics matter, but performance matters more.",
      "Tool Proficiency. Proficiency in Adobe Creative Suite, Figma, or similar design tools. You should be fast and efficient in your primary tool.",
      "High Volume, High Quality. Proven ability to produce at high volume without sacrificing quality. This role requires consistent output across multiple clients every week.",
      "Tight Deadlines. Comfortable working in a high-speed environment with non-negotiable deadlines. When a campaign needs creative, it cannot wait.",
      "Communication. Strong communication skills for cross-functional collaboration. You will receive feedback from the Creative Director and need to implement revisions quickly and accurately.",
      "Availability. Must be available during U.S. business hours for real-time collaboration, war room meetings, and feedback loops. Timezone is flexible as long as availability is consistent.",
    ],
    compensationAndBenefits: [
      "Base Salary. $3,500 to $4,500 per month, depending on experience and portfolio strength.",
      "High-Impact Work. Design ads and funnels for some of the biggest creators and offers in the info-product space. Your work will be seen by millions of people all around the world.",
      "Direct Performance Feedback. Unlike most design roles, you will see exactly how your creatives perform in-market every week. This is an incredible learning environment for any designer who wants to get better fast.",
      "Growth Opportunity. As WSC scales to 15+ offers across multiple pods, high performers take on more responsibility and higher compensation.",
      "Remote and Flexible. Fully remote, results-driven culture. We care about output, not hours logged.",
    ],
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}
