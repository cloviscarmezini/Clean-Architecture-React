import React, { useContext } from 'react'
import Styles from './styles.scss'
import { Spinner } from '../Spinner'
import Context from '@/presentation/contexts/forms/formContext'

export const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context)
  const { isLoading } = state
  const { main } = errorState

  return (
    <div data-testId="error-wrap" className={Styles.errorWrap}>
        { isLoading && <Spinner className={Styles.spinner}/> }
        { main && <span className={Styles.error}>{ main }</span> }
    </div>
  )
}
