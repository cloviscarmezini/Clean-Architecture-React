import { createContext } from 'react'
interface StateProps {
  state: {
    isLoading: boolean
  }
  errorState: Record<string, string>
}

const initialState: StateProps = {
  state: {
    isLoading: false
  },
  errorState: {}
}

export default createContext<StateProps>(initialState)
