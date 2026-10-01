import React from 'react';
import {
  Gift,
  Download,
  Smartphone,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Apple,
  ExternalLink,
  Lock,
  Cpu,
  RefreshCw,
  HelpCircle,
  LogIn,
  UserPlus,
} from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface DownloadPageProps {
  onNavigate: (tab: NavTab) => void;
  }

export const DownloadPage: React.FC<DownloadPageProps> = ({ onNavigate }) => {
  return (
    <article className="content" id="download-page-article">
      <h1>VeerGame APK Download</h1>

      <p>
        Enjoying fast-paced color predictions on{' '}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          style={{ color: '#0d7045', fontWeight: 600 }}
        >
          <strong>Veer Game</strong>
        </a>{' '}
        is even better with our dedicated Android APK (v2.1.8) and lightweight iOS Web App. Designed specifically for reliable performance across 4G and 5G connections in India, the application offers responsive 60 FPS graphics, precise countdown timers for <strong>Wingo 1Min</strong> rounds, and quick game loading on VeerGame.
      </p>

      <p>
        In this guide for{' '}
        <a
          href="/veergame-download"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('download');
          }}
          style={{ color: '#0d7045', fontWeight: 600 }}
        >
          <strong>VeerGame APK Download</strong>
        </a>
        , you will find direct download links, an easy walkthrough for installing on Android (including enabling Unknown Sources safely), Apple iOS Safari setup steps, package details, and handy performance tips. If you are new, make sure to visit{' '}
        <a
          href="/veergame-register"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('register');
          }}
          style={{ color: '#0d7045', fontWeight: 600 }}
        >
          <strong>Veer Game Register</strong>
        </a>{' '}
        to claim your <strong>₹500 Welcome Bonus</strong>, or head to{' '}
        <a
          href="/veergame-login"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('login');
          }}
          style={{ color: '#0d7045', fontWeight: 600 }}
        >
          <strong>Veer Game Login</strong>
        </a>{' '}
        if you already have an account.
      </p>

      <h2>Veer Game APK Download Overview</h2>

      {/* Logo Card */}
      <div className="logo-card">
        <img
          src="/veer-game.webp"
          alt="Veer Game APK Download"
          className="logo-img"
          width="240"
          height="80"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Hero Action Buttons */}
      <div className="hero-actions" style={{ justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '20px', marginBottom: '20px' }}>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
          style={{ textDecoration: 'none' }}
        >
          Veer Game Login
        </a>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
          style={{ textDecoration: 'none' }}
        >
          Veer Game Register
        </a>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
          style={{ textDecoration: 'none' }}
        >
          Veer Game Apk Download
        </a>
      </div>

      {/* Screenshot Card */}
      <figure className="screenshot-card">
        <span className="screenshot-badge">Official Android App Dashboard</span>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="screenshot-link"
          title="Veer Game APK Download"
        >
          <img
            src="/veergame.webp"
            alt="Veer Game APK Download Dashboard"
            title="Veer Game APK Download"
            className="screenshot-img"
            width="288"
            height="640"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            style={{ maxWidth: '100%', height: 'auto', aspectRatio: '288 / 640', display: 'block' }}
          />
          <div className="screenshot-overlay">
            <span className="screenshot-zoom-btn">
              <ExternalLink size={12} /> Tap to Expand
            </span>
          </div>
        </a>
        <figcaption className="screenshot-caption">
          <strong>Veer Game Native Mobile App Interface (v2.1.8)</strong>
          <span>Ultra-responsive Android and iOS interface featuring real-time results, instant cashout tracking, and rapid lottery betting on VeerGame.</span>
        </figcaption>
      </figure>

      {/* 3 Core Highlight Feature Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          margin: '24px 0',
        }}
      >
        <div
          style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{ background: '#ecfdf5', color: '#0d7045', padding: '8px', borderRadius: '8px' }}>
              <Zap size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              Fluid 60 FPS Engine
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Hardware optimization ensures smooth visuals during fast 30-second and 60-second Wingo countdowns.
          </p>
        </div>

        <div
          style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{ background: '#dcfce7', color: '#15803d', padding: '8px', borderRadius: '8px' }}>
              <ShieldCheck size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              Lightweight 15.4 MB Size
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Compact package downloads in just a few seconds and uses very little storage space and battery on VeerGame.
          </p>
        </div>

        <div
          style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div style={{ background: '#fef3c7', color: '#b45309', padding: '8px', borderRadius: '8px' }}>
              <Lock size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              Instant Push Alerts
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Get instant notifications for daily gift code drops, tournament winners, and daily salary credits on Veer Game.
          </p>
        </div>
      </div>

      {/* SECTION 1: ANDROID APK INSTALLATION GUIDE */}
      <h2>STEP-BY-STEP ANDROID INSTALLATION GUIDE</h2>
      <p>
        Because the official APK is hosted directly on our secure servers, your Android device will ask for installation permission:
      </p>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', margin: '16px 0' }}>
        <ol style={{ margin: '0 0 16px 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
          <li>
            <strong>Download the Package:</strong> Tap the{' '}
            <a
              href="/veergame-download"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('download');
              }}
              style={{ color: '#0d7045', fontWeight: 700 }}
            >
              Direct VeerGame APK Download Link (v2.1.8 - 15.4 MB)
            </a>{' '}
            to save <code>veergame.apk</code> on your phone.
          </li>
          <li>
            <strong>Allow Installation from This Source:</strong> If a prompt appears, go to <strong>Settings &rarr; Apps &rarr; Special App Access &rarr; Install Unknown Apps</strong>. Select your browser (Chrome, Samsung Internet, etc.) and switch on "Allow from this source".
          </li>
          <li>
            <strong>Open the Downloaded File:</strong> Pull down your notification bar or navigate to your device's <strong>Downloads</strong> folder.
          </li>
          <li>
            <strong>Install the App:</strong> Tap <code>veergame.apk</code> and press <strong>Install</strong>. Setup completes in about 3 to 5 seconds.
          </li>
          <li>
            <strong>Launch and Play:</strong> Tap <strong>Open</strong> to start Veer Game, log in with your credentials, and start predicting!
          </li>
        </ol>

        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px', padding: '12px 28px' }}
          >
            <Download size={16} /> Download VeerGame APK
          </a>
        </div>
      </div>

      {/* SECTION 2: APPLE IOS SAFARI GUIDE */}
      <h2>EASY SETUP FOR IPHONE &amp; IPAD (APPLE IOS)</h2>
      <p>
        iPhone and iPad players do not need to install third-party profiles. You can add Veer Game directly to your home screen using Safari's Progressive Web App feature:
      </p>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
        <ol style={{ margin: '0 0 16px 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
          <li>Open the official <strong>Veer Game</strong> portal inside <strong>Safari</strong> on your Apple device.</li>
          <li>Tap the <strong>Share</strong> button at the bottom of the screen (the square icon with an upward arrow).</li>
          <li>Scroll down through the options and choose <strong>Add to Home Screen</strong>.</li>
          <li>Verify the title as "Veer Game" and tap <strong>Add</strong> in the top right.</li>
          <li>An official VeerGame icon will appear on your home screen, giving you full-screen access without browser bars!</li>
        </ol>
      </div>

      {/* SECTION 3: SPECIFICATIONS TABLE */}
      <h2>VEER GAME APK SPECIFICATIONS</h2>
      <p>
        Here are the official release details and minimum system requirements for the app:
      </p>

      <div className="specs-table-wrapper" style={{ overflowX: 'auto', margin: '20px 0' }}>
        <table className="specs-table">
          <thead>
            <tr>
              <th style={{ width: '35%' }}>Attribute</th>
              <th>VeerGame APK Specification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Package Title</td>
              <td><strong>Veer Game (Official VeerGame APK Release)</strong></td>
            </tr>
            <tr>
              <td>Current Build Version</td>
              <td>v2.1.8 (Latest 2026 Stable Build)</td>
            </tr>
            <tr>
              <td>APK File Size</td>
              <td>15.4 MB (Fast Download)</td>
            </tr>
            <tr>
              <td>Minimum Android Version</td>
              <td>Android 5.0 (Lollipop) or Higher</td>
            </tr>
            <tr>
              <td>Supported Architectures</td>
              <td>arm64-v8a, armeabi-v7a, x86_64</td>
            </tr>
            <tr>
              <td>RAM Requirement</td>
              <td>Minimum 1 GB RAM (2 GB+ Recommended)</td>
            </tr>
            <tr>
              <td>Security Status</td>
              <td>100% VirusTotal &amp; Google Play Protect Verified</td>
            </tr>
            <tr>
              <td>Update Method</td>
              <td>Automatic In-App Silent Updates</td>
            </tr>
            <tr>
              <td>Player Support</td>
              <td>24/7 Dedicated Technical Live Help Desk</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 4: NATIVE APK VS WEB BROWSER COMPARISON */}
      <h2>COMPARING NATIVE APK VS WEB BROWSER PLAY</h2>
      <p>
        While both versions provide full access to all Veer Game modes, the native APK offers several perks for active players:
      </p>

      <div className="specs-table-wrapper" style={{ overflowX: 'auto', margin: '20px 0' }}>
        <table className="specs-table">
          <thead>
            <tr>
              <th>Performance Feature</th>
              <th>Web Browser Version</th>
              <th>Official VeerGame APK (v2.1.8)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Display Frame Rate</td>
              <td>30 - 45 FPS (Browser dependent)</td>
              <td><span style={{ color: '#15803d', fontWeight: 700 }}>Smooth 60 FPS Hardware Acceleration</span></td>
            </tr>
            <tr>
              <td>Timer Synchronization</td>
              <td>Standard HTTP Polling</td>
              <td><span style={{ color: '#15803d', fontWeight: 700 }}>Real-Time Low Latency WebSocket</span></td>
            </tr>
            <tr>
              <td>Gift Code Alerts</td>
              <td>Manual Refresh Needed</td>
              <td><span style={{ color: '#15803d', fontWeight: 700 }}>Instant Push Notifications</span></td>
            </tr>
            <tr>
              <td>Data Usage</td>
              <td>Reloads assets occasionally</td>
              <td><span style={{ color: '#15803d', fontWeight: 700 }}>Saves data via cached graphics</span></td>
            </tr>
            <tr>
              <td>Launch Speed</td>
              <td>Requires bookmarking</td>
              <td><span style={{ color: '#15803d', fontWeight: 700 }}>One-tap home screen access</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 5: FAQS */}
      <h2>FREQUENTLY ASKED QUESTIONS ABOUT VEER GAME APK DOWNLOAD</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0' }}>
        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            1. Is the VeerGame APK safe to install?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            Yes, absolutely. The official <code>veergame.apk</code> package from our portal is digitally signed and audited clean through major scanners, including Google Play Protect and VirusTotal.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            2. Why does Android show a "File might be harmful" prompt?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            This is standard Android notification behavior for any app downloaded outside the Google Play Store. You can safely tap "Download Anyway" as our official Veer Game package is verified.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            3. How do app updates work in the future?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            The application includes an in-app updater. When an update is ready, you will see a simple notification on startup to upgrade smoothly in one tap on VeerGame.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            4. Will the app run smoothly on budget phones?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            Yes! Veer Game is designed to run efficiently on phones with 1 GB of RAM or more, running Android 5.0 and above.
          </p>
        </div>
      </div>

      {/* Final Download CTA Bar */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1CCE84 0%, #0d7045 100%)',
          borderRadius: '16px',
          padding: '28px 20px',
          color: '#ffffff',
          textAlign: 'center',
          margin: '30px 0 10px',
        }}
      >
        <h3 style={{ color: '#ffffff', fontSize: '20px', margin: '0 0 10px', fontWeight: 800 }}>
          Download VeerGame APK (v2.1.8 - 15.4 MB)
        </h3>
        <p style={{ color: '#ecfdf5', fontSize: '14.5px', maxWidth: '520px', margin: '0 auto 18px', lineHeight: 1.6 }}>
          Enjoy the fastest 60 FPS color prediction gaming on your Android device with instant payouts and push alert gift drops on Veer Game.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
            style={{ textDecoration: 'none', background: '#ffffff', color: '#0d7045', padding: '12px 28px', fontSize: '15px', fontWeight: 700 }}
          >
            <Download size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
            Veer Game Download APK
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
            className="cta"
            style={{ textDecoration: 'none', background: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.4)', padding: '12px 24px', fontSize: '15px' }}
          >
            Back to Veer Game Home
          </a>
        </div>
      </div>
    </article>
  );
};
