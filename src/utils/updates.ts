import { getCollection, type CollectionEntry } from 'astro:content';
import { AREA_META, type AreaSlug } from '../data/site';
import { withBase } from './paths';

export type UpdateEntry = CollectionEntry<'updates'>;

export async function getPublishedUpdates() {
  const entries = await getCollection('updates', ({ data }) => !data.draft);
  return sortUpdates(entries);
}

export function sortUpdates(entries: UpdateEntry[]) {
  return [...entries].sort((a, b) => b.data.date.localeCompare(a.data.date));
}

export function getEntryUrl(entry: UpdateEntry) {
  return withBase(`/updates/${entry.id}/`);
}

export function getEntryCover(entry: UpdateEntry) {
  return withBase(entry.data.cover ?? '/previews/default.svg');
}

export function getEntryCredit(entry: UpdateEntry) {
  return entry.data.credit ?? entry.data.role ?? AREA_META[entry.data.areas[0]].label;
}

export function formatDate(value: string) {
  const [year, month, day] = value.split('-');
  return `${year}.${month}.${day}`;
}

export function formatLongDate(value: string) {
  const [year, month, day] = value.split('-').map(Number);
  return `${year}년 ${month}월 ${day}일`;
}

export function formatYear(value: string) {
  return value.slice(0, 4);
}

export function summarizeAreas(entries: UpdateEntry[]) {
  return (Object.entries(AREA_META) as [AreaSlug, (typeof AREA_META)[AreaSlug]][])
    .map(([slug, meta]) => {
      const matches = entries.filter((entry) => entry.data.areas.includes(slug));
      return {
        slug,
        label: meta.label,
        description: meta.description,
        count: matches.length,
        latest: matches[0] ?? null,
      };
    })
    .filter((item) => item.count > 0);
}

export function findRelatedUpdates(entries: UpdateEntry[], current: UpdateEntry, limit = 3) {
  const currentAreas = new Set(current.data.areas);

  return entries
    .filter(
      (entry) =>
        entry.id !== current.id &&
        entry.data.areas.some((area) => currentAreas.has(area)),
    )
    .slice(0, limit);
}
