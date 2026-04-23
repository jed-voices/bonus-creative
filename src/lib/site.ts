export const site = {
  name: 'Bonus Creative',
  domain: 'https://bonuscreative.com',
  location: 'Oklahoma City, Oklahoma',
  email: 'bo.wright@bonuscreative.com',
  phone: '405.819.8383',
  instagram: 'https://instagram.com/bonus_creative',
  youtube: 'https://www.youtube.com/channel/UC5OfYdrlVLZHthIdXeUUeYw/videos',
  founder: {
    name: 'Bo Wright',
    title: 'Award-winning writer, director, and filmmaker.'
  },
  hero: {
    eyebrow: 'Swiss modern video production',
    title: 'Films with precision, rhythm, and a clear point of view.',
    description:
      'Bonus Creative creates cinematic work for nonprofits, churches, businesses, and organizations that want premium visual storytelling without a bloated process.',
    reelTitle: 'Watch the showreel',
    reelHref: '/reel',
    reelVideo: '/reel/2025_bo_wright_demo_reel_v1_1080p.mp4',
    reelPoster: '/posters/reel-landscape.svg'
  },
  proof: [
    'Goodwill case study',
    'The Oklahoma Heismen',
    'Nonprofits, churches, businesses, and organizations'
  ]
} as const;

export const work = [
  {
    slug: 'goodwill',
    title: 'Goodwill case study',
    category: 'Case study',
    summary: 'A clean, human-centered story built to make organizational impact feel immediate and credible.',
    poster: '/posters/mission-film.svg',
    previewVideo: '/reel/2025_bo_wright_demo_reel_v1_1080p.mp4'
  },
  {
    slug: 'oklahoma-heismen',
    title: 'The Oklahoma Heismen',
    category: 'Feature project',
    summary: 'Editorial energy, strong pacing, and an identity built around place, legacy, and motion.',
    poster: '/posters/brand-story.svg',
    previewVideo: '/reel/2025_bo_wright_demo_reel_v1_1080p.mp4'
  },
  {
    slug: 'nonprofit-stories',
    title: 'Mission stories',
    category: 'Nonprofit',
    summary: 'Films designed to help supporters feel both the work and the stakes without overstatement.',
    poster: '/posters/event-campaign.svg',
    previewVideo: '/reel/2025_bo_wright_demo_reel_v1_1080p.mp4'
  }
] as const;

export const services = [
  {
    title: 'Commercials',
    copy: 'Sharp concepting, cinematic production, and editorial restraint for brands that need a stronger visual signature.'
  },
  {
    title: 'Documentaries',
    copy: 'Story-led films that carry emotional weight without losing structure or pace.'
  },
  {
    title: 'Post-production',
    copy: 'Editing, finishing, and polish that turns raw footage into a clear, premium final piece.'
  },
  {
    title: 'Production partner',
    copy: 'A direct creative partner for agencies, teams, and organizations that need a clean operator in the field and in post.'
  }
] as const;

export const about = {
  heading: 'A filmmaker-led studio with a tighter process and a clearer point of view.',
  copy: 'Bonus Creative is built around precision, pace, and direct collaboration. The work is not made by committee. It is shaped by one experienced filmmaker who carries the project from concept to final cut, protecting the rhythm and visual logic all the way through.',
  notes: [
    'Led by Bo Wright',
    'Award-winning writer, director, and filmmaker',
    'Built for nonprofits, churches, businesses, and organizations',
    'Oklahoma-rooted with a modern editorial standard'
  ]
} as const;
