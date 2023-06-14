// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <body className='min-h-screen grid place-content-center'>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <div className='bg-emerald-500 w-52 h-52 rounded-full shadow-2xl grid place-content-center'>
          <div className='bg-teal-200 w-32 h-32 rounded-full grid place-content-center'>
            <div className='bg-red-500 w-16 h-16 rounded-full'></div>
          </div>
        </div>
      </body>
    </>
  )
}

export default App
