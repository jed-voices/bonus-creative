export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/reel', label: 'Reel' }
] as const;

export const seo = {
  homeTitle: 'Bonus Creative | Oklahoma Video Production by Bo Wright',
  homeDescription:
    'Bonus Creative is filmmaker-led video production in Oklahoma. Branded films, documentaries, nonprofit stories, church media, events, and post-production by Bo Wright.',
  aboutTitle: 'About Bo Wright',
  aboutDescription:
    'Meet Bo Wright, founder of Bonus Creative, an Oklahoma filmmaker creating branded films, documentary work, nonprofit stories, and church media with a lean, direct process.',
  servicesTitle: 'Video Production Services',
  servicesDescription:
    'Brand films, documentary storytelling, event coverage, and post-production from Bonus Creative. Clear process. Strong visuals. Story-first work.',
  contactTitle: 'Contact Bonus Creative',
  contactDescription:
    'Start a project with Bonus Creative. Talk directly with Bo Wright about branded films, documentary content, nonprofit storytelling, church media, and event video production.',
  portfolioTitle: 'Portfolio',
  portfolioDescription:
    'Explore Bonus Creative portfolio work from Bo Wright, including branded films, documentaries, nonprofit stories, church media, drone cinematography, events, and production support.'
} as const;

export const site = {
  name: 'Bonus Creative',
  shortName: 'Bonus',
  domain: 'https://bonuscreative.com',
  location: 'Oklahoma City, Oklahoma',
  coverage: 'Oklahoma and projects that travel well.',
  email: 'bo.wright@bonuscreative.com',
  phone: '405.819.8383',
  instagram: 'https://instagram.com/bonus_creative',
  youtube: 'https://www.youtube.com/channel/UC5OfYdrlVLZHthIdXeUUeYw/videos',
  description: seo.homeDescription,
  footerLine:
    'Filmmaker-led video production for brands, nonprofits, churches, and organizations.',
  newsletterLine: 'Occasional updates. Useful stuff. No inbox abuse.',
  contactMicrocopy: "No deck required. Just tell me what you're trying to make.",
  founder: {
    name: 'Bo Wright',
    title: 'Award-winning writer, director, and filmmaker.'
  },
  hero: {
    eyebrow: 'Oklahoma video production',
    title: 'Films with a clear point of view.',
    description:
      "I'm Bo Wright. I write, direct, shoot, and edit story-driven work for brands, nonprofits, churches, and organizations that want something sharper than generic content. No middlemen. No bloated process. Just clear collaboration from first idea to final cut.",
    reelTitle: 'Watch the Reel',
    reelHref: '/reel',
    projectTitle: 'Start a Project',
    projectHref: '/contact',
    reelLabel:
      'Story-first work across branded films, documentaries, mission stories, event coverage, and Oklahoma-rooted projects.',
    reelVideo: '/reel/2025_bo_wright_demo_reel_v1_1080p.mp4',
    reelPoster: '/posters/reel-landscape.svg'
  },
  proof: [
    'One filmmaker from concept to final cut.',
    'Clear communication. Faster decisions.',
    'Branded films, docs, events, and content support.',
    'Built for real organizations.'
  ],
  reel: {
    title: 'Producer Reel',
    heading: 'Bo Wright Producer Reel.',
    description:
      'A dedicated playback page built for clean presentation, fast loading, and a cinematic frame that keeps the work at the center.'
  }
} as const;

export const home = {
  intro: {
    eyebrow: 'How I work',
    title: 'Story first. Process second. Ego last.',
    body:
      'Some projects need a brand film. Some need a mini-doc. Some need event coverage, campaign cutdowns, or a clean edit that finally makes the story land. The format changes. The job does not: find the point, make it feel human, and deliver something worth watching.'
  },
  featuredWork: {
    eyebrow: 'Featured work',
    title: 'A few ways the work shows up.',
    intro:
      'From mission-driven organizations to documentary projects and live events, I build each piece around rhythm, clarity, and the kind of visual restraint that makes the story hit harder.'
  },
  servicesPreview: {
    eyebrow: 'Services',
    title: 'What I do',
    body:
      'I help organizations turn real stories into work that looks strong, sounds like them, and actually gets used.'
  },
  cta: {
    eyebrow: 'Start a project',
    title: "Let's make something people actually remember.",
    body:
      "Tell me what you're making, who it's for, and where it needs to work. A rough idea is enough. I'll help shape the rest.",
    buttonLabel: 'Tell Me About the Project',
    buttonHref: '/contact',
    footer: 'Direct communication. Clear next steps. No mystery layer in the middle.'
  }
} as const;

