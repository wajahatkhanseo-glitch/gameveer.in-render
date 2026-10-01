import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function rewriteFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Humanize ContactUsPage.tsx
    content = content.replace(
        /Welcome to the player support desk for(.*)\. Having access to friendly, fast, and helpful customer care makes all the difference\. Whether you need a hand claiming your <strong>₹500 Welcome Bonus<\/strong>, checking your daily agent salary rewards, or troubleshooting the VeerGame Android APK setup, our support team is available around the clock to help on Veer Game\./g,
        "Welcome to the support desk for$1. We believe that friendly and fast customer care is super important. Whether you need help grabbing your <strong>₹500 Welcome Bonus</strong>, checking your daily rewards, or setting up the app, our team is here 24/7 to lend a hand."
    );

    content = content.replace(
        /On this(.*)directory, you can find our official Telegram support channels, email help desk details, estimated response times, and an easy ticket submission form\. You can also explore our(.*)walkthrough or head over to the(.*)page if you need account assistance\./g,
        "Here on the$1page, you'll find our Telegram support channels, email address, and a quick form to send us a message. You can also check out our$2guide or visit the$3page if you need help with your account."
    );

    // Humanize ResponsibleGamingPage.tsx
    content = content.replace(
        /At(.*), we believe online entertainment should always stay fun, healthy, and within your personal comfort zone on VeerGame\. Color prediction games and mini-lotteries are created for lighthearted recreation and intellectual leisure — never as a solution for financial hardship or an alternative to real-world employment\./g,
        "At$1, we want your online gaming experience to be fun, healthy, and completely within your comfort zone. Our color prediction games are designed purely for entertainment and enjoyment—not as a way to solve financial problems or replace a job."
    );

    content = content.replace(
        /This guide for(.*)outlines our safety commitments, our strict 18\+ policy, self-check questions, time management tools, and ways to take a break whenever you need one\. We invite all members to review our <a href="\/terms-and-conditions" target="_blank" rel="noopener noreferrer" style={{ color: '#0d7045', fontWeight: 600 }}>Terms &amp; Conditions<\/a> and <a href="\/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#0d7045', fontWeight: 600 }}>Privacy Policy<\/a> as well\./g,
        "Our$1guide explains our commitment to your safety, our 18+ policy, and offers tools to help you manage your time or take a break if you need one. Please also take a moment to read our <a href=\"/terms-and-conditions\" target=\"_blank\" rel=\"noopener noreferrer\" style={{ color: '#0d7045', fontWeight: 600 }}>Terms &amp; Conditions</a> and <a href=\"/privacy-policy\" target=\"_blank\" rel=\"noopener noreferrer\" style={{ color: '#0d7045', fontWeight: 600 }}>Privacy Policy</a>."
    );
    
    // Humanize TermsPage.tsx
    content = content.replace(
        /Welcome to the terms agreement for(.*)\. These Terms and Conditions govern your access to and use of our website, mobile application, Android APK \(v2\.1\.8\), and all entertainment features on VeerGame\. By signing up via(.*), logging in via(.*), or participating in color prediction rounds, you agree to follow these guidelines\./g,
        "Welcome to the terms of service for$1. These guidelines cover your use of our website, our Android app, and all the fun features we offer. By using our services, creating an account through$2, or signing in via$3, you're agreeing to follow these rules."
    );

    content = content.replace(
        /Please take a few moments to review these conditions alongside our(.*)and(.*)charter\. If you do not agree with any part of these rules, please do not create an account or participate on Veer Game\./g,
        "Please take a minute to read through these rules, along with our$1and$2. If you aren't comfortable with anything here, we kindly ask that you don't use the platform."
    );

    // Humanize PrivacyPage.tsx
    content = content.replace(
        /Your personal privacy and digital safety are top priorities for us at(.*)\. This Privacy Policy outlines how we handle, protect, and respect your personal information when you use our web platform, the VeerGame Android APK \(v2\.1\.8\), and related mobile services\./g,
        "Your privacy and online safety are incredibly important to us at$1. This Privacy Policy explains how we carefully handle, protect, and respect your personal data when you use our website, app, and services."
    );

    content = content.replace(
        /In this official(.*)guide, you can read about our 256-bit SSL encryption standards, strict zero-resale privacy promise, cookie usage, and how you can manage or request the deletion of your account records\. Feel free to also review our(.*)or explore our(.*)principles\./g,
        "Here in our$1, you'll learn about how we use strong encryption to protect your data, our promise never to sell your information, how we use cookies, and how you can manage or delete your account. You can also check out our$2or read about our$3."
    );

    // Write back
    fs.writeFileSync(filePath, content, 'utf8');
}

const files = [
    'src/pages/ContactUsPage.tsx',
    'src/pages/PrivacyPage.tsx',
    'src/pages/ResponsibleGamingPage.tsx',
    'src/pages/TermsPage.tsx'
];

files.forEach(f => {
    rewriteFile(path.resolve(__dirname, f));
    console.log('Rewrote ' + f);
});

