import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appPath = path.resolve(__dirname, 'src/App.tsx');
let content = fs.readFileSync(appPath, 'utf8');

// Ensure routeMap is imported from navigation.ts
if (!content.includes('routeMap')) {
    content = content.replace(
        /import \{ getTabFromPath, navigateTo \} from '\.\/utils\/navigation';/,
        "import { getTabFromPath, navigateTo, routeMap } from './utils/navigation';"
    );
}

// Modify the title useEffect to also update the canonical tag
const newUseEffect = `
  useEffect(() => {
    const titles: Record<NavTab, string> = {
      home: 'Veer Game',
      register: 'Veer Game Register',
      login: 'Veer Game Login',
      download: 'Veer Game APK Download',
      'responsible-gaming': 'Veer Game Responsible Gaming',
      'about-us': 'Veer Game About Us',
      'contact-us': 'Veer Game Contact Us',
      'terms-and-conditions': 'Veer Game Terms and Conditions',
      'privacy-policy': 'Veer Game Privacy Policy',
      '404': '404 - Page Not Found | Veer Game',
    };
    
    if (titles[currentTab]) {
      document.title = titles[currentTab];
    }

    // Dynamic Canonical Tag Update
    let link: HTMLLinkElement | null = document.querySelector("link[rel~='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    const pathPart = routeMap[currentTab] === '/' ? '' : routeMap[currentTab];
    link.href = \`https://gameveer.in\${pathPart}\`;
    
  }, [currentTab]);
`;

content = content.replace(/useEffect\(\(\) => \{\s*const titles: Record<NavTab, string> = \{[\s\S]*?\}, \[currentTab\]\);/, newUseEffect.trim());

fs.writeFileSync(appPath, content, 'utf8');
console.log("Canonical tag logic added to App.tsx");
