import React, { useState } from 'react';
import { Menu, X, Smartphone, UserPlus, LogIn, Gift } from 'lucide-react';
import { NavTab } from '../types';
import { AFFILIATE_LINK } from '../constants';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
    isLoggedIn: boolean;
  userPhone: string;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  
  isLoggedIn,
  userPhone,
  onLogout,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header" id="site-header">
      <div className="header-top-accent" id="header-top-accent"></div>
      <div className="inside-header" id="inside-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
            id="header-logo-link"
          >
            <img
              src="/veer-game.webp"
              alt="Veer Game Official Logo"
              className="header-logo"
              width="160"
              height="53"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              id="header-logo-img"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav hidden md:flex" id="desktop-nav">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className={`nav-link ${currentTab === 'home' ? 'active' : ''}`}
            id="nav-home-btn"
          >
            Veer Game
          </a>
          <a
            href="/veergame-register"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('register');
            }}
            className={`nav-link ${currentTab === 'register' ? 'active' : ''}`}
            id="nav-register-link"
          >
            Veer Game Register
          </a>
          <a
            href="/veergame-login"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('login');
            }}
            className={`nav-link ${currentTab === 'login' ? 'active' : ''}`}
            id="nav-login-link"
          >
            Veer Game Login
          </a>
          <a
            href="/veergame-download"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('download');
            }}
            className={`nav-link ${currentTab === 'download' ? 'active' : ''}`}
            id="nav-download-btn"
          >
            <Smartphone size={14} className="nav-icon" /> VeerGame APK Download
          </a>
          <button
            type="button"
            className="nav-link"
            onClick={() => window.open(AFFILIATE_LINK, '_blank')}
            id="nav-gift-btn"
          >
            <Gift size={14} className="nav-icon" /> Gift Code
          </button>

          {isLoggedIn ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '8px' }}>
              <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#0d7045' }} id="user-phone-badge">
                Player: {userPhone}
              </span>
              <button
                type="button"
                className="nav-link"
                onClick={onLogout}
                style={{ color: '#1CCE84' }}
                id="logout-btn"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="header-cta-btn"
                id="nav-register-live-cta"
                style={{ textDecoration: 'none' }}
              >
                <UserPlus size={14} /> Register ₹500 Bonus
              </a>
            </>
          )}
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="mobile-menu-btn md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle-btn"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="nav nav-mobile-open md:hidden" id="mobile-nav-dropdown">
          <a
            href="/"
            className={`nav-link ${currentTab === 'home' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            id="mobile-nav-home"
          >
            Veer Game Overview
          </a>
          <a
            href="/veergame-register"
            className={`nav-link ${currentTab === 'register' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('register');
            }}
            id="mobile-nav-register-link"
          >
            Veer Game Register (₹500 Bonus)
          </a>
          <a
            href="/veergame-login"
            className={`nav-link ${currentTab === 'login' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('login');
            }}
            id="mobile-nav-login-link"
          >
            Veer Game Login
          </a>
          <a
            href="/veergame-download"
            className={`nav-link ${currentTab === 'download' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('download');
            }}
            id="mobile-nav-download"
          >
            VeerGame APK Download (v2.1.8)
          </a>
          <a
            href="/about-us"
            className={`nav-link ${currentTab === 'about-us' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about-us');
            }}
            id="mobile-nav-about"
          >
            About Veer Game
          </a>
          <a
            href="/contact-us"
            className={`nav-link ${currentTab === 'contact-us' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact-us');
            }}
            id="mobile-nav-contact"
          >
            Veer Game Contact Us
          </a>
          <a
            href="/responsible-gaming"
            className={`nav-link ${currentTab === 'responsible-gaming' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('responsible-gaming');
            }}
            id="mobile-nav-resp-gaming"
          >
            Veer Game Responsible Gaming
          </a>
          <button
            type="button"
            className="nav-link"
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.open(AFFILIATE_LINK, '_blank');
            }}
            id="mobile-nav-gift"
          >
            Redeem VeerGame Gift Codes
          </button>
          
          {isLoggedIn ? (
            <div style={{ padding: '12px 14px', borderTop: '1px solid #e2e8f0' }}>
              <div style={{ fontWeight: 600, color: '#0d7045', marginBottom: '8px' }}>
                Player: {userPhone}
              </div>
              <button
                type="button"
                className="cta"
                style={{ width: '100%' }}
                onClick={() => {
                  onLogout();
                  setIsMobileMenuOpen(false);
                }}
                id="mobile-logout-btn"
              >
                Logout
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="cta"
                style={{ width: '100%', textAlign: 'center', textDecoration: 'none', display: 'block' }}
                onClick={() => setIsMobileMenuOpen(false)}
                id="mobile-nav-login"
              >
                Veer Game Login
              </a>
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="cta"
                style={{ width: '100%', background: 'linear-gradient(180deg, #1CCE84 0%, #0d7045 100%)', textAlign: 'center', textDecoration: 'none', display: 'block' }}
                onClick={() => setIsMobileMenuOpen(false)}
                id="mobile-nav-register"
              >
                Veer Game Register (₹500 Bonus)
              </a>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