export const servicesPage = {
  title: 'What I actually help with.',
  copy:
    "You don't need a giant agency. You need the right idea, strong execution, and a process that doesn't waste a month of your life.",
  closer:
    "Every project doesn't need a big crew. It needs good instincts, clear direction, and someone who knows where the story actually is."
} as const;

export const services = [
  {
    slug: 'brand-films',
    title: 'Brand films',
    summary:
      'For brands, founders, and organizations that need more than a nice-looking promo.',
    body:
      'These films clarify who you are, what you do, and why people should care.'
  },
  {
    slug: 'documentary-and-mission-stories',
    title: 'Documentary and mission stories',
    summary:
      'For nonprofits, churches, and teams with real stories and real stakes.',
    body:
      'This is slower, deeper storytelling built around interviews, texture, pacing, and emotional honesty.'
  },
  {
    slug: 'events-and-campaigns',
    title: 'Events and campaigns',
    summary:
      'Recaps, launches, conferences, fundraisers, and campaign cutdowns that keep working after the room empties.',
    body: 'Not just coverage. Useful assets.'
  },
  {
    slug: 'post-production-and-production-partner',
    title: 'Post-production and production partner',
    summary:
      'Need someone to shoot, edit, direct, finish, or just step in and carry the project forward?',
    body:
      'I can plug into a team or take it start to finish without adding friction.'
  }
] as const;

export const about = {
  heading: 'I built Bonus Creative to keep the story close to the person telling it.',
  heroCopy:
    'When you hire me, you are not getting passed from strategy to producer to shooter to editor. You are working with the same person all the way through.',
  body: [
    "I'm Bo Wright, founder of Bonus Creative. I've spent more than 20 years writing, directing, filming, and editing work that lives somewhere between branded storytelling and documentary instinct. My background includes documentaries, church campaigns, nonprofit stories, and client work for organizations including Butterfield Foundation, Dale Rogers Training Center, and Lakewood Church.",
    'I built Bonus Creative around a simple idea: the fewer layers between the story and the storyteller, the better the work usually gets. So when you hire me, you are not getting passed from strategy to producer to shooter to editor. You are working with the same person all the way through.',
    "That matters because good work usually gets lost in the handoff. I'd rather keep the line short, the communication clear, and the final piece honest."
  ],
  notesTitle: 'What I bring',
  notes: [
    '20+ years of story-first work.',
    'Director and writer of The Oklahoma Heismen.',
    'Publicly listed work spanning nonprofits, churches, branded films, and documentary content.'
  ]
} as const;

