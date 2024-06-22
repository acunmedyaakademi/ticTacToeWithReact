import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'
import { Box } from './components/box'

export const userContext = createContext()

function App() {
  const [nextPlayer, setNextPlayer] = useState("X")
  const [nextPlayer2, setNextPlayer2] = useState("O")

  const [hasWinner, setHasWinner] = useState(false)
  const [sayi, setSayi] = useState()

  const element = () => {
    setSayi(sayi + 1)
    console.log(sayi);
  }



  return (
    <userContext.Provider value={{ nextPlayer, hasWinner, setNextPlayer }}>

      <Header />
      <Box />

    </userContext.Provider>
  )
}

export default App
