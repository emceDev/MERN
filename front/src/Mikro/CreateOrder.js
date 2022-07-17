import { useState } from "react";
export const CreateOrder = () => {
	const [name, setName] = useState();
	const [creator, setCreator] = useState();
	const [description, setDescription] = useState();
	const [status, setStatus] = useState();
	return (
		<div style={{ width: "40vw" }}>
			CreateOrder
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
				<label class="label">Description</label>
				<div class="control">
					<input
						class="input"
						type="text"
						placeholder="Description"
						onChange={(e) => setDescription(e.target.value)}
					/>
					<span class="icon is-small is-left">
						<i class="fas fa-envelope"></i>
					</span>
					<span class="icon is-small is-right">
						<i class="fas fa-exclamation-triangle"></i>
					</span>
				</div>
			</div>
		</div>
	);
};
