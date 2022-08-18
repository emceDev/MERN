import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { submitOrder } from "../features/orders/orderSlice";
export const CreateOrder = () => {
	const [name, setName] = useState();
	const [description, setDescription] = useState();
	const [machine, setMachine] = useState();
	const [price, setPrice] = useState();
	const [modalActive, setModalActive] = useState(false);
	const { user } = useSelector((state) => state.auth);
	const orderData = {
		name,
		creator: user._id,
		creatorName: user.name,
		description,
	};
	const dispatch = useDispatch();
	async function onSubmitOrder() {
		dispatch(submitOrder(orderData));
	}
	return (
		<div>
			<div className={modalActive ? "modal is-active" : "modal"}>
				<div
					class="modal-background"
					onClick={() => setModalActive(false)}
				></div>
				<div class="modal-content has-background-white p-5">
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
					<div class="field">
						<label class="label">Machine</label>
						<div class="control">
							<input
								class="input"
								type="text"
								placeholder="Machine"
								onChange={(e) => setMachine(e.target.value)}
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
						<label class="label">Price</label>
						<div class="control">
							<input
								class="input"
								type="text"
								placeholder="Price"
								style={{ width: "25%" }}
								onChange={(e) => setPrice(e.target.value)}
							/>
							<span class="icon is-small is-left">
								<i class="fas fa-envelope"></i>
							</span>
							<span class="icon is-small is-right">
								<i class="fas fa-exclamation-triangle"></i>
							</span>
						</div>
					</div>
					<button className="button" onClick={() => onSubmitOrder()}>
						submit order
					</button>
				</div>
				<button class="modal-close is-large" aria-label="close"></button>
			</div>
			<button className="button" onClick={() => setModalActive(true)}>
				Create order
			</button>
		</div>
	);
};
