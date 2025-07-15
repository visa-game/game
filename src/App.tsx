import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>right now the project is still in development</h1>
      <p>but enjoy the clicker below! i just made a PR for this domain, and for the PR number to be #24444 lmao</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
