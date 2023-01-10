import React from 'react'
import Styles from './styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input: React.FC<Props> = ({ ...rest }: Props) => {
  return (
    <div className={Styles.inputWrap}>
        <input { ...rest } />
        <span className={Styles.status}>🔴</span>
    </div>
  )
}
