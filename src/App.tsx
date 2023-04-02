import { useState } from 'react'

import reactLogo from './assets/react.svg'
import tailwindcssLogo from './assets/tailwindcss.svg'
import typeScriptLogo from './assets/typescript.svg'
import viteLogo from './assets/vite.svg'
import { Logo } from './components/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container prose mx-auto p-4 text-center'>
      <div className='mb-8 flex items-center justify-center gap-8'>
        <Logo
          name='Vite'
          link='https://vitejs.dev'
          imgSrc={viteLogo}
          color='#646CFF'
        />
        <Logo
          name='React'
          link='https://react.dev'
          imgSrc={reactLogo}
          color='#61DAFB'
          className='animate-[spin_20s_linear_infinite]'
        />
        <Logo
          name='TypeScript'
          link='https://www.typescriptlang.org'
          imgSrc={typeScriptLogo}
          color='#3178C6'
        />
        <Logo
          name='tailwindcss'
          link='https://tailwindcss.com'
          imgSrc={tailwindcssLogo}
          color='#06B6D4'
        />
      </div>
      <h1>Vite + React + TypeScript + tailwindcss</h1>
      <div>
        <button
          className='btn'
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on logos to learn more</p>
    </div>
  )
}

export default App
