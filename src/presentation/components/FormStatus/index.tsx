import React, { useContext } from 'react'
import Styles from './styles.scss'
import { Spinner } from '../Spinner'
import Context from '@/presentation/contexts/forms/formContext'

export const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, mainError } = state

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
        { isLoading && <Spinner data-testid="spinner" className={Styles.spinner}/> }
        { mainError && <span data-testid="main-error" className={Styles.error}>{ mainError }</span> }
    </div>
  )
}
