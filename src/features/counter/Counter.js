import { useSelector, useDispatch } from "react-redux";
import { incrament, decrament } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispacth = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispacth(incrament())}>+</button>
        <button onClick={() => dispacth(decrament())}>-</button>
      </div>
    </section>
  )
}

export default Counter;