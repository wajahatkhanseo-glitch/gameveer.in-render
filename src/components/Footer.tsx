import React from 'react';
import { ShieldCheck, Lock, Phone, ArrowUp, Award } from 'lucide-react';
import { NavTab } from '../types';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  }

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer">
      <div className="footer-widgets">
        <div className="footer-inner">
          {/* Col 1: Brand & Bio */}
          <div className="footer-col">
            <div className="footer-logo-wrapper">
              <img
                src="/veer-game.webp"
                alt="Veer Game Official Logo"
                className="footer-logo"
                width="160"
                height="53"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="footer-description">
              Veer Game is the leading online gaming, color prediction, and interactive gaming community. Featuring high-performance 60 FPS gameplay, certified fair RNG algorithms, instant VeerGame Android APK downloads, and 24/7 player support.
            </p>
            <div className="trust-pills">
              <span className="trust-pill">
                <ShieldCheck size={12} /> Fair Play Certified
              </span>
              <span className="trust-pill">
                <Lock size={12} /> 256-bit SSL
              </span>
              <span className="trust-pill">
                <Award size={12} /> RNG Verified
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Veer Game Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('home');
                    scrollToTop();
                  }}
                >
                  Veer Game Overview
                </a>
              </li>
              <li>
                <a
                  href="/veergame-register"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('register');
                    scrollToTop();
                  }}
                >
                  Veer Game Register (₹500 Bonus)
                </a>
              </li>
              <li>
                <a
                  href="/veergame-login"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('login');
                    scrollToTop();
                  }}
                >
                  Veer Game Login
                </a>
              </li>
              <li>
                <a
                  href="/veergame-download"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('download');
                    scrollToTop();
                  }}
                >
                  VeerGame APK Download (v2.1.8)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Member Services & Legal */}
          <div className="footer-col">
            <h4 className="footer-col-title">Player Services &amp; Legal</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href="/about-us"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('about-us');
                    scrollToTop();
                  }}
                >
                  About Veer Game
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('contact-us');
                    scrollToTop();
                  }}
                >
                  Veer Game Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/responsible-gaming"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('responsible-gaming');
                    scrollToTop();
                  }}
                >
                  Veer Game Responsible Gaming
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('terms-and-conditions');
                    scrollToTop();
                  }}
                >
                  VeerGame Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTab('privacy-policy');
                    scrollToTop();
                  }}
                >
                  Veer Game Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/VeerGame_Official"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  <Phone size={12} /> 24/7 Telegram Support (New Tab)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform Engine & Security */}
          <div className="footer-col">
            <h4 className="footer-col-title">Platform &amp; Security</h4>
            <p className="payments-subtext">
              High-performance cloud gaming architecture engineered for low-latency gameplay on Veer Game:
            </p>
            <div className="payment-badges-grid">
              <div className="pay-badge easypaisa">Anti-Cheat 2.0</div>
              <div className="pay-badge jazzcash">Certified RNG</div>
              <div className="pay-badge bank">60 FPS Engine</div>
              <div className="pay-badge usdt">SSL Secured</div>
            </div>
            <div className="footer-security-note">
              <Lock size={14} color="#38bdf8" />
              <span>All player data on VeerGame is protected by 256-bit SSL encryption.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright bar */}
      <div className="site-info">
        <div className="site-info-inner">
          <p className="copyright-text">
            © 2026 <strong>Veer Game</strong> (VeerGame). All rights reserved. Official Online Gaming Platform.
          </p>
          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            id="footer-back-to-top"
          >
            <ArrowUp size={14} /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};
