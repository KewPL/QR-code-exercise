import React from 'react'
import qrcode from './image-qr-code.png'

function App() {
  return (
    <body className="flex items-center justify-center h-screen">
          <div></div>
  <main className='w-[300px] h-[500px] bg-white rounded-xl p-4'>
    <img src={qrcode} alt='QR code' className="rounded-lg"/>
    <h3 className='font-bold text-xl text-center mt-5'>Improve your front-end skills by building projects</h3>
    <p className='text-center mt-3 font-thin'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
  </main>
    </body>
    )
  }

export default App