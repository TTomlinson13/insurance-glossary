export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function findTermBySlug<T extends { term: string }>(slug: string, terms: T[]): T | undefined {
  return terms.find(t => generateSlug(t.term) === slug);
}
