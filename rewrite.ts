import * as fs from 'fs';
import * as path from 'path';

function rewriteFile(filePath: string) {
    let content = fs.readFileSync(filePath, 'utf8');

    // General replacements to humanize the text and improve flow
    content = content.replace(/In this complete guide, you will discover everything about/g, 'Welcome! Here, you can learn all about');
    content = content.replace(/Getting started on (.*) takes less than 30 seconds. The registration process is straightforward, fully encrypted, and open to all eligible gamers./g, 'Joining $1 is super quick and easy! We have made the signup process secure and simple for everyone.');
    content = content.replace(/Once you have completed your registration, logging in to your (.*) account is smooth and accessible from any smartphone, tablet, or web browser./g, 'After you create your account, signing in to $1 is a breeze, whether you are on your phone, tablet, or laptop.');
    content = content.replace(/For the fastest performance, lowest latency, and instantaneous result notifications, we recommend installing the official/g, 'For the best experience, including smooth gameplay and instant alerts, we highly recommend grabbing the official');
    
    content = content.replace(/India's most recognized online interactive gaming and color prediction entertainment hub/g, 'a popular online hub for fun gaming and color prediction in India');
    content = content.replace(/Designed to offer smooth, real-time gaming on mobile devices and desktop computers alike, (.*) delivers high-frequency analytical prediction rounds, classic casino-inspired challenges, and social community networking/g, '$1 is designed to give you a great real-time experience across all devices, featuring exciting prediction rounds, fun challenges, and a vibrant community');
    content = content.replace(/Over the past year, (.*) has rapidly emerged as a favorite among casual and competitive gaming enthusiasts across India. Here is why the platform continues to gain massive traction:/g, 'People across India are loving $1! Here is why our community keeps growing:');
    
    // More natural phrasing for register/login/download
    content = content.replace(/Click on the (.*) button at the top header or below./g, 'Just click the $1 button above or below.');
    content = content.replace(/Provide your active 10-digit Indian mobile number/g, 'Simply enter your active 10-digit mobile number');
    content = content.replace(/Set a strong password with a minimum of 6 characters combining letters and numbers to protect your account./g, 'Create a password (at least 6 characters) to keep your account safe.');
    
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
    rewriteFile(path.resolve(__dirname, f));
    console.log('Rewrote ' + f);
});

