import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { setUser } from "../state/users/usersSlice"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })
  const [errMsg, setErrMsg] = useState("")
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (!formValues.email || !formValues.password) {
      setErrMsg("All fields are required!!")
      return
    }

    setErrMsg("")
    setIsSubmitDisabled(true)

    signInWithEmailAndPassword(auth, formValues.email, formValues.password)
      .then(async (res) => {
        setIsSubmitDisabled(false)
        const user = res.user
        dispatch(setUser(user))
        console.log(user.accessToken)
        navigate("/")
      })
      .catch((err) => {
        setIsSubmitDisabled(false)
        setErrMsg(err.message)
      })
  }
  return (
    <div className="w-[600px] mx-auto bg-blue-300">
      <div className="p-10 border-2 border-2 mt-20 ">
        <label htmlFor="email" className="text-3xl font-semibold">
          {" "}
          Email{" "}
        </label>
        <input
          name="email"
          autoComplete="off"
          value={formValues.email}
          type="text"
          onChange={(e) => onChangeHandler(e)}
          className="ring-offset-0 my-5 h-10 rounded-lg border-[1.5px] border-lime-500 outline-none inline-flex w-full px-2"
        />
        <br />
        <label htmlFor="password" className="text-3xl font-semibold">
          {" "}
          Password{" "}
        </label>
        <input
          name="password"
          type="password"
          value={formValues.password}
          onChange={(e) => onChangeHandler(e)}
          className="ring-offset-0 my-5 h-10 rounded-lg border-[1.5px] border-lime-500 outline-none inline-flex w-full px-2"
        />
        {errMsg && <p> {errMsg}</p>}
        <button
          onClick={(e) => onSubmitHandler(e)}
          disabled={isSubmitDisabled}
          className="px-5 py-3 mt-5 rounded-lg shadow-xs hover:shadow-xl border-2 font-bold text-lg hover:text-xl hover:px-4 hover:border-green-400 bg-lime-500"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Login
