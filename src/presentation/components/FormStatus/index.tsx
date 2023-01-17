import React, { useContext } from 'react'
import Styles from './styles.scss'
import { Spinner } from '../Spinner'
import Context from '@/presentation/contexts/forms/formContext'

export const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, mainError } = state

  return (
    <div data-testId="error-wrap" className={Styles.errorWrap}>
        { isLoading && <Spinner className={Styles.spinner}/> }
        { mainError && <span className={Styles.error}>{ mainError }</span> }
    </div>
  )
}
