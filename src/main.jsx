import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Error Boundary: evita tela branca se algo quebrar no React
class ErrorBoundary extends Component {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(err, info) {
    console.error('Erro no app:', err, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center', background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
          <h1>Algo deu errado</h1>
          <p>Recarregue a página ou tente novamente mais tarde.</p>
          <button onClick={() => window.location.reload()} style={{ marginTop: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}>Recarregar</button>
        </div>
      )
    }
    return this.props.children
  }
}

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
)
