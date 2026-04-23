export const site = {
  name: 'Bonus Creative',
  shortName: 'Bonus',
  domain: 'https://bonuscreative.com',
  location: 'Oklahoma',
  founder: {
    name: 'Bo Wright',
    title: 'Award-winning writer, director, and filmmaker.'
  },
  title: 'Oklahoma video producer for branded films, nonprofit storytelling, church media, and event coverage.',
  description:
    'Bonus Creative is a filmmaker-led studio in Oklahoma creating cinematic branded films, documentaries, nonprofit stories, church media, and event films with a lean, direct process.',
  email: 'bo.wright@bonuscreative.com',
  phone: '405.819.8383',
  instagram: 'https://instagram.com/bonus_creative',
  vimeo: '',
  youtube: 'https://www.youtube.com/channel/UC5OfYdrlVLZHthIdXeUUeYw/videos',
  hero: {
    eyebrow: 'Oklahoma video producer',
    title: 'Films with a clear point of view.',
    copy:
      'Bonus Creative is built for nonprofits, brands, churches, founders, and live events that need cinematic storytelling without agency drag. One filmmaker. One vision. Direct collaboration from concept to final cut.',
    reelTitle: 'Bo Wright demo reel',
    reelLabel: 'Story-first work across branded films, mission stories, event coverage, and documentary-style projects.',
    poster: '/posters/reel-poster.svg',
    videoUrl: ''
  },
  metrics: [
    { label: 'Direct collaboration', value: 'One filmmaker from first call to final cut' },
    { label: 'Lean process', value: 'Fewer handoffs. Faster decisions. Cleaner edits.' },
    { label: 'Story range', value: 'Nonprofits, churches, businesses, and organizations' },
    { label: 'Named work', value: 'Includes Goodwill and The Oklahoma Heismen' }
  ],
  trust: ['Bo Wright', 'Award-winning writer, director, and filmmaker', 'Filmmaker-led studio', 'Oklahoma-rooted'],
  testimonials: [
    {
      quote: 'Bo creates thoughtful, cinematic work for nonprofits, churches, businesses, and organizations, with named projects like Goodwill and The Oklahoma Heismen showing the range and clarity of the work.',
      person: 'Bonus Creative portfolio proof',
      role: 'Based on publicly featured site work'
    },
    {
      quote: 'The final film looked premium, but it still felt honest and human.',
      person: 'Client testimonial coming soon',
      role: 'Replace with approved client name and title'
    },
    {
      quote: 'Fast turnaround. Strong instincts. No wasted motion.',
      person: 'Client testimonial coming soon',
      role: 'Replace with approved client name and title'
    }
  ]
};

export const services = [
  {
    slug: 'branded-films',
    title: 'Branded films',
    summary:
      'For companies and founders who need a sharper story than a generic promo can carry.',
    body:
      'These films are built to clarify who you are, why your work matters, and what people should feel when they encounter the brand. The result should feel cinematic, precise, and credible.',
    deliverables: ['Brand film', 'Cutdowns for web and social', 'Interview-led story edit', 'Campaign support assets']
  },
  {
    slug: 'documentary-storytelling',
    title: 'Documentary and story-driven content',
    summary:
      'For real stories that need depth, restraint, and structure.',
    body:
      'This work is designed for organizations, leaders, ministries, and campaigns that need more than surface-level content. The emphasis stays on truth, pacing, and emotional clarity.',
    deliverables: ['Short documentary', 'Mini-doc series', 'Interview capture', 'Narrative edit strategy']
  },
  {
    slug: 'nonprofit-storytelling',
    title: 'Nonprofit storytelling',
    summary:
      'Mission films built to move donors, volunteers, partners, and communities.',
    body:
      'Nonprofit work needs trust as much as beauty. The goal is to honor the people in the story, make the mission legible, and give supporters a reason to step closer.',
    deliverables: ['Campaign film', 'Fundraising video', 'Program spotlight', 'Donor event visuals']
  },
  {
    slug: 'church-media',
    title: 'Church media',
    summary:
      'Story-first media for churches that want clarity, warmth, and visual restraint.',
    body:
      'From testimony films to vision pieces and event recaps, the work is shaped to feel grounded and cinematic rather than overproduced.',
    deliverables: ['Testimony film', 'Vision piece', 'Event recap', 'Ministry story assets']
  },
  {
    slug: 'event-coverage',
    title: 'Event and convention coverage',
    summary:
      'Fast-moving capture turned into polished assets with a real editorial finish.',
    body:
      'Good event coverage should do more than document the room. It should preserve energy, communicate quality, and create useful assets for the next launch, pitch, or campaign.',
    deliverables: ['Recap film', 'Same-week highlight edit', 'Speaker and sponsor cutdowns', 'Photo/video selects strategy']
  },
  {
    slug: 'drone-cinematography',
    title: 'Drone cinematography',
    summary:
      'Aerial work used with intent, not as visual filler.',
    body:
      'Drone footage works best when it adds scale, context, or rhythm. The approach stays restrained so the imagery actually strengthens the story.',
    deliverables: ['FAA-certified aerial capture', 'Establishing sequences', 'Location context', 'Integrated edit support']
  },
  {
    slug: 'production-partner',
    title: 'Production partner / shooter-editor for hire',
    summary:
      'A strong fit for agencies, teams, and producers who need an experienced filmmaking partner in Oklahoma.',
    body:
      'When the project already has creative direction in motion, Bonus Creative can step in as a trusted production partner with clean communication and high standards in the field and in post.',
    deliverables: ['Director of photography support', 'Field audio and interview capture', 'Editing and finishing', 'Oklahoma-based production support']
  }
] as const;

