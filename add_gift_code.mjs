import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appPath = path.resolve(__dirname, 'src/App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

// Ensure Copy is imported
if (!appContent.includes('Copy,')) {
    appContent = appContent.replace('ChevronRight,', 'ChevronRight,\n  Copy,');
}

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
              justifyContent: 'space-between',
              gap: '12px'
            }}>
              <code style={{ color: '#ca8a04', fontSize: '12px', fontWeight: 800, wordBreak: 'break-all', textAlign: 'left' }}>B8DA250869DE9796AD054977E7273FCF</code>
              <button
                type="button"
                onClick={(e) => {
                  navigator.clipboard.writeText('B8DA250869DE9796AD054977E7273FCF');
                  const btn = e.currentTarget;
                  const originalText = btn.innerHTML;
                  btn.innerHTML = 'Copied!';
                  setTimeout(() => { btn.innerHTML = originalText; }, 2000);
                }}
                style={{
                  background: '#ca8a04',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#a16207'}
                onMouseOut={(e) => e.currentTarget.style.background = '#ca8a04'}
              >
                <Copy size={14} /> Copy
              </button>
            </div>
            <p style={{ fontSize: '12.5px', color: '#a16207', margin: '10px 0 0 0', lineHeight: 1.4 }}>
              Copy this code and redeem it after registering for your exclusive welcome bonus!
            </p>
          </div>
`;

// Insert after Logo Card
appContent = appContent.replace(
    /(<div className="logo-card">[\s\S]*?<\/div>)\s*\{\/\* Hero Action Buttons \*\/\}/,
    `$1\n${giftCodeSnippet}\n          {/* Hero Action Buttons */}`
);

fs.writeFileSync(appPath, appContent, 'utf8');
console.log("Gift code added");
