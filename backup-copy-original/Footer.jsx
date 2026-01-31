const Footer = () => {
    return (
        <footer className="footer-lowticket">
            <div className="container">
                <p className="copyright">
                    &copy; {new Date().getFullYear()} Comunidade da Escala
                </p>
            </div>
            <style>{`
        .footer-lowticket {
          padding: 2rem 0;
          background: #000000;
          border-top: 1px solid #333;
          text-align: center;
          font-size: 0.85rem;
          color: #666;
        }
        .copyright {
          margin: 0;
          opacity: 0.7;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
