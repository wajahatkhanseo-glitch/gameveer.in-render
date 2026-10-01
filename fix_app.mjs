import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appPath = path.resolve(__dirname, 'src/App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');

// Strip out { /* Modals */ } entirely to just before { /* Footer */ }
appContent = appContent.replace(/\{\s*\/\*\s*Modals\s*\*\/\s*\}(.|\n)*?\{\s*\/\*\s*Footer\s*\*\/\s*\}/g, '{ /* Footer */ }');

// Remove ActiveModal usage from useState
appContent = appContent.replace(/const \[activeModal, setActiveModal\] = useState.*?;\n/g, '');

// Also remove ActiveModal from import from './types';
appContent = appContent.replace(/ActiveModal, /g, '');
appContent = appContent.replace(/, ActiveModal/g, '');
appContent = appContent.replace(/import \{ ActiveModal \} from '\.\/types';/g, '');

// The screenshot modal is no longer using activeModal === 'screenshot'.
// Wait, screenshot modal relies on activeModal! 
// Let's create a new state just for screenshot.
appContent = appContent.replace(/activeModal === 'screenshot'/g, 'isScreenshotOpen');
appContent = appContent.replace(/setActiveModal\('screenshot'\)/g, 'setIsScreenshotOpen(true)');
appContent = appContent.replace(/setActiveModal\(null\)/g, 'setIsScreenshotOpen(false)');

if (!appContent.includes('const [isScreenshotOpen, setIsScreenshotOpen] = useState(false);')) {
    appContent = appContent.replace(
        /const \[currentTab, setCurrentTab\] = useState.*?;\n/,
        `$&  const [isScreenshotOpen, setIsScreenshotOpen] = useState(false);\n`
    );
}

fs.writeFileSync(appPath, appContent, 'utf8');

const notFoundPath = path.resolve(__dirname, 'src/components/NotFoundView.tsx');
if (fs.existsSync(notFoundPath)) {
    let nfContent = fs.readFileSync(notFoundPath, 'utf8');
    nfContent = nfContent.replace(/import \{.*?ActiveModal.*?\} from '\.\.\/types';/, "import { NavTab } from '../types';");
    nfContent = nfContent.replace(/onOpenModal: \(modal: .*?\) => void;/, "");
    nfContent = nfContent.replace(/, onOpenModal/, "");
    nfContent = nfContent.replace(/onOpenModal=\{onOpenModal\}/, "");
    fs.writeFileSync(notFoundPath, nfContent, 'utf8');
}

// Clean up Header.tsx removing any leftover onOpenModal
const headerPath = path.resolve(__dirname, 'src/components/Header.tsx');
if (fs.existsSync(headerPath)) {
    let headerContent = fs.readFileSync(headerPath, 'utf8');
    headerContent = headerContent.replace(/onOpenModal,/g, '');
    fs.writeFileSync(headerPath, headerContent, 'utf8');
}

