import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function optimizeKeywords(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Make sure strong tags for keywords are present and natural
    // Let's replace some generic references with the actual keywords to boost SEO

    content = content.replace(/the official app/g, 'the official Veer Game app');
    content = content.replace(/the mobile app/g, 'the Veer Game mobile app');
    content = content.replace(/download the app/g, 'start your Veer Game apk download');
    content = content.replace(/downloading the app/g, 'completing your Veer Game apk download');
    content = content.replace(/sign up today/g, 'complete your Veer Game register process today');
    content = content.replace(/logging in/g, 'logging in with Veer Game login');
    content = content.replace(/prediction rounds/g, 'color prediction rounds');
    content = content.replace(/prediction games/g, 'color prediction games');
    
    // Write back
    fs.writeFileSync(filePath, content, 'utf8');
}

const files = [
    'src/App.tsx',
    'src/pages/AboutUsPage.tsx',
    'src/pages/ContactUsPage.tsx',
    'src/pages/DownloadPage.tsx',
    'src/pages/LoginPage.tsx',
    'src/pages/PrivacyPage.tsx',
    'src/pages/RegisterPage.tsx',
    'src/pages/ResponsibleGamingPage.tsx',
    'src/pages/TermsPage.tsx'
];

files.forEach(f => {
    optimizeKeywords(path.resolve(__dirname, f));
    console.log('Optimized keywords in ' + f);
});

