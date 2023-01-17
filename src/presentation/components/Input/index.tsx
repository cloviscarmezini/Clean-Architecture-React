import React, { useContext } from 'react'
import Styles from './styles.scss'
import Context from '@/presentation/contexts/forms/formContext'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const inputName = props.name ?? ''
  const { state, setState } = useContext(Context)
  const error = state[`${inputName}Error`]

  function enableInput (event: React.FocusEvent<HTMLInputElement>): void {
    event.target.readOnly = false
  }

  function handleChange (event: React.FocusEvent<HTMLInputElement>): void {
    setState({ ...state, [inputName]: event.target.value })
  }

  function getStatus (): string {
    return '🔴'
  }

  function getTitle (): string {
    return error
  }

  return (
    <div className={Styles.inputWrap}>
        <input { ...props } data-testId={props.name} readOnly onFocus={enableInput} onChange={handleChange} />
        <span data-testId={`${inputName}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}
