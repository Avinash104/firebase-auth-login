import { useDispatch, useSelector } from "react-redux"
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../state/counterSlice"

const CounterTest = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <div className="container w-[500px] my-20 mx-auto bg-blue-400 p-5 rounded-[30px]">
      <h1 className="text-5xl mx-auto w-10">{count}</h1>
      <div className="m-5 pb-5">
        <button
          onClick={() => dispatch(increment())}
          className="px-5 py-3 mt-5 rounded-lg shadow-xs hover:shadow-xl border-2 font-bold text-lg hover:text-xl hover:px-4 hover:border-green-400 bg-lime-500 w-full"
        >
          Increment
        </button>
        <br />
        <button
          onClick={() => dispatch(decrement())}
          className="px-5 py-3 mt-5 rounded-lg shadow-xs hover:shadow-xl border-2 font-bold text-lg hover:text-xl hover:px-4 hover:border-green-400 bg-lime-500 w-full"
        >
          Decrement
        </button>
        <br />
        <button
          onClick={() => dispatch(incrementByAmount(10))}
          className="px-5 py-3 mt-5 rounded-lg shadow-xs hover:shadow-xl border-2 font-bold text-lg hover:text-xl hover:px-4 hover:border-green-400 bg-lime-500 w-full"
        >
          Increase count by 10
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-5 py-3 mt-5 rounded-lg shadow-xs hover:shadow-xl border-2 font-bold text-lg hover:text-xl hover:px-4 hover:border-green-400 bg-lime-500 w-full"
        >
          Reset Count
        </button>
      </div>
    </div>
  )
}

export default CounterTest
