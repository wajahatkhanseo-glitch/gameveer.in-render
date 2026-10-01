import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const responsiveSnippet = `
      {/* Official Gift Code Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)',
        border: '1px dashed #eab308',
        borderRadius: 'clamp(8px, 2vw, 12px)',
        padding: 'clamp(12px, 3vw, 16px)',
        margin: '0 auto 24px auto',
        width: '92%',
        maxWidth: '500px',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <Gift size={18} color="#ca8a04" />
          <strong style={{ color: '#854d0e', fontSize: 'clamp(13px, 3.5vw, 15px)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Official Welcome Gift Code</strong>
        </div>
        <div style={{
          background: '#ffffff',
          border: '1px solid #fde047',
          borderRadius: '8px',
          padding: 'clamp(8px, 2vw, 12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <code style={{ 
            color: '#ca8a04', 
            fontSize: 'clamp(11px, 4vw, 16px)', 
            fontWeight: 800, 
            wordBreak: 'break-all', 
            textAlign: 'center',
            letterSpacing: '1px'
          }}>B8DA250869DE9796AD054977E7273FCF</code>
        </div>
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
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf8');

    // Regex to match the existing Official Gift Code Banner block
    // It starts with {/* Official Gift Code Banner */} and ends with the closing </div> before {/* Hero Action Buttons */} or <div className="hero-actions"
    const regex = /\{\/\*\s*Official Gift Code Banner\s*\*\/\}[\s\S]*?(?=\{\/\*\s*Hero Action Buttons\s*\*\/|<div className="hero-actions")/g;
    
    content = content.replace(regex, responsiveSnippet.trim() + '\n      ');

    fs.writeFileSync(filePath, content, 'utf8');
}

console.log("Gift code banner made mobile-friendly on all pages.");
