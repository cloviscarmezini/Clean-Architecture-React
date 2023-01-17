import { createContext } from 'react'
interface StateProps {
  state: {
    email: string
    isLoading: boolean
    mainError: string
  }
  setState: (object: object) => void
}

const initialState: Omit<StateProps, 'setState'> = {
  state: {
    email: '',
    isLoading: false,
    mainError: ''
  }
}

export default createContext<StateProps>(initialState as StateProps)
