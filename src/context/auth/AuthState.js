import { useReducer } from 'react'
import { SET_NAME } from '../types'
import AuthContext from './authContext'
import authReducer from './authReducer'

const AuthState = (props) => {
  const initialState = {
    name: '',
    current: null,
    filtered: null,
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  function setCurrentName(name) {
    dispatch({ type: SET_NAME, payload: name })
  }
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ name: state.name, setCurrentName }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
