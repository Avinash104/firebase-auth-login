import { signInWithPopup, signOut } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { auth, provider } from "../firebase"

const Home = ({ currentUser }) => {
  const navigate = useNavigate()
  const googleSigninHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = provider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user
        console.log(user)
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.customData.email
        const credential = provider.credentialFromError(error)
        // ...
      })
  }
  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("logged out")
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  return (
    <div className="w-96 mx-auto my-32">
      <h1 className="text-5xl">
        <Link to="/signup"> SignUp</Link>
      </h1>
      <h1 className="text-5xl">
        <Link to="/login"> Login</Link>
      </h1>
      <h1 className="text-5xl cursor-pointer" onClick={googleSigninHandler}>
        {" "}
        Signin with google
      </h1>
      <h3 className="text-3xl text-red-500">
        {currentUser ? `Hello ${currentUser.displayName}` : "You need to login"}
      </h3>

      <h1 className="text-5xl" onClick={logoutHandler}>
        Logout
      </h1>

      <h1 className="text-5xl">
        <Link to="/usernameUpd"> Update Username</Link>
      </h1>
    </div>
  )
}

export default Home
