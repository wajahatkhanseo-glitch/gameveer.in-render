import React from 'react';
import { Home, LogIn, UserPlus, Download, Compass, Sparkles } from 'lucide-react';
import { NavTab } from '../types';

interface NotFoundViewProps {
  onSelectTab: (tab: NavTab) => void;
  
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onSelectTab }) => {
  return (
    <div
      style={{
        maxWidth: '680px',
        margin: '40px auto',
        padding: '36px 24px',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        textAlign: 'center',
      }}
      id="not-found-view"
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: '#e6fcf2',
          color: '#0b9e5d',
          border: '1px solid #a3f0cb',
          fontSize: '12.5px',
          fontWeight: 700,
          padding: '4px 14px',
          borderRadius: '20px',
          marginBottom: '14px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        <Compass size={14} /> 404 Error: Page Not Found
      </div>

      <div
        style={{
          fontSize: 'clamp(56px, 10vw, 84px)',
          fontWeight: 900,
          lineHeight: 1,
          margin: '0 0 10px',
          background: 'linear-gradient(180deg, #1CCE84 0%, #0d7045 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        404
      </div>

      <h1
        style={{
          fontSize: '22px',
          fontWeight: 800,
          color: '#0f172a',
          margin: '0 0 10px',
        }}
      >
        Looking for Veer Game?
      </h1>

      <p
        style={{
          fontSize: '15px',
          color: '#64748b',
          lineHeight: 1.6,
          margin: '0 auto 26px',
          maxWidth: '520px',
        }}
      >
        The page or section you requested could not be found or has moved. Explore the official <strong>Veer Game</strong> gaming lobby, Wingo 1Min prediction, or download the official VeerGame app below.
      </p>

      {/* Main Action Buttons */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
          marginBottom: '28px',
        }}
      >
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onSelectTab('home');
          }}
          className="cta"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            borderRadius: '24px',
            fontSize: '14.5px',
          }}
          id="btn-404-home"
        >
          <Home size={16} /> Veer Game Home
        </a>

        <a
          href="/veergame-login"
          onClick={(e) => {
            e.preventDefault();
            onSelectTab('login');
          }}
          className="cta"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 22px',
            borderRadius: '24px',
            fontSize: '14.5px',
            background: 'linear-gradient(180deg, #1CCE84 0%, #0d7045 100%)',
          }}
          id="btn-404-login"
        >
          <LogIn size={16} /> Veer Game Login
        </a>

        <a
          href="/veergame-register"
          onClick={(e) => {
            e.preventDefault();
            onSelectTab('register');
          }}
          className="cta"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 22px',
            borderRadius: '24px',
            fontSize: '14.5px',
            background: 'linear-gradient(180deg, #10b981 0%, #047857 100%)',
          }}
          id="btn-404-register"
        >
          <UserPlus size={16} /> Veer Game Register
        </a>

        <a
          href="/veergame-download"
          onClick={(e) => {
            e.preventDefault();
            onSelectTab('download');
          }}
          className="cta"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 22px',
            borderRadius: '24px',
            fontSize: '14.5px',
            background: '#1CCE84',
          }}
          id="btn-404-download"
        >
          <Download size={16} /> VeerGame APK Download
        </a>
      </div>

      {/* Quick Explore Section */}
      <div
        style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '16px',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            fontSize: '13px',
            fontWeight: 700,
            color: '#0d7045',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Sparkles size={14} color="#f59e0b" /> Explore Official Veer Game Pages:
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '8px',
          }}
        >
          <a
            href="/about-us"
            onClick={(e) => {
              e.preventDefault();
              onSelectTab('about-us');
            }}
            style={{
              textDecoration: 'none',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1e293b',
              cursor: 'pointer',
              display: 'block',
            }}
            id="quick-link-404-about"
          >
            Veer Game About Us
          </a>
          <a
            href="/contact-us"
            onClick={(e) => {
              e.preventDefault();
              onSelectTab('contact-us');
            }}
            style={{
              textDecoration: 'none',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1e293b',
              cursor: 'pointer',
              display: 'block',
            }}
            id="quick-link-404-contact"
          >
            Veer Game Contact Us
          </a>
          <a
            href="/responsible-gaming"
            onClick={(e) => {
              e.preventDefault();
              onSelectTab('responsible-gaming');
            }}
            style={{
              textDecoration: 'none',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1e293b',
              cursor: 'pointer',
              display: 'block',
            }}
            id="quick-link-404-resp-gaming"
          >
            Veer Game Responsible Gaming
          </a>
          <a
            href="/privacy-policy"
            onClick={(e) => {
              e.preventDefault();
              onSelectTab('privacy-policy');
            }}
            style={{
              textDecoration: 'none',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1e293b',
              cursor: 'pointer',
              display: 'block',
            }}
            id="quick-link-404-privacy"
          >
            Veer Game Privacy Policy
          </a>
          <a
            href="/terms-and-conditions"
            onClick={(e) => {
              e.preventDefault();
              onSelectTab('terms-and-conditions');
            }}
            style={{
              textDecoration: 'none',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              fontSize: '13px',
              fontWeight: 600,
              color: '#1e293b',
              cursor: 'pointer',
              display: 'block',
            }}
            id="quick-link-404-terms"
          >
            VeerGame Terms &amp; Conditions
          </a>
        </div>
      </div>
    </div>
  );
};
