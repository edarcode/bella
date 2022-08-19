import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slices/counter/counter";
import css from "./style.module.css";

export default function App() {
	const dispatch = useDispatch();

	return (
		<div className={css.app}>
			<button onClick={() => dispatch(increment())}>increment</button>
			<button onClick={() => dispatch(decrement())}>decrement</button>
		</div>
	);
}
