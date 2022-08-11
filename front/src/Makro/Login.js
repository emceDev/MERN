import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";

export const Login = () => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);
	useEffect(() => {
		console.log("usercganges");
		if (isError) {
			console.log("error in register effect");
			console.log(message);
		}
		if (isSuccess || user) {
			navigate("/client");
		}
		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	function loginSubmit() {
		const userData = { email, password };

		console.log(userData);
		dispatch(login(userData));
	}

	return (
		<section className="section form" style={{ width: "40vw" }}>
			<div class="field">
				<label class="label">test Email: 2</label>
				<div class="control">
					<input
						class="input"
						type="email"
						placeholder="Email input"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<span class="icon is-small is-left">
						<i class="fas fa-envelope"></i>
					</span>
					<span class="icon is-small is-right">
						<i class="fas fa-exclamation-triangle"></i>
					</span>
				</div>
				{/* <p class="help is-danger">This email is invalid</p> */}
			</div>

			<div class="field">
				<label class="label">test Password: 2</label>
				<div class="control">
					<input
						class="input"
						type="password"
						placeholder="Text input"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
				</div>
			</div>

			<div class="field is-grouped">
				<div class="control">
					<button
						class="button is-link"
						onClick={() => {
							loginSubmit();
						}}
					>
						Submit
					</button>
				</div>
				<div class="control">
					<button class="button is-link is-light">Cancel</button>
				</div>
			</div>
		</section>
	);
};
