import { signInWithPopup, signOut } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { auth, provider } from "../firebase"

const Home = (props) => {
  const navigate = useNavigate()
  const googleSigninHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = provider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        console.log(user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate("/")
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = provider.credentialFromError(error)
        // ...
      })
  }
  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("logged out")
      })
      .catch((error) => {
        // An error happened.
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
        {props.userName ? `Hello ${props.userName}` : "You need to login"}
      </h3>

      <h1 className="text-5xl" onClick={logoutHandler}>
        Logout
      </h1>
    </div>
  )
}

export default Home
