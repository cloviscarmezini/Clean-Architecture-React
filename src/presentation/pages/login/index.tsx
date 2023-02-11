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

type LoginProps = {
  validation?: Validation
}

const Login: React.FC<LoginProps> = ({ validation }: LoginProps) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

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
              <form className={Styles.form}>
                  <h2>Login</h2>
                  <Input type="email" name="email" placeholder="Digite seu e-mail"/>
                  <Input type="password" name="password" placeholder="Digite sua senha"/>
                  <button data-testid="submit-button" disabled={!!state.emailError || !!state.passwordError} type="submit">Entrar</button>
                  <span className={Styles.link}>Criar conta</span>
                  <FormStatus />
              </form>
            </Context.Provider>
            <Footer />
        </div>
  )
}

export default Login
