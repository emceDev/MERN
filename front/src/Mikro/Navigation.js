import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useEffect } from "react";

export const Navigation = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	function logOut() {
		dispatch(logout());
		dispatch(reset());
		navigate("/");
	}
	useEffect(() => {
		console.log("user logged in nab");
	}, [user]);
	return (
		<div>
			<Link to="/">
				<button>HomePage</button>
			</Link>
			{user ? (
				<button onClick={() => logOut()}>Logout</button>
			) : (
				<>
					<Link to="/login">
						<button>Login</button>
					</Link>
					<Link to="/register">
						<button>Register</button>
					</Link>
				</>
			)}

			<Link to="/worker">
				<button>Worker</button>
			</Link>
			<Link to="/client">
				<button>Client</button>
			</Link>
			{/* <button onClick={}>logOut</button> */}
		</div>
	);
};
