import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectUser, updateUsername } from "../state/users/usersSlice"

const UsernameUpd = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const [newUsername, setNewUsername] = useState("")
  // const onChangeHandler = (e) => {
  //   const name = e.target.name
  //   const value = e.target.value

  //   setNewUsername()
  // }

  const onSubmitHandler = () => {
    dispatch(updateUsername(newUsername))
  }
  return (
    <div>
      <h1 className="text-4xl">Update the username </h1>
      {console.log(user)}
      <label htmlFor="username">New User</label>
      <input
        type="text"
        name="username"
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button
        onClick={onSubmitHandler}
        className="ring-offset-0 my-5 h-10 rounded-lg border-[1.5px] border-lime-500 outline-none inline-flex px-2"
      >
        Update
      </button>
      <button
        navigate="/"
        className="ring-offset-0 my-5 h-10 rounded-lg border-[1.5px] border-lime-500 outline-none inline-flex px-2"
      >
        <Link to="/"> Home</Link>
      </button>
    </div>
  )
}

export default UsernameUpd
