export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/case-studies', label: 'Case Studies' },
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
    'Start a project with Bonus Creative. Talk directly with Bo Wright about branded films, documentary content, nonprofit storytelling, church media, and event video production.'
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
    poster: '/posters/goodwill-production-poster.svg',
    posterImage: '/images/goodwill-production-group.jpeg',
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
    externalUrl: '',
    externalLabel: ''
  },
  {
    slug: 'oklahoma-heismen',
    title: 'The Oklahoma Heismen',
    category: 'Feature documentary',
    poster: '/posters/oklahoma-heismen-production-poster.svg',
    posterImage: '/images/heismen-camera-setup.jpeg',
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
    externalUrl: 'https://youtu.be/06iucfl9jxQ?si=DXIv1z-TCmH8kGLm',
    externalLabel: 'Watch on YouTube'
  },
  {
    slug: 'mission-stories',
    title: 'Mission stories',
    category: 'Nonprofit',
    poster: '/posters/voices-of-okc-mission-stories-poster.svg',
    posterImage: '/images/goodwill-production-group.jpeg',
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
    poster: '/posters/goodwill-production-poster.svg',
    posterImage: '/images/goodwill-production-group.jpeg',
    posterEyebrow: 'Case study / community story',
    posterTitle: 'GOODWILL',
    posterTagline: 'Grounded. Human. Useful.',
    previewVideo: site.hero.reelVideo,
    href: '/case-studies/goodwill',
    linkLabel: 'Read case study',
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
    poster: '/posters/oklahoma-heismen-production-poster.svg',
    posterImage: '/images/heismen-camera-setup.jpeg',
    posterEyebrow: 'Feature documentary / Oklahoma story',
    posterTitle: 'THE OKLAHOMA HEISMEN',
    posterTagline: 'Camera, crew, and story in motion.',
    previewVideo: '',
    href: '/case-studies/oklahoma-heismen',
    linkLabel: 'Read case study',
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
    poster: '/posters/voices-of-okc-mission-stories-poster.svg',
    posterImage: '/images/goodwill-production-group.jpeg',
    posterEyebrow: 'Mission stories / community organization',
    posterTitle: 'VOICES of OKC',
    posterTagline: 'Honest stories for real communities.',
    previewVideo: site.hero.reelVideo,
    href: '/case-studies/mission-stories',
    linkLabel: 'Read case study',
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

export const cleanPhone = site.phone.replace(/[^\d]/g, '');

export const sameAs = [site.instagram, site.youtube];
