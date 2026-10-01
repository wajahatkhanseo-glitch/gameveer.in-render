import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  UserPlus,
  Gift,
  DollarSign,
  CheckCircle2,
  ShieldCheck,
  Download,
  Zap,
  HelpCircle,
  ExternalLink,
  Award,
  Clock,
  Users,
  Star,
  Sparkles,
  ChevronRight,
  Copy,
} from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NotFoundView } from './components/NotFoundView';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { DownloadPage } from './pages/DownloadPage';
import { ResponsibleGamingPage } from './pages/ResponsibleGamingPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { getTabFromPath, navigateTo, routeMap } from './utils/navigation';
import { NavTab } from './types';
import { AFFILIATE_LINK } from './constants';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [isScreenshotOpen, setIsScreenshotOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPhone, setUserPhone] = useState('');
  const [walletBalance, setWalletBalance] = useState(500);

  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const tab = getTabFromPath(path, hash);
      setCurrentTab(tab);
    };

    handleLocation();
    window.addEventListener('popstate', handleLocation);
    window.addEventListener('hashchange', handleLocation);
    return () => {
      window.removeEventListener('popstate', handleLocation);
      window.removeEventListener('hashchange', handleLocation);
    };
  }, []);

  useEffect(() => {
    const titles: Record<NavTab, string> = {
      home: 'Veer Game - Veer Game Login & Veer Game Apk',
      register: 'Veer Game Register',
      login: 'Veer Game Login',
      download: 'Veer Game APK Download',
      'responsible-gaming': 'Veer Game Responsible Gaming',
      'about-us': 'Veer Game About Us',
      'contact-us': 'Veer Game Contact Us',
      'terms-and-conditions': 'Veer Game Terms and Conditions',
      'privacy-policy': 'Veer Game Privacy Policy',
      '404': '404 - Page Not Found | Veer Game',
    };
    
    if (titles[currentTab]) {
      document.title = titles[currentTab];
    }

    // Dynamic Canonical Tag Update
    let link: HTMLLinkElement | null = document.querySelector("link[rel~='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    const pathPart = routeMap[currentTab] === '/' ? '' : routeMap[currentTab];
    link.href = `https://gameveer.in${pathPart}`;
    
  }, [currentTab]);

  const handleTabChange = (tab: NavTab) => {
    setCurrentTab(tab);
    navigateTo(tab);
  };

  const handleLoginSuccess = (phone: string) => {
    setIsLoggedIn(true);
    setUserPhone(phone);
  };

  const handleRegisterSuccess = (phone: string) => {
    setIsLoggedIn(true);
    setUserPhone(phone);
    setWalletBalance(500);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserPhone('');
  };

  return (
    <div className="main-content-wrapper" id="app-root">
      {/* Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleTabChange}
        
        isLoggedIn={isLoggedIn}
        userPhone={userPhone}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <main id="content" className="site" style={{ marginTop: '20px' }}>
        {currentTab === '404' ? (
          <NotFoundView onSelectTab={handleTabChange}  />
        ) : currentTab === 'register' ? (
          <RegisterPage onNavigate={handleTabChange}  />
        ) : currentTab === 'login' ? (
          <LoginPage onNavigate={handleTabChange}  />
        ) : currentTab === 'download' ? (
          <DownloadPage onNavigate={handleTabChange}  />
        ) : currentTab === 'responsible-gaming' ? (
          <ResponsibleGamingPage onNavigate={handleTabChange}  />
        ) : currentTab === 'about-us' ? (
          <AboutUsPage onNavigate={handleTabChange}  />
        ) : currentTab === 'contact-us' ? (
          <ContactUsPage onNavigate={handleTabChange}  />
        ) : currentTab === 'terms-and-conditions' ? (
          <TermsPage onNavigate={handleTabChange}  />
        ) : currentTab === 'privacy-policy' ? (
          <PrivacyPage onNavigate={handleTabChange}  />
        ) : (
          <article className="content">
            <h1>Veer Game</h1>
            
            <p>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange('home');
                }}
              >
                <strong>Veer Game</strong>
              </a>{' '}
              is India's leading online gaming and color prediction platform where players can explore a variety of exciting games and enjoy a secure digital gaming experience on VeerGame.
            </p>
            <p>
              In this guide, you’ll learn more about{' '}
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange('home');
                }}
              >
                <strong>Veer Game</strong>
              </a>
              , including step-by-step{' '}
            <a
              href="/veergame-register"
              onClick={(e) => {
                e.preventDefault();
                handleTabChange('register');
              }}
            >
              <strong>Veer Game Register</strong>
            </a>
            ,{' '}
            <a
              href="/veergame-login"
              onClick={(e) => {
                e.preventDefault();
                handleTabChange('login');
              }}
            >
              <strong>Veer Game Login</strong>
            </a>
            ,{' '}
            <a
              href="/veergame-download"
              onClick={(e) => {
                e.preventDefault();
                handleTabChange('download');
              }}
            >
              <strong>Veer Game APK Download</strong>
            </a>
            , wallet management, promotional offers, and community VIP reward programs.
          </p>

          {/* User Status Bar if Logged in */}
          {isLoggedIn && (
            <div
              style={{
                background: 'linear-gradient(90deg, #eff6ff 0%, #dbeafe 100%)',
                border: '1px solid #bfdbfe',
                borderRadius: '12px',
                padding: '14px 18px',
                margin: '18px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px',
              }}
              id="user-account-strip"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={20} color="#059669" />
                <span style={{ fontSize: '14px', color: '#1e3a8a', fontWeight: 600 }}>
                  Logged in as <strong>+91 {userPhone}</strong>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#047857' }}>
                  Wallet Balance: ₹{walletBalance.toFixed(2)}
                </span>
                <button
                  type="button"
                  className="cta"
                  style={{ padding: '6px 14px', fontSize: '12.5px' }}
                  onClick={() => window.open(AFFILIATE_LINK, '_blank')}
                >
                  Redeem Gift Code
                </button>
              </div>
            </div>
          )}

          <h2>VEER GAME OVERVIEW</h2>

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
              fetchPriority="high"
            />
          </div>

          
      {/* Official Gift Code Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)',
        border: '1px dashed #eab308',
        borderRadius: 'clamp(8px, 2vw, 12px)',
        padding: 'clamp(12px, 3vw, 16px)',
        margin: '0 auto 24px auto',
        width: '92%',
        maxWidth: '500px',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <Gift size={18} color="#ca8a04" />
          <strong style={{ color: '#854d0e', fontSize: 'clamp(13px, 3.5vw, 15px)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Official Welcome Gift Code</strong>
        </div>
        <div style={{
          background: '#ffffff',
          border: '1px solid #fde047',
          borderRadius: '8px',
          padding: 'clamp(8px, 2vw, 12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <code style={{ 
            color: '#ca8a04', 
            fontSize: 'clamp(11px, 4vw, 16px)', 
            fontWeight: 800, 
            wordBreak: 'break-all', 
            textAlign: 'center',
            letterSpacing: '1px'
          }}>B8DA250869DE9796AD054977E7273FCF</code>
        </div>
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
            <span className="screenshot-badge">Official Gaming Dashboard</span>
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
              <strong>Veer Game Official App Dashboard</strong>
              <span>Main player interface displaying live Wingo countdowns, Aviator crash games, slots, and balance controls for players on VeerGame.</span>
            </figcaption>
          </figure>

          {/* Quick Tab Switcher if on Home */}
          {currentTab === 'home' && (
            <>
              {/* Feature Highlights Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '16px',
                  margin: '28px 0',
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
                    <div style={{ background: '#dcfce7', color: '#16a34a', padding: '8px', borderRadius: '8px' }}>
                      <UserPlus size={20} />
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
                      Veer Game Register (₹500 Bonus)
                    </div>
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                    Create your official player account in seconds. Apply invitation code <strong>VEER2026</strong> to claim your welcome bonus.
                  </p>
                  <a
                    href={AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta"
                    style={{ marginTop: '12px', padding: '6px 16px', fontSize: '12px', display: 'inline-block', textDecoration: 'none' }}
                  >
                    Open Register &amp; Claim ₹500 &rarr;
                  </a>
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
                      <Smartphone size={20} />
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
                      Veer Game APK Download
                    </div>
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                    Download version 2.1.8 APK (15.4MB) for low latency, instant alerts, and smooth 60 FPS gaming performance on Android and iOS.
                  </p>
                  <a
                    href={AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta"
                    style={{ marginTop: '12px', padding: '6px 16px', fontSize: '12px', display: 'inline-block', textDecoration: 'none' }}
                  >
                    Veer Game APK Download &rarr;
                  </a>
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
                    <div style={{ background: '#fef3c7', color: '#d97706', padding: '8px', borderRadius: '8px' }}>
                      <Gift size={20} />
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>
                      Redeem Daily Gift Codes
                    </div>
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                    Redeem daily alphanumeric voucher codes for instant wallet credit bonuses ranging from ₹20 up to ₹1,000.
                  </p>
                  <a
                    href={AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta"
                    style={{ marginTop: '12px', padding: '6px 16px', fontSize: '12px', display: 'inline-block', textDecoration: 'none' }}
                  >
                    Redeem Gift Code &rarr;
                  </a>
                </div>
              </div>

              {/* SECTION 1: WHAT IS VEER GAME */}
              <div id="overview-details" style={{ scrollMarginTop: '80px', margin: '30px 0 20px' }}>
                <h2>Welcome to Veer Game: An Overview</h2>
                
                <h3>WHAT IS VEER GAME?</h3>
                <p>
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabChange('home');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <strong>Veer Game</strong>
                  </a>{' '}
                  is a popular online hub for fun gaming and color prediction in India. Veer Game is designed to give you a great real-time experience across all devices, featuring exciting color prediction rounds, fun challenges, and a vibrant community on VeerGame.
                </p>
                <p>
                  Whether you're predicting the next color in <strong>Wingo</strong>, riding the multiplier in <strong>Aviator</strong>, or grabbing daily gift codes, Veer Game offers a safe and fun place to play. We use strong security to keep your information safe and have a friendly support team ready to help 24/7.
                </p>

                <h3>WHY VEER GAME IS TRENDING IN 2026</h3>
                <p>
                  People across India are loving Veer Game! Here is why our community keeps growing:
                </p>
                <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.75' }}>
                  <li>
                    <strong>Ultra-Fast 60-Second Game Cycles:</strong> No waiting around — enjoy continuous, dynamic rounds of Wingo 30s, 1Min, 3Min, and 5Min with instant result announcements.
                  </li>
                  <li>
                    <strong>Guaranteed ₹500 Welcome Bonus:</strong> Every verified new player who signs up with recommendation code <strong>VEER2026</strong> receives a ₹500 welcome bonus credited directly to their gaming balance on VeerGame.
                  </li>
                  <li>
                    <strong>Lucrative Daily Salary Program:</strong> Active community builders and clan leaders earn fixed daily salaries ranging from ₹350 up to ₹25,000 every night based on invited team members.
                  </li>
                  <li>
                    <strong>Certified Provable Fairness (RNG):</strong> Every single outcome is driven by audited Random Number Generation algorithms, ensuring non-manipulated, transparent gameplay.
                  </li>
                  <li>
                    <strong>Optimized Mobile Experience:</strong> The native Android APK package is only 15.4 MB and runs seamlessly at 60 FPS on Android 5.0+, while iOS users can add the platform as an instant progressive web app.
                  </li>
                </ul>
              </div>

              {/* SECTION 2: HOW TO REGISTER ON VEER GAME */}
              <div id="register-section" style={{ scrollMarginTop: '80px', margin: '30px 0 20px' }}>
                <h2>How to Join Veer Game (Veer Game Register)</h2>
                <figure className="screenshot-card" style={{ margin: '24px auto' }}>
                  <span className="screenshot-badge">Official Registration Portal</span>
                  <a
                    href={AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="screenshot-link"
                    title="Veer Game Register"
                  >
                    <img
                      src="https://i.ibb.co/Txt1jVgv/veergame-register.webp"
                      alt="veergame register"
                      title="Veer Game Register"
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
                    <strong>Veer Game Registration</strong>
                    <span>Secure portal for creating a new player account and claiming the ₹500 welcome bonus on VeerGame.</span>
                  </figcaption>
                </figure>

                <p>
                  Joining{' '}
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabChange('home');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <strong>Veer Game</strong>
                  </a>{' '}
                  is super quick and easy! We have made the signup process secure and simple for everyone.
                </p>

                <h3>STEP-BY-STEP REGISTRATION GUIDE</h3>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
                  <ol style={{ margin: '0 0 16px 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.75' }}>
                    <li>
                      <strong>Open the Registration Portal:</strong> Just click the <button type="button" onClick={() => handleTabChange('register')} style={{ color: '#0d7045', fontWeight: 700, background: 'none', border: 'none', padding: 0, textDecoration: 'underline', cursor: 'pointer' }}>Veer Game register</button> button above or below.
                    </li>
                    <li>
                      <strong>Enter Your Mobile Number:</strong> Simply enter your active 10-digit mobile number (+91 prefix). Ensure the number is capable of receiving verification alerts.
                    </li>
                    <li>
                      <strong>Create a Secure Password:</strong> Create a password (at least 6 characters) to keep your account safe.
                    </li>
                    <li>
                      <strong>Confirm Password:</strong> Re-enter your password accurately to prevent accidental typos.
                    </li>
                    <li>
                      <strong>Enter Recommendation Code:</strong> Enter the official invite code <strong>VEER2026</strong>. This code is required to unlock your ₹500 welcome bonus and VIP promotions on VeerGame.
                    </li>
                    <li>
                      <strong>Confirm &amp; Activate:</strong> Check the agreement box confirming you are 18+ and agree to the guidelines, then click <strong>Complete Veer Game register &amp; Claim ₹500</strong>. Your account is activated instantly!
                    </li>
                  </ol>
                  <div style={{ textAlign: 'center', marginTop: '16px' }}>
                    <a
                      href={AFFILIATE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta"
                      id="guide-register-cta-btn"
                      style={{ textDecoration: 'none', display: 'inline-block' }}
                    >
                      Open Veer Game register &amp; Claim ₹500
                    </a>
                  </div>
                </div>

                <h3>CLAIMING THE ₹500 WELCOME BONUS &amp; VIP ACCESS</h3>
                <p>
                  When you register using the official recommendation code <strong>VEER2026</strong>, your new gaming profile is immediately credited with a <strong>₹500 Welcome Bonus</strong>. This bonus gives you instant access to practice Wingo predictions, test color strategies, and qualify for VIP Level 1 status on VeerGame, granting you priority access to daily promotional gift code drops.
                </p>

                <h3>ACCOUNT REGISTRATION REQUIREMENTS</h3>
                <p>
                  To maintain a safe, fair, and legally compliant gaming environment, Veer Game enforces the following account eligibility standards:
                </p>
                <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.75' }}>
                  <li><strong>Age Requirement:</strong> Players must be at least 18 years of age or the legal age of majority in their jurisdiction.</li>
                  <li><strong>Single Account Policy:</strong> Only one account is permitted per player, device, and mobile number to prevent unfair advantage.</li>
                  <li><strong>Active Phone Number:</strong> A valid Indian telecom mobile number is necessary for profile authentication and balance recovery.</li>
                  <li><strong>Stable Internet Connection:</strong> A reliable 4G/5G or WiFi connection is recommended for real-time 60-second Wingo countdowns.</li>
                </ul>
              </div>

              {/* SECTION 3: HOW TO LOGIN TO VEER GAME */}
              <div id="login-section" style={{ scrollMarginTop: '80px', margin: '30px 0 20px' }}>
                <h2>How to Access Your Account (Veer Game Login)</h2>
                <figure className="screenshot-card" style={{ margin: '24px auto' }}>
                  <span className="screenshot-badge">Official Member Login Gateway</span>
                  <a
                    href={AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="screenshot-link"
                    title="Veer Game Login"
                  >
                    <img
                      src="https://i.ibb.co/0yfX343Y/veergame-login.webp"
                      alt="veergame login"
                      title="Veer Game Login"
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
                    <strong>Veer Game Member Login</strong>
                    <span>Secure authentication gateway enabling instant access to live color predictions and balances on VeerGame.</span>
                  </figcaption>
                </figure>

                <p>
                  After you create your account, signing in to{' '}
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      handleTabChange('home');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <strong>Veer Game</strong>
                  </a>{' '}
                  is a breeze, whether you are on your phone, tablet, or laptop.
                </p>

                <h3>STEP-BY-STEP LOGIN INSTRUCTIONS</h3>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
                  <ol style={{ margin: '0 0 16px 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.75' }}>
                    <li>
                      <strong>Access the Platform:</strong> Visit the official website or launch the installed Veer Game Android APK / iOS Web App.
                    </li>
                    <li>
                      <strong>Click Login:</strong> Tap the <button type="button" onClick={() => window.open(AFFILIATE_LINK, '_blank')} style={{ color: '#0d7045', fontWeight: 700, background: 'none', border: 'none', padding: 0, textDecoration: 'underline', cursor: 'pointer' }}>Veer Game login</button> button on the header bar or floating action menu.
                    </li>
                    <li>
                      <strong>Enter Credentials:</strong> Type in your registered 10-digit mobile number and your secure password.
                    </li>
                    <li>
                      <strong>Remember Login (Optional):</strong> If you are using your personal mobile device, keep the "Remember login" checkbox enabled for convenient one-tap access.
                    </li>
                    <li>
                      <strong>Submit Login:</strong> Click the <strong>Veer Game login</strong> button. You will be routed immediately to your player dashboard with current balance, live game tables, and clan stats.
                    </li>
                  </ol>
                  <div style={{ textAlign: 'center', marginTop: '16px' }}>
                    <a
                      href={AFFILIATE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta"
                      id="guide-login-cta-btn"
                      style={{ textDecoration: 'none', display: 'inline-block' }}
                    >
                      Open Veer Game login
                    </a>
                  </div>
                </div>

                <h3>FORGOT PASSWORD &amp; ACCOUNT RECOVERY</h3>
                <p>
                  If you forget your Veer Game account password or experience credential errors, do not worry:
                </p>
                <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.75' }}>
                  <li>Click on the <strong>Forgot Password?</strong> link inside the login modal.</li>
                  <li>Contact the official <strong>24/7 Veer Game Customer Support Desk</strong> via the support link or live chat.</li>
                  <li>Provide your registered 10-digit mobile number for identity verification. Our security team will guide you through resetting your password safely.</li>
                </ul>

                <h3>SECURITY GUIDELINES FOR SAFE ACCESS</h3>
                <p>
                  To keep your wallet balance and gaming profile completely secure:
                </p>
                <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.75' }}>
                  <li>Never disclose your account password or verification codes to anyone, including individuals claiming to be platform staff.</li>
                  <li>Avoid logging in with Veer Game loginto your account from shared or public computers without signing out afterward.</li>
                  <li>Always verify the official domain address before entering your credentials.</li>
                </ul>
              </div>

              {/* SECTION 4: VEER GAME APK DOWNLOAD & APP INSTALLATION GUIDE */}
              <div id="download-section" style={{ scrollMarginTop: '80px', margin: '30px 0 20px' }}>
                <h2>Guide to Veer Game APK Download & Installation</h2>
                <p>
                  For the best experience, including smooth gameplay and instant alerts, we highly recommend grabbing the official <a href="/veergame-download" onClick={(e) => { e.preventDefault(); handleTabChange('download'); }}><strong>Veer Game Android APK (v2.1.8)</strong></a>.
                </p>

                <h3>HOW TO DOWNLOAD VEER GAME APK FOR ANDROID</h3>
                <p>
                  The official APK package has been engineered specifically for Indian mobile networks, maintaining an ultralight footprint of just <strong>15.4 MB</strong> that downloads in seconds even over standard 4G connections.
                </p>
                <div style={{ textAlign: 'center', margin: '16px 0' }}>
                  <a
                    href={AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta"
                    id="download-section-btn"
                    style={{ fontSize: '15px', padding: '12px 28px', textDecoration: 'none', display: 'inline-block' }}
                  >
                    <Download size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
                    Veer Game apk download (v2.1.8 - 15.4 MB)
                  </a>
                </div>

                <h3>STEP-BY-STEP ANDROID INSTALLATION (UNKNOWN SOURCES)</h3>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
                  <ol style={{ margin: '0 0 16px 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.75' }}>
                    <li>
                      <strong>Download File:</strong> Tap the <strong>Veer Game apk download</strong> button to save <code>veergame.apk</code> onto your device.
                    </li>
                    <li>
                      <strong>Enable Unknown Sources:</strong> Because the APK is downloaded directly from the official portal rather than Google Play Store, go to your phone's <strong>Settings &rarr; Security &rarr; Install Unknown Apps</strong>, and toggle permission for your browser (Chrome/Edge/Samsung Internet).
                    </li>
                    <li>
                      <strong>Run Installer:</strong> Tap the completed download in your notification tray or open your phone's <strong>Downloads</strong> folder and tap <code>veergame.apk</code>.
                    </li>
                    <li>
                      <strong>Confirm Installation:</strong> Tap <strong>Install</strong> when the prompt appears. The setup completes in approximately 5 seconds.
                    </li>
                    <li>
                      <strong>Launch App:</strong> Open the Veer Game icon on your home screen, log in, and enjoy lag-free gaming on VeerGame!
                    </li>
                  </ol>
                </div>

                <h3>IOS WEB APP (SAFARI ADD TO HOME SCREEN) GUIDE</h3>
                <p>
                  Apple iOS users (iPhone and iPad) can enjoy the exact same high-performance gaming experience through Safari without needing third-party enterprise profiles:
                </p>
                <ol style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.75' }}>
                  <li>Open <strong>Safari</strong> on your iPhone or iPad and navigate to the official Veer Game portal.</li>
                  <li>Tap the <strong>Share</strong> button at the bottom navigation bar of Safari (the square icon with an upward arrow).</li>
                  <li>Scroll down and select <strong>Add to Home Screen</strong>.</li>
                  <li>Name the icon "Veer Game" and tap <strong>Add</strong> in the top-right corner.</li>
                  <li>Launch VeerGame directly from your home screen as a standalone, full-screen progressive web app!</li>
                </ol>

                <h3>PERFORMANCE &amp; ADVANTAGES OF THE MOBILE APP</h3>
                <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.75' }}>
                  <li><strong>Smooth 60 FPS Visuals:</strong> Hardware-accelerated graphics for smooth wheel spins and flight animations.</li>
                  <li><strong>Zero-Lag Countdown Synchronization:</strong> Real-time WebSocket connection guarantees accurate countdowns down to the millisecond.</li>
                  <li><strong>Instant Push Alerts:</strong> Be the first to receive notifications when daily gift codes and agent salaries are released.</li>
                  <li><strong>Minimal Data &amp; Battery Footprint:</strong> Efficient local asset caching ensures minimal battery and data drain.</li>
                </ul>
              </div>

              {/* SECTION 5: POPULAR GAMES ON VEER GAME PLATFORM */}
              <div id="games-section" style={{ scrollMarginTop: '80px', margin: '30px 0 20px' }}>
                <h2>POPULAR GAMES ON VEER GAME PLATFORM</h2>
                <figure className="screenshot-card" style={{ margin: '24px auto' }}>
                  <span className="screenshot-badge">Veer Game Live Games Portfolio</span>
                  <a
                    href={AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="screenshot-link"
                    title="Veer Game Games"
                  >
                    <img
                      src="https://i.ibb.co/gM48BkSG/veergame-games.webp"
                      alt="veergame games"
                      title="Veer Game Games"
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
                    <strong>Veer Game Live Games Portfolio</strong>
                    <span>High-frequency Wingo 1Min analytical prediction rounds, classic Aviator challenges, and more.</span>
                  </figcaption>
                </figure>

                <p>
                  Veer Game hosts an extensive portfolio of high-engagement, fast-turnaround games tailored to every player's analytical style and entertainment preference.
                </p>

                <h3>WINGO 1MIN, 3MIN, 5MIN &amp; 10MIN COLOR PREDICTION</h3>
                <p>
                  <strong>Wingo</strong> is the flagship game on Veer Game. In each round, players predict the outcome of a randomized color and number sequence before the countdown timer hits zero:
                </p>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
                  <ul style={{ margin: '0 0 16px 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.75' }}>
                    <li>
                      <strong style={{ color: '#16a34a' }}>Green (Numbers 1, 3, 7, 9):</strong> If the round finishes on Green, winning predictions earn a <strong>2x payout</strong> (e.g., ₹100 returns ₹196 after platform service fee).
                    </li>
                    <li>
                      <strong style={{ color: '#1CCE84' }}>Red (Numbers 2, 4, 6, 8):</strong> If the result is Red, winning predictions earn a <strong>2x payout</strong>.
                    </li>
                    <li>
                      <strong style={{ color: '#7c3aed' }}>Violet (Numbers 0 and 5):</strong> Special dual-color results. Choosing Violet returns an exceptional <strong>4.5x multiplier</strong>!
                    </li>
                    <li>
                      <strong style={{ color: '#0284c7' }}>Exact Number Prediction (0 to 9):</strong> Accurately forecasting the exact single digit yields a massive <strong>9x multiplier</strong>!
                    </li>
                    <li>
                      <strong style={{ color: '#d97706' }}>Big / Small Option:</strong> Forecast whether the winning number falls in the Big range (5, 6, 7, 8, 9) or the Small range (0, 1, 2, 3, 4) with a 2x payout rate.
                    </li>
                  </ul>
                  <div style={{ textAlign: 'center', marginTop: '14px' }}>
                    <a
                      href={AFFILIATE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta"
                      id="guide-wingo-cta-btn"
                      style={{ textDecoration: 'none', display: 'inline-block' }}
                    >
                      Join Veer Game &amp; Play Wingo &rarr;
                    </a>
                  </div>
                </div>

                <h3>AVIATOR &amp; HIGH-ALTITUDE CRASH GAMES</h3>
                <p>
                  In the <strong>Aviator</strong> crash flight game, a virtual aircraft takes off, with the multiplier beginning at 1.00x and escalating every split second. Players must decide when to cash out before the plane unexpectedly flies away. Multipliers can reach 5x, 20x, or over 100x during high-climb rounds, rewarding swift decision-making and nerve!
                </p>

                <h3>TRX HASH &amp; BLOCKCHAIN LOTTERY PREDICTION</h3>
                <p>
                  For gamers seeking verifiable transparency, <strong>Trx Hash</strong> leverages the public decentralized Tron blockchain. The winning outcome is tied directly to the last cryptographic characters of the latest block hash on the blockchain, allowing any participant to independently verify that the round outcome was generated neutrally and without third-party influence on VeerGame.
                </p>

                <h3>CLASSIC VIDEO SLOTS &amp; CASUAL MINI-GAMES</h3>
                <p>
                  Enjoy a vibrant selection of high Return-to-Player (RTP) video slots, wheel spins, fishing games, and reflex arcade titles featuring captivating themes, bonus rounds, and smooth sound design.
                </p>
              </div>

              {/* SECTION 6: VEER GAME REFER & EARN DAILY SALARY PROGRAM */}
              <div id="salary-section" style={{ scrollMarginTop: '80px', margin: '30px 0 20px' }}>
                <h2>Earn Daily with the Veer Game Salary Program</h2>
                <p>
                  Beyond playing games, Veer Game offers one of the most rewarding community partnership systems in India: the <strong>Official Agent Daily Salary Program</strong> on VeerGame.
                </p>

                <h3>HOW THE DAILY SALARY AGENT SYSTEM WORKS</h3>
                <p>
                  Unlike platforms that only provide a small one-time referral bounty, Veer Game rewards active community leaders with a <strong>guaranteed recurring daily salary</strong>. As your team of active gamers grows, you advance through official Agent Tiers. Your earned daily salary is calculated automatically and credited directly to your gaming wallet every single evening at 24:00 (midnight).
                </p>

                <h3>OFFICIAL AGENT DAILY SALARY TIER TABLE</h3>
                <p>
                  Review the official tier structure below to see how many active members you need to unlock each daily salary milestone:
                </p>
                <div className="app-table-wrapper" style={{ margin: '16px 0 24px' }}>
                  <table className="app-table">
                    <thead>
                      <tr style={{ background: '#f1f5f9', color: '#0f172a', fontWeight: 700 }}>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Agent Tier</th>
                        <th style={{ padding: '10px', textAlign: 'center' }}>Active Members</th>
                        <th style={{ padding: '10px', textAlign: 'center' }}>Daily Salary</th>
                        <th style={{ padding: '10px', textAlign: 'right' }}>Monthly Estimate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Level 1 Agent</td>
                        <td style={{ textAlign: 'center' }}>5 – 10 Players</td>
                        <td style={{ textAlign: 'center', fontWeight: 700, color: '#047857' }}>₹350 / day</td>
                        <td style={{ textAlign: 'right', fontWeight: 700, color: '#0f172a' }}>₹10,500 / mo</td>
                      </tr>
                      <tr>
                        <td>Level 2 Agent</td>
                        <td style={{ textAlign: 'center' }}>11 – 20 Players</td>
                        <td style={{ textAlign: 'center', fontWeight: 700, color: '#047857' }}>₹650 / day</td>
                        <td style={{ textAlign: 'right', fontWeight: 700, color: '#0f172a' }}>₹19,500 / mo</td>
                      </tr>
                      <tr>
                        <td>Level 3 Agent</td>
                        <td style={{ textAlign: 'center' }}>21 – 50 Players</td>
                        <td style={{ textAlign: 'center', fontWeight: 700, color: '#047857' }}>₹1,200 / day</td>
                        <td style={{ textAlign: 'right', fontWeight: 700, color: '#0f172a' }}>₹36,000 / mo</td>
                      </tr>
                      <tr>
                        <td>Level 4 Agent</td>
                        <td style={{ textAlign: 'center' }}>51 – 100 Players</td>
                        <td style={{ textAlign: 'center', fontWeight: 700, color: '#047857' }}>₹2,500 / day</td>
                        <td style={{ textAlign: 'right', fontWeight: 700, color: '#0f172a' }}>₹75,000 / mo</td>
                      </tr>
                      <tr>
                        <td>Level 5 Agent</td>
                        <td style={{ textAlign: 'center' }}>101 – 200 Players</td>
                        <td style={{ textAlign: 'center', fontWeight: 700, color: '#047857' }}>₹4,800 / day</td>
                        <td style={{ textAlign: 'right', fontWeight: 700, color: '#0f172a' }}>₹1,44,000 / mo</td>
                      </tr>
                      <tr>
                        <td>Level 6 Agent</td>
                        <td style={{ textAlign: 'center' }}>201 – 500 Players</td>
                        <td style={{ textAlign: 'center', fontWeight: 700, color: '#047857' }}>₹8,500 / day</td>
                        <td style={{ textAlign: 'right', fontWeight: 700, color: '#0f172a' }}>₹2,55,000 / mo</td>
                      </tr>
                      <tr>
                        <td>Level 7 Agent</td>
                        <td style={{ textAlign: 'center' }}>501 – 1000 Players</td>
                        <td style={{ textAlign: 'center', fontWeight: 700, color: '#047857' }}>₹15,000 / day</td>
                        <td style={{ textAlign: 'right', fontWeight: 700, color: '#0f172a' }}>₹4,50,000 / mo</td>
                      </tr>
                      <tr>
                        <td>Level 8 Super Agent</td>
                        <td style={{ textAlign: 'center' }}>1000+ Players</td>
                        <td style={{ textAlign: 'center', fontWeight: 700, color: '#047857' }}>₹25,000 / day</td>
                        <td style={{ textAlign: 'right', fontWeight: 700, color: '#0f172a' }}>₹7,50,000 / mo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3>STRATEGIES TO GROW YOUR REFERRAL TEAM</h3>
                <p>
                  Top agents utilize practical community sharing techniques to build their active member base:
                </p>
                <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.75' }}>
                  <li><strong>Telegram Prediction Channels:</strong> Create or participate in active discussion groups sharing daily analysis and pattern charts.</li>
                  <li><strong>WhatsApp Gaming Circles:</strong> Share your unique referral link with friends and fellow gamers looking for reliable color prediction platforms.</li>
                  <li><strong>YouTube &amp; Social Shorts:</strong> Post educational walkthroughs demonstrating how to register, claim the ₹500 bonus, and read Wingo charts.</li>
                  <li><strong>Distribute Daily Gift Codes:</strong> Share daily official promo codes with your recruits to keep your squad engaged and active every day on VeerGame.</li>
                </ul>
                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                  <a
                    href={AFFILIATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta"
                    id="guide-salary-cta-btn"
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                  >
                    Register as an Official Agent &rarr;
                  </a>
                </div>
              </div>

              {/* SECTION 7: VEER GAME DAILY GIFT CODES & VIP REWARDS */}
              <div id="gift-section" style={{ scrollMarginTop: '80px', margin: '30px 0 20px' }}>
                <h2>VEER GAME DAILY GIFT CODES &amp; VIP REWARDS</h2>
                <p>
                  Veer Game rewards loyal players with frequent promotional perks, redeemable voucher codes, and a comprehensive VIP tier progression on VeerGame.
                </p>

                <h3>WHAT ARE VEER GAME DAILY GIFT CODES?</h3>
                <p>
                  <strong>Gift Codes</strong> are exclusive 8 to 16-character alphanumeric redemption keys distributed daily across official Veer Game social channels and partner communities. Entering an active code credits your account wallet with free promotional balance ranging between <strong>₹20 and ₹1,000</strong> without requiring any complicated tasks.
                </p>

                <h3>HOW TO REDEEM A GIFT CODE IN VEER GAME</h3>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px', margin: '16px 0' }}>
                  <ol style={{ margin: '0 0 16px 20px', padding: 0, color: '#334155', fontSize: '14.5px', lineHeight: '1.75' }}>
                    <li>
                      Click the <button type="button" onClick={() => window.open(AFFILIATE_LINK, '_blank')} style={{ color: '#0d7045', fontWeight: 700, background: 'none', border: 'none', padding: 0, textDecoration: 'underline', cursor: 'pointer' }}>Redeem Gift Code</button> button in the top navigation bar.
                    </li>
                    <li>
                      Enter or paste your promo code (for example: <code>VEERVIP</code>, <code>VEER500</code>, or <code>LUCKY2026</code>).
                    </li>
                    <li>
                      Click <strong>Redeem Code Now</strong> to submit the redemption.
                    </li>
                    <li>
                      Your balance will update instantly with the credited reward!
                    </li>
                  </ol>
                  <div style={{ textAlign: 'center', marginTop: '14px' }}>
                    <a
                      href={AFFILIATE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta"
                      id="guide-gift-cta-btn"
                      style={{ textDecoration: 'none', display: 'inline-block' }}
                    >
                      Redeem a Gift Code Now
                    </a>
                  </div>
                </div>

                <h3>VIP LOYALTY CLUB &amp; EXCLUSIVE PERKS</h3>
                <p>
                  As you play games on Veer Game, you accumulate VIP experience points that promote your account through 10 VIP levels (VIP 1 to VIP 10):
                </p>
                <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.75' }}>
                  <li><strong>Level-Up Upgrade Rewards:</strong> Receive immediate cash gifts every time you reach a new VIP level.</li>
                  <li><strong>Monthly Loyalty Bonuses:</strong> Regular wallet bonuses distributed on the 1st of every calendar month.</li>
                  <li><strong>Weekly Rebates:</strong> High-tier VIP members receive weekly cash-back rebates on cumulative gameplay on VeerGame.</li>
                  <li><strong>Dedicated Account Manager:</strong> VIP 6+ players receive a private customer manager for personalized concierge service.</li>
                </ul>
              </div>

              {/* SECTION 8: SECURITY, FAIR PLAY & 24/7 CUSTOMER CARE */}
              <div id="security-section" style={{ scrollMarginTop: '80px', margin: '30px 0 20px' }}>
                <h2>SECURITY, FAIR PLAY &amp; 24/7 CUSTOMER CARE</h2>
                <p>
                  Player safety, data privacy, and mathematical fairness represent the core foundations of the Veer Game platform.
                </p>

                <h3>CERTIFIED RANDOM NUMBER GENERATOR (RNG)</h3>
                <p>
                  To guarantee absolute impartiality, all game round results are produced by certified <strong>Random Number Generator (RNG)</strong> engines on VeerGame. Algorithms are continuously evaluated to ensure that every countdown outcome is completely independent and free from manual adjustment, allowing every gamer to play with full confidence in game integrity.
                </p>

                <h3>256-BIT SSL ENCRYPTION &amp; DATA PRIVACY</h3>
                <p>
                  Veer Game implements banking-standard <strong>256-bit SSL (Secure Sockets Layer) encryption</strong> across all network communication. Your mobile number, password hashes, and wallet balances are securely shielded from unauthorized interception or third-party disclosure.
                </p>

                <h3>24/7 DEDICATED LIVE CUSTOMER SUPPORT</h3>
                <p>
                  Encountering an issue or have questions regarding registration, login credentials, or game rules? The official Veer Game Help Center is operational 24 hours a day, 7 days a week, 365 days a year:
                </p>
                <ul style={{ margin: '0 0 18px 22px', color: '#334155', fontSize: '14.5px', lineHeight: '1.75' }}>
                  <li><strong>In-App Live Chat:</strong> Connect with a support representative directly inside the app for instant problem resolution.</li>
                  <li><strong>Official Telegram Community:</strong> Join hundreds of thousands of active players for real-time announcements, gift codes, and game tips on VeerGame.</li>
                  <li><strong>Priority Support for Agents:</strong> Dedicated agent liaisons to assist with daily salary inquiries and clan management.</li>
                </ul>
              </div>

              {/* SECTION 9: OFFICIAL APP SPECIFICATIONS TABLE */}
              <h2>Veer Game at a Glance (Specifications)</h2>
              <div className="app-table-wrapper">
                <table className="app-table">
                  <tbody>
                    <tr>
                      <td>Application Name</td>
                      <td>Veer Game (Official Release)</td>
                    </tr>
                    <tr>
                      <td>Latest Version</td>
                      <td>v2.1.8 (Updated 2026)</td>
                    </tr>
                    <tr>
                      <td>Package Size</td>
                      <td>15.4 MB (Fast Download)</td>
                    </tr>
                    <tr>
                      <td>Supported OS</td>
                      <td>Android 5.0+ / iOS Web App / Desktop Web Browser</td>
                    </tr>
                    <tr>
                      <td>Category</td>
                      <td>Color Prediction, Wingo, Aviator, Slots &amp; Lottery</td>
                    </tr>
                    <tr>
                      <td>Bonuses &amp; Rewards</td>
                      <td>₹500 Welcome Bonus, Daily Gift Codes &amp; Agent Salary</td>
                    </tr>
                    <tr>
                      <td>Security</td>
                      <td>256-Bit SSL Encryption, Certified Random Number Generator (RNG)</td>
                    </tr>
                    <tr>
                      <td>Customer Support</td>
                      <td>24/7 Live Chat, In-App Help Desk &amp; Official Telegram</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* SECTION 10: Frequently Asked Questions (FAQ) */}
              <h2>Frequently Asked Questions (FAQ)</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', margin: '20px 0' }}>
                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
                    1. How do I register on Veer Game?
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                    Click the <strong>Veer Game register</strong> button above, enter your 10-digit mobile number, create a secure password, enter referral code <strong>VEERGAME2026</strong>, and complete registration. You will immediately receive eligibility for the ₹500 welcome bonus on VeerGame!
                  </p>
                </div>

                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
                    2. How do I log in to my Veer Game account?
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                    Click <strong>Veer Game login</strong> on the top menu, enter your registered 10-digit mobile number and account password, and click the login button to enter your member dashboard.
                  </p>
                </div>

                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
                    3. What is the ₹500 Welcome Bonus and how do I receive it?
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                    All new members who register with official recommendation code <strong>VEERGAME2026</strong> receive a ₹500 welcome bonus credited directly to their gaming balance to try out color prediction games on VeerGame.
                  </p>
                </div>

                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
                    4. How do I play Wingo Color Prediction on Veer Game?
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                    Select your preferred time interval (1Min, 3Min, 5Min, or 10Min), choose your prediction (Green, Violet, or Red) or select single digits from 0-9. When the 60-second countdown completes, winning numbers and colors are announced automatically with 2x to 9x multipliers on VeerGame.
                  </p>
                </div>

                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
                    5. How do I download the Veer Game APK on Android?
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                    Tap the <strong>Veer Game apk download</strong> button to download <code>veergame.apk</code> (15.4 MB). Enable "Install from Unknown Sources" in your device security settings, open the downloaded file, and click install.
                  </p>
                </div>

                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
                    6. How does the Daily Salary Program pay out?
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                    As an agent, you earn fixed daily salaries ranging from ₹350 to ₹25,000 based on your active invited members on VeerGame. The salary is automatically credited to your gaming wallet every night at 24:00.
                  </p>
                </div>

                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
                    7. How do I redeem daily Veer Game Gift Codes?
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                    Click the <strong>Gift Code</strong> button in the top navigation or bottom quick bar, enter promotional codes (e.g. <em>VEERVIP</em> or <em>VEER500</em>), and click Redeem to receive free bonus balance instantly.
                  </p>
                </div>

                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 700, color: '#0d7045', fontSize: '15px', marginBottom: '6px' }}>
                    8. Is Veer Game safe and fair to play?
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                    Yes. Veer Game utilizes certified Random Number Generator (RNG) technology to guarantee unmanipulated game outcomes, combined with 256-bit SSL encryption to protect user data and transactions.
                  </p>
                </div>
              </div>
            </>
          )}
        </article>
        )}
      </main>

      {/* Lightbox / Zoom for App Screenshot */}
      {isScreenshotOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            cursor: 'zoom-out',
          }}
          onClick={() => setIsScreenshotOpen(false)}
          id="screenshot-lightbox"
        >
          <div style={{ maxWidth: '480px', width: '100%', textAlign: 'center' }}>
            <img
              src="/veergame.webp"
              alt="Veer Game Platform Dashboard"
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                margin: '0 auto',
                display: 'block',
              }}
            />
            <div style={{ color: '#ffffff', marginTop: '12px', fontSize: '13px' }}>
              Tap anywhere to close
            </div>
          </div>
        </div>
      )}

      { /* Footer */ }
      <Footer onSelectTab={handleTabChange}  />
    </div>
  );
};

export default App;
