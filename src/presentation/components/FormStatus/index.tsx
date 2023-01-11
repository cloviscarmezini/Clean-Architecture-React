import React, { useContext } from 'react'
import Styles from './styles.scss'
import { Spinner } from '../Spinner'
import Context from '@/presentation/contexts/forms/formContext'

export const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)

  return (
    <div data-testId="error-wrap" className={Styles.errorWrap}>
        { isLoading && <Spinner className={Styles.spinner}/> }
        { errorMessage && <span className={Styles.error}>{ errorMessage }</span> }
    </div>
  )
}
