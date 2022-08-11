import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";

export const Register = () => {
	const [name, setName] = useState(null);
	const [surname, setSurname] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPass] = useState(null);
	const [type, setType] = useState("client");
	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		console.log("effect");
		if (isError) {
			console.log("error in register effect");
			console.log(message);
		}
		if (isSuccess || user) {
			navigate(`/${user.type}`);
		}
		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	async function submitForm() {
		const userData = {
			name,
			email,
			password,
			surname,
			type,
		};
		dispatch(register(userData));
	}

	return (
		<div className="section form" style={{ width: "40vw" }}>
			<div class="field">
				<label class="label">Name</label>
				<div class="control">
					<input
						class="input"
						type="text"
						placeholder="Name"
						onChange={(e) => setName(e.target.value)}
					/>
					<span class="icon is-small is-left">
						<i class="fas fa-envelope"></i>
					</span>
					<span class="icon is-small is-right">
						<i class="fas fa-exclamation-triangle"></i>
					</span>
				</div>
			</div>
			<div class="field">
				<label class="label">Surname</label>
				<div class="control">
					<input
						class="input"
						type="text"
						placeholder="Name"
						onChange={(e) => setSurname(e.target.value)}
					/>
					<span class="icon is-small is-left">
						<i class="fas fa-envelope"></i>
					</span>
					<span class="icon is-small is-right">
						<i class="fas fa-exclamation-triangle"></i>
					</span>
				</div>
			</div>

			<div class="field">
				<label class="label">Email</label>
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
				<label class="label">Password</label>
				<div class="control">
					<input
						class="input"
						type="password"
						placeholder="Text input"
						onChange={(e) => {
							setPass(e.target.value);
						}}
					/>
				</div>
			</div>

			<div class="field">
				<label class="label">Purpose of registration:</label>
				<div class="control">
					<div class="select">
						<select
							onChange={(e) => {
								setType(e.target.value);
							}}
						>
							<option value="client">Want to create orders</option>
							<option value="worker">Want to work</option>
						</select>
					</div>
				</div>
			</div>

			<div class="field">
				<div class="control">
					<label class="checkbox">
						<input type="checkbox" />I agree to the{" "}
						<a href="#">terms and conditions</a>
					</label>
				</div>
			</div>
			<div class="field is-grouped">
				<div class="control">
					<button
						class="button is-link"
						onClick={() => {
							submitForm();
						}}
					>
						Submit
					</button>
				</div>
				<div class="control">
					<button class="button is-link is-light">Cancel</button>
				</div>
			</div>
		</div>
	);
};
