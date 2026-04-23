export const site = {
  name: 'Bonus Creative',
  shortName: 'Bonus',
  domain: 'https://bonuscreative.com',
  location: 'Oklahoma',
  founder: {
    name: 'Bo Wright',
    title: 'Award-winning writer, director, and filmmaker.'
  },
  title: 'Oklahoma video production for branded films, documentaries, nonprofit storytelling, church media, and event coverage.',
  description:
    'Bonus Creative is a filmmaker-led studio in Oklahoma creating story-driven branded films, documentaries, nonprofit stories, church media, and event coverage with a lean, direct process.',
  email: 'bo.wright@bonuscreative.com',
  phone: '405.819.8383',
  instagram: 'https://instagram.com/bonus_creative',
  vimeo: '',
  youtube: 'https://www.youtube.com/channel/UC5OfYdrlVLZHthIdXeUUeYw/videos',
  hero: {
    eyebrow: 'Oklahoma video production',
    title: 'Films with a clear point of view.',
    copy:
      'I’m Bo Wright. I write, direct, shoot, and edit story-driven work for brands, nonprofits, churches, and organizations that want something sharper than generic content. No middlemen. No bloated process. Just clear collaboration from first idea to final cut.',
    reelTitle: 'Bo Wright demo reel',
    reelLabel:
      'Story-first work across branded films, documentaries, mission stories, event coverage, and Oklahoma-rooted projects.',
    poster: '/posters/reel-poster.svg',
    videoUrl: '/reel/'
  },
  metrics: [
    { label: 'Direct collaboration', value: 'One filmmaker from first call to final cut' },
    { label: 'Lean process', value: 'Fewer handoffs. Faster decisions. Cleaner edits.' },
    { label: '20+ years', value: 'Documentary, branded, church, nonprofit, and event work' },
    { label: 'Featured work', value: 'Includes Goodwill and The Oklahoma Heismen' }
  ],
  trust: [
    'Led by Bo Wright',
    'Award-winning writer, director, and filmmaker',
    '20+ years of experience',
    'Oklahoma-rooted'
  ],
  testimonials: [
    {
      quote: 'The fewer layers between the story and the storyteller, the better the work usually gets.',
      person: 'Bonus Creative',
      role: 'Working principle'
    },
    {
      quote: 'The goal is not more content. It is the right piece, built well, and used well.',
      person: 'Bonus Creative',
      role: 'Working principle'
    },
    {
      quote: 'Good event coverage should do more than prove the room was full.',
      person: 'Bonus Creative',
      role: 'Working principle'
    }
  ]
};

export const services = [
  {
    slug: 'branded-films',
    title: 'Branded films',
    summary:
      'For brands, founders, and teams that need more than a nice-looking promo.',
    body:
      'These films are built to clarify who you are, what matters about the work, and why people should remember it. The goal is not more content. It is the right flagship piece, shaped with restraint, pace, and a clear point of view.',
    deliverables: ['Brand film', 'Campaign cutdowns', 'Interview-led story edit', 'Web and social assets']
  },
  {
    slug: 'documentary-storytelling',
    title: 'Documentary and story-driven content',
    summary:
      'For real stories that need depth, structure, and emotional honesty.',
    body:
      'Some stories need room to breathe. This work leans into character, pacing, and visual patience so the final piece feels human instead of manufactured.',
    deliverables: ['Short documentary', 'Mini-doc series', 'Interview capture', 'Narrative edit strategy']
  },
  {
    slug: 'nonprofit-storytelling',
    title: 'Nonprofit storytelling',
    summary:
      'Mission films built to move donors, volunteers, partners, and communities.',
    body:
      'Nonprofit work needs trust as much as beauty. The story has to honor the people in it, make the mission clear, and give supporters a reason to step closer.',
    deliverables: ['Campaign film', 'Fundraising video', 'Program spotlight', 'Donor event visuals']
  },
  {
    slug: 'church-media',
    title: 'Church media',
    summary:
      'Story-first media for churches that want clarity, warmth, and visual restraint.',
    body:
      'From testimony films to vision pieces and event recaps, the work is shaped to feel grounded and cinematic rather than overbuilt or overly glossy.',
    deliverables: ['Testimony film', 'Vision piece', 'Event recap', 'Ministry story assets']
  },
  {
    slug: 'event-coverage',
    title: 'Event and convention coverage',
    summary:
      'Fast-moving capture turned into polished assets with a real editorial finish.',
    body:
      'Good event coverage should do more than prove the room was full. It should preserve energy, communicate quality, and give you useful assets after the event is over.',
    deliverables: ['Recap film', 'Same-week highlight edit', 'Speaker and sponsor cutdowns', 'Social-ready selects']
  },
  {
    slug: 'production-partner',
    title: 'Production partner / shooter-editor for hire',
    summary:
      'A strong fit for agencies, teams, and producers who need an experienced filmmaking partner in Oklahoma.',
    body:
      'When the creative direction is already in motion, I can step in as a reliable production partner in the field and in post without adding friction to the process.',
    deliverables: ['Director of photography support', 'Field audio and interview capture', 'Editing and finishing', 'Oklahoma production support']
  },
  {
    slug: 'drone-cinematography',
    title: 'Drone cinematography',
    summary:
      'Aerial work used with intent, not just because drones exist.',
    body:
      'Drone footage works best when it adds scale, context, or rhythm. The point is not to show off the drone. The point is to strengthen the story.',
    deliverables: ['Aerial capture', 'Establishing sequences', 'Location context', 'Integrated edit support']
  }
] as const;

export const projects = [
  {
    slug: 'goodwill',
    title: 'Goodwill',
    category: 'Case study',
    poster: '/posters/mission-film.svg',
    summary:
      'A human-centered film built to make impact feel immediate, credible, and personal.',
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
    poster: '/posters/brand-story.svg',
    summary:
      'A documentary rooted in Oklahoma identity, football history, and the stories behind the state’s first four Heisman Trophy winners.',
    outcome:
      'A film that turned legendary material into something human, local, and cinematic.',
    challenge:
      'Tell a well-known sports story without making it feel distant, archival, or overly reverent.',
    approach:
      'Build around voice, memory, structure, and place so the film carries both scale and heart.',
    role:
      'Writer, director, and filmmaker',
    result:
      'A feature documentary with a strong sense of place, memory, and Oklahoma pride.',
    externalUrl: 'https://youtu.be/06iucfl9jxQ?si=DXIv1z-TCmH8kGLm',
    externalLabel: 'Watch on YouTube'
  },
  {
    slug: 'mission-stories',
    title: 'Mission stories',
    category: 'Nonprofit',
    poster: '/posters/event-campaign.svg',
    summary:
      'Films designed to help supporters feel both the work and the stakes without overstatement.',
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

export const faq = [
  {
    q: 'Why not just hire a big agency?',
    a: 'You can. But if you want fewer meetings, fewer handoffs, and one person who actually knows the project front to back, I’m probably a better fit.'
  },
  {
    q: 'What kinds of clients are the best fit?',
    a: 'Brands, nonprofits, churches, founders, event teams, and organizations with something real to say and no interest in looking like everybody else.'
  },
  {
    q: 'Can you handle both production and post?',
    a: 'Yes. Strategy, directing, filming, editing, and finishing can all live in one line of sight, which usually makes the work better.'
  },
  {
    q: 'Do I need a huge budget?',
    a: 'No. The better question is whether the scope is right. Some projects need a flagship film. Some need one sharp, useful piece that does its job well.'
  },
  {
    q: 'Do you travel?',
    a: 'Yes. Oklahoma is home, but the right project can travel.'
  }
] as const;
