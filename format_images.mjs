import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Update hrefs in existing figure cards
const pagesToUpdateHref = [
    'src/App.tsx',
    'src/pages/LoginPage.tsx',
    'src/pages/RegisterPage.tsx',
    'src/pages/DownloadPage.tsx'
];

// Helper to get image URL from the page (since I already replaced the img src)
for (const f of pagesToUpdateHref) {
    let p = path.resolve(__dirname, f);
    let content = fs.readFileSync(p, 'utf8');
    
    // Find img src that we injected
    let imgSrcMatch = content.match(/<img[^>]+src="(https:\/\/i\.ibb\.co\/[^"]+)"[^>]+className="screenshot-img"/);
    if (imgSrcMatch) {
        let imgSrc = imgSrcMatch[1];
        // Replace href="/bdgbet-app.webp" with href="{imgSrc}" ONLY within the screenshot-link block
        content = content.replace(/href="\/bdgbet-app\.webp"/g, `href="${imgSrc}"`);
        fs.writeFileSync(p, content, 'utf8');
    }
}

// 2. Replace the inline divs in App.tsx with the full figure markup
let appTsxPath = path.resolve(__dirname, 'src/App.tsx');
let appContent = fs.readFileSync(appTsxPath, 'utf8');

const registerFigure = `
                <figure className="screenshot-card" style={{ margin: '24px auto' }}>
                  <span className="screenshot-badge">Official Registration Portal</span>
                  <a
                    href="https://i.ibb.co/Txt1jVgv/veergame-register.webp"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveModal('screenshot');
                    }}
                    className="screenshot-link"
                    title="Veer Game Register"
                  >
                    <img
                      src="https://i.ibb.co/Txt1jVgv/veergame-register.webp"
                      alt="veergame register"
                      title="Veer Game Register"
                      className="screenshot-img"
                      width="288"
                      height="640"
                      loading="lazy"
                      decoding="async"
                      style={{ maxWidth: '100%', height: 'auto', aspectRatio: '288 / 640', display: 'block' }}
                    />
                    <div className="screenshot-overlay">
                      <span className="screenshot-zoom-btn">
                        <ExternalLink size={12} /> Tap to Expand
                      </span>
                    </div>
                  </a>
                  <figcaption className="screenshot-caption">
                    <strong>Veer Game Registration</strong>
                    <span>Secure portal for creating a new player account and claiming the ₹500 welcome bonus on VeerGame.</span>
                  </figcaption>
                </figure>
`;

appContent = appContent.replace(
    /<div style={{ textAlign: 'center', margin: '24px 0' }}>\s*<img src="https:\/\/i\.ibb\.co\/Txt1jVgv\/veergame-register\.webp"[^>]+>\s*<\/div>/,
    registerFigure.trim()
);

const loginFigure = `
                <figure className="screenshot-card" style={{ margin: '24px auto' }}>
                  <span className="screenshot-badge">Official Member Login Gateway</span>
                  <a
                    href="https://i.ibb.co/0yfX343Y/veergame-login.webp"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveModal('screenshot');
                    }}
                    className="screenshot-link"
                    title="Veer Game Login"
                  >
                    <img
                      src="https://i.ibb.co/0yfX343Y/veergame-login.webp"
                      alt="veergame login"
                      title="Veer Game Login"
                      className="screenshot-img"
                      width="288"
                      height="640"
                      loading="lazy"
                      decoding="async"
                      style={{ maxWidth: '100%', height: 'auto', aspectRatio: '288 / 640', display: 'block' }}
                    />
                    <div className="screenshot-overlay">
                      <span className="screenshot-zoom-btn">
                        <ExternalLink size={12} /> Tap to Expand
                      </span>
                    </div>
                  </a>
                  <figcaption className="screenshot-caption">
                    <strong>Veer Game Member Login</strong>
                    <span>Secure authentication gateway enabling instant access to live color predictions and balances on VeerGame.</span>
                  </figcaption>
                </figure>
`;

