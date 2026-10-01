import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    let filePath = path.resolve(__dirname, f);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // To make it more conversational, let's also update some headings and list texts if necessary
    content = content.replace(/HOW TO REGISTER ON VEER GAME \(VEER GAME REGISTER\)/g, 'How to Join Veer Game (Veer Game Register)');
    content = content.replace(/VEER GAME OVERVIEW &amp; PLATFORM DETAILS/g, 'Welcome to Veer Game: An Overview');
    content = content.replace(/VEER GAME APK DOWNLOAD &amp; APP INSTALLATION GUIDE/g, 'Guide to Veer Game APK Download & Installation');
    content = content.replace(/VEER GAME REFER &amp; EARN DAILY SALARY PROGRAM/g, 'Earn Daily with the Veer Game Salary Program');
    content = content.replace(/HOW TO LOGIN TO VEER GAME \(VEER GAME LOGIN\)/g, 'How to Access Your Account (Veer Game Login)');
    content = content.replace(/VEER GAME OFFICIAL GAME SPECIFICATIONS/g, 'Veer Game at a Glance (Specifications)');
    content = content.replace(/FREQUENTLY ASKED QUESTIONS \(FAQ\)/g, 'Frequently Asked Questions (FAQ)');

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed headings');