export const projects = [
  {
    slug: 'mission-film',
    title: 'Stories that carry weight',
    category: 'Nonprofit film',
    poster: '/posters/mission-film.svg',
    summary: 'A donor-facing mission film designed to make the work feel personal, clear, and urgent.',
    outcome: 'A stronger emotional entry point for supporters and a cleaner way to talk about impact.',
    challenge: 'The organization had real momentum, but its message still felt too broad and institutional.',
    approach: 'Build the film around one human thread, keep the language honest, and let the visuals carry weight without melodrama.',
    role: 'Concept, directing, interview strategy, cinematography, edit, finishing',
    result: 'A film that helped the mission feel immediate to donors, volunteers, and first-time viewers.'
  },
  {
    slug: 'brand-story',
    title: 'A brand with a pulse',
    category: 'Branded film',
    poster: '/posters/brand-story.svg',
    summary: 'A cinematic brand piece built to make the company feel more human and more memorable.',
    outcome: 'Sharper brand perception and a stronger flagship asset for web, sales, and social.',
    challenge: 'The business looked capable on paper but still lacked a film that felt alive.',
    approach: 'Focus on tension, texture, and real moments so the brand reads as human rather than over-scripted.',
    role: 'Creative direction, production, cinematography, edit',
    result: 'A premium-looking film that gave the company a more distinct visual identity.'
  },
  {
    slug: 'event-campaign',
    title: 'Moments with momentum',
    category: 'Event film',
    poster: '/posters/event-campaign.svg',
    summary: 'Event coverage shaped into a polished campaign asset instead of a disposable recap.',
    outcome: 'A fast-turn edit that extended the event’s value well beyond the room.',
    challenge: 'The footage needed to preserve energy without feeling chaotic or generic.',
    approach: 'Capture with the final rhythm in mind, build structure in the field, and edit for clarity, pace, and payoff.',
    role: 'Production planning, on-site capture, edit, delivery strategy',
    result: 'A recap film and supporting cutdowns that became useful content for promotion and follow-up.'
  }
] as const;

export const faq = [
  {
    q: 'What does working directly with one filmmaker change?',
    a: 'It keeps the story intact. Communication is clearer, decisions happen faster, and the final piece reflects one consistent point of view instead of a long chain of handoffs.'
  },
  {
    q: 'What kinds of clients are the best fit?',
    a: 'Brands, nonprofits, churches, founders, event teams, and organizations that care about story, clarity, and visual taste more than a bloated production process.'
  },
  {
    q: 'Can Bonus Creative handle both production and post?',
    a: 'Yes. The core model is concept through final cut, including directing, cinematography, editing, and drone coverage when the project calls for it.'
  }
] as const;
