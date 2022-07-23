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

	return (
		<div>
			<Link to="/">
				<button class="button">HomePage</button>
			</Link>
			<Link to="/worker">
				<button class="button">Worker</button>
			</Link>
			<Link to="/client">
				<button class="button">Client</button>
			</Link>
			{user ? (
				<button class="button" onClick={() => logOut()}>
					Logout
				</button>
			) : (
				<>
					<Link to="/login">
						<button class="button">Login</button>
					</Link>
					<Link to="/register">
						<button class="button">Register</button>
					</Link>
				</>
			)}
		</div>
	);
};
