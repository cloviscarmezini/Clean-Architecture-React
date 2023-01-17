import { createContext } from 'react'
interface StateProps {
  state: {
    isLoading: boolean
    mainError: string
  }
  setState: (object: object) => void
}

const initialState: Omit<StateProps, 'setState'> = {
  state: {
    isLoading: false,
    mainError: ''
  }
}

export default createContext<StateProps>(initialState as StateProps)
