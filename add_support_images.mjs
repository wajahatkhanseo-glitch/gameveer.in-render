import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function addScreenshotAfterActions(filePath, imgSrc, altText, titleText) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the end of the hero-actions div
    // We'll just insert the image before the first <h2> after the hero-actions
    const imageSnippet = `
      <div className="screenshot-wrapper" style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
        <img
          src="${imgSrc}"
          alt="${altText}"
          title="${titleText}"
          className="screenshot-img"
          style={{ maxWidth: '100%', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', aspectRatio: '288/640', height: 'auto' }}
          loading="lazy"
        />
      </div>
`;
    // Find the first <h2> tag and inject the image right before it.
    // Ensure we only do it once.
    if (!content.includes('screenshot-img')) {
        content = content.replace(/<h2>/, imageSnippet + '\n      <h2>');
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

addScreenshotAfterActions(
    path.resolve(__dirname, 'src/pages/AboutUsPage.tsx'), 
    'https://i.ibb.co/LXL6tMyN/veergame.webp', 
    'veergame', 
    'Veer Game Interface'
);

addScreenshotAfterActions(
    path.resolve(__dirname, 'src/pages/ContactUsPage.tsx'), 
    'https://i.ibb.co/LXL6tMyN/veergame.webp', 
    'veergame', 
    'Veer Game Interface'
);

addScreenshotAfterActions(
    path.resolve(__dirname, 'src/pages/TermsPage.tsx'), 
    'https://i.ibb.co/LXL6tMyN/veergame.webp', 
    'veergame', 
    'Veer Game Interface'
);

addScreenshotAfterActions(
    path.resolve(__dirname, 'src/pages/PrivacyPage.tsx'), 
    'https://i.ibb.co/LXL6tMyN/veergame.webp', 
    'veergame', 
    'Veer Game Interface'
);

addScreenshotAfterActions(
    path.resolve(__dirname, 'src/pages/ResponsibleGamingPage.tsx'), 
    'https://i.ibb.co/LXL6tMyN/veergame.webp', 
    'veergame', 
    'Veer Game Interface'
);

console.log('Added screenshots to support pages');
