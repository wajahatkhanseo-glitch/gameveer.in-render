import * as fs from 'fs';
import * as path from 'path';

function replaceInFile(filePath: string, searchRegex: RegExp, replacement: string) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(searchRegex, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
}

const pages = [
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

pages.forEach(f => {
    let filePath = path.resolve(__dirname, f);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Humanize App.tsx
    content = content.replace(
        /Whether you are analyzing trend charts in <strong>Wingo 1Min<\/strong>, timing flights in <strong>Aviator<\/strong>, or unlocking daily promotional gift codes, Veer Game provides a unified gaming atmosphere backed by robust 256-bit encryption, instant round settlements, and dedicated round-the-clock player care\./g,
        "Whether you're predicting the next color in <strong>Wingo</strong>, riding the multiplier in <strong>Aviator</strong>, or grabbing daily gift codes, Veer Game offers a safe and fun place to play. We use strong security to keep your information safe and have a friendly support team ready to help 24/7."
    );

    // Humanize LoginPage.tsx
    content = content.replace(
        /Signing in to(.*)gives you immediate access to your live gaming balance, ongoing Wingo rounds, and daily agent commissions on VeerGame\. Whether you are using an Android phone, an iPhone, or a laptop browser, our portal connects you quickly and securely\./g,
        "Logging into$1lets you check your balance, jump into the latest Wingo rounds, and see your daily rewards right away. It's fast and secure whether you're playing from your phone, tablet, or laptop."
    );

    content = content.replace(
        /In this guide for(.*), we cover simple step-by-step sign-in instructions, password recovery options, and practical security tips to keep your gaming balance protected\./g,
        "This quick guide for$1shows you how to easily sign in, what to do if you forget your password, and how to keep your account safe."
    );

    // Humanize RegisterPage.tsx
    content = content.replace(
        /Getting started with(.*)takes under a minute\. If you are looking for an intuitive gaming hub with live color forecasts, fast 60-second Wingo countdowns, and real cash settlement options, this walkthrough explains everything you need to know about joining VeerGame today\./g,
        "Creating an account on$1is super quick! If you love fast-paced color prediction games like Wingo and want a fun, secure place to play, this guide will show you exactly how to get started on VeerGame."
    );

    content = content.replace(
        /When you create an account through our verified portal using recommendation code <strong>VEER2026<\/strong>, you will unlock a <strong>₹500 Welcome Bonus<\/strong> right away\. Below, we break down the sign-up steps, eligibility rules, and simple fixes for everyday registration questions\./g,
        "By signing up with the invite code <strong>VEER2026</strong>, you'll instantly get a <strong>₹500 Welcome Bonus</strong> to kickstart your journey. Here's a simple step-by-step on how to join and answers to some common questions."
    );

    // Humanize DownloadPage.tsx
    content = content.replace(
        /Enjoying fast-paced color predictions on(.*)is even better with our dedicated Android APK \(v2\.1\.8\) and lightweight iOS Web App\. Designed specifically for reliable performance across 4G and 5G connections in India, the application offers responsive 60 FPS graphics, precise countdown timers for <strong>Wingo 1Min<\/strong> rounds, and quick game loading on VeerGame\./g,
        "Playing your favorite color prediction games on$1is even smoother with our official Android app (v2.1.8) and iOS Web App. It's built to run perfectly on Indian mobile networks, giving you fast loading times, smooth graphics, and real-time updates for Wingo."
    );

    content = content.replace(
        /In this guide for(.*), you will find direct download links, an easy walkthrough for installing on Android \(including enabling Unknown Sources safely\), Apple iOS Safari setup steps, package details, and handy performance tips\./g,
        "Check out this guide for$1to find the download links and simple instructions for installing the app safely on your Android or Apple device."
    );

    // Humanize AboutUsPage.tsx
    content = content.replace(
        /Welcome to(.*), an interactive color prediction and entertainment platform crafted for gaming fans across India\. Built on the principles of fair play, high-speed game rounds, and straightforward cash settlements, Veer Game brings together more than 500,000 active players into a welcoming, reliable community on VeerGame\./g,
        "Welcome to$1! We're a fun and interactive color prediction platform created for players all over India. We focus on fair play, fast games, and building a friendly community of over 500,000 active members."
    );

    // Write back
    fs.writeFileSync(filePath, content, 'utf8');
});
