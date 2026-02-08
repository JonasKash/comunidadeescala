import { useState, useEffect, useRef } from 'react'
import { getCurrentUser, logout } from '../lib/auth'
import {
  Play,
  Info,
  LogOut,
  Lock,
  X,
  Home,
  GraduationCap,
  Headphones,
  User,
  ChevronRight,
  ChevronDown,
  Youtube,
  CheckCircle,
  ArrowLeft,
  Settings
} from 'lucide-react'
import './Dashboard.css'

function Dashboard() {
  const [user, setUser] = useState(null)
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [activeTab, setActiveTab] = useState('inicio')
  const [expandedModules, setExpandedModules] = useState({})
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
  }, [])

  // PageView + Inicialização de compra (InitiateCheckout) na /dashboard
  useEffect(() => {
    try {
      if (typeof window === 'undefined' || !window.fbq) return
      window.fbq('track', 'PageView', {
        content_name: 'Dashboard - Comunidade da Escala',
        content_category: 'Dashboard',
      })
      const eventId = `ic_${Date.now()}_${Math.random().toString(36).substring(2)}`
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Comunidade da Escala',
        content_category: 'Comunidade',
        currency: 'BRL',
        value: 47.0,
        event_id: eventId,
      })
    } catch (e) {
      console.error('Erro ao disparar pixel no dashboard:', e)
    }
  }, [])

  const handleLogout = () => {
    logout()
    window.location.href = '/dashboard'
  }

  const courses = [
    {
      id: 1,
      title: 'Gestão de Tráfego',
      thumbnail: '/comunidade-cover.jpg',
      modules: [
        {
          id: 101,
          title: 'MasterClass - Contenção',
          lessons: [
            { id: 1001, title: 'Introdução ao Tráfego Pago', videoId: 'HRP2OjhLmSM', description: 'Nesta aula você aprenderá os fundamentos básicos para começar sua jornada no tráfego pago.' },
            { id: 1002, title: 'Configurando sua primeira campanha', videoId: '8hcwr-VoyME', description: 'Passo a passo para subir sua primeira campanha de forma profissional.' },
          ]
        },
        {
          id: 102,
          title: 'Tráfego para Delivery',
          lessons: [
            { id: 1003, title: 'Estratégia Local', videoId: 'HRP2OjhLmSM', description: 'Como atrair clientes locais para negócios de delivery.' },
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Uso da IA',
      thumbnail: '/CRIAR%20MODELOS.jpg',
      modules: [
        {
          id: 201,
          title: 'Modelos de Contratos',
          lessons: [
            { id: 2001, title: 'IA Generativa: O Futuro', videoId: '8hcwr-VoyME', description: 'Descubra como a inteligência artificial está mudando o mercado digital.' },
            { id: 2002, title: 'Prompt Engineering', videoId: 'HRP2OjhLmSM', description: 'Aprenda a conversar com a IA para obter os melhores resultados.' },
          ]
        }
      ]
    }
  ]

  const handleCourseClick = (course) => {
    setSelectedCourse(course)
    // Seleciona a primeira aula por padrão
    const firstModule = course.modules[0]
    const firstLesson = firstModule.lessons[0]
    setSelectedLesson(firstLesson)
    // Expande o primeiro módulo por padrão
    setExpandedModules({ [firstModule.id]: true })
  }

  const handleBackToCourses = () => {
    setSelectedCourse(null)
    setSelectedLesson(null)
  }

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }))
  }

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson)
  }

  return (
    <div className="membriz-dashboard" onClick={handleDashboardClick}>
      {/* Sidebar Principal */}
      <aside className="membriz-sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon"></div>
        </div>
        <nav className="sidebar-nav">
          <button
            className={`sidebar-link ${activeTab === 'cursos' ? 'active' : ''}`}
            onClick={() => setActiveTab('cursos')}
            title="Meus Cursos"
          >
            <GraduationCap size={22} />
          </button>
          <a
            href="https://wa.me/5534997101300?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20a%20comunidade"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-link"
            title="Suporte WhatsApp"
          >
            <Headphones size={22} />
          </a>
        </nav>
        <button className="sidebar-link logout-btn" onClick={handleLogout}>
          <LogOut size={22} />
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="membriz-main">
        {/* Top Header */}
        <header className="membriz-header">
          <div className="header-left">
            {selectedCourse ? (
              <div className="breadcrumb">
                <span className="course-name">{selectedCourse.title}</span>
                <button className="btn-back-header" onClick={handleBackToCourses}>
                  <ArrowLeft size={16} /> Voltar ao Dashboard
                </button>
              </div>
            ) : (
              <div className="header-search">
                <div className="menu-btn mobile-only">
                  <X size={20} />
                </div>
              </div>
            )}
          </div>
          <div className="header-right">
            <div className="alert-badge mobile-hide">
              <Info size={16} />
              <span>Player alternativo carregado para melhor compatibilidade</span>
              <X size={14} className="close-alert" />
            </div>
            <div className="header-user">
              <span className="user-greeting">Olá, {user?.name || 'Jonas Augusto Vieira'}!</span>
            </div>
          </div>
        </header>

        <div className="scroll-content">
          {!selectedCourse ? (
            <>
              {/* Hero Banner */}
              <section className="dashboard-hero">
                <div className="hero-card">
                  <div className="hero-text">
                    <h1>Bem-vindo de volta, {user?.name?.split(' ')[0] || 'Jonas'}!</h1>
                    <p>Continue sua jornada de aprendizado com nossos conteúdos exclusivos</p>
                    <button className="btn-continue">
                      <Play size={16} fill="white" /> Continuar Assistindo
                    </button>
                  </div>
                  <div className="hero-decoration">
                    <div className="circle-bg"></div>
                  </div>
                </div>
              </section>

              {/* Courses Grid */}
              <section className="courses-section">
                <h2 className="section-title">Seus Cursos</h2>
                <div className="courses-grid">
                  {courses.map(course => (
                    <div
                      key={course.id}
                      className="course-card"
                      onClick={() => handleCourseClick(course)}
                    >
                      <div className="course-thumb">
                        <img src={course.thumbnail} alt={course.title} />
                        <div className="course-overlay">
                          <Play size={32} fill="white" />
                        </div>
                      </div>
                      <div className="course-info">
                        <h3>{course.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          ) : (
            /* Layout de Duas Colunas para Aula */
            <div className="player-layout">
              {/* Coluna Esquerda: Playlist */}
              <div className="lesson-sidebar">
                {/* Progresso Card */}
                <div className="progress-card">
                  <h4>Seu Progresso</h4>
                  <div className="progress-bar-container">
                    <div className="progress-text">
                      <span>Progresso Geral</span>
                      <span>0%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div className="progress-bar-fill" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                  <div className="progress-stats">
                    <div className="stat">
                      <GraduationCap size={14} /> <span>12 Aulas</span>
                    </div>
                    <div className="stat">
                      <Play size={14} /> <span>0 Assistidas</span>
                    </div>
                    <div className="stat">
                      <CheckCircle size={14} /> <span>0 Concluídas</span>
                    </div>
                  </div>
                </div>

                {/* Lista de Módulos */}
                <div className="modules-list-container">
                  <div className="modules-header">
                    <h3>Módulos e Aulas</h3>
                  </div>
                  <div className="modules-scroll">
                    {selectedCourse.modules.map(module => (
                      <div key={module.id} className="module-item">
                        <button
                          className={`module-trigger ${expandedModules[module.id] ? 'expanded' : ''}`}
                          onClick={() => toggleModule(module.id)}
                        >
                          <div className="module-info-text">
                            <span className="module-title-text">{module.title}</span>
                            <span className="module-subtitle">{module.lessons.length} aulas</span>
                          </div>
                          <ChevronDown size={18} className="arrow-icon" />
                        </button>
                        {expandedModules[module.id] && (
                          <div className="lessons-container">
                            {module.lessons.map(lesson => (
                              <button
                                key={lesson.id}
                                className={`lesson-button ${selectedLesson?.id === lesson.id ? 'active' : ''}`}
                                onClick={() => handleLessonSelect(lesson)}
                              >
                                <div className="lesson-indicator">
                                  {selectedLesson?.id === lesson.id ? <Play size={12} fill="white" /> : <span>{lesson.id % 10}</span>}
                                </div>
                                <span className="lesson-title-text">{lesson.title}</span>
                                <CheckCircle size={14} className="lesson-check" />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Coluna Direita: Player e Descrição */}
              <div className="main-player-area">
                <div className="player-header">
                  <h2>{selectedLesson?.title}</h2>
                </div>

                <div className="video-container-internal">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedLesson?.videoId}?autoplay=1`}
                    title={selectedLesson?.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-iframe-internal"
                  ></iframe>
                </div>

                <div className="lesson-description-area">
                  <h3>Descrição da Aula</h3>
                  <div className="description-content">
                    <p>{selectedLesson?.description}</p>
                    <div className="access-links">
                      <span>Acesse aqui:</span>
                      <a href="#">{'>'} Modelo 01: Clique aqui</a>
                      <a href="#">{'>'} Modelo 02: Clique aqui</a>
                    </div>
                  </div>
                </div>

                <div className="player-footer-controls">
                  <button className="btn-footer-secondary">
                    <ChevronRight size={18} style={{ transform: 'rotate(180deg)' }} /> Aula Anterior
                  </button>
                  <button className="btn-footer-primary">
                    Marcar como concluída
                  </button>
                  <button className="btn-footer-accent">
                    Próxima Aula <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="membriz-footer">
          <p>© 2025 Membriz. Todos os direitos reservados.</p>
          <p>Potencializado por Inteligência Artificial</p>
        </footer>
      </main>
    </div>
  )
}

export default Dashboard

