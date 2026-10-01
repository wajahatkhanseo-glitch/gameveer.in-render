import React from 'react';
import {
  UserPlus,
  LogIn,
  Download,
  Gift,
  CheckCircle2,
  ShieldCheck,
  ExternalLink,
  Lock,
  Clock,
  Award,
  Sparkles,
  HelpCircle,
  Smartphone,
  ChevronRight,
} from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface RegisterPageProps {
  onNavigate: (tab: NavTab) => void;
  }

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  return (
    <article className="content" id="register-page-article">
      <h1>Veer Game Register</h1>

      <p>
        Getting started with{' '}
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
        takes under a minute. If you are looking for an intuitive gaming hub with live color forecasts, fast 60-second Wingo countdowns, and real cash settlement options, this walkthrough explains everything you need to know about joining VeerGame today.
      </p>

      <p>
        By signing up with the invite code <strong>VEER2026</strong>, you'll instantly get a <strong>₹500 Welcome Bonus</strong> to kickstart your journey. Here's a simple step-by-step on how to join and answers to some common questions. If you already have an account, head over to{' '}
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
        , or grab the Veer Game mobile app from our{' '}
        <a
          href="/veergame-download"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('download');
          }}
          style={{ color: '#0d7045', fontWeight: 600 }}
        >
          <strong>VeerGame APK Download</strong>
        </a>{' '}
        page.
      </p>

      <h2>Veer Game Register Overview</h2>

      {/* Logo Card */}
      <div className="logo-card">
        <img
          src="/veer-game.webp"
          alt="Veer Game Register"
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
        <span className="screenshot-badge">Official Registration Portal</span>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="screenshot-link"
          title="Veer Game Register Screen"
        >
          <img
            src="https://i.ibb.co/Txt1jVgv/veergame-register.webp"
            alt="veergame register"
            title="Veer Game Register Screen"
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
          <strong>Veer Game Registration &amp; Account Portal</strong>
          <span>Instant mobile registration interface offering verified SSL signup, ₹500 welcome bonus credit, and referral activation on VeerGame.</span>
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
            <div style={{ background: '#dcfce7', color: '#15803d', padding: '8px', borderRadius: '8px' }}>
              <Gift size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              ₹500 Starter Balance
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Apply referral code <strong>VEER2026</strong> to have ₹500 added straight to your gaming balance on first sign-in.
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
            <div style={{ background: '#ecfdf5', color: '#0d7045', padding: '8px', borderRadius: '8px' }}>
              <Clock size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              Swift Sign-Up Process
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            No tedious forms or delayed approvals. Enter your phone number, pick your secret password, and start playing within seconds.
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
              <ShieldCheck size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              Protected Account Gateway
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Your credentials, phone number, and wallet data are protected with 256-bit SSL encryption on VeerGame.
          </p>
        </div>
      </div>

      {/* SECTION 1: STEP-BY-STEP REGISTRATION */}
      <h2>STEP-BY-STEP GUIDE: HOW TO REGISTER ON VEER GAME</h2>
      <p>
        Setting up your account on <strong>Veer Game</strong> is straightforward. Just follow this easy sequence to get your profile active and ready:
      </p>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', margin: '16px 0' }}>
        <ol style={{ margin: '0 0 16px 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
          <li>
            <strong>Open the Sign-Up Screen:</strong> Tap the{' '}
            <a
              href="/veergame-register"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('register');
              }}
              style={{ color: '#0d7045', fontWeight: 700 }}
            >
              Live Veer Game Register Link
            </a>{' '}
            or use the quick popup button on this page.
          </li>
          <li>
            <strong>Provide Your Active Mobile Number:</strong> Type in your 10-digit Indian phone number (+91). Make sure you have access to this number, as it doubles as your account username and wallet recovery key.
          </li>
          <li>
            <strong>Create Your Account Password:</strong> Pick a strong password between 6 and 16 characters. A blend of numbers and letters ensures your wallet stays well protected.
          </li>
          <li>
            <strong>Re-Enter Password:</strong> Type the same password once more in the confirmation box to catch any accidental typos.
          </li>
          <li>
            <strong>Enter Referral Code:</strong> Check that the invite code field displays <strong>VEERGAME2026</strong> so that the ₹500 welcome reward activates on your profile.
          </li>
          <li>
            <strong>Agree to Community Rules:</strong> Check the box confirming you are 18 years or older and accept our{' '}
            <a
              href="/terms-and-conditions"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('terms-and-conditions');
              }}
              style={{ color: '#0d7045', fontWeight: 600 }}
            >
              Terms and Conditions
            </a>{' '}
            and{' '}
            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('privacy-policy');
              }}
              style={{ color: '#0d7045', fontWeight: 600 }}
            >
              Privacy Policy
            </a>.
          </li>
          <li>
            <strong>Complete Registration:</strong> Click <strong>Complete Veer Game Register &amp; Claim ₹500</strong>. Your dashboard opens immediately with full access to games and balance tools on VeerGame.
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
            <UserPlus size={16} /> Register on Veer Game
          </a>
        </div>
      </div>

      {/* SECTION 2: SPECIFICATIONS TABLE */}
      <h2>VEER GAME REGISTRATION SPECIFICATIONS</h2>
      <p>
        Here is a quick look at key system parameters and requirements for creating a new player profile:
      </p>

      <div className="specs-table-wrapper" style={{ overflowX: 'auto', margin: '20px 0' }}>
        <table className="specs-table">
          <thead>
            <tr>
              <th style={{ width: '35%' }}>Parameter</th>
              <th>Veer Game Requirement &amp; Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Platform Name</td>
              <td><strong>Veer Game (Official Gaming Hub)</strong></td>
            </tr>
            <tr>
              <td>Account Creation Cost</td>
              <td>100% Free (No hidden joining charges)</td>
            </tr>
            <tr>
              <td>Official Invite Code</td>
              <td><strong>VEER2026</strong> (Unlocks ₹500 Welcome Bonus)</td>
            </tr>
            <tr>
              <td>Age Requirement</td>
              <td>Strictly 18+ (Adult Players Only)</td>
            </tr>
            <tr>
              <td>Supported Phone Prefix</td>
              <td>Indian Telecom Providers (+91)</td>
            </tr>
            <tr>
              <td>Account Setup Speed</td>
              <td>Instant (Typically under 30 seconds)</td>
            </tr>
            <tr>
              <td>Device Support</td>
              <td>Android APK v2.1.8, iOS Safari Web App, Desktop Browsers</td>
            </tr>
            <tr>
              <td>Security Standard</td>
              <td>256-Bit SSL Encryption &amp; Provably Fair RNG Gaming Protocol</td>
            </tr>
            <tr>
              <td>Player Support</td>
              <td>24/7 Live Support Desk &amp; Official Telegram Community</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 3: COMPARISON TABLE */}
      <h2>REGISTERED ACCOUNT VS GUEST ACCESS</h2>
      <p>
        Wondering what changes once you complete registration? Here is how a verified <strong>Veer Game</strong> account compares with guest browsing:
      </p>

      <div className="specs-table-wrapper" style={{ overflowX: 'auto', margin: '20px 0' }}>
        <table className="specs-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Guest Visitor</th>
              <th>Registered Veer Game Member</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>₹500 Welcome Bonus</td>
              <td>Not eligible</td>
              <td><span style={{ color: '#15803d', fontWeight: 700 }}>Instant Credit Upon Signup</span></td>
            </tr>
            <tr>
              <td>Real-Time Wingo Predictions</td>
              <td>Preview Only</td>
              <td><span style={{ color: '#15803d', fontWeight: 700 }}>Full 30s, 1Min, 3Min &amp; 5Min Rounds</span></td>
            </tr>
            <tr>
              <td>Daily Agent Salary</td>
              <td>No access</td>
              <td><span style={{ color: '#15803d', fontWeight: 700 }}>Earn ₹350 - ₹25,000 Daily</span></td>
            </tr>
            <tr>
              <td>Gift Code Redemptions</td>
              <td>Unavailable</td>
              <td><span style={{ color: '#15803d', fontWeight: 700 }}>Daily Promo Code Drops</span></td>
            </tr>
            <tr>
              <td>Fast Balance Settlements</td>
              <td>Disabled</td>
              <td><span style={{ color: '#15803d', fontWeight: 700 }}>Direct UPI &amp; Bank Transfers</span></td>
            </tr>
            <tr>
              <td>24/7 Priority Support</td>
              <td>Standard</td>
              <td><span style={{ color: '#15803d', fontWeight: 700 }}>VIP Care Desk Assistance</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 4: ELIGIBILITY & RESPONSIBLE GAMING */}
      <h2>PLAYER ELIGIBILITY &amp; FAIR PLAY STANDARDS</h2>
      <p>
        To preserve a healthy, fair, and fun space for everyone, Veer Game asks all participants to follow these basic guidelines:
      </p>

      <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
        <li>
          <strong>Age Verification (18+):</strong> You must be an adult aged 18 or above. Underage gaming is strictly prohibited. For advice on healthy habits, check our{' '}
          <a
            href="/responsible-gaming"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('responsible-gaming');
            }}
            style={{ color: '#0d7045' }}
          >
            Responsible Gaming Guide
          </a>.
        </li>
        <li>
          <strong>One Account per Person:</strong> To ensure fairness across leaderboard tournaments and bonus drops, each user is allowed one account per phone number and device on VeerGame.
        </li>
        <li>
          <strong>Active Phone Connection:</strong> You need an active 10-digit number to receive security alerts and verify withdrawal requests.
        </li>
        <li>
          <strong>Secure Internet Connection:</strong> We suggest using a private, reliable Wi-Fi or mobile data network when logging in with Veer Game login or transacting.
        </li>
      </ul>

      {/* SECTION 5: COMMON REGISTRATION ISSUES & FIXES */}
      <h2>HELPFUL FIXES FOR COMMON SIGN-UP QUESTIONS</h2>
      <p>
        If you run into any hitch while registering your profile, here are practical solutions that usually solve the issue in seconds:
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '16px 0' }}>
        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#1CCE84', fontSize: '14.5px', marginBottom: '6px' }}>
            "Phone Number Already Registered"
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            This means your number already has an active account. Simply switch over to{' '}
            <a
              href="/veergame-login"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('login');
              }}
              style={{ color: '#0d7045', fontWeight: 600 }}
            >
              Veer Game Login
            </a>{' '}
            to sign in, or tap "Forgot Password?" to reset your credentials.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#1CCE84', fontSize: '14.5px', marginBottom: '6px' }}>
            "Invalid Recommendation Code"
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            Make sure to type <strong>VEER2026</strong> in capital letters without extra spaces before or after the code.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#1CCE84', fontSize: '14.5px', marginBottom: '6px' }}>
            "Connection Timeout"
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            Check your mobile signal or Wi-Fi. If you are using a VPN or proxy app, turn it off and refresh the page to reconnect directly to the Veer Game server.
          </p>
        </div>
      </div>

      {/* SECTION 6: FAQ */}
      <h2>FREQUENTLY ASKED QUESTIONS ABOUT VEER GAME REGISTER</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0' }}>
        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            1. Does it cost anything to register on Veer Game?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            No, creating your account is completely free. There are never any sign-up fees or hidden membership dues.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            2. How does the ₹500 welcome bonus get credited?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            When you register with recommendation code <strong>VEERGAME2026</strong>, your ₹500 welcome balance is automatically available in your wallet upon your first login on VeerGame.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            3. Can I sign up from my phone, tablet, or PC?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            Yes! Veer Game works seamlessly across all modern devices. You can register on any smartphone, iPad, or desktop browser and use the same login everywhere.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            4. What should I do if I ever forget my password?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            Go to the{' '}
            <a
              href="/veergame-login"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('login');
              }}
              style={{ color: '#0d7045', fontWeight: 600 }}
            >
              Veer Game Login
            </a>{' '}
            screen and tap "Forgot Password?", or contact our{' '}
            <a
              href="/contact-us"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact-us');
              }}
              style={{ color: '#0d7045', fontWeight: 600 }}
            >
              24/7 Support Desk
            </a>{' '}
            for quick help.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            5. Can a single player create multiple accounts?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            No. To keep tournaments fair and prevent referral manipulation, every player is allowed one verified account.
          </p>
        </div>
      </div>

      {/* Final Register CTA Bar */}
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
          Ready to Start Playing on Veer Game?
        </h3>
        <p style={{ color: '#ecfdf5', fontSize: '14.5px', maxWidth: '520px', margin: '0 auto 18px', lineHeight: 1.6 }}>
          Join thousands of active players enjoying fast color predictions, daily salary rewards, and instant settlements on VeerGame.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
            style={{ textDecoration: 'none', background: '#ffffff', color: '#0d7045', padding: '12px 28px', fontSize: '15px', fontWeight: 700 }}
          >
            Veer Game Register Now
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
