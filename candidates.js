// candidates.js (Version 3.0 - The Complete Dossier)

const candidates = [
  {
    name: "James Craig",
    bio: "Former Chief of the Detroit Police Department.",
    platforms: {
      safety: "Wants to increase police presence and funding, with a primary focus on traditional law enforcement, patrol, and reducing crime rates through arrests.",
      economy: "Believes attracting large corporate business investment is the key to job creation. Supports tax incentives for major developers to spur growth.",
      accountability: "Focuses on accountability for street-level crime, with less emphasis on corporate or financial regulation."
    },
    endorsements: [
      "Detroit Police Officers Association (DPOA)",
      "Detroit Regional Chamber of Commerce PAC",
      "Several prominent suburban business leaders",
      "Law & Order focused community groups"
    ],
    potentialNegatives: [
      "Perceived as out of touch with neighborhood-level concerns beyond policing.",
      "His past affiliation with the Republican party is a major challenge in a heavily Democratic city.",
      "Criticism over his handling of the 2020 protests and use of controversial crowd-control tactics.",
      "Questions surrounding a federal investigation into the city's towing contracts that occurred during his tenure as chief ('Tow-Gate')."
    ],
    score: 0
  },
  {
    name: "Mary Sheffield",
    bio: "Current City Council President and author of the Community Benefits Ordinance.",
    platforms: {
      accountability: "Authored the city's Community Benefits Ordinance to legally hold developers accountable. Supports full transparency in city finances.",
      economy: "Champions an 'Inclusionary Growth' model to create better, high-paying jobs for residents and support neighborhood small business, reducing dependence on the wealthy.",
      safety: "A strong advocate for a holistic safety model, including expanding mental health co-responder units and investing in youth recreation and services to prevent crime.",
      food: "Wants to use city-owned vacant land to create urban farms and support community gardens to end food deserts."
    },
    endorsements: [
      "Detroit Free Press (Editorial Board Endorsement)",
      "UAW (United Auto Workers) Region 1A",
      "SEIU Michigan",
      "Michigan People's Campaign (Progressive Group)",
      "Several major faith leaders and community development corporations"
    ],
    potentialNegatives: [
      "Opponents label her 'anti-business' due to her focus on regulations like the Community Benefits Ordinance.",
      "As Council President, she is tied to the current city government, making her a target for anti-incumbent sentiment.",
      "Criticism from some activists that the Community Benefits Ordinance lacks sufficient enforcement power.",
      "Her policy-heavy approach can come across as less charismatic than some opponents."
    ],
    score: 0
  },
  {
    name: "Todd Perkins",
    bio: "Attorney focused on justice and government reform.",
    platforms: {
      accountability: "Proposes a new Department of Corporate Accountability to audit and enforce deals with developers. Wants to use legal means to punish corporate wrongdoing.",
      transparency: "Wants to appoint a truly independent Inspector General to oversee all city contracts and finances, removing political influence.",
      safety: "Advocates for expanding mental health courts and pre-arrest diversion programs to ensure people with mental health issues get treatment, not jail time."
    },
    endorsements: [
      "The Detroit News (Editorial Board Endorsement for his fiscal plans)",
      "Good Government for Michigan (Reform Group)",
      "Several prominent local attorneys and legal scholars",
      "Citizen's Watchdog groups"
    ],
    potentialNegatives: [
      "Has never held elected office, leading to questions about his experience in managing a large government bureaucracy.",
      "Can be perceived as a single-issue candidate focused only on accountability and reform.",
      "Lacks the broad name recognition and fundraising network of candidates like Sheffield or Craig.",
      "His legalistic approach may not resonate with voters focused on immediate issues like jobs and city services."
    ],
    score: 0
  },
    {
    name: "Danetta Simpson",
    bio: "Long-time community advocate and populist activist.",
    platforms: {
      accountability: "Her primary goal is ending corporate welfare and tax captures for wealthy developers. Wants to aggressively punish crooked businesses.",
      transparency: "Calls for a radical 'people's budget' that provides real-time, easily understandable data on all city finances and spending.",
      economy: "Wants a resident-led economy and is strongly anti-corporate, believing the city is too dependent on the wealthy."
    },
    endorsements: [
      "Detroit Anti-Gentrification Coalition",
      "Grassroots community activist groups",
      "Socialist Alternative - Detroit Chapter"
    ],
    potentialNegatives: [
      "Considered a perennial candidate who has run for office multiple times without success.",
      "Proposals are viewed by mainstream critics as politically and economically unfeasible.",
      "Lacks any major endorsements from unions, political parties, or business groups.",
      "Struggles significantly with fundraising, limiting her campaign's reach."
    ],
    score: 0
  },
  {
    name: "Fred Durhal III",
    bio: "Current Detroit City Councilman representing a specific district.",
    platforms: {
      youth: "Has a strong record of supporting funding for parks, community programs, and recreation centers to provide more things for kids to do.",
      neighborhoods: "A major advocate for neighborhood needs, blight removal, and ensuring city resources are distributed equitably beyond downtown.",
      safety: "Has supported pilot programs for mental health funding and co-responders as part of a balanced approach to public safety."
    },
    endorsements: [
        "AFL-CIO Metro Detroit",
        "Several local district political leaders",
        "Some smaller building trades unions"
    ],
    potentialNegatives: [
        "His voting record includes support for some controversial tax incentives he now critiques, opening him to charges of flip-flopping.",
        "Struggles to build a strong city-wide profile beyond his own council district.",
        "As an incumbent councilman, he shares some responsibility for the city's current state, making it harder to run as a change candidate."
    ],
    score: 0
  },
  {
    name: "Saunteel Jenkins",
    bio: "Former Detroit City Council President with deep experience in city management.",
    platforms: {
      services: "Promises to improve the efficiency and delivery of all city services, from trash pickup to blight removal, based on her management experience.",
      economy: "Supports a stable, managed approach to economic development, working with existing corporate partners and developers through public-private partnerships.",
      safety: "Supports professional policing and has a record of funding the police department, while also being open to some community-based programs."
    },
    endorsements: [
        "Several former city officials and establishment figures",
        "Some corporate PACs who see her as a stable and predictable choice"
    ],
    potentialNegatives: [
        "Represents the 'old guard' of Detroit politics in a race where many voters want change.",
        "Her time away from public office makes her seem less connected to the city's current issues.",
        "Her past work as a corporate consultant after leaving office has created conflict of interest concerns."
    ],
    score: 0
  },
  {
    name: "Joel Haashiim",
    bio: "Entrepreneur focused on grassroots and neighborhood businesses.",
    platforms: {
      economy: "Wants to build the economy from the ground up by providing resources and training for local entrepreneurs and neighborhood small business owners.",
      jobs: "Focuses on job training for skilled trades and local startups to create a self-reliant economy not dependent on large outside corporations.",
      neighborhoods: "Believes that strengthening neighborhood small businesses is the key to revitalizing the entire city."
    },
    endorsements: [
        "Metro Detroit Small Business Association",
        "Neighborhood business groups on the west side"
    ],
    potentialNegatives: [
        "Has very limited name recognition across the city.",
        "Platform is perceived as too narrowly focused on entrepreneurship, with less detail on safety, housing, and other major issues.",
        "Lacks the fundraising to compete with the top-tier candidates on TV and radio."
    ],
    score: 0
  },
    {
    name: "Solomon Kinloch",
    bio: "Prominent pastor with a focus on social justice.",
    platforms: {
      safety: "Advocates for treating mental health and addiction as a public health crisis, not a crime. Wants to create treatment centers as an alternative to jail.",
      poverty: "Wants to address the root causes of poverty and crime through moral leadership and programs that help the city's most marginalized residents.",
      food: "Has spoken extensively on the moral failure of food deserts and supports community-led solutions like urban farms and co-op grocery stores."
    },
    endorsements: [
        "Coalition of Interfaith Leaders for Action",
        "Several non-profits focused on poverty and social services"
    ],
    potentialNegatives: [
        "No prior experience in government or public administration.",
        "Some voters are wary of blurring the lines between church and state.",
        "His platform is sometimes criticized as being high on moral vision but low on specific, funded policy details."
    ],
    score: 0
  }
];