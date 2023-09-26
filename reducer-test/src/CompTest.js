import React, {useContext} from 'react'
import { LevelContext } from './LevelContext'

const CompTest = ({children}) => {
  const level = useContext(LevelContext);
  return (
    <section>
      <LevelContext.Provider value={level + 1}>
       {children}
      </LevelContext.Provider>
    </section>
  )
}

export default CompTest