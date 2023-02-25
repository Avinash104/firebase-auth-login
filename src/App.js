import { useEffect, useState } from "react"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import CounterTest from "./Components/CounterTest"
import Home from "./Components/Home"
import Login from "./Components/Login"
import SignUp from "./Components/SignUp"
import UsernameUpd from "./Components/UsernameUpd"
import { auth } from "./firebase"
import { persistor, store } from "./store"
import PrivateRoutes from "./utils/PrivateRoutes"

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user)
        setAccessToken(user.accessToken)
      } else {
        setCurrentUser(null)
        setAccessToken(null)
      }
    })
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            {/* protected routes */}
            <Route element={<PrivateRoutes accessToken={accessToken} />}>
              <Route path="/usernameUpd" element={<UsernameUpd />} />
            </Route>
            <Route path="/" element={<Home currentUser={currentUser} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reduxtesting" element={<CounterTest />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
