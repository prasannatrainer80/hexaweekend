import { useDispatch, useSelector } from "react-redux"
import { incr,decr,power } from "./actions";

const Counter = () => {
   // Access the count value from the Redux store
    const count = useSelector((state) => state.count);
    // Get the dispatch function from Redux
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(incr())}>Increment</button>
            <button onClick={() => dispatch(decr())}>Decrement</button>
            <button onClick={() => dispatch(power())}>Power</button>
        </div>
    );

}
export default Counter;