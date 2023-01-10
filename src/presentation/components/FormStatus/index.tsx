import React from 'react'
import Styles from './styles.scss'
import { Spinner } from '../Spinner'

export const FormStatus: React.FC = () => {
  return (
    <div className={Styles.errorWrap}>
        <Spinner className={Styles.spinner}/>
        <span className={Styles.error}>Erro aqui</span>
    </div>
  )
}
