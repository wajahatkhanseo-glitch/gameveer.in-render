import React, { useState } from 'react';
import {
  Gift,
  Phone,
  Mail,
  Send,
  MessageSquare,
  Clock,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface ContactUsPageProps {
  onNavigate: (tab: NavTab) => void;
  }

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <article className="content" id="contact-us-page-article">
      <h1>Veer Game Contact Us</h1>

      <p>
        Welcome to the player support desk for{' '}
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
        . Having access to friendly, fast, and helpful customer care makes all the difference. Whether you need a hand claiming your <strong>₹500 Welcome Bonus</strong>, checking your daily agent salary rewards, or troubleshooting the VeerGame Android APK setup, our support team is available around the clock to help on Veer Game.
      </p>

      <p>
        On this{' '}
        <a
          href="/contact-us"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('contact-us');
          }}
          style={{ color: '#0d7045', fontWeight: 600 }}
        >
          <strong>Veer Game Contact Us</strong>
        </a>{' '}
        directory, you can find our official Telegram support channels, email help desk details, estimated response times, and an easy ticket submission form. You can also explore our{' '}
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
        walkthrough or head over to the{' '}
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
        page if you need account assistance.
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

      <h2>Our Customer Support Directory</h2>

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
              <Clock size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              Fast Turnaround
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Most Telegram messages and live chat inquiries are answered within 2 to 3 minutes by our team.
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
              24/7 Support Desk
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Help is always available day or night, including weekends and holidays, whenever you play on VeerGame.
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
              <UserCheck size={20} />
            </div>
            <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
              Real Human Assistance
            </div>
          </div>
          <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
            Connect with attentive support agents who listen and offer practical solutions for your questions.
          </p>
        </div>
      </div>

      {/* SECTION 1: OFFICIAL CONTACT CHANNELS */}
      <h2>OFFICIAL CHANNELS &amp; RESPONSE TIMES</h2>
      <div className="specs-table-wrapper" style={{ overflowX: 'auto', margin: '20px 0' }}>
        <table className="specs-table">
          <thead>
            <tr>
              <th style={{ width: '30%' }}>Channel</th>
              <th style={{ width: '40%' }}>Contact Detail</th>
              <th>Typical Response Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Official Telegram</strong></td>
              <td>
                <a href="https://t.me/VeerGame_Official" target="_blank" rel="noopener noreferrer" style={{ color: '#0d7045', fontWeight: 600 }}>
                  @VeerGame_Official (Click to Open)
                </a>
              </td>
              <td><span style={{ color: '#15803d', fontWeight: 700 }}>1 - 3 Minutes (Instant)</span></td>
            </tr>
            <tr>
              <td><strong>Email Help Desk</strong></td>
              <td><code>support@gameveer.in</code></td>
              <td>Within 2 to 4 Hours</td>
            </tr>
            <tr>
              <td><strong>VIP Agent Help</strong></td>
              <td><code>vip@gameveer.in</code> / Personal Manager</td>
              <td>Under 15 Minutes (Priority)</td>
            </tr>
            <tr>
              <td><strong>General Compliance</strong></td>
              <td><code>compliance@gameveer.in</code></td>
              <td>Same Business Day</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* SECTION 2: INTERACTIVE CONTACT TICKET FORM */}
      <div id="contact-form-section" style={{ scrollMarginTop: '80px', margin: '30px 0' }}>
        <h2>SEND US A MESSAGE</h2>
        <p>
          Have a question or need assistance with your account? Fill out the quick form below and our customer care team will get back to you:
        </p>

        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ display: 'inline-flex', background: '#dcfce7', color: '#15803d', padding: '12px', borderRadius: '50%', marginBottom: '12px' }}>
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ margin: '0 0 8px', color: '#0f172a' }}>Ticket Received Successfully!</h3>
              <p style={{ margin: '0 0 16px', color: '#64748b', fontSize: '14px', maxWidth: '440px', marginLeft: 'auto', marginRight: 'auto' }}>
                Thank you for reaching out to Veer Game. A customer care specialist has been assigned to ticket <strong>#VEER-{Math.floor(100000 + Math.random() * 900000)}</strong> and will contact you shortly.
              </p>
              <button
                type="button"
                className="cta"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', phone: '', category: 'General Inquiry', message: '' });
                }}
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Your Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Registered Mobile Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Topic of Inquiry
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    background: '#ffffff',
                  }}
                >
                  <option value="Registration & Bonus">Registration &amp; ₹500 Bonus</option>
                  <option value="Login & Credential Recovery">Login &amp; Password Recovery</option>
                  <option value="Daily Salary & Agent Program">Daily Salary &amp; Agent Network</option>
                  <option value="Deposit & Withdrawal">Balance &amp; Settlements</option>
                  <option value="APK Download & App Tech">VeerGame APK Download &amp; App Support</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Message Details *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Please describe what you need assistance with..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <button
                  type="submit"
                  className="cta"
                  style={{ padding: '12px 32px', fontSize: '15px' }}
                >
                  <Send size={15} style={{ display: 'inline', marginRight: '6px' }} /> Send Message to Veer Game
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* SECTION 3: FAQS */}
      <h2>FREQUENTLY ASKED QUESTIONS ABOUT VEER GAME SUPPORT</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0' }}>
        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            1. What details should I provide when contacting support?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            To speed things up, please share your registered phone number, account ID, and any relevant screenshot or order reference number on Veer Game.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            2. Is there any fee for contacting customer support?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            No. All support, account inquiries, and technical guidance from Veer Game are completely free on VeerGame.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
            3. What is the fastest way to get in touch?
          </div>
          <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            Our official Telegram channel (<a href="https://t.me/VeerGame_Official" target="_blank" rel="noopener noreferrer" style={{ color: '#0d7045', fontWeight: 600 }}>@VeerGame_Official</a>) is usually the quickest channel, connecting you to a Veer Game support agent in about 2 minutes.
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
          Connect with Veer Game Support
        </h3>
        <p style={{ color: '#ecfdf5', fontSize: '14.5px', maxWidth: '520px', margin: '0 auto 18px', lineHeight: 1.6 }}>
          We are committed to delivering prompt, friendly, and helpful support for every member of the Veer Game community on VeerGame.
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
            Open Telegram Channel (New Tab)
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
