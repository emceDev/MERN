import { useState } from "react";
export const Register = () => {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [pass, setPass] = useState(null);
	const [type, setType] = useState("client");

	function register() {
		console.log(name, email, pass, type);
	}
	return (
		<div style={{ width: "40vw" }}>
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
							register();
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
