import { readFileSync, writeFileSync } from 'fs';

// Read the new terms
const newTermsContent = readFileSync('/home/ubuntu/new_glossary_terms.ts', 'utf-8');
const newTermsMatch = newTermsContent.match(/export const newTerms = \[([\s\S]*)\];/);
const newTermsArray = eval('[' + newTermsMatch[1] + ']');

// Read current glossary
const glossaryPath = 'client/src/data/glossary.ts';
let glossaryContent = readFileSync(glossaryPath, 'utf-8');

// Find the closing bracket of glossaryTerms array
const closingIndex = glossaryContent.lastIndexOf('];');

// Insert new terms before the closing bracket
const newTermsString = newTermsArray.map(term => 
  `  {
    term: "${term.term}",
    definition: "${term.definition.replace(/"/g, '\\"')}",
    category: "${term.category}",
    relatedTerms: ${JSON.stringify(term.relatedTerms)}
  }`
).join(',\n');

const updatedContent = glossaryContent.slice(0, closingIndex) + ',\n' + newTermsString + '\n' + glossaryContent.slice(closingIndex);

writeFileSync(glossaryPath, updatedContent);

console.log(`✅ Added ${newTermsArray.length} new terms to glossary`);
console.log(`Total terms: ${(glossaryContent.match(/term:/g) || []).length + newTermsArray.length}`);