export const projects = [
  {
    slug: 'goodwill',
    title: 'Goodwill',
    category: 'Case study',
    poster: '/images/portfolio/goodwill-case-study.webp',
    posterImage: '/images/portfolio/goodwill-case-study.webp',
    posterEyebrow: 'Case study / community story',
    posterTitle: 'GOODWILL',
    posterTagline: 'Grounded. Human. Useful.',
    summary:
      'A grounded story built to make the impact feel immediate, credible, and human.',
    outcome:
      'A clearer story asset for web, fundraising, and community-facing communication.',
    challenge:
      'Show real impact without falling into generic nonprofit language or sentimental overreach.',
    approach:
      'Center the people, keep the language honest, and let rhythm and restraint carry the emotion.',
    role:
      'Concept, directing, interviews, cinematography, edit, finishing',
    result:
      'A film that helped the work feel human first and institutional second.',
    href: '/case-studies/goodwill',
    linkLabel: 'Read Goodwill case study',
    external: false,
    externalUrl: '',
    externalLabel: ''
  },
  {
    slug: 'oklahoma-heismen',
    title: 'The Oklahoma Heismen',
    category: 'Feature documentary',
    poster: '/images/portfolio/feature-documentary.webp',
    posterImage: '/images/portfolio/feature-documentary.webp',
    posterEyebrow: 'Feature documentary / Oklahoma story',
    posterTitle: 'THE OKLAHOMA HEISMEN',
    posterTagline: 'Camera, crew, and story in motion.',
    summary:
      'A feature project shaped by place, legacy, and a feel for what makes Oklahoma stories stick.',
    outcome:
      'A film that turned legendary material into something human, local, and cinematic.',
    challenge:
      'Tell a well-known sports story without making it feel distant, archival, or overly reverent.',
    approach:
      'Build around voice, memory, structure, and place so the film carries both scale and heart.',
    role: 'Writer, director, and filmmaker',
    result:
      'A feature documentary with a strong sense of place, memory, and Oklahoma pride.',
    href: '/portfolio#oklahoma-heismen',
    linkLabel: 'View project',
    external: false,
    externalUrl: 'https://youtu.be/06iucfl9jxQ?si=DXIv1z-TCmH8kGLm',
    externalLabel: 'Watch on YouTube'
  },
  {
    slug: 'mission-stories',
    title: 'Mission stories',
    category: 'Nonprofit',
    poster: '/images/portfolio/mission-stories.webp',
    posterImage: '/images/portfolio/mission-stories.webp',
    posterEyebrow: 'Mission stories / community organization',
    posterTitle: 'VOICES of OKC',
    posterTagline: 'Honest stories for real communities.',
    summary:
      'Short films for nonprofits, churches, and community organizations that need honesty more than hype.',
    outcome:
      'More useful story assets for donors, partners, events, and year-round communication.',
    challenge:
      'Mission work deserves honesty. The story has to move people without flattening the people in it.',
    approach:
      'Stay close to the human thread, keep the camera patient, and cut for clarity instead of noise.',
    role:
      'Creative direction, production, interviews, edit, delivery',
    result:
      'Story assets that feel grounded, watchable, and worth sharing.',
    href: '/portfolio#mission-stories',
    linkLabel: 'View portfolio',
    external: false,
    externalUrl: '',
    externalLabel: ''
  }
] as const;

export const work = [
  {
    slug: 'goodwill',
    title: 'Goodwill',
    category: 'Case study',
    summary:
      'A grounded story built to make the impact feel immediate, credible, and human.',
    poster: '/images/portfolio/goodwill-case-study.webp',
    posterImage: '/images/portfolio/goodwill-case-study.webp',
    posterEyebrow: 'Case study / community story',
    posterTitle: 'GOODWILL',
    posterTagline: 'Grounded. Human. Useful.',
    previewVideo: site.hero.reelVideo,
    href: '/case-studies/goodwill',
    linkLabel: 'Read Goodwill case study',
    external: false,
    secondaryHref: '',
    secondaryLabel: '',
    secondaryExternal: false
  },
  {
    slug: 'oklahoma-heismen',
    title: 'The Oklahoma Heismen',
    category: 'Feature documentary',
    summary:
      'A feature project shaped by place, legacy, and a feel for what makes Oklahoma stories stick.',
    poster: '/images/portfolio/feature-documentary.webp',
    posterImage: '/images/portfolio/feature-documentary.webp',
    posterEyebrow: 'Feature documentary / Oklahoma story',
    posterTitle: 'THE OKLAHOMA HEISMEN',
    posterTagline: 'Camera, crew, and story in motion.',
    previewVideo: '',
    href: '/portfolio#oklahoma-heismen',
    linkLabel: 'View project',
    external: false,
    secondaryHref: 'https://youtu.be/06iucfl9jxQ?si=DXIv1z-TCmH8kGLm',
    secondaryLabel: 'Watch on YouTube',
    secondaryExternal: true
  },
  {
    slug: 'mission-stories',
    title: 'Mission stories',
    category: 'Nonprofit',
    summary:
      'Short films for nonprofits, churches, and community organizations that need honesty more than hype.',
    poster: '/images/portfolio/mission-stories.webp',
    posterImage: '/images/portfolio/mission-stories.webp',
    posterEyebrow: 'Mission stories / community organization',
    posterTitle: 'VOICES of OKC',
    posterTagline: 'Honest stories for real communities.',
    previewVideo: site.hero.reelVideo,
    href: '/portfolio#mission-stories',
    linkLabel: 'View portfolio',
    external: false,
    secondaryHref: '',
    secondaryLabel: '',
    secondaryExternal: false
  }
] as const;

