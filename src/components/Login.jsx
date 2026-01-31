import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../lib/auth'
import './Login.css'

function Login({ onLoginSuccess }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const user = await login(email, password)
      onLoginSuccess(user)
    } catch (err) {
      setError(err.message || 'Erro ao fazer login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <nav className="login-nav">
        <a href="#">
          <div className="brand-logo">COMUNIDADE DA ESCALA</div>
        </a>
      </nav>
      
      <div className="form-wrapper">
        <h2>Entrar</h2>
        <form onSubmit={handleLogin}>
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-control">
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email ou número de telefone</label>
          </div>
          
          <div className="form-control">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Senha</label>
          </div>
          
          <button type="submit" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
          
          <div className="form-help">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Lembrar-me</label>
            </div>
            <a href="#">Precisa de ajuda?</a>
          </div>
        </form>
        
        <p>Novo na Comunidade da Escala? <a href="/" onClick={(e) => { e.preventDefault(); navigate('/') }}>Assine agora</a></p>
        
        <small>
          Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.
          <a href="#"> Saiba mais.</a>
        </small>
      </div>
    </div>
  )
}

export default Login

