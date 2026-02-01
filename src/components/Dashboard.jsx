import { useState, useEffect, useRef } from 'react'
import { getCurrentUser, logout } from '../lib/auth'
import { Play, Info, LogOut, Lock, X } from 'lucide-react'
import './Dashboard.css'

function Dashboard() {
  const [user, setUser] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [showInfoModal, setShowInfoModal] = useState(false)
  const purchaseFiredRef = useRef(false)

  const handleDashboardClick = () => {
    if (purchaseFiredRef.current) return
    purchaseFiredRef.current = true
    try {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Purchase', {
          content_name: 'Comunidade da Escala',
          content_category: 'Comunidade',
          currency: 'BRL',
          value: 47.0,
        })
      }
    } catch (e) {
      console.error('Erro ao disparar evento de compra:', e)
    }
  }

  useEffect(() => {
    const currentUser = getCurrentUser()
    setUser(currentUser)

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // PageView do Meta Pixel na /dashboard
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'PageView', {
          content_name: 'Dashboard - Comunidade da Escala',
          content_category: 'Dashboard',
        })
      }
    } catch (e) {
      console.error('Erro ao disparar PageView no dashboard:', e)
    }
  }, [])

  // Quando veio do CTA da página principal (?from=cta): dispara o mesmo pixel InitiateCheckout do formulário
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    if (params.get('from') !== 'cta') return
    try {
      if (window.fbq) {
        const eventId = `ic_${Date.now()}_${Math.random().toString(36).substring(2)}`
        window.fbq('track', 'InitiateCheckout', {
          content_name: 'Comunidade da Escala',
          content_category: 'Comunidade',
          currency: 'BRL',
          value: 47.0,
          event_id: eventId,
        })
      }
      // Remove o parâmetro da URL para não disparar de novo ao recarregar
      window.history.replaceState({}, '', '/dashboard')
    } catch (e) {
      console.error('Erro ao disparar InitiateCheckout no dashboard:', e)
    }
  }, [])

  useEffect(() => {
    if (!showInfoModal) return
    const handleEscape = (e) => {
      if (e.key === 'Escape') setShowInfoModal(false)
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [showInfoModal])

  const handleLogout = () => {
    logout()
    window.location.href = '/dashboard'
  }

  const isUnlocked = (title) => {
    return title === 'COMUNIDADE' || title === 'SUPORTE'
  }

  const mainList = [
    { 
      id: 1, 
      title: 'COMUNIDADE', 
      bgImage: '/comunidade-cover.jpg',
      link: 'https://discord.com/invite/npu',
    },
    { 
      id: 2, 
      title: 'SUPORTE', 
      bgImage: '/suporte.jpg',
      link: 'https://wa.me/5534997101300?text=Ol%C3%A1%20comprei%20o%20curso%20de%20apps%20lucrativos%20e%20quero%20receber%20as%20aulas...',
    }
  ]

  const continueWatching = [
    { id: 0, title: 'CLONAGEM COM O RUYTER', thumbnail: '/CLONAGEM%20COM%20O%20RUYTEER.jpg', link: 'https://www.youtube.com/watch?v=HRP2OjhLmSM' },
    { id: 10, title: 'CRIAR MODELOS', thumbnail: '/CRIAR%20MODELOS.jpg', link: 'https://www.youtube.com/watch?v=8hcwr-VoyME' },
    { id: 1, title: 'JOTA JOTA PODCAST', bgColor: '#1e40af', logo: true },
    { id: 2, title: 'CRONOGRAMA', bgColor: '#1a1a1a', image: 'calendar' },
  ]

  const extraContent = [
    { id: 4, title: 'RENDA EXTRA', bgColor: '#1a1a1a', image: 'money' },
    { id: 5, title: 'AULA INAUGURAL', bgColor: '#1a1a1a' },
    { id: 6, title: 'TIRA DÚVIDAS', bgColor: '#1e40af' },
    { id: 7, title: 'HOTSEAT', bgColor: '#dc2626' },
    { id: 8, title: 'MENTORIA', bgColor: '#1a1a1a' },
  ]

  return (
    <div className="netflix-dashboard" onClick={handleDashboardClick}>
      {/* Navigation */}
      <nav className={`netflix-nav ${scrolled ? 'black' : ''}`}>
        <div className="nav-left">
           <div className="brand-logo">COMUNIDADE DA ESCALA</div>
           <div className="nav-links">
             <a href="#" className="active">Início</a>
             <a href="#">Séries</a>
             <a href="#">Filmes</a>
             <a href="#">Minha Lista</a>
           </div>
        </div>
        <div className="nav-right">
           <button onClick={handleLogout} className="icon-btn">
             <LogOut size={20} />
           </button>
           <div className="user-avatar">
             <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User" />
           </div>
        </div>
      </nav>

      {/* Modal Mais Informações (estilo Netflix) */}
      {showInfoModal && (
        <div
          className="netflix-modal-overlay"
          onClick={() => setShowInfoModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="netflix-modal-title"
        >
          <div className="netflix-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="netflix-modal-close"
              onClick={() => setShowInfoModal(false)}
              aria-label="Fechar"
            >
              <X size={28} />
            </button>
            <h2 id="netflix-modal-title" className="netflix-modal-title">Sobre a Comunidade</h2>
            <div className="netflix-modal-body">
              <p>Uma comunidade de pessoas que já estão faturando no digital. Aqui você tem acesso a estratégias validadas, suporte real e um ambiente feito para acelerar seus resultados.</p>
              <p>Sem enrolação. Sem promessas vazias. Só caminho direto para onde você quer chegar.</p>
              <p className="netflix-modal-cta">
                <a href="https://discord.com/invite/npu" target="_blank" rel="noopener noreferrer" className="netflix-modal-btn">
                  Entrar na Comunidade no Discord
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="netflix-hero">
        <div className="hero-backdrop"></div>
        <div className="hero-content">
          <h1 className="hero-title">SEJA MUITO<br/>BEM-VINDO(A)</h1>
          <div className="hero-info">
             <span className="match-score">98% relevante</span>
             <span className="year">2025</span>
             <span className="rating">12+</span>
          </div>
          <div className="hero-desc">
            <p className="hero-desc-p">Uma comunidade de pessoas que já estão faturando no digital, você vai ter acesso a estratégias validadas, suporte real e um ambiente feito para acelerar seus resultados.</p>
            <p className="hero-desc-p">Sem enrolação. Sem promessas vazias. Só caminho direto para onde você quer chegar.</p>
          </div>
          <div className="hero-buttons">
            <button
              type="button"
              className="btn-play"
              onClick={() => document.getElementById('continuar-assistindo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play size={24} fill="black" /> Assistir
            </button>
            <button type="button" className="btn-info" onClick={() => setShowInfoModal(true)}>
              <Info size={24} /> Mais Informações
            </button>
          </div>
        </div>
      </header>

      {/* Content Rows */}
      <div className="content-rows">
        
        {/* Row 1: Acesso Rápido */}
        <section className="row-section row-main">
          <div className="row-slider row-slider-main">
            {mainList.map(item => (
              <div 
                key={item.id} 
                className="netflix-card"
                onClick={() =>  window.open(item.link, '_blank')}
              >
                {item.title === 'COMUNIDADE' ? (
                  <img src="/discord_342a.1920.webp" alt="Comunidade" className="card-image card-comunidade-img" />
                ) : (
                  <img src={item.bgImage} alt={item.title} className="card-image" />
                )}
                <div className="card-overlay">
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Row 2: Continuar Assistindo */}
        <section id="continuar-assistindo" className="row-section row-continue">
          <h2 className="row-title">Continuar Assistindo</h2>
          <div className="row-slider row-slider-continue">
            {continueWatching.map(item => {
              if (item.thumbnail && item.link) {
                return (
                  <div
                    key={item.id}
                    className="netflix-card"
                    onClick={() => window.open(item.link, '_blank')}
                  >
                    <img src={item.thumbnail} alt={item.title} className="card-image" />
                    <div className="card-overlay">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                )
              }
              const unlocked = isUnlocked(item.title)
              return (
                <div 
                  key={item.id} 
                  className={`netflix-card simple ${!unlocked ? 'locked' : ''}`} 
                  style={{backgroundColor: item.bgColor}}
                  onClick={() => {
                    if (!unlocked) {
                      return
                    }
                  }}
                >
                  <div className="card-content-simple">
                    <h3>{item.title}</h3>
                  </div>
                  {!unlocked && (
                    <div className="lock-overlay">
                      <Lock size={40} />
                    </div>
                  )}
               </div>
              )
            })}
          </div>
        </section>

        {/* Row 3: Conteúdo Extra */}
        <section className="row-section">
          <h2 className="row-title">Todo o Conteúdo</h2>
          <div className="row-slider">
            {extraContent.map(item => {
              const unlocked = isUnlocked(item.title)
              return (
                <div 
                  key={item.id} 
                  className={`netflix-card simple ${!unlocked ? 'locked' : ''}`} 
                  style={{backgroundColor: item.bgColor}}
                  onClick={() => {
                    if (!unlocked) {
                      return // Bloqueia o clique
                    }
                  }}
                >
                  <div className="card-content-simple">
                     <h3>{item.title}</h3>
                  </div>
                  {!unlocked && (
                    <div className="lock-overlay">
                      <Lock size={40} />
                    </div>
                  )}
               </div>
              )
            })}
          </div>
        </section>

      </div>
      
      {/* Footer */}
      <footer className="netflix-footer">
        <div className="footer-content">
          <p>Comunidade da Escala - Feito com carinho</p>
          <p>&copy; 2025 Comunidade da Escala</p>
        </div>
      </footer>
    </div>
  )
}

export default Dashboard
