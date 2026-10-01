import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const giftCodeSnippet = `
      {/* Official Gift Code Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)',
        border: '1px dashed #eab308',
        borderRadius: '12px',
        padding: '16px',
        margin: '0 auto 24px auto',
        maxWidth: '500px',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
          <Gift size={20} color="#ca8a04" />
          <strong style={{ color: '#854d0e', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Official Welcome Gift Code</strong>
        </div>
        <div style={{
          background: '#ffffff',
          border: '1px solid #fde047',
          borderRadius: '8px',
          padding: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px'
        }}>
          <code style={{ color: '#ca8a04', fontSize: '16px', fontWeight: 800, wordBreak: 'break-all', textAlign: 'center' }}>B8DA250869DE9796AD054977E7273FCF</code>
        </div>
        <p style={{ fontSize: '12.5px', color: '#a16207', margin: '10px 0 0 0', lineHeight: 1.4 }}>
          Copy this code and redeem it after registering for your exclusive welcome bonus!
        </p>
      </div>
`;

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
    let content = fs.readFileSync(filePath, 'utf8');

    // Make sure Gift is imported
    if (!content.includes('Gift,')) {
        content = content.replace(/import\s*\{/, 'import {\n  Gift,');
    }

    if (file.endsWith('App.tsx')) {
        // Remove old banner block in App.tsx
        content = content.replace(/\{\/\*\s*Official Gift Code Banner\s*\*\/\}[\s\S]*?(?=\{\/\*\s*Hero Action Buttons\s*\*\/)/, giftCodeSnippet + '          ');
    } else {
        // Insert in other pages right before <div className="hero-actions"
        if (!content.includes('Official Welcome Gift Code')) {
            content = content.replace(/<div className="hero-actions"/, giftCodeSnippet.trim() + '\n      <div className="hero-actions"');
        }
    }

    fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Gift code banner applied to all pages without copy button.");
