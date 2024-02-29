import { createContext, useState} from 'react'

export const CursorContext = createContext();

function CursorContextProvider({children}) {
    const [ cursor, setCursor ] = useState({ active: false })

  return (
    <CursorContext.Provider value={[cursor, setCursor]}>
        {children}
    </CursorContext.Provider>
  )
}

export default CursorContextProvider;
