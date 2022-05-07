import React from 'react'
import Spline from '@splinetool/react-spline'
import Navbar from './Navbar'
import Message from './Message'

const App = () => {
  return (
    <div className='relative flex flex-col items-center justify-center w-screen h-screen '>
      <Navbar />
      <Spline
        className='relative bottom-[80px]'
        scene='https://prod.spline.design/k6snOkunCOzK2KXq/scene.splinecode'
      />
      <Message />
    </div>
  )
}

export default App
