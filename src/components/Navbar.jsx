import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          <Zap color="#22c55e" size={24} fill="#22c55e" />
          <span>Apps<span className="text-highlight">Lucrativos</span></span>
        </Link>
        <a href="https://wa.me/5534997101300?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20na%20comunidade" className="btn-nav">Acesso Restrito</a>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(13, 13, 13, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 0;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: -0.5px;
          color: var(--text-main);
          text-decoration: none;
        }
        .text-highlight {
          color: var(--primary);
        }
        .btn-nav {
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          transition: all 0.3s;
          color: var(--text-main);
          text-decoration: none;
        }
        .btn-nav:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