export const workPage = {
  title: 'Different kinds of work. Same standard.',
  copy:
    'Every project needs its own rhythm. The goal stays the same: make people feel something true, understand it quickly, and remember it after the video ends.',
  intro:
    'Some pieces are polished and strategic. Some are raw and human. Some need to move fast. Some need room to breathe. What ties them together is clarity, restraint, and a point of view.',
  ctaTitle: "Need something like this, but built for your story? Let's talk."
} as const;

export const portfolioPage = {
  eyebrow: 'Portfolio',
  title: 'The work, without making it weird.',
  copy:
    'A practical look at the films, stories, event work, and production support Bonus Creative has been built to handle.',
  intro:
    'The format changes from project to project. The standard does not. Bo builds pieces around clear purpose, human pacing, and enough visual restraint to let the story do its job.',
  ctaTitle: "Have something that belongs in this mix? Let's talk."
} as const;

export const portfolioHighlights = [
  {
    slug: 'goodwill',
    eyebrow: 'Goodwill case study',
    title: 'Goodwill',
    image: '/images/portfolio/goodwill-case-study.webp',
    images: [
      '/images/portfolio/goodwill-case-study.webp',
      '/images/portfolio/goodwill-monitor.webp',
      '/images/portfolio/goodwill-interview-wide.webp'
    ],
    imageAlt: 'Bo Wright filming an interview for a community story.',
    body:
      'A grounded community story shaped to make the impact feel immediate, credible, and human.',
    href: '/case-studies/goodwill',
    label: 'Read Goodwill case study'
  },
  {
    slug: 'oklahoma-heismen',
    eyebrow: 'Feature documentary',
    title: 'Feature documentary',
    image: '/images/portfolio/feature-documentary.webp',
    images: [
      '/images/portfolio/feature-documentary.webp',
      '/images/heismen-camera-setup.jpeg',
      '/images/heismen-production-room.jpeg'
    ],
    imageAlt: 'Bo Wright operating a cinema camera outdoors.',
    body:
      'The Oklahoma Heismen is a feature project shaped by place, legacy, football history, and a feel for what makes Oklahoma stories stick.',
    href: 'https://youtu.be/06iucfl9jxQ?si=DXIv1z-TCmH8kGLm',
    label: 'Watch on YouTube'
  },
  {
    slug: 'mission-stories',
    eyebrow: 'Mission stories',
    title: 'Mission stories',
    image: '/images/portfolio/mission-stories.webp',
    images: [
      '/images/portfolio/mission-stories.webp',
      '/images/portfolio/mission-production-wide.webp',
      '/images/goodwill-production-group.jpeg'
    ],
    imageAlt: 'A production room set for a mission-driven interview.',
    body:
      'Short story-driven films for teams that need honesty, clarity, and real people on screen instead of hype.',
    href: '/contact',
    label: 'Talk through a story'
  }
] as const;

