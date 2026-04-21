import {Routes, Route} from 'react-router-dom'
import Login from './Page.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} /> 
      </Routes>
    </>
  )
}

export default App