appContent = appContent.replace(
    /<div style={{ textAlign: 'center', margin: '24px 0' }}>\s*<img src="https:\/\/i\.ibb\.co\/0yfX343Y\/veergame-login\.webp"[^>]+>\s*<\/div>/,
    loginFigure.trim()
);

const gamesFigure = `
                <figure className="screenshot-card" style={{ margin: '24px auto' }}>
                  <span className="screenshot-badge">Veer Game Live Games Portfolio</span>
                  <a
                    href="https://i.ibb.co/gM48BkSG/veergame-games.webp"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveModal('screenshot');
                    }}
                    className="screenshot-link"
                    title="Veer Game Games"
                  >
                    <img
                      src="https://i.ibb.co/gM48BkSG/veergame-games.webp"
                      alt="veergame games"
                      title="Veer Game Games"
                      className="screenshot-img"
                      width="288"
                      height="640"
                      loading="lazy"
                      decoding="async"
                      style={{ maxWidth: '100%', height: 'auto', aspectRatio: '288 / 640', display: 'block' }}
                    />
                    <div className="screenshot-overlay">
                      <span className="screenshot-zoom-btn">
                        <ExternalLink size={12} /> Tap to Expand
                      </span>
                    </div>
                  </a>
                  <figcaption className="screenshot-caption">
                    <strong>Veer Game Live Games Portfolio</strong>
                    <span>High-frequency Wingo 1Min analytical prediction rounds, classic Aviator challenges, and more.</span>
                  </figcaption>
                </figure>
`;

appContent = appContent.replace(
    /<div style={{ textAlign: 'center', margin: '24px 0' }}>\s*<img src="https:\/\/i\.ibb\.co\/gM48BkSG\/veergame-games\.webp"[^>]+>\s*<\/div>/,
    gamesFigure.trim()
);

fs.writeFileSync(appTsxPath, appContent, 'utf8');

// 3. Replace the inline divs in the support pages with the full figure markup
const supportPages = [
    'src/pages/AboutUsPage.tsx',
    'src/pages/ContactUsPage.tsx',
    'src/pages/TermsPage.tsx',
    'src/pages/PrivacyPage.tsx',
    'src/pages/ResponsibleGamingPage.tsx'
];

for (const f of supportPages) {
    let p = path.resolve(__dirname, f);
    let content = fs.readFileSync(p, 'utf8');
    
    // We inserted this exactly:
    // <div className="screenshot-wrapper" style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
    //   <img ... />
    // </div>
    
    let regex = /<div className="screenshot-wrapper"[^>]*>\s*<img[^>]+>\s*<\/div>/;
    
    const pageFigure = `
      <figure className="screenshot-card" style={{ margin: '30px auto' }}>
        <span className="screenshot-badge">Veer Game Official Platform</span>
        <a
          href="https://i.ibb.co/LXL6tMyN/veergame.webp"
          onClick={(e) => {
            e.preventDefault();
            onOpenModal('screenshot');
          }}
          className="screenshot-link"
          title="Veer Game Interface"
        >
          <img
            src="https://i.ibb.co/LXL6tMyN/veergame.webp"
            alt="veergame"
            title="Veer Game Interface"
            className="screenshot-img"
            width="288"
            height="640"
            loading="lazy"
            decoding="async"
            style={{ maxWidth: '100%', height: 'auto', aspectRatio: '288 / 640', display: 'block' }}
          />
          <div className="screenshot-overlay">
            <span className="screenshot-zoom-btn">
              <ExternalLink size={12} /> Tap to Expand
            </span>
          </div>
        </a>
        <figcaption className="screenshot-caption">
          <strong>Veer Game Official Platform</strong>
          <span>A trusted online hub for interactive gaming, real-time Wingo color predictions, and daily agent salary rewards.</span>
        </figcaption>
      </figure>
`;
    content = content.replace(regex, pageFigure.trim());
    fs.writeFileSync(p, content, 'utf8');
}

console.log('Formatted all screenshots identically');

