import type { MetadataRoute } from 'next';
import { navigation, projects, site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [...navigation.map((item) => item.href), '/reel'];
  const projectRoutes = projects
    .filter((project) => project.slug === 'goodwill')
    .map((project) => `/case-studies/${project.slug}`);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: new URL(route, site.domain).toString(),
    lastModified: new Date()
  }));
}
