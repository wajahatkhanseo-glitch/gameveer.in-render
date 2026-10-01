import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allPages = [
    'src/App.tsx',
    'src/pages/LoginPage.tsx',
    'src/pages/RegisterPage.tsx',
    'src/pages/DownloadPage.tsx',
    'src/pages/AboutUsPage.tsx',
    'src/pages/ContactUsPage.tsx',
    'src/pages/PrivacyPage.tsx',
    'src/pages/ResponsibleGamingPage.tsx',
    'src/pages/TermsPage.tsx'
];

for (const file of allPages) {
    const filePath = path.resolve(__dirname, file);
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove the specific <p> tag containing the text
    const regex = /<p[^>]*>\s*Copy this code and redeem it after registering for your exclusive welcome bonus!\s*<\/p>/g;
    content = content.replace(regex, '');

    fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Text removed from all pages.");
