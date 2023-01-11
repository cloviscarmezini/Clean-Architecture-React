import React from 'react'
import Styles from './styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input: React.FC<Props> = ({ ...rest }: Props) => {
  function enableInput (event: React.FocusEvent<HTMLInputElement>): void {
    event.target.readOnly = false
  }

  return (
    <div className={Styles.inputWrap}>
        <input { ...rest } readOnly onFocus={enableInput} />
        <span className={Styles.status}>🔴</span>
    </div>
  )
}
