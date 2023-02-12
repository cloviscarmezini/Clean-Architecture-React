import React, { useEffect, useState } from 'react'
import Styles from './styles.scss'
import {
  LoginHeader as Header,
  Footer,
  Input,
  FormStatus
} from '@/presentation/components'
import Context from '@/presentation/contexts/forms/formContext'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication } from '@/domain/usecases'
import { Link, useNavigate } from 'react-router-dom'

type LoginProps = {
  validation?: Validation
  authentication?: Authentication
}

const Login: React.FC<LoginProps> = ({ validation, authentication }: LoginProps) => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  async function handleSubmit (event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()

    if (!!state.emailError || !!state.passwordError || state.isLoading) {
      return
    }

    try {
      setState(state => ({
        ...state,
        isLoading: true
      }))

      const account = await authentication?.auth({
        email: state.email,
        password: state.password
      }).catch(error => {
        throw error
      })

      localStorage.setItem('accessToken', account?.accessToken ?? '')
      navigate('/')
    } catch (error) {
      setState(state => ({
        ...state,
        mainError: error.message,
        isLoading: false
      }))
    }
  }

  useEffect(() => {
    setState(state => ({
      ...state,
      emailError: validation?.validate('email', state.email) ?? '',
      passwordError: validation?.validate('password', state.password) ?? ''
    }))
  }, [state.email, state.password])

  return (
        <div className={Styles.login}>
            <Header />
            <Context.Provider value={{ state, setState }}>
              <form className={Styles.form} onSubmit={handleSubmit} data-testid="form">
                  <h2>Login</h2>
                  <Input type="email" name="email" placeholder="Digite seu e-mail"/>
                  <Input type="password" name="password" placeholder="Digite sua senha"/>
                  <button data-testid="submit-button" disabled={!!state.emailError || !!state.passwordError || state.isLoading} type="submit">Entrar</button>
                  <Link to="/signup" data-testid="register" className={Styles.link}>Criar conta</Link>
                  <FormStatus />
              </form>
            </Context.Provider>
            <Footer />
        </div>
  )
}

export default Login
