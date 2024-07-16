import { FC } from 'react'

import Header from './components/Header/Header'
import Card from './components/Card/Card'

import './App.css'

const App: FC = () => {
  return (
    <div className='container'>
      <Header />
      <Card />
    </div>
  )
}

export default App
