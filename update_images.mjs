import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function updateScreenshot(filePath, newSrc, newAlt, newTitle) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/src="\/bdgbet-app\.webp"/g, `src="${newSrc}"`);
    content = content.replace(/alt="Veer Game [^"]*"/g, `alt="${newAlt}"`);
    content = content.replace(/title="Veer Game [^"]*"/g, `title="${newTitle}"`);
    fs.writeFileSync(filePath, content, 'utf8');
}

// 1. App.tsx main screenshot
updateScreenshot(
    path.resolve(__dirname, 'src/App.tsx'), 
    'https://i.ibb.co/LXL6tMyN/veergame.webp', 
    'veergame', 
    'Veer Game Interface'
);

// 2. DownloadPage.tsx
updateScreenshot(
    path.resolve(__dirname, 'src/pages/DownloadPage.tsx'), 
    'https://i.ibb.co/LXL6tMyN/veergame.webp', 
    'veergame download', 
    'Veer Game APK Download'
);

// 3. LoginPage.tsx
updateScreenshot(
    path.resolve(__dirname, 'src/pages/LoginPage.tsx'), 
    'https://i.ibb.co/0yfX343Y/veergame-login.webp', 
    'veergame login', 
    'Veer Game Login Screen'
);

// 4. RegisterPage.tsx
updateScreenshot(
    path.resolve(__dirname, 'src/pages/RegisterPage.tsx'), 
    'https://i.ibb.co/Txt1jVgv/veergame-register.webp', 
    'veergame register', 
    'Veer Game Register Screen'
);

// Add images below the respective H2s in App.tsx
let appTsxPath = path.resolve(__dirname, 'src/App.tsx');
let appContent = fs.readFileSync(appTsxPath, 'utf8');

const registerImgSnippet = `
                <div style={{ textAlign: 'center', margin: '24px 0' }}>
                  <img src="https://i.ibb.co/Txt1jVgv/veergame-register.webp" alt="veergame register" title="Veer Game Register" style={{ maxWidth: '100%', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} loading="lazy" />
                </div>
`;
appContent = appContent.replace('<h2>How to Join Veer Game (Veer Game Register)</h2>', '<h2>How to Join Veer Game (Veer Game Register)</h2>' + registerImgSnippet);

const loginImgSnippet = `
                <div style={{ textAlign: 'center', margin: '24px 0' }}>
                  <img src="https://i.ibb.co/0yfX343Y/veergame-login.webp" alt="veergame login" title="Veer Game Login" style={{ maxWidth: '100%', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} loading="lazy" />
                </div>
`;
appContent = appContent.replace('<h2>How to Access Your Account (Veer Game Login)</h2>', '<h2>How to Access Your Account (Veer Game Login)</h2>' + loginImgSnippet);

const gamesImgSnippet = `
                <div style={{ textAlign: 'center', margin: '24px 0' }}>
                  <img src="https://i.ibb.co/gM48BkSG/veergame-games.webp" alt="veergame games" title="Veer Game Games" style={{ maxWidth: '100%', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} loading="lazy" />
                </div>
`;
appContent = appContent.replace('<h2>POPULAR GAMES ON VEER GAME PLATFORM</h2>', '<h2>POPULAR GAMES ON VEER GAME PLATFORM</h2>' + gamesImgSnippet);

fs.writeFileSync(appTsxPath, appContent, 'utf8');
console.log('Images updated successfully');

