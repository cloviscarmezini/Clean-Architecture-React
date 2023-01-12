import React, { useContext } from 'react'
import Styles from './styles.scss'
import Context from '@/presentation/contexts/forms/formContext'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const inputName = props.name ?? ''
  const { errorState } = useContext(Context)
  const error = errorState[inputName]

  function enableInput (event: React.FocusEvent<HTMLInputElement>): void {
    event.target.readOnly = false
  }

  function getStatus (): string {
    return '🔴'
  }

  function getTitle (): string {
    return error
  }

  return (
    <div className={Styles.inputWrap}>
        <input { ...props } readOnly onFocus={enableInput} />
        <span data-testId={`${inputName}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}
