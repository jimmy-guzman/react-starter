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
        <Logo name='Vite' link='https://vitejs.dev' imgSrc={viteLogo} />
        <Logo name='React' link='https://react.dev' imgSrc={reactLogo} />
        <Logo
          name='TypeScript'
          link='https://www.typescriptlang.org'
          imgSrc={typeScriptLogo}
        />
        <Logo
          name='tailwindcss'
          link='https://tailwindcss.com'
          imgSrc={tailwindcssLogo}
        />
      </div>
      <h1>Vite + React + TypeScript + tailwindcss</h1>
      <div>
        <button
          className='btn'
          onClick={() => {
            setCount((prevCount) => prevCount + 1)
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          Click on logos to learn more or visit the{' '}
          <a
            href='https://github.com/jimmy-guzman/react-starter#readme'
            target='_blank'
            rel='noreferrer'
          >
            repo
          </a>
        </p>
      </div>
    </div>
  )
}

export default App
