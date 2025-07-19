import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/Login/Login"
import Header from "./components/Header/Header"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Header />} />
    </Routes>
  )
}

export default App
