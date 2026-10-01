import React from 'react';
import {
  Gift,
  ShieldCheck,
  Lock,
  EyeOff,
  CheckCircle2,
  FileCheck,
  Server,
  HelpCircle,
  ExternalLink,
  UserPlus,
  LogIn,
} from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface PrivacyPageProps {
  onNavigate: (tab: NavTab) => void;
  }

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <article className="content" id="privacy-page-article">
      <h1>Veer Game Privacy Policy</h1>

      <p>
        Your personal privacy and digital safety are top priorities for us at{' '}
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
        . This Privacy Policy outlines how we handle, protect, and respect your personal information when you use our web platform, the VeerGame Android APK (v2.1.8), and related mobile services.
      </p>

      <p>
        In this official{' '}
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
        guide, you can read about our 256-bit SSL encryption standards, strict zero-resale privacy promise, cookie usage, and how you can manage or request the deletion of your account records. Feel free to also review our{' '}
        <a
          href="/terms-and-conditions"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('terms-and-conditions');
          }}
          style={{ color: '#0d7045', fontWeight: 600 }}
        >
          <strong>Veer Game Terms and Conditions</strong>
        </a>{' '}
        or explore our{' '}
        <a
          href="/responsible-gaming"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('responsible-gaming');
          }}
          style={{ color: '#0d7045', fontWeight: 600 }}
        >
          <strong>Veer Game Responsible Gaming</strong>
        </a>{' '}
        principles.
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

      <h2>Our Commitment to Data Protection</h2>

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
              <Lock size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              256-Bit SSL Protection
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            All incoming and outgoing traffic, login credentials, and balance updates are protected with modern encryption on VeerGame.
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
              <EyeOff size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              No Data Reselling
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            We adhere to a strict privacy rule: your personal phone number and account information are never sold, rented, or traded.
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
              <Server size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              Protected Cloud Infrastructure
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Hosted across secured cloud infrastructure with continuous monitoring, firewalls, and strict access controls on Veer Game.
          </p>
        </div>
      </div>

      {/* SECTION 1: WHAT INFORMATION WE COLLECT */}
      <h2>WHAT INFORMATION WE COLLECT &amp; WHY</h2>
      <p>
        When you create an account, log in, or interact with Veer Game, we collect only the essential details needed to keep your gaming session safe and reliable:
      </p>
      <ul style={{ margin: '0 0 16px 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
        <li>
          <strong>Contact Coordinates:</strong> Your 10-digit mobile number, which serves as your unique player ID and key security verification channel.
        </li>
        <li>
          <strong>Technical Connection Data:</strong> IP address, device model, operating system version, and timestamps to prevent fraudulent multi-accounting.
        </li>
        <li>
          <strong>Game &amp; Account History:</strong> Wingo rounds, transaction receipts, withdrawal requests, and agent salary accruals to ensure accurate balance management on VeerGame.
        </li>
      </ul>

      <h2>COOKIES &amp; LOCAL SESSION STORAGE</h2>
      <p>
        Veer Game uses lightweight session tokens and browser storage to keep you logged in smoothly, remember your chosen language, and keep timer countdowns running accurately. You can disable cookies through your browser settings if you wish, though you may need to sign in again between visits.
      </p>

      {/* SECTION 2: SPECIFICATIONS */}
      <h2>VEER GAME PRIVACY &amp; SECURITY STANDARDS</h2>
      <div className="specs-table-wrapper" style={{ overflowX: 'auto', margin: '20px 0' }}>
        <table className="specs-table">
          <thead>
            <tr>
              <th style={{ width: '35%' }}>Privacy Area</th>
              <th>Veer Game Standard</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data In Transit Encryption</td>
              <td>TLS 1.3 / 256-bit Advanced Encryption Standard (AES)</td>
            </tr>
            <tr>
              <td>Data At Rest Encryption</td>
              <td>Encrypted Database Tables with Strict Role-Based Access</td>
            </tr>
            <tr>
              <td>Third-Party Sharing</td>
              <td>Strictly Prohibited (Zero Selling or Sharing for Marketing)</td>
            </tr>
            <tr>
              <td>Data Deletion Requests</td>
              <td>Available on Request via <code>privacy@gameveer.in</code></td>
            </tr>
            <tr>
              <td>Compliance Officer</td>
              <td>Dedicated Data Protection Officer (DPO)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 3: FAQS */}
      <h2>FREQUENTLY ASKED QUESTIONS ABOUT PRIVACY POLICY</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0' }}>
        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            1. Is my phone number ever shared with marketing advertisers?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            Never. Your telephone number is strictly used for account security, SMS verification, and account alerts. We never sell or share contact details with advertisers.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            2. How do I request account data deletion?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            You can email <code>privacy@gameveer.in</code> with your registered phone number. Our privacy team will review and process your deletion request within 30 days in accordance with applicable guidelines.
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
          Your Trust is Our Foundation
        </h3>
        <p style={{ color: '#ecfdf5', fontSize: '14.5px', maxWidth: '520px', margin: '0 auto 18px', lineHeight: 1.6 }}>
          Veer Game is committed to transparent, responsible, and secure data guardianship at all times.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
            style={{ textDecoration: 'none', background: '#ffffff', color: '#0d7045', padding: '12px 28px', fontSize: '15px', fontWeight: 700 }}
          >
            Join Veer Game
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
