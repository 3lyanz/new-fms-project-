import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import logoIcon from '../assets/images/logo.ico';
import './FinanceDashboardLayout.css'; // Reuse the same CSS

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar when route changes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  // Close sidebar on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isSidebarOpen]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

   const handleLogout = () => {
    // Clear auth data immediately (synchronous)
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Force immediate navigation to home (bypasses all React routing)
    window.location.href = '/';
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="finance-dashboard-container">
      {/* Overlay - Click outside to close */}
      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Top Navigation Bar */}
      <header className="top-navbar">
        <div className="navbar-left">
          {/* Toggle Button */}
          <button
            className="sidebar-toggle-btn"
            onClick={toggleSidebar}
            aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
            aria-expanded={isSidebarOpen}
          >
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isSidebarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo and Title */}
          <div className="navbar-brand">
            <img src={logoIcon} alt="Logo" className="navbar-logo" />
            <div className="navbar-title">
              <h1>Student Portal</h1>
              <span>Academic Services</span>
            </div>
          </div>
        </div>

        <div className="navbar-right">
          {/* User Info */}
          <div className="navbar-user">
            <div className="navbar-user-info">
              <span className="navbar-user-name">{user?.username || 'Student'}</span>
              <span className="navbar-user-role">Student</span>
            </div>
            <div className="navbar-user-avatar">
              {user?.username?.[0]?.toUpperCase() || 'S'}
            </div>
          </div>
        </div>
      </header>

      {/* Off-Canvas Sidebar */}
      <aside
        className={`finance-sidebar ${isSidebarOpen ? 'open' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo Section */}
        <div className="sidebar-header">
          <div className="logo-container">
            <img src={logoIcon} alt="Logo" className="sidebar-logo" />
          </div>
          <div className="portal-info">
            <h2 className="sidebar-portal-title">Student Portal</h2>
            <p className="sidebar-portal-subtitle">Academic Services</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <ul className="nav-list">
            <li className={`nav-item ${location.pathname === '/student/dashboard' ? 'active' : ''}`}>
              <Link to="/student/dashboard" className="nav-link" title="Dashboard">
                <svg className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>Dashboard</span>
              </Link>
            </li>

            <li className={`nav-item ${location.pathname === '/student/courses' ? 'active' : ''}`}>
              <Link to="/student/courses" className="nav-link" title="Course Registration">
                <svg className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>Course Registration</span>
              </Link>
            </li>

            <li className={`nav-item ${location.pathname === '/student/fees' ? 'active' : ''}`}>
              <Link to="/student/fees" className="nav-link" title="Calculated Fees">
                <svg className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>Calculated Fees</span>
              </Link>
            </li>

            <li className={`nav-item ${location.pathname === '/student/payment' ? 'active' : ''}`}>
              <Link to="/student/payment" className="nav-link" title="Make Payment">
                <svg className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span>Make Payment</span>
              </Link>
            </li>

            <li className={`nav-item ${location.pathname === '/student/receipt' ? 'active' : ''}`}>
              <Link to="/student/receipt" className="nav-link" title="Payment Receipt">
                <svg className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Payment Receipt</span>
              </Link>
            </li>

            <li className={`nav-item ${location.pathname === '/student/history' ? 'active' : ''}`}>
              <Link to="/student/history" className="nav-link" title="Payment History">
                <svg className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Payment History</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/student/notifications" className="nav-link" title="Notifications">
                <svg className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span>Notifications</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* User Profile Section */}
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">
              {user?.username?.[0]?.toUpperCase() || 'S'}
            </div>
            <div className="user-info">
              <div className="user-name">{user?.username || 'Student'}</div>
              <div className="user-email">student@univ.edu</div>
            </div>
          </div>

          <button className="signout-btn" onClick={handleLogout} title="Sign Out">
            <svg className="signout-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content - Full Width */}
      <main className="finance-main">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
