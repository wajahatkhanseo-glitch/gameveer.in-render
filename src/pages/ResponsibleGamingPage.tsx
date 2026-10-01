import React from 'react';
import {
  Gift,
  ShieldAlert,
  HeartHandshake,
  Clock,
  Ban,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Phone,
  ExternalLink,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface ResponsibleGamingPageProps {
  onNavigate: (tab: NavTab) => void;
  }

export const ResponsibleGamingPage: React.FC<ResponsibleGamingPageProps> = ({ onNavigate }) => {
  return (
    <article className="content" id="responsible-gaming-page-article">
      <h1>Veer Game Responsible Gaming</h1>

      <p>
        At{' '}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
        >
          <strong>Veer Game</strong>
        </a>
        , we believe online entertainment should always stay fun, healthy, and within your personal comfort zone on VeerGame. Color color prediction games and mini-lotteries are created for lighthearted recreation and intellectual leisure — never as a solution for financial hardship or an alternative to real-world employment.
      </p>

      <p>
        This guide for{' '}
        <a
          href="/responsible-gaming"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('responsible-gaming');
          }}
        >
          <strong>Veer Game Responsible Gaming</strong>
        </a>{' '}
        outlines our safety commitments, our strict 18+ policy, self-check questions, time management tools, and ways to take a break whenever you need one. We invite all members to review our{' '}
        <a
          href="/terms-and-conditions"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('terms-and-conditions');
          }}
          style={{ color: '#0d7045', fontWeight: 600 }}
        >
          Terms &amp; Conditions
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
        </a>{' '}
        as well.
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

      <h2>Our Responsible Gaming Principles</h2>

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
            <div style={{ background: '#fef2f2', color: '#dc2626', padding: '8px', borderRadius: '8px' }}>
              <Ban size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              Strict 18+ Age Policy
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Access is strictly restricted to adults aged 18 and older. Any underage account will be permanently deactivated on VeerGame.
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
              Budget &amp; Time Limits
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            You can set custom deposit boundaries, session reminders, and cooling-off intervals whenever you wish on Veer Game.
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
              Self-Exclusion Tools
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            You can voluntarily request a temporary pause or permanent account freeze at any time through our 24/7 care team.
          </p>
        </div>
      </div>

      {/* SECTION 1: CORE GOLDEN RULES */}
      <h2>FIVE SIMPLE HABITS FOR HEALTHY GAMING</h2>
      <p>
        To keep your gaming experience enjoyable on <strong>Veer Game Wingo</strong> and other modes, we encourage these mindful habits:
      </p>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', margin: '16px 0' }}>
        <ol style={{ margin: '0 0 16px 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
          <li>
            <strong>Play for Fun, Not as a Job:</strong> Think of games as a fun pastime rather than a steady way to earn money or replace regular work on VeerGame.
          </li>
          <li>
            <strong>Set a Clear Spending Budget:</strong> Only play with discretionary funds you feel completely comfortable spending on entertainment.
          </li>
          <li>
            <strong>Avoid Chasing Outcomes:</strong> If things don't go your way in a round, resist the urge to place bigger stakes to catch up. Take a refreshing break instead.
          </li>
          <li>
            <strong>Keep Daily Balance:</strong> Ensure your gaming never gets in the way of family time, study, career goals, or personal rest.
          </li>
          <li>
            <strong>Play with a Clear Mind:</strong> Avoid playing when feeling down, tired, stressed, or emotionally overwhelmed.
          </li>
        </ol>
      </div>

      {/* SECTION 2: SELF-ASSESSMENT TEST */}
      <h2>QUICK SELF-ASSESSMENT: ARE YOU PLAYING BALANCED?</h2>
      <p>
        Take a moment to reflect on your gaming habits with these simple questions:
      </p>

      <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
        <li>Do you spend more time or money gaming than you originally planned?</li>
        <li>Have you ever used household essentials or borrowed funds to participate in games?</li>
        <li>Do you feel anxious or restless when taking time away from the screen?</li>
        <li>Do you ever hide or minimize how often you play from close friends or family?</li>
        <li>Do you feel an immediate urge to jump back in after a loss to make up for it?</li>
      </ul>

      <p>
        If you found yourself answering "Yes" to two or more of these questions, consider taking a cooling-off pause or contacting our care team for self-exclusion options.
      </p>

      {/* SECTION 3: PLAYER PROTECTION TOOLS */}
      <h2>VEER GAME PLAYER PROTECTION FEATURES</h2>
      <div className="specs-table-wrapper" style={{ overflowX: 'auto', margin: '20px 0' }}>
        <table className="specs-table">
          <thead>
            <tr>
              <th style={{ width: '35%' }}>Tool &amp; Mechanism</th>
              <th>How It Works</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Daily Deposit Ceiling</td>
              <td>Set a daily maximum deposit limit so you always stay within your personal budget.</td>
            </tr>
            <tr>
              <td>Cooling-Off Timeouts</td>
              <td>Request a temporary pause of 24 hours, 7 days, or 30 days via customer support.</td>
            </tr>
            <tr>
              <td>Permanent Self-Exclusion</td>
              <td>Close your account completely by reaching out to our dedicated player assistance team.</td>
            </tr>
            <tr>
              <td>Session Reminders</td>
              <td>Periodic in-app prompts to help you keep track of elapsed time while gaming.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 4: FAQS */}
      <h2>FREQUENTLY ASKED QUESTIONS ABOUT RESPONSIBLE GAMING</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0' }}>
        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            1. How can I request a temporary break from my account?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            Simply contact our 24/7 support team through the{' '}
            <a
              href="/contact-us"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact-us');
              }}
              style={{ color: '#0d7045', fontWeight: 600 }}
            >
              Contact Us
            </a>{' '}
            page or Telegram. Let us know how long you would like to pause, and we will update your account right away.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            2. Can someone under 18 play with permission from a guardian?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            No. Veer Game strictly requires all participants to be at least 18 years old. No exceptions are permitted.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            3. Are the game results genuinely random and unbiased?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            Yes. Every outcome across Wingo, K3, 5D, and lottery rounds is determined by verified cryptographic Random Number Generation (RNG) with zero human intervention on VeerGame.
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
          Need Guidance or Personal Assistance?
        </h3>
        <p style={{ color: '#ecfdf5', fontSize: '14.5px', maxWidth: '520px', margin: '0 auto 18px', lineHeight: 1.6 }}>
          Our player welfare representatives are on standby 24 hours a day to assist with limits, account freezes, or questions.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://t.me/VeerGame_Official"
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
            style={{ textDecoration: 'none', background: '#ffffff', color: '#0d7045', padding: '12px 28px', fontSize: '15px', fontWeight: 700 }}
          >
            <ExternalLink size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
            Connect via Official Telegram (New Tab)
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
            Return to Veer Game Home
          </a>
        </div>
      </div>
    </article>
  );
};
