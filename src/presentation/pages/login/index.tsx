import React from 'react'
import Styles from './styles.scss'
import { Spinner } from '@/presentation/components/Spinner'
import Header from '@/presentation/components/LoginHeader'
import Footer from '@/presentation/components/Footer'
import { Input } from '@/presentation/components/Input'

const Login: React.FC = () => {
  return (
        <div className={Styles.login}>
            <Header />
            <form className={Styles.form}>
                <h2>Login</h2>
                <Input type="email" name="email" placeholder="Digite seu e-mail"/>
                <Input type="password" name="password" placeholder="Digite sua senha"/>
                <button type="submit">Entrar</button>
                <span className={Styles.link}>Criar conta</span>
                <div className={Styles.errorWrap}>
                    <Spinner className={Styles.spinner}/>
                    <span className={Styles.error}>Erro aqui</span>
                </div>
            </form>
            <Footer />
        </div>
  )
}

export default Login
