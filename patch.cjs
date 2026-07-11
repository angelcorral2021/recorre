const { readdirSync, readFileSync, writeFileSync } = require('fs');
const path = require('path');

function processDir(dir) {
  const files = readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const fullPath = path.join(dir, f.name);
    if (f.isDirectory()) {
      processDir(fullPath);
    } else if (f.name.endsWith('.astro')) {
      let content = readFileSync(fullPath, 'utf8');
      let changed = false;
      
      if (content.includes("{ params: { lang: 'en' } }") && !content.includes("{ params: { lang: 'pt' } }")) {
        content = content.replace("{ params: { lang: 'en' } }", "{ params: { lang: 'en' } },\n    { params: { lang: 'pt' } }");
        changed = true;
      }
      
      if (content.includes("['es', 'en']") && !content.includes("'pt'")) {
        content = content.replace(/\['es', 'en'\]/g, "['es', 'en', 'pt']");
        changed = true;
      }

      if (content.includes("en: 'Art & Culture' }") && !content.includes("pt:")) {
         content = content.replace("en: 'Art & Culture' }", "en: 'Art & Culture', pt: 'Arte e Cultura' }");
         content = content.replace("en: 'Gastronomy' }", "en: 'Gastronomy', pt: 'Gastronomia' }");
         content = content.replace("en: 'Nature & Adventure' }", "en: 'Nature & Adventure', pt: 'Natureza e Aventura' }");
         content = content.replace("en: 'Leisure & Nightlife' }", "en: 'Leisure & Nightlife', pt: 'Lazer e Vida Noturna' }");
         changed = true;
      }
      
      if (changed) {
        writeFileSync(fullPath, content);
        console.log('Updated', fullPath);
      }
    }
  }
}

processDir('./src/pages/[lang]');