export const portfolioExamples = [
  {
    slug: 'corporate-who-we-are-video',
    eyebrow: 'Corporate video production',
    title: 'Corporate who-we-are video',
    image: '/images/portfolio/corporate-who-we-are.webp',
    images: [
      '/images/portfolio/corporate-who-we-are.webp',
      '/images/portfolio/warm-interview-01.webp',
      '/images/portfolio/bo-camera-rig-01.webp'
    ],
    imageAlt: 'An interview framed through a production camera monitor.',
    body:
      'A direct way to let clients, recruits, and partners hear from the people behind the work without turning it into corporate wallpaper.'
  },
  {
    slug: 'corporate-explainer-video',
    eyebrow: 'Corporate video production',
    title: 'Corporate explainer video',
    image: '/images/portfolio/corporate-explainer.webp',
    images: [
      '/images/portfolio/corporate-explainer.webp',
      '/images/portfolio/warm-interview-02.webp',
      '/images/portfolio/bo-camera-rig-02.webp'
    ],
    imageAlt: 'A production camera and interview setup in a bright office space.',
    body:
      'A focused piece for explaining a service, team, process, or part of the business clearly enough that people can actually use it.'
  },
  {
    slug: 'mini-docs',
    eyebrow: 'Documentaries / stories',
    title: 'Mini-docs',
    image: '/images/portfolio/mini-docs.webp',
    images: [
      '/images/portfolio/mini-docs.webp',
      '/images/portfolio/warm-interview-03.webp',
      '/images/portfolio/bo-camera-rig-03.webp'
    ],
    imageAlt: 'A cinematic interview frame from a documentary-style production.',
    body:
      'Short documentary-style stories for organizations with real people, real stakes, and more to say than a thirty-second promo can handle.'
  },
  {
    slug: 'church-stories',
    eyebrow: 'Church stories',
    title: 'Church stories',
    image: '/images/portfolio/church-stories.webp',
    images: [
      '/images/portfolio/church-stories.webp',
      '/images/portfolio/bo-camera-rig-04.webp',
      '/images/portfolio/bo-camera-rig-05.webp'
    ],
    imageAlt: 'A warm interview frame for a story-driven film.',
    body:
      'Message, testimony, ministry, and campaign films shaped to feel warm, grounded, and human instead of overproduced.'
  },
  {
    slug: 'drone-demo-reel',
    eyebrow: 'Drone cinematography',
    title: '2024 drone demo reel',
    image: '/images/portfolio/drone-demo-reel.webp',
    images: [
      '/images/portfolio/drone-demo-reel.webp',
      '/images/portfolio/bo-camera-profile.webp',
      '/images/portfolio/bo-camera-rig-06.webp'
    ],
    imageAlt: 'Bo Wright monitoring a cinema camera during an outdoor production.',
    body:
      'Aerial footage used for scale, movement, location, and context. Pretty shots are fine. Useful pretty shots are better.'
  },
  {
    slug: 'event-coverage',
    eyebrow: 'Events / conferences',
    title: 'Event coverage',
    image: '/images/portfolio/event-coverage.webp',
    images: [
      '/images/portfolio/event-coverage.webp',
      '/images/portfolio/bo-camera-working.webp',
      '/images/portfolio/bo-camera-rig-07.webp'
    ],
    imageAlt: 'A wide production setup with lighting, cameras, and interview subjects.',
    body:
      'Coverage for launches, fundraisers, conferences, and corporate events that turns the day into assets people can keep using.'
  },
  {
    slug: 'convention-coverage',
    eyebrow: 'Conventions / trade shows',
    title: 'Convention coverage',
    image: '/images/portfolio/convention-coverage.webp',
    images: [
      '/images/portfolio/convention-coverage.webp',
      '/images/portfolio/bo-camera-smile.webp',
      '/posters/oklahoma-heismen-youtube.jpg'
    ],
    imageAlt: 'A camera, light, and interview setup prepared for event coverage.',
    body:
      'Start-to-finish convention support for teams that need recap films, speaker moments, sponsor assets, and practical content from the room.'
  }
] as const;

