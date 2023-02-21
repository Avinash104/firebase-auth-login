import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import { auth } from "./firebase"

function App() {
  const [userName, setUserName] = useState("")

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName)
      } else {
        setUserName("")
      }
    })
  }, [])

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home userName={userName} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
