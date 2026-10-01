import React from 'react';
import {
  Gift,
  FileText,
  ShieldCheck,
  Scale,
  CheckCircle2,
  AlertTriangle,
  Lock,
  ExternalLink,
  HelpCircle,
  LogIn,
  UserPlus,
} from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface TermsPageProps {
  onNavigate: (tab: NavTab) => void;
  }

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <article className="content" id="terms-page-article">
      <h1>Veer Game Terms and Conditions</h1>

      <p>
        Welcome to the terms agreement for{' '}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          style={{ color: '#0d7045', fontWeight: 600 }}
        >
          <strong>Veer Game</strong>
        </a>
        . These Terms and Conditions govern your access to and use of our website, mobile application, Android APK (v2.1.8), and all entertainment features on VeerGame. By signing up via{' '}
        <a
          href="/veergame-register"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('register');
          }}
          style={{ color: '#0d7045', fontWeight: 600 }}
        >
          <strong>Veer Game Register</strong>
        </a>
        , logging in with Veer Game login via{' '}
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
        , or participating in color color prediction rounds, you agree to follow these guidelines.
      </p>

      <p>
        Please take a few moments to review these conditions alongside our{' '}
        <a
          href="/privacy-policy"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('privacy-policy');
          }}
          style={{ color: '#0d7045', fontWeight: 600 }}
        >
          <strong>Veer Game Privacy Policy</strong>
        </a>{' '}
        and{' '}
        <a
          href="/responsible-gaming"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('responsible-gaming');
          }}
          style={{ color: '#0d7045', fontWeight: 600 }}
        >
          <strong>VeerGame Responsible Gaming</strong>
        </a>{' '}
        charter. If you do not agree with any part of these rules, please do not create an account or participate on Veer Game.
      </p>

      
      <figure className="screenshot-card" style={{ margin: '30px auto' }}>
        <span className="screenshot-badge">Veer Game Official Platform</span>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="screenshot-link"
          title="Veer Game Interface"
        >
          <img
            src="/veergame.webp"
            alt="Veer Game Official Platform Dashboard"
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

      <h2>Legal Framework &amp; Terms Overview</h2>

      {/* Logo Card */}
      <div className="logo-card">
        <img
          src="/veer-game.webp"
          alt="Veer Game Official Logo"
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
              <Scale size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              Fair Play Standards
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            All round outcomes are generated by cryptographically secure random number generators with zero manipulation on VeerGame.
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
            <div style={{ background: '#e6fcf2', color: '#0b9e5d', padding: '8px', borderRadius: '8px' }}>
              <ShieldCheck size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              Strict 18+ Eligibility
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Participation is strictly reserved for adults aged 18 and older. Underage accounts will be closed on Veer Game.
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
              <Lock size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              One Account Per Person
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            To keep games fair and prevent promotion abuse, each individual is limited to a single registered phone number on VeerGame.
          </p>
        </div>
      </div>

      {/* SECTION 1: DETAILED CLAUSES */}
      <h2>1. USER ELIGIBILITY &amp; PARTICIPATION</h2>
      <p>
        To be a registered member of Veer Game, you confirm and agree that:
      </p>
      <ul style={{ margin: '0 0 16px 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
        <li>You are at least 18 years of age (or the legal age of majority in your area).</li>
        <li>You have full legal authority to agree to these terms.</li>
        <li>You are accessing our services from a jurisdiction where online gaming is permitted by law.</li>
        <li>You will not access the platform from territories where online entertainment apps are restricted.</li>
      </ul>

      <h2>2. ACCOUNT CREATION &amp; SECURITY</h2>
      <p>
        When registering an account on Veer Game, you agree to provide truthful and up-to-date phone details. You are responsible for keeping your password private and secure. All activity conducted through your authenticated profile is your personal responsibility.
      </p>

      <h2>3. PROMOTIONAL OFFERS &amp; REWARD CRITERIA</h2>
      <p>
        Promotional gifts, such as the <strong>₹500 Welcome Bonus</strong> with invite code <strong>VEER2026</strong>, and daily reward codes, are provided to enrich player experience on VeerGame. Bonus credits are subject to standard turnover requirements before settlement, as described in promotional rules.
      </p>

      <h2>4. PROHIBITED PRACTICES &amp; FAIR PLAY</h2>
      <p>
        Veer Game strictly prohibits the following unfair practices:
      </p>
      <ul style={{ margin: '0 0 16px 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
        <li>Using automated bots, screen scrapers, or third-party prediction software.</li>
        <li>Creating multiple accounts to exploit bonus codes or referral rewards.</li>
        <li>Colluding with other members to influence round outcomes or balances.</li>
        <li>Using unauthorized payment methods or third-party credentials.</li>
      </ul>

      {/* SECTION 2: SPECIFICATIONS */}
      <h2>VEER GAME TERMS &amp; COMPLIANCE SUMMARY</h2>
      <div className="specs-table-wrapper" style={{ overflowX: 'auto', margin: '20px 0' }}>
        <table className="specs-table">
          <thead>
            <tr>
              <th style={{ width: '35%' }}>Provision Area</th>
              <th>Veer Game Standard</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Governing Age</td>
              <td>18 Years of Age or Older (Strict Compliance)</td>
            </tr>
            <tr>
              <td>Account Limitation</td>
              <td>Exactly 1 Active Account Per Individual / Device</td>
            </tr>
            <tr>
              <td>Platform Nature</td>
              <td>Online Skill-Based Analytical Entertainment &amp; Color Prediction</td>
            </tr>
            <tr>
              <td>Welcome Bonus Code</td>
              <td><strong>VEER2026</strong> (Subject to Promotion Rules)</td>
            </tr>
            <tr>
              <td>Dispute Resolution</td>
              <td>Internal Mediation &amp; 24/7 Dedicated Player Care Review</td>
            </tr>
            <tr>
              <td>Revisions Policy</td>
              <td>Updated Periodically with Notice on Official Website</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 3: FAQS */}
      <h2>FREQUENTLY ASKED QUESTIONS ABOUT TERMS &amp; CONDITIONS</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0' }}>
        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            1. Can Veer Game update these terms?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            Yes. We may occasionally update terms to reflect feature additions or regulatory standards. Continued use of the platform indicates acceptance of any updated provisions.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            2. What happens if multiple accounts are created by one user?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            Duplicate profiles are subject to deactivation, and any bonuses obtained through multiple registrations will be forfeited.
          </p>
        </div>
      </div>

      {/* Support Footer */}
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
          Have Questions About Our Terms?
        </h3>
        <p style={{ color: '#ecfdf5', fontSize: '14.5px', maxWidth: '520px', margin: '0 auto 18px', lineHeight: 1.6 }}>
          Our compliance officers are happy to clarify any questions regarding platform policies, bonus turnover, or terms on VeerGame.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="/contact-us"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contact-us');
            }}
            className="cta"
            style={{ textDecoration: 'none', background: '#ffffff', color: '#0d7045', padding: '12px 28px', fontSize: '15px', fontWeight: 700 }}
          >
            Contact Veer Game Support
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
