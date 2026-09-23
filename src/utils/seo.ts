// ============================================================
// seo.ts — 構造化データ
// ============================================================

import { SITE } from '../data/site';

export interface JsonLdObject {
  '@context': 'https://schema.org';
  '@type': string;
  [key: string]: unknown;
}

export function personJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}/#person`,
    name: SITE.handle,
    alternateName: SITE.nameJa,
    description: SITE.leadJa,
    url: SITE.url,
    email: SITE.email,
    jobTitle: '開発者',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
      addressRegion: '愛知県',
      addressLocality: '豊橋市',
    },
    sameAs: [SITE.github, SITE.koodoUrl],
    knowsAbout: ['AI', 'Web開発', '業務自動化', 'アプリ開発'],
  };
}

export function websiteJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.handle,
    url: SITE.url,
    inLanguage: 'ja',
    description: SITE.leadJa,
    author: { '@id': `${SITE.url}/#person` },
  };
}

export function breadcrumbJsonLd(items: { label: string; href?: string }[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE.url}${item.href}` } : {}),
    })),
  };
}

export function projectJsonLd(project: {
  title: string;
  summaryJa: string;
  repo: string;
  tech: string[];
  id: string;
}): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.summaryJa,
    codeRepository: project.repo,
    programmingLanguage: project.tech.join(', '),
    author: { '@id': `${SITE.url}/#person` },
    mainEntityOfPage: `${SITE.url}/projects/${project.id}/`,
  };
}
