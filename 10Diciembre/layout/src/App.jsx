import MainLayout from './layout/MainLayout'
import './App.css'
import { useState } from 'react'
import VeranoComponent from './components/VeranoComponent'
import InviernoComponent from './components/InviernoComponent'

function App() {
  const [currentStation, setCurrentStation] = useState()

  const changeToVerano = () => {
    setCurrentStation('VERANO')
  return }
  const changeToInvierno = () => {
    setCurrentStation('INVIERNO')
  }
    return (
    <>
    <MainLayout>
      {
        currentStation === 'VERANO' ? (
          <VeranoComponent changeToInvierno={changeToInvierno}/>
        ) : (
          <InviernoComponent changeToVerano={changeToVerano}/>
        )
      }
    </MainLayout>
    </>
    )
}

export default App
