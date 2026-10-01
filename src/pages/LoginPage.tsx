import React from 'react';
import {
  Gift,
  LogIn,
  UserPlus,
  Download,
  ShieldCheck,
  Key,
  Smartphone,
  ExternalLink,
  HelpCircle,
  Lock,
  Clock,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
} from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface LoginPageProps {
  onNavigate: (tab: NavTab) => void;
  }

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  return (
    <article className="content" id="login-page-article">
      <h1>Veer Game Login</h1>

      <p>
        Signing in to{' '}
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
        gives you immediate access to your live gaming balance, ongoing Wingo rounds, and daily agent commissions on VeerGame. Whether you are using an Android phone, an iPhone, or a laptop browser, our portal connects you quickly and securely.
      </p>

      <p>
        In this guide for{' '}
        <a
          href="/veergame-login"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('login');
          }}
          style={{ color: '#0d7045', fontWeight: 600 }}
        >
          <strong>Veer Game Login</strong>
        </a>
        , we cover simple step-by-step sign-in instructions, password recovery options, and practical security tips to keep your gaming balance protected. New around here? Check out our{' '}
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
        page to claim your <strong>₹500 Welcome Bonus</strong>, or grab the official APK from{' '}
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
        .
      </p>

      <h2>Veer Game Login Overview</h2>

      {/* Logo Card */}
      <div className="logo-card">
        <img
          src="/veer-game.webp"
          alt="Veer Game Login"
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
        <span className="screenshot-badge">Official Member Login Gateway</span>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="screenshot-link"
          title="Veer Game Login Screen"
        >
          <img
            src="https://i.ibb.co/0yfX343Y/veergame-login.webp"
            alt="veergame login"
            title="Veer Game Login Screen"
            className="screenshot-img"
            width="288"
            height="640"
            loading="eager"
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
          <strong>Veer Game Member Login Screen</strong>
          <span>Secure authentication gateway enabling instant access to live color predictions, real-time wallet balances, and agent salary history on VeerGame.</span>
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
              <Lock size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              Encrypted Login Gateway
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Every login request is processed over high-grade 256-bit TLS/SSL tunnels, preventing third-party packet sniffing or credential theft.
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
              <CheckCircle2 size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              Instant Multi-Device Sync
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Switch between the native Android APK, iOS browser app, and desktop computer seamlessly without losing your round progress or balance.
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
              <RotateCcw size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              Swift Account Recovery
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Forgot your password? Restore your login privileges rapidly through automated mobile verification or our round-the-clock support desk on Veer Game.
          </p>
        </div>
      </div>

      {/* SECTION 1: STEP-BY-STEP LOGIN INSTRUCTIONS */}
      <h2>STEP-BY-STEP GUIDE: HOW TO LOG IN TO VEER GAME</h2>
      <p>
        Logging in takes only a few seconds. Follow these simple steps:
      </p>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', margin: '16px 0' }}>
        <ol style={{ margin: '0 0 16px 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
          <li>
            <strong>Open the Login Window:</strong> Tap the{' '}
            <a
              href="/veergame-login"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('login');
              }}
              style={{ color: '#0d7045', fontWeight: 700 }}
            >
              Live Veer Game Login Link
            </a>{' '}
            or open the quick login modal above.
          </li>
          <li>
            <strong>Enter Your Phone Number:</strong> Input the 10-digit mobile number you used when you registered.
          </li>
          <li>
            <strong>Type Your Password:</strong> Enter your account password. Make sure Caps Lock is off to prevent keystroke errors.
          </li>
          <li>
            <strong>Enable Remember Login (Optional):</strong> On your personal smartphone, ticking "Remember login" allows one-tap access next time.
          </li>
          <li>
            <strong>Click Log In:</strong> Tap the <strong>Veer Game Login</strong> button. You will be routed straight to your player dashboard with current balances and game lobbies on VeerGame.
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
            <LogIn size={16} /> Log In on Veer Game
          </a>
        </div>
      </div>

      {/* SECTION 2: SPECIFICATIONS TABLE */}
      <h2>VEER GAME LOGIN SPECIFICATIONS</h2>
      <p>
        Here is a breakdown of the authentication rules and security measures protecting your account:
      </p>

      <div className="specs-table-wrapper" style={{ overflowX: 'auto', margin: '20px 0' }}>
        <table className="specs-table">
          <thead>
            <tr>
              <th style={{ width: '35%' }}>Specification</th>
              <th>Veer Game Standard &amp; Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Platform Gateway</td>
              <td><strong>Veer Game Official Login</strong></td>
            </tr>
            <tr>
              <td>Account Identifier</td>
              <td>Registered 10-Digit Mobile Number (+91)</td>
            </tr>
            <tr>
              <td>Encryption Level</td>
              <td>256-Bit SSL/TLS Cryptographic Security</td>
            </tr>
            <tr>
              <td>Session Storage</td>
              <td>Secure HTTP-Only Tokens</td>
            </tr>
            <tr>
              <td>Password Recovery</td>
              <td>Direct Phone Verification &amp; 24/7 Live Support</td>
            </tr>
            <tr>
              <td>Cross-Device Access</td>
              <td>Android Phones, iPhones, iPads, and Web Browsers</td>
            </tr>
            <tr>
              <td>Session Security</td>
              <td>Single Active Session to Prevent Unauthorized Use</td>
            </tr>
            <tr>
              <td>Player Assistance</td>
              <td>Live Chat &amp; Official Telegram Desk (@VeerGame_Official)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 3: FORGOT PASSWORD & RECOVERY */}
      <h2>PASSWORD RECOVERY &amp; ACCESS RESTORATION</h2>
      <p>
        If you have trouble signing in or forgot your password, don't worry. Here is how to regain access easily:
      </p>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
          <RotateCcw size={22} color="#0d7045" style={{ marginTop: '2px', flexShrink: 0 }} />
          <div>
            <h3 style={{ margin: '0 0 6px', fontSize: '16px', color: '#0f172a' }}>Option 1: In-App Password Reset</h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
              On the login screen, click <strong>Forgot Password?</strong>. Enter your phone number to receive a temporary recovery code, then set a new password of your choice on VeerGame.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <HelpCircle size={22} color="#15803d" style={{ marginTop: '2px', flexShrink: 0 }} />
          <div>
            <h3 style={{ margin: '0 0 6px', fontSize: '16px', color: '#0f172a' }}>Option 2: 24/7 Customer Care Help Desk</h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
              If your phone cannot receive SMS messages or if your account was paused due to too many failed attempts, message our{' '}
              <a
                href="/contact-us"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact-us');
                }}
                style={{ color: '#0d7045', fontWeight: 600 }}
              >
                Support Desk
              </a>. Our team will verify your identity and help you back in within minutes.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 4: SECURITY TIPS */}
      <h2>SMART HABITS FOR KEEPING YOUR ACCOUNT SAFE</h2>
      <p>
        To keep your wallet balance, rewards, and agent salary secure, we recommend following these easy safety practices:
      </p>

      <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
        <li>
          <strong>Never Share Your Password:</strong> Official Veer Game team members will never ask for your password or verification codes. Never give them out to anyone.
        </li>
        <li>
          <strong>Check the Web Address:</strong> Always confirm you are on the authentic Veer Game address or using the official Android APK (v2.1.8).
        </li>
        <li>
          <strong>Log Out from Shared Computers:</strong> If you ever play on a public or shared computer, make sure to log out when you finish.
        </li>
        <li>
          <strong>Update Your Password Regularly:</strong> Changing your password every couple of months is an easy way to keep your gaming funds safe on VeerGame.
        </li>
      </ul>

      {/* SECTION 5: FAQS */}
      <h2>FREQUENTLY ASKED QUESTIONS ABOUT VEER GAME LOGIN</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0' }}>
        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            1. Why does it say "Incorrect Password"?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            Passwords are case-sensitive. Check if Caps Lock is turned on, look out for accidental spaces, or use the "Forgot Password" option to reset it.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            2. Can I stay logged in on multiple phones simultaneously?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            For account protection, Veer Game allows one active session at a time. Signing in on a new device will sign you out of your previous one.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            3. What happens if my account gets locked after wrong attempts?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            This automatic lock prevents unauthorized brute-force attempts. Simply wait 15 minutes or message our{' '}
            <a
              href="/contact-us"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact-us');
              }}
              style={{ color: '#0d7045' }}
            >
              24/7 Support Team
            </a>{' '}
            for an instant unlock on VeerGame.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            4. Is my balance preserved if I switch to a new phone?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            Yes! Your wallet, VIP progress, and daily agent salary records are securely synced on cloud servers. Signing in on any device restores your balance immediately on Veer Game.
          </p>
        </div>
      </div>

      {/* Final Login CTA Bar */}
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
          Access Your Veer Game Account Now
        </h3>
        <p style={{ color: '#ecfdf5', fontSize: '14.5px', maxWidth: '520px', margin: '0 auto 18px', lineHeight: 1.6 }}>
          Log in securely to continue your color color prediction rounds, track your daily agent salary, and withdraw your earnings smoothly on VeerGame.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
            style={{ textDecoration: 'none', background: '#ffffff', color: '#0d7045', padding: '12px 28px', fontSize: '15px', fontWeight: 700 }}
          >
            Veer Game Login Now
          </a>
          <a
            href="/veergame-register"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('register');
            }}
            className="cta"
            style={{ textDecoration: 'none', background: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', border: '1px solid rgba(255, 255, 255, 0.4)', padding: '12px 24px', fontSize: '15px' }}
          >
            Create New Account
          </a>
        </div>
      </div>
    </article>
  );
};
