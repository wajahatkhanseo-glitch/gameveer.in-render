import React from 'react';
import {
  Gift,
  Award,
  Users,
  ShieldCheck,
  Zap,
  Globe,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Lock,
  ExternalLink,
  UserPlus,
  LogIn,
} from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface AboutUsPageProps {
  onNavigate: (tab: NavTab) => void;
  }

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <article className="content" id="about-us-page-article">
      <h1>Veer Game About Us</h1>

      <p>
        Welcome to{' '}
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
        , an interactive color prediction and entertainment platform crafted for gaming fans across India. Built on the principles of fair play, high-speed game rounds, and straightforward cash settlements, Veer Game brings together more than 500,000 active players into a welcoming, reliable community on VeerGame.
      </p>

      <p>
        On this{' '}
        <a
          href="/about-us"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('about-us');
          }}
          style={{ color: '#0d7045', fontWeight: 600 }}
        >
          <strong>Veer Game About Us</strong>
        </a>{' '}
        page, you can learn more about how our platform works, the technology powering our 60-second Wingo countdowns, our security standards, and our commitment to player satisfaction. Whether you are checking out our{' '}
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
        welcome offers or looking for the{' '}
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
        , we are glad you are here.
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

      <h2>Who We Are: The Veer Game Story</h2>

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
              <Globe size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              Nationwide Community
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Supporting players across India with responsive assistance, local payment methods, and reliable payouts.
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
              <Cpu size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              Fast &amp; Modern Engine
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Real-time servers delivering 60 FPS visual smoothness and instant countdown synchronization on VeerGame.
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
              <Award size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              Transparent Outcomes
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Certified Random Number Generator (RNG) logic ensures every round is fair, unbiased, and completely tamper-free.
          </p>
        </div>
      </div>

      {/* SECTION 1: OUR MISSION & VISION */}
      <h2>OUR CORE PRINCIPLES</h2>
      <p>
        At Veer Game, our goal is to deliver an exciting, enjoyable, and safe gaming environment. Here is what guides our platform every day:
      </p>

      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', margin: '16px 0' }}>
        <ul style={{ margin: '0 0 0 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.8' }}>
          <li>
            <strong>Total Clarity:</strong> Game rules, countdown clocks, and salary bonus tiers are clearly displayed without confusing terms.
          </li>
          <li>
            <strong>Account Security:</strong> We protect player information and transactions with 256-bit SSL encryption.
          </li>
          <li>
            <strong>Community Rewards:</strong> Our daily agent salary program gives active organizers and community leaders a dependable income stream.
          </li>
          <li>
            <strong>Healthy Gaming Standards:</strong> We enforce an 18+ age requirement and encourage every member to play responsibly within their personal comfort limits.
          </li>
        </ul>
      </div>

      {/* SECTION 2: SPECIFICATIONS */}
      <h2>VEER GAME PLATFORM HIGHLIGHTS</h2>
      <div className="specs-table-wrapper" style={{ overflowX: 'auto', margin: '20px 0' }}>
        <table className="specs-table">
          <thead>
            <tr>
              <th style={{ width: '35%' }}>Feature</th>
              <th>Veer Game Standard &amp; Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Platform Name</td>
              <td><strong>Veer Game (Official VeerGame Community)</strong></td>
            </tr>
            <tr>
              <td>Game Modes</td>
              <td>Color Prediction, Wingo (30s/1Min/3Min/5Min), Lottery &amp; Mini-Games</td>
            </tr>
            <tr>
              <td>Supported Technology</td>
              <td>HTML5 Responsive Web &amp; Android APK v2.1.8</td>
            </tr>
            <tr>
              <td>Server Response SLA</td>
              <td>Ultra-low latency across major Indian networks</td>
            </tr>
            <tr>
              <td>Daily Salary Tiers</td>
              <td>₹350 up to ₹25,000 distributed nightly at 24:00</td>
            </tr>
            <tr>
              <td>Player Community</td>
              <td>500,000+ Registered Members</td>
            </tr>
            <tr>
              <td>Support Hours</td>
              <td>Available 24 Hours a Day, 7 Days a Week</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 3: FAQS */}
      <h2>FREQUENTLY ASKED QUESTIONS ABOUT VEER GAME</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0' }}>
        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            1. Where is Veer Game accessible?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            Veer Game can be accessed on modern smartphones, tablets, and computers across regions where digital entertainment is permitted.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            2. How do I join the Veer Game community?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            Simply visit our{' '}
            <a
              href="/veergame-register"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('register');
              }}
              style={{ color: '#0d7045', fontWeight: 600 }}
            >
              Veer Game Register
            </a>{' '}
            page, use recommendation code <strong>VEERGAME2026</strong>, and claim your ₹500 welcome bonus in seconds on VeerGame.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            3. How can I reach the support team?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            You can reach our friendly support desk anytime through the{' '}
            <a
              href="/contact-us"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact-us');
              }}
              style={{ color: '#0d7045', fontWeight: 600 }}
            >
              Veer Game Contact Us
            </a>{' '}
            page or on our official Telegram channel.
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
          Experience Veer Game Today
        </h3>
        <p style={{ color: '#ecfdf5', fontSize: '14.5px', maxWidth: '520px', margin: '0 auto 18px', lineHeight: 1.6 }}>
          Join an active gaming community and experience transparent color prediction with instant rewards on VeerGame.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
            style={{ textDecoration: 'none', background: '#ffffff', color: '#0d7045', padding: '12px 28px', fontSize: '15px', fontWeight: 700 }}
          >
            Register on VeerGame
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