export const portfolioCategories = [
  {
    slug: 'corporate-who-we-are',
    eyebrow: 'Corporate video production',
    title: 'Who-we-are films',
    body:
      'Clear, human films that let clients, customers, and recruits understand the people behind the organization.',
    details: ['Leadership and team stories', 'Culture and recruiting pieces', 'Company overview films']
  },
  {
    slug: 'corporate-explainers',
    eyebrow: 'Corporate video production',
    title: 'Explainer videos',
    body:
      'Focused pieces that make a service, process, product, or part of the business easier to understand and easier to share.',
    details: ['Service explainers', 'Product or process videos', 'Internal communication support']
  },
  {
    slug: 'mini-docs',
    eyebrow: 'Documentaries / stories',
    title: 'Mini-docs',
    body:
      'Documentary-style stories with enough room for interviews, texture, pacing, and a real emotional center.',
    details: ['Founder stories', 'Mission-driven stories', 'Character-led short documentaries']
  },
  {
    slug: 'church-stories',
    eyebrow: 'Church stories',
    title: 'Church and ministry films',
    body:
      'Story-first support for churches and ministries that need message, testimony, event, or campaign work to feel grounded.',
    details: ['Testimony films', 'Vision pieces', 'Production team support']
  },
  {
    slug: 'drone-cinematography',
    eyebrow: 'Drone cinematography',
    title: 'Aerial work with a reason',
    body:
      'Drone footage used for scale, context, and rhythm. Not just because drones exist, which is a low bar and somehow still missed.',
    details: ['Aerial establishing shots', 'Location context', 'Event and campaign footage']
  },
  {
    slug: 'events-conventions',
    eyebrow: 'Conventions / trade shows / events',
    title: 'Event and convention coverage',
    body:
      'Coverage that keeps working after the room empties: recaps, speaker cutdowns, sponsor assets, and social-ready edits.',
    details: ['Conference recaps', 'Fundraiser and launch films', 'Convention coverage']
  },
  {
    slug: 'production-partner',
    eyebrow: 'Production partner',
    title: 'Shooting, editing, and finishing support',
    body:
      'A reliable extra set of experienced hands for teams that need someone to shoot, direct, edit, finish, or carry a project forward.',
    details: ['Shooter-editor support', 'Post-production', 'Oklahoma production support']
  }
] as const;

export const contactPage = {
  title: "Let's make something worth watching.",
  copy:
    "Tell me what you're making, who it's for, and what the video needs to do. A few sentences is plenty.",
  formIntro:
    "You don't need a polished brief. A rough idea works. I can help with the shape from there.",
  formHelper:
    "What's the story, what's the timeline, and what would success look like?",
  formHandoff:
    'Submitting opens your email app with the project details already filled in.',
  submitLabel: 'Start the Conversation',
  footerLine: 'Direct communication. Clear next steps. No mystery layer in the middle.'
} as const;

export const faq = [
  {
    q: 'Why not just hire a big agency?',
    a: "You can. But if you want fewer meetings, fewer handoffs, and one person who actually knows your project front to back, I'm probably a better fit."
  },
  {
    q: 'Do I need a huge budget?',
    a: 'No. I run lean on purpose. The goal is to spend money on what shows up on screen, not on process for process\'s sake.'
  },
  {
    q: 'What kinds of clients are the best fit?',
    a: 'Brands, nonprofits, churches, founders, and organizations with something real to say and no interest in looking like everybody else.'
  },
  {
    q: "Can you work with people who aren't comfortable on camera?",
    a: "Absolutely. Most people aren't comfortable on camera. The job is to make the room calm enough that they stop performing and start sounding like themselves."
  },
  {
    q: 'Can you edit footage we already have?',
    a: 'Yes. If the raw material is there, I can shape it into something cleaner, sharper, and more watchable.'
  },
  {
    q: 'How involved do I need to be?',
    a: "Enough to be clear, not enough to lose a week of your life. I'll guide the process and keep things moving."
  }
] as const;

export const notFoundPage = {
  title: "This page went missing. The story didn't.",
  copy: 'The route may have moved, but the main site sections are still live below.'
} as const;

export type Project = (typeof projects)[number];
export type Service = (typeof services)[number];
export type WorkItem = (typeof work)[number];
export type PortfolioExample = (typeof portfolioExamples)[number];
export type PortfolioCategory = (typeof portfolioCategories)[number];

export const cleanPhone = site.phone.replace(/[^\d]/g, '');

export const sameAs = [site.instagram, site.youtube];
