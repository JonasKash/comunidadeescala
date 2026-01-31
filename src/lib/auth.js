// Sistema de autenticação simples local
// Credenciais de teste
const TEST_CREDENTIALS = {
  email: 'appslucrativos@teste.com',
  password: 'sGUC9f8v2bosm'
}

// Função para fazer login
export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    // Simular delay de requisição
    setTimeout(() => {
      if (email === TEST_CREDENTIALS.email && password === TEST_CREDENTIALS.password) {
        const user = {
          id: '1',
          email: email,
          name: 'Usuário Teste'
        }
        // Salvar no localStorage
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('isAuthenticated', 'true')
        resolve(user)
      } else {
        reject(new Error('Email ou senha incorretos'))
      }
    }, 500) // Simular delay de rede
  })
}

// Função para fazer logout
export const logout = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('isAuthenticated')
}

// Função para verificar se está autenticado
export const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true'
}

// Função para obter usuário atual
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user')
  if (userStr) {
    return JSON.parse(userStr)
  }
  return null
}





