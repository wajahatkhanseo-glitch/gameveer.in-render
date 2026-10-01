import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = [
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
    let filePath = path.resolve(__dirname, f);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // To make it more conversational, let's also update some headings and list texts if necessary
    content = content.replace(/<h2>WHO WE ARE: THE VEER GAME STORY<\/h2>/g, '<h2>Who We Are: The Veer Game Story</h2>');
    content = content.replace(/<h2>VEER GAME CUSTOMER SUPPORT DIRECTORY<\/h2>/g, '<h2>Our Customer Support Directory</h2>');
    content = content.replace(/<h2>VEER GAME APK DOWNLOAD OVERVIEW<\/h2>/g, '<h2>Veer Game APK Download Overview</h2>');
    content = content.replace(/<h2>VEER GAME LOGIN OVERVIEW<\/h2>/g, '<h2>Veer Game Login Overview</h2>');
    content = content.replace(/<h2>VEER GAME DATA PROTECTION COMMITMENT<\/h2>/g, '<h2>Our Commitment to Data Protection</h2>');
    content = content.replace(/<h2>VEER GAME REGISTER OVERVIEW<\/h2>/g, '<h2>Veer Game Register Overview</h2>');
    content = content.replace(/<h2>RESPONSIBLE GAMING PRINCIPLES AT VEER GAME<\/h2>/g, '<h2>Our Responsible Gaming Principles</h2>');
    content = content.replace(/<h2>VEER GAME LEGAL FRAMEWORK &amp; TERMS OVERVIEW<\/h2>/g, '<h2>Legal Framework &amp; Terms Overview</h2>');

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed more headings');
