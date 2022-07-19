import { useState } from "react";
export const Login = () => {
	const [email, setEmail] = useState(null);
	const [pass, setPass] = useState(null);

	function login() {
		console.log(email, pass);
	}
	return (
		<div style={{ width: "40vw" }}>
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

			<div class="field is-grouped">
				<div class="control">
					<button
						class="button is-link"
						onClick={() => {
							login();
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
