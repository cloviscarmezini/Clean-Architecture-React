import React, { useContext } from 'react'
import Styles from './styles.scss'
import Context from '@/presentation/contexts/forms/formContext'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export const Input: React.FC<InputProps> = ({ name: inputName, ...rest }: InputProps) => {
  const { state, setState } = useContext(Context)
  const error = state[`${inputName}Error`]

  function enableInput (event: React.FocusEvent<HTMLInputElement>): void {
    event.target.readOnly = false
  }

  function handleChange (event: React.FocusEvent<HTMLInputElement>): void {
    setState({ ...state, [inputName]: event.target.value })
  }

  function getStatus (): string {
    return error ? '🔴' : '🟢'
  }

  function getTitle (): string {
    return error || 'Tudo certo!'
  }

  return (
    <div className={Styles.inputWrap}>
        <input data-testid={inputName} readOnly onFocus={enableInput} onChange={handleChange} { ...rest } />
        <span data-testid={`${inputName}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}
