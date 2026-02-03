import { readFileSync, writeFileSync } from 'fs';

const glossaryPath = '/home/ubuntu/insurance-glossary/client/src/data/glossary.ts';
const content = readFileSync(glossaryPath, 'utf-8');

// Extract all term objects
const termRegex = /\{\s*term:\s*"([^"]+)",[\s\S]*?\},?\s*(?=\{|];)/g;
const terms = [];
const seenTerms = new Set();
let match;

while ((match = termRegex.exec(content)) !== null) {
  const termName = match[1];
  const termObject = match[0];
  
  if (!seenTerms.has(termName)) {
    seenTerms.add(termName);
    terms.push(termObject.trim());
  } else {
    console.log(`Removing duplicate: ${termName}`);
  }
}

// Reconstruct the file
const header = content.substring(0, content.indexOf('export const glossaryTerms'));
const footer = '\n';

const newContent = `${header}export const glossaryTerms: GlossaryTerm[] = [\n  ${terms.join(',\n  ')}\n];${footer}`;

writeFileSync(glossaryPath, newContent, 'utf-8');
console.log(`\nRemoved ${Array.from(seenTerms).length - terms.length} duplicates`);
console.log(`Final term count: ${terms.length}`);
