export const site = {
  name: 'Bonus Creative',
  domain: 'https://bonuscreative.com',
  location: 'Oklahoma City, Oklahoma',
  email: 'bo.wright@bonuscreative.com',
  phone: '405.819.8383',
  instagram: 'https://instagram.com/bonus_creative',
  youtube: 'https://www.youtube.com/channel/UC5OfYdrlVLZHthIdXeUUeYw/videos',
  description:
    'Bonus Creative is a filmmaker-led studio in Oklahoma creating story-driven branded films, documentaries, nonprofit stories, church media, and event coverage with a lean, direct process.',
  founder: {
    name: 'Bo Wright',
    title: 'Award-winning writer, director, and filmmaker.'
  },
  hero: {
    eyebrow: 'Oklahoma video production',
    title: 'Films with a clear point of view.',
    description:
      'I make story-driven films for brands, nonprofits, churches, and organizations that want something sharper than generic content. One filmmaker. Direct collaboration. Clear process from concept to final cut.',
    reelTitle: 'Watch the Reel',
    reelHref: '/reel',
    reelVideo: '/reel/2025_bo_wright_demo_reel_v1_1080p.mp4',
    reelPoster: '/posters/reel-landscape.svg'
  },
  proof: [
    '20+ years of story-first work',
    'Direct collaboration from concept to final cut',
    'Featured work includes Goodwill and The Oklahoma Heismen'
  ]
} as const;

export const work = [
  {
    slug: 'goodwill',
    title: 'Goodwill case study',
    category: 'Case study',
    summary: 'A human-centered film built to make impact feel immediate, credible, and personal.',
    poster: '/posters/mission-film.svg',
    previewVideo: '/reel/2025_bo_wright_demo_reel_v1_1080p.mp4',
    href: '/reel',
    linkLabel: 'Watch the reel',
    external: false
  },
  {
    slug: 'oklahoma-heismen',
    title: 'The Oklahoma Heismen',
    category: 'Feature documentary',
    summary: 'A documentary rooted in Oklahoma identity, football history, and the stories behind the state’s first four Heisman Trophy winners.',
    poster: '/posters/brand-story.svg',
    previewVideo: '/reel/2025_bo_wright_demo_reel_v1_1080p.mp4',
    href: 'https://youtu.be/06iucfl9jxQ?si=DXIv1z-TCmH8kGLm',
    linkLabel: 'Watch on YouTube',
    external: true
  },
  {
    slug: 'nonprofit-stories',
    title: 'Mission stories',
    category: 'Nonprofit',
    summary: 'Films designed to help supporters feel both the work and the stakes without overstatement.',
    poster: '/posters/event-campaign.svg',
    previewVideo: '/reel/2025_bo_wright_demo_reel_v1_1080p.mp4',
    href: '/reel',
    linkLabel: 'Watch the reel',
    external: false
  }
] as const;

export const services = [
  {
    title: 'Brand films',
    copy: 'For brands, founders, and teams that need more than a nice-looking promo. These films clarify who you are, what matters about the work, and why people should care.'
  },
  {
    title: 'Documentary storytelling',
    copy: 'For real stories that need depth, structure, and emotional honesty. This is slower, deeper storytelling built around voice, pacing, and restraint.'
  },
  {
    title: 'Event and campaign films',
    copy: 'Coverage that keeps working after the room empties. The goal is not just to prove the event happened. It is to give you useful assets afterward.'
  },
  {
    title: 'Production partner and post',
    copy: 'A strong fit for agencies, teams, and producers who need an experienced filmmaking partner in Oklahoma without adding friction to the process.'
  }
] as const;

export const about = {
  heading: 'I built Bonus Creative to keep the story close to the person telling it.',
  copy: 'I am Bo Wright, and Bonus Creative is built around a simple idea: the fewer layers between the story and the storyteller, the better the work usually gets. So when you hire me, you are not getting passed from strategy to producer to shooter to editor. You are working with the same person all the way through.',
  notes: [
    'Led by Bo Wright',
    'Award-winning writer, director, and filmmaker',
    'Built for brands, nonprofits, churches, and organizations',
    'Oklahoma-rooted with a strong editorial point of view'
  ]
} as const;
