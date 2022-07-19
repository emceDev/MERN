import { Link } from "react-router-dom";
export const Navigation = () => {
	return (
		<div>
			<Link to="/">
				<button>HomePage</button>
			</Link>
			<Link to="/login">
				<button>Login</button>
			</Link>
			<Link to="/register">
				<button>Register</button>
			</Link>
			<Link to="/worker">
				<button>Worker</button>
			</Link>
			<Link to="/client">
				<button>Client</button>
			</Link>
		</div>
	);
};
