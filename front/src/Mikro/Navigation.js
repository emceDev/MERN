import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { useState } from "react";

export const Navigation = () => {
	const [active, setActive] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	function logOut() {
		dispatch(logout());
		dispatch(reset());
		navigate("/");
	}

	return (
		<div className="navbar is-tab">
			<div class="navbar-brand">
				<a
					role="button"
					className={active ? "navbar-burger is-active" : "navbar-burger"}
					aria-label="menu"
					aria-expanded="false"
					onClick={() => setActive(!active)}
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>
			<div className={active ? "navbar-menu is-active" : "navbar-menu"}>
				<NavLinks user={user} logout={() => logOut()} />
			</div>
		</div>
	);
};

const NavLinks = (props) => {
	return (
		<>
			<div className="navbar-start">
				<Link to="/" className="navbar-item">
					<button class="button">HomePage</button>
				</Link>

				<Link to="/worker" className="navbar-item">
					<button class="button">Worker</button>
				</Link>

				<Link to="/client" className="navbar-item">
					<button class="button">Client</button>
				</Link>
			</div>
			<div className="navbar-end">
				{props.user ? (
					<div className="navbar-item">
						<button class="button" onClick={() => props.logout()}>
							Logout
						</button>
					</div>
				) : (
					<>
						<Link to="/login" className="navbar-item">
							<button class="button">Login</button>
						</Link>
						<Link to="/register" className="navbar-item">
							<button class="button">Register</button>
						</Link>
					</>
				)}
			</div>
		</>
	);
};
